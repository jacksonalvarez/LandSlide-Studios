'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import PlaceholderVideoCanvas from './PlaceholderVideoCanvas';

interface VideoBackgroundProps {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
}

export default function VideoBackground({ 
  videoSrc, 
  posterSrc,
  className = "w-full h-full object-cover"
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoaded(true);
      // Force autoplay when video is loaded
      playVideo();
    };

    const handleCanPlay = () => {
      // Try to play as soon as video can play
      playVideo();
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      console.log('Video failed to load, using placeholder');
      setVideoError(true);
      setIsLoaded(true);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    // Auto-play with aggressive retry strategy
    const playVideo = async () => {
      try {
        video.muted = true; // Ensure muted for autoplay
        await video.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Auto-play prevented, retrying...:', error);
        // Retry after a short delay
        setTimeout(async () => {
          try {
            video.muted = true;
            await video.play();
            setIsPlaying(true);
          } catch (retryError) {
            console.log('Auto-play failed:', retryError);
            setIsPlaying(false);
          }
        }, 100);
      }
    };

    // Start playing immediately if ready
    if (video.readyState >= 2) {
      setIsLoaded(true);
      playVideo();
    }

    // Also try to play on any user interaction with the page
    const handleUserInteraction = () => {
      if (!isPlaying) {
        playVideo();
      }
    };

    document.addEventListener('click', handleUserInteraction, { once: true });
    document.addEventListener('scroll', handleUserInteraction, { once: true });

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [isPlaying]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (isPlaying) {
        video.pause();
      } else {
        await video.play();
      }
    } catch (error) {
      console.log('Play/pause error:', error);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="relative w-full h-full">
      {videoError ? (
        // Show animated placeholder if video fails to load
        <PlaceholderVideoCanvas className={className} />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="auto"
          className={className}
          poster={posterSrc}
        >
          <source src={`${videoSrc}.mp4`} type="video/mp4" />
          <source src={`${videoSrc}.webm`} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black">
          <div className="animate-pulse text-red-200/70 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-400/70 mx-auto mb-2"></div>
            <p className="text-sm font-serif">Loading nightmare...</p>
          </div>
        </div>
      )}

      {/* Fallback background if video fails to load */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950 to-black -z-10"></div>

      {/* Video Controls - Only show if video is loaded and not in error state */}
      {isLoaded && !videoError && (
        <div className="absolute bottom-4 right-4 flex space-x-2 z-20">
          <button
            onClick={togglePlay}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </button>
          
          <button
            onClick={toggleMute}
            className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}