'use client';

import { useEffect, useState, useRef } from 'react';

interface VideoHeroProps {
  videoSources?: string[];
  fadeDuration?: number;
  videoDuration?: number;
}

export default function VideoHero({ 
  videoSources = [],
  fadeDuration = 1000,
  videoDuration = 10000 
}: VideoHeroProps) {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [videosReady, setVideosReady] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Default video sources if none provided (placeholder paths)
  const defaultVideoSources = [
    '/static/videos/roblox-gameplay-1.mp4',
    '/static/videos/roblox-gameplay-2.mp4',
    '/static/videos/roblox-gameplay-3.mp4',
    '/static/videos/roblox-gameplay-4.mp4',
    '/static/videos/roblox-gameplay-5.mp4'
  ];

  const videos = videoSources.length > 0 ? videoSources : defaultVideoSources;

  useEffect(() => {
    // Check if videos exist and preload them
    const checkVideos = async () => {
      const availableVideos = [];
      
      for (const videoSrc of videos) {
        try {
          const response = await fetch(videoSrc, { method: 'HEAD' });
          if (response.ok) {
            availableVideos.push(videoSrc);
          }
        } catch (error) {
          console.log(`Video not found: ${videoSrc}`);
        }
      }
      
      if (availableVideos.length === 0) {
        setIsLoading(false);
        setVideosReady(false);
        return;
      }
      
      // Preload available videos
      const videoElements = availableVideos.map((src, index) => {
        const video = document.createElement('video');
        video.src = src;
        video.muted = true;
        video.loop = false;
        video.preload = 'metadata';
        return video;
      });
      
      // Wait for all videos to load metadata
      Promise.all(
        videoElements.map(video => 
          new Promise((resolve) => {
            video.addEventListener('loadedmetadata', resolve);
            video.addEventListener('error', resolve);
          })
        )
      ).then(() => {
        videoRefs.current = videoElements;
        setVideosReady(true);
        setIsLoading(false);
      });
    };

    checkVideos();
  }, [videos]);

  useEffect(() => {
    if (!videosReady || videoRefs.current.length === 0) return;

    const cycleVideos = () => {
      const currentVideo = videoRefs.current[currentVideoIndex];
      if (!currentVideo) return;

      // Play current video
      currentVideo.currentTime = 0;
      currentVideo.play().catch(console.error);

      // Set up next video transition
      const timeout = setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videoRefs.current.length);
      }, videoDuration);

      return timeout;
    };

    const timeout = cycleVideos();
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentVideoIndex, videosReady, videoDuration]);

  if (isLoading) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading videos...</div>
      </div>
    );
  }

  if (!videosReady || videoRefs.current.length === 0) {
    // Fallback to gradient background if no videos are available
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30 pointer-events-none" />
        
        {/* Animated background shapes as fallback */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-purple-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Video containers with fade transitions */}
      {videoRefs.current.map((video, index) => {
        const isActive = index === currentVideoIndex;
        const videoElement = video;
        
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDuration: `${fadeDuration}ms`
            }}
          >
            {videoElement && (
              <video
                ref={(el) => {
                  if (el && videoElement) {
                    // Copy video element to ref
                    el.src = videoElement.src;
                    el.muted = true;
                    el.loop = false;
                    el.playsInline = true;
                    
                    // Auto-play if this is the active video
                    if (isActive && videosReady) {
                      el.currentTime = 0;
                      el.play().catch(console.error);
                    }
                  }
                }}
                className="w-full h-full object-cover"
                muted
                playsInline
                onEnded={() => {
                  // Auto-advance to next video when current one ends
                  setCurrentVideoIndex((prev) => (prev + 1) % videoRefs.current.length);
                }}
              />
            )}
          </div>
        );
      })}
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/40 pointer-events-none" />
      
      {/* Video indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {videoRefs.current.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentVideoIndex 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Play video ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar for current video */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
        <div 
          className="h-full bg-white/80 transition-all duration-100 ease-linear"
          style={{
            width: `${((Date.now() % videoDuration) / videoDuration) * 100}%`,
            animation: `videoProgress ${videoDuration}ms linear infinite`
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes videoProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}