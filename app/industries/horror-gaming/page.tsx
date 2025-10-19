import Link from "next/link";
import { ArrowLeft, Skull, Brain, Headphones, Users, Eye, Zap } from "lucide-react";

export default function HorrorGamingPage() {
  const capabilities = [
    {
      icon: Brain,
      title: "Psychological Horror",
      description: "Master the art of fear that comes from within. We craft experiences that unsettle players through atmosphere, narrative, and subtle manipulation of expectations."
    },
    {
      icon: Headphones,
      title: "3D Audio Terror",
      description: "Immersive soundscapes that make every creak, whisper, and footstep a potential threat. Our audio design creates fear through what you hear—and what you don't."
    },
    {
      icon: Users,
      title: "Multiplayer Fear",
      description: "Social horror mechanics where the real terror comes from other players. Trust, betrayal, and paranoia become core gameplay elements."
    },
    {
      icon: Eye,
      title: "Visual Storytelling",
      description: "Environmental narrative and visual design that tells stories without words. Every shadow, texture, and lighting choice serves the horror experience."
    }
  ];

  const projects = [
    {
      title: "One of Us",
      type: "Multiplayer Survival Horror",
      description: "A social deduction horror game where players must identify hidden threats among their group while surviving in a hostile environment.",
      status: "Active Development"
    },
    {
      title: "The Lighthouse",
      type: "Cosmic Horror Adventure", 
      description: "A Lovecraftian horror experience focused on isolation, madness, and the terror of the unknown depths beneath the ocean.",
      status: "Pre-Production"
    }
  ];

  const technologies = [
    "Unreal Engine 5 with advanced lighting",
    "Spatial audio systems (Wwise, FMOD)",
    "Real-time ray tracing for atmospheric effects",
    "AI-driven dynamic horror systems",
    "Cross-platform multiplayer architecture",
    "VR/AR horror adaptation frameworks"
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/industries" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Industries</span>
            </Link>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-600/20 p-4 rounded-lg border border-red-500/30">
                <Skull className="h-16 w-16 text-red-500" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-red-100 mb-6">
              Horror <span className="text-red-500">Gaming</span>
            </h1>
            <p className="text-xl text-red-200 max-w-3xl mx-auto">
              We specialize in crafting horror experiences that transcend traditional scares. 
              Our games don't just frighten—they create lasting psychological impact through 
              innovative mechanics, atmospheric design, and masterful storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-100 text-center mb-12">
            Our Horror <span className="text-red-500">Expertise</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gradient-to-br from-red-950/50 to-black border border-red-900/50 rounded-lg p-6 hover:border-red-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600/20 p-3 rounded-lg border border-red-500/30 flex-shrink-0">
                    <capability.icon className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-red-100 mb-3">{capability.title}</h3>
                    <p className="text-red-300 leading-relaxed">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Horror Projects */}
      <section className="py-20 bg-gradient-to-r from-red-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-red-100 text-center mb-12">
            Current <span className="text-red-500">Nightmares</span>
          </h2>
          
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-red-100 mb-2">{project.title}</h3>
                  <p className="text-red-400 font-medium">{project.type}</p>
                </div>
                <p className="text-red-200 leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center gap-2">
                  <span className="bg-red-600 text-red-100 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-100 mb-6">
                Cutting-Edge <span className="text-red-500">Technology</span>
              </h2>
              <p className="text-red-200 leading-relaxed mb-6">
                We leverage the latest game development technologies to create horror experiences 
                that push the boundaries of what's technically and creatively possible. Every tool 
                in our arsenal serves the ultimate goal: genuine, unforgettable fear.
              </p>
              <p className="text-red-300 leading-relaxed">
                From advanced lighting systems that create the perfect atmosphere of dread to 
                AI-driven dynamic systems that adapt to player behavior, our technology stack 
                ensures that no two horror experiences are exactly the same.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-100 mb-4">Technologies We Master</h3>
              <ul className="space-y-3">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-center gap-2 text-red-300">
                    <Zap className="h-4 w-4 text-red-500 flex-shrink-0" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Horror Philosophy */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-100 mb-6">
              Our Horror <span className="text-red-500">Philosophy</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-100 mb-3">Mind Over Matter</h3>
              <p className="text-red-300 text-sm">
                True horror lives in the mind. We craft experiences that let your imagination 
                fill in the most terrifying details.
              </p>
            </div>
            
            <div className="text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-100 mb-3">Social Fear</h3>
              <p className="text-red-300 text-sm">
                The most terrifying monsters are often other people. We design systems 
                where trust becomes a survival mechanic.
              </p>
            </div>
            
            <div className="text-center">
              <Eye className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-red-100 mb-3">Lasting Impact</h3>
              <p className="text-red-300 text-sm">
                Great horror stays with you. Our games create memories that surface 
                long after the screen goes dark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-100 mb-6">
            Ready to Create Nightmares?
          </h2>
          <p className="text-red-200 text-lg mb-8">
            Whether you have a horror concept that needs expert development or want to 
            collaborate on the next generation of scary games, we're here to help bring 
            your darkest visions to life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Discuss Your Project
            </Link>
            <Link 
              href="/nightmares"
              className="border border-red-500 text-red-300 px-8 py-4 rounded-lg hover:bg-red-950 transition-colors font-medium"
            >
              See Our Games
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}