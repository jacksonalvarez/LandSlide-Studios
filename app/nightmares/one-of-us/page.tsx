import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Users, Zap, Eye, Clock, Gamepad2, Heart, Shield } from "lucide-react";

export default function OneOfUsPage() {
  const features = [
    {
      icon: Users,
      title: "Multiplayer Deception",
      description: "4-8 players navigate a world where anyone could be the threat. Trust is your most valuable and dangerous resource."
    },
    {
      icon: Eye,
      title: "Psychological Horror",
      description: "Experience terror that comes from within. The real horror isn't what you see, but what you can't trust."
    },
    {
      icon: Zap,
      title: "Dynamic Trust System",
      description: "Your relationships change based on actions, words, and survival instincts. Who will you trust when the lights go out?"
    },
    {
      icon: Gamepad2,
      title: "Immersive Voice Chat",
      description: "Real-time communication with proximity-based audio. Whisper secrets, or shout warnings - if anyone believes you."
    }
  ];

  const systemReqs = [
    { label: "OS", value: "Windows 10 64-bit / macOS 10.15+" },
    { label: "Processor", value: "Intel i5-8400 / AMD Ryzen 5 2600" },
    { label: "Memory", value: "8 GB RAM" },
    { label: "Graphics", value: "GTX 1060 / RX 580" },
    { label: "DirectX", value: "Version 12" },
    { label: "Network", value: "Broadband Internet connection" },
    { label: "Storage", value: "25 GB available space" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-red-950/30 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Link href="/nightmares" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Nightmares</span>
            </Link>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-red-100 mb-6">
            One of <span className="text-red-500">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-red-300 font-medium mb-4">
            Survival Horror • Multiplayer Deception
          </p>
          <p className="text-lg text-red-200 max-w-3xl mx-auto mb-8">
            In a world where paranoia is survival, trust becomes the deadliest weapon. 
            When everyone looks the same, how do you know who's really human?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium text-lg">
              Coming Q2 2026
            </div>
            <div className="text-red-300 text-lg">
              • In Active Development •
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-20 text-red-500/10 animate-pulse">
          <Eye className="h-24 w-24" />
        </div>
        <div className="absolute bottom-20 right-20 text-red-500/10 animate-bounce">
          <Users className="h-20 w-20" />
        </div>
      </section>

      {/* Game Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-100 mb-6">
                The Nightmare Begins
              </h2>
              <div className="space-y-4 text-red-200">
                <p>
                  Welcome to a world where humanity's greatest fear isn't the monsters in the dark—
                  it's the person standing right next to you. In "One of Us," you and your friends 
                  must survive in a hostile environment while questioning everyone's true identity.
                </p>
                <p>
                  The infected can take human form, perfectly mimicking behavior, speech patterns, 
                  and memories. They walk among you, talk like you, and act like you. The only way 
                  to survive is to stay vigilant, but paranoia itself might be your downfall.
                </p>
                <p>
                  Form alliances, but remember—your best friend might be planning your demise. 
                  Trust is a luxury you can't afford, yet cooperation is essential for survival.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-red-900/30 to-black rounded-lg h-80 flex items-center justify-center border border-red-900/50">
                <div className="text-center">
                  <Users className="h-24 w-24 text-red-500 mx-auto mb-4 animate-pulse" />
                  <p className="text-red-300">Gameplay Screenshot</p>
                  <p className="text-red-400 text-sm mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-r from-red-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-100 text-center mb-12">
            Experience True <span className="text-red-500">Terror</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-red-950/50 to-black border border-red-900/50 rounded-lg p-6 h-full hover:border-red-500/50 transition-colors">
                  <feature.icon className="h-12 w-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-red-100 mb-3">{feature.title}</h3>
                  <p className="text-red-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Mechanics */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-100 mb-4">
              Survive the <span className="text-red-500">Paranoia</span>
            </h2>
            <p className="text-red-200 max-w-3xl mx-auto">
              Every decision matters. Every conversation could be your last. Master these mechanics to have any hope of survival.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6">
              <Shield className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-red-100 mb-3">Trust & Betrayal</h3>
              <p className="text-red-300 text-sm">
                Build relationships carefully. Share resources and information, but remember—
                the person you're helping might be planning to eliminate you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6">
              <Heart className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-red-100 mb-3">Stress & Sanity</h3>
              <p className="text-red-300 text-sm">
                Constant fear takes its toll. Manage your character's mental health while 
                navigating the psychological warfare of not knowing who to trust.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6">
              <Clock className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-red-100 mb-3">Time Pressure</h3>
              <p className="text-red-300 text-sm">
                Resources are limited and threats grow stronger. Make alliances quickly, 
                but choose your companions wisely—time is running out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-100 text-center mb-12">
            System Requirements
          </h2>
          
          <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-red-100 mb-6">Minimum Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {systemReqs.map((req, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-red-900/30 last:border-b-0">
                  <span className="text-red-300 font-medium">{req.label}:</span>
                  <span className="text-red-200 text-sm">{req.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development Updates */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-100 mb-6">
            Stay Updated on Development
          </h2>
          <p className="text-red-200 text-lg mb-8">
            Follow our development journey and be the first to know about beta testing opportunities, 
            release dates, and exclusive content reveals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/category/game-development"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Development Blog
            </Link>
            <Link 
              href="/contact"
              className="border border-red-500 text-red-300 px-8 py-4 rounded-lg hover:bg-red-950 transition-colors font-medium"
            >
              Join Beta List
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}