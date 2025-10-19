import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, Lightbulb, Waves, Brain, BookOpen, Compass, Moon } from "lucide-react";

export default function TheLighthousePage() {
  const features = [
    {
      icon: BookOpen,
      title: "Mysterious Storytelling",
      description: "Immerse yourself in atmospheric mystery where ancient knowledge reveals hidden secrets and forgotten truths."
    },
    {
      icon: Brain,
      title: "Perception Mechanics",
      description: "Your mental state affects perception. As stress builds, the line between reality and imagination blurs."
    },
    {
      icon: Compass,
      title: "Environmental Puzzles",
      description: "Uncover the lighthouse's mysteries through exploration and puzzle-solving in an ever-changing environment."
    },
    {
      icon: Moon,
      title: "Multiple Endings",
      description: "Your choices and discoveries lead to different outcomes. Some secrets are more profound than others."
    }
  ];

  const gameplayElements = [
    {
      title: "The Keeper's Journal",
      description: "Piece together the tragic history of previous lighthouse keepers through scattered diary entries and personal belongings.",
      icon: BookOpen
    },
    {
      title: "Signal Management",
      description: "Maintain the lighthouse beacon while deciphering strange patterns in ships that approach during storms.",
      icon: Lightbulb
    },
    {
      title: "Ocean's Whispers",
      description: "The sea speaks to those who listen. But the deeper you hear, the more intriguing mysteries you discover.",
      icon: Waves
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated ocean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/30 to-black">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-red-950/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Link href="/games" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Games</span>
            </Link>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-red-100 mb-6">
            The <span className="text-red-500">Lighthouse</span>
          </h1>
          <p className="text-xl md:text-2xl text-red-300 font-medium mb-4">
            Atmospheric Mystery • Psychological Thriller
          </p>
          <p className="text-lg text-red-200 max-w-3xl mx-auto mb-8">
            Alone on a remote lighthouse, you tend to a beacon that guides ships to safety. 
            But as the nights grow longer, you begin to uncover mysteries beneath the waves—
            and question whether some ships carry secrets that should remain hidden.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium text-lg">
              Coming Q4 2026
            </div>
            <div className="text-red-300 text-lg">
              • Pre-Production •
            </div>
          </div>
        </div>

        {/* Lighthouse silhouette */}
        <div className="absolute bottom-0 right-20 text-red-500/10 animate-pulse">
          <Lightbulb className="h-32 w-32" />
        </div>
        <div className="absolute top-20 left-20 text-blue-500/10 animate-bounce">
          <Waves className="h-24 w-24" />
        </div>
      </section>

      {/* Game Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-blue-900/30 via-red-950/20 to-black rounded-lg h-80 flex items-center justify-center border border-red-900/50">
                <div className="text-center">
                  <Lightbulb className="h-24 w-24 text-red-500 mx-auto mb-4 animate-pulse" />
                  <p className="text-red-300">Concept Art</p>
                  <p className="text-red-400 text-sm mt-2">In Development</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-red-100 mb-6">
                Where Light Meets Mystery
              </h2>
              <div className="space-y-4 text-red-200">
                <p>
                  You are the new keeper of Beacon Point Lighthouse, a remote outpost where 
                  countless ships have found salvation from treacherous storms. The previous 
                  keeper left abruptly, leaving behind only cryptic notes and an intriguing atmosphere.
                </p>
                <p>
                  As days turn to nights in endless cycles, you begin to notice strange patterns. 
                  Ships approach from impossible directions. The light sometimes flickers with 
                  its own rhythm. And in the depths below, something ancient stirs with each 
                  vessel that passes.
                </p>
                <p>
                  Inspired by atmospheric mystery storytelling, "The Lighthouse" challenges 
                  players to maintain their composure while uncovering secrets that reveal 
                  deeper truths about the world around them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-r from-blue-950/20 via-red-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-100 text-center mb-12">
            Discover the <span className="text-red-500">Mystery</span>
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

      {/* Gameplay Elements */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-100 mb-4">
              The Keeper's <span className="text-red-500">Duties</span>
            </h2>
            <p className="text-red-200 max-w-3xl mx-auto">
              Balance the mundane tasks of lighthouse maintenance with the growing horror of your isolation and discoveries.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {gameplayElements.map((element, index) => (
              <div key={index} className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6 text-center">
                <element.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-red-100 mb-3">{element.title}</h3>
                <p className="text-red-300 text-sm leading-relaxed">{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Atmosphere */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-100 mb-6">
              A Tale of Isolation & Terror
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-100 mb-3">Atmospheric Storytelling</h3>
                <p className="text-red-300 text-sm">
                  Discover the narrative through environmental details, hidden documents, 
                  and the gradual realization that your reality may not be what it seems.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-100 mb-3">Dynamic Weather</h3>
                <p className="text-red-300 text-sm">
                  Experience storms that bring more than just rough seas. Each tempest 
                  reveals new mysteries and challenges your grip on sanity.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-100 mb-3">Psychological Horror</h3>
                <p className="text-red-300 text-sm">
                  The true terror comes from within. As your sanity deteriorates, 
                  question what you see, hear, and believe to be real.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-100 mb-3">Ancient Mysteries</h3>
                <p className="text-red-300 text-sm">
                  Uncover secrets that predate human civilization. Some knowledge 
                  comes with a price too terrible to pay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-100 mb-6">
            Early in Development
          </h2>
          <p className="text-red-200 text-lg mb-8">
            "The Lighthouse" is currently in pre-production. We're crafting the narrative foundation 
            and core mechanics that will deliver an unforgettable cosmic horror experience. 
            Follow our development journey for exclusive insights and early previews.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/blog/category/horror-design"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Design Blog
            </Link>
            <Link 
              href="/contact"
              className="border border-red-500 text-red-300 px-8 py-4 rounded-lg hover:bg-red-950 transition-colors font-medium"
            >
              Get Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}