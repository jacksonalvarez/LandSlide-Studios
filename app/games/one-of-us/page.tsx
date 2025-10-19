
import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton, XPList } from "../../../components/WindowsXPPage";
import { ArrowLeft, Users, Zap, Eye, Clock, Gamepad2, Heart, Shield, Download, Star, Calendar } from "lucide-react";

export default function OneOfUsPage() {
  const features = [
    {
      icon: "👥",
      title: "Multiplayer Deception",
      description: "4-8 players navigate a world where anyone could be the threat. Trust is your most valuable and dangerous resource."
    },
    {
      icon: "👁️",
      title: "Psychological Horror",
      description: "Experience terror that comes from within. The real horror isn't what you see, but what you can't trust."
    },
    {
      icon: "⚡",
      title: "Dynamic Trust System", 
      description: "Your relationships change based on actions, words, and survival instincts. Who will you trust when the lights go out?"
    },
    {
      icon: "🎤",
      title: "Immersive Voice Chat",
      description: "Real-time communication with proximity-based audio. Whisper secrets, or shout warnings - if anyone believes you."
    }
  ];

  const gameplayFeatures = [
    { title: "Social Deduction Mechanics", description: "Vote, discuss, and deduce who among you can be trusted", icon: "🗳️" },
    { title: "Environmental Storytelling", description: "Discover the narrative through exploration and hidden clues", icon: "🔍" },
    { title: "Adaptive Horror Elements", description: "The game responds to your fears and trust levels", icon: "😨" },
    { title: "Cross-Platform Multiplayer", description: "Play with friends across PC, Mac, and consoles", icon: "🌐" }
  ];

  const systemReqs = [
    { title: "Operating System", description: "Windows 10 64-bit / macOS 10.15+", icon: "💻" },
    { title: "Processor", description: "Intel i5-8400 / AMD Ryzen 5 2600", icon: "🔧" },
    { title: "Memory", description: "8 GB RAM", icon: "💾" },
    { title: "Graphics", description: "GTX 1060 / RX 580", icon: "🎮" },
    { title: "Network", description: "Broadband Internet connection", icon: "🌐" },
    { title: "Storage", description: "25 GB available space", icon: "💿" }
  ];

  return (
    <WindowsXPPage title="One of Us - Game Details" windowIcon="👥">
      <div className="space-y-6">
        {/* Navigation */}
        <div className="mb-6">
          <Link href="/games">
            <XPButton variant="default" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Games
            </XPButton>
          </Link>
        </div>

        {/* Game Header */}
        <div className="text-center mb-8">
          <XPHeading level={1}>One of Us</XPHeading>
          <p className="text-xl text-blue-600 font-semibold mb-4">Survival Horror • Multiplayer</p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            A psychological horror game where paranoia and trust collide. In a world where anyone could be the threat, 
            the real enemy might be closer than you think.
          </p>
        </div>

        {/* Game Status */}
        <XPCard title="Development Status" icon="📊">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">🚧</div>
              <h4 className="font-bold text-gray-800">Status</h4>
              <p className="text-blue-600">In Development</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📅</div>
              <h4 className="font-bold text-gray-800">Expected Release</h4>
              <p className="text-green-600">Q2 2026</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-bold text-gray-800">Target Platforms</h4>
              <p className="text-gray-700">PC, Mac, Console</p>
            </div>
          </div>
        </XPCard>

        {/* Core Features */}
        <XPHeading level={2}>Core Features</XPHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <XPCard key={index} title={feature.title} icon={feature.icon}>
              <p className="text-gray-700">{feature.description}</p>
            </XPCard>
          ))}
        </div>

        {/* Gameplay Features */}
        <XPCard title="Gameplay Features" icon="🎮">
          <XPList items={gameplayFeatures} />
        </XPCard>

        {/* Game Concept */}
        <XPCard title="Game Concept" icon="💡">
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>One of Us</strong> challenges players to survive in a world where trust is both essential and potentially fatal. 
              Set in various isolated environments, players must work together to complete objectives while remaining vigilant 
              for signs that someone among them may not be who they claim to be.
            </p>
            <p className="text-gray-700">
              The game combines social deduction mechanics with atmospheric horror elements, creating tension through interpersonal 
              relationships rather than traditional jump scares. Every conversation, every glance, and every action carries weight 
              in a world where paranoia might be your greatest ally... or your downfall.
            </p>
          </div>
        </XPCard>

        {/* System Requirements */}
        <XPCard title="System Requirements" icon="⚙️">
          <XPList items={systemReqs} />
        </XPCard>

        {/* Development Team */}
        <XPCard title="Development Team" icon="👨‍💻">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Core Team Roles</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Game Design & Mechanics</li>
                <li>• Psychological Horror Consulting</li>
                <li>• Multiplayer Networking</li>
                <li>• Audio Design & Voice Systems</li>
                <li>• User Experience Design</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Development Focus</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Authentic social dynamics</li>
                <li>• Balanced gameplay mechanics</li>
                <li>• Immersive audio experience</li>
                <li>• Cross-platform compatibility</li>
                <li>• Community-driven features</li>
              </ul>
            </div>
          </div>
        </XPCard>

        {/* Call to Action */}
        <div className="text-center pt-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <XPButton variant="primary">
              <Heart className="h-4 w-4 mr-2 inline" />
              Add to Wishlist
            </XPButton>
            <Link href="/contact">
              <XPButton variant="default">
                <Users className="h-4 w-4 mr-2 inline" />
                Contact Development Team
              </XPButton>
            </Link>
            <Link href="/blog">
              <XPButton variant="default">
                <Star className="h-4 w-4 mr-2 inline" />
                Development Updates
              </XPButton>
            </Link>
          </div>
        </div>
      </div>
    </WindowsXPPage>
  );
}