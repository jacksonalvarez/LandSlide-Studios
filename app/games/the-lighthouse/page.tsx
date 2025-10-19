
import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton, XPList } from "../../../components/WindowsXPPage";
import { ArrowLeft, Eye, Lightbulb, Waves, Brain, BookOpen, Compass, Moon, Star, Calendar, Users, Heart } from "lucide-react";

export default function TheLighthousePage() {
  const features = [
    {
      icon: "📚",
      title: "Mysterious Storytelling",
      description: "Immerse yourself in atmospheric mystery where ancient knowledge reveals hidden secrets and forgotten truths."
    },
    {
      icon: "🧠",
      title: "Perception Mechanics",
      description: "Your mental state affects perception. As stress builds, the line between reality and imagination blurs."
    },
    {
      icon: "🧩",
      title: "Environmental Puzzles",
      description: "Uncover the lighthouse's mysteries through exploration and puzzle-solving in an ever-changing environment."
    },
    {
      icon: "🌙",
      title: "Multiple Endings",
      description: "Your choices and discoveries lead to different outcomes. Some secrets are more profound than others."
    }
  ];

  const gameplayElements = [
    {
      title: "The Keeper's Journal",
      description: "Piece together the tragic history of previous lighthouse keepers through scattered diary entries",
      icon: "📖"
    },
    {
      title: "Signal Management",
      description: "Maintain the lighthouse beacon while deciphering strange patterns in approaching ships",
      icon: "💡"
    },
    {
      title: "Ocean's Whispers",
      description: "The sea speaks to those who listen. But the deeper you hear, the more mysteries you discover",
      icon: "🌊"
    },
    {
      title: "Sanity System",
      description: "Monitor your mental state as isolation and strange events take their toll",
      icon: "🧠"
    },
    {
      title: "Weather Dynamics",
      description: "Storms and calm seas create different gameplay opportunities and challenges",
      icon: "⛈️"
    },
    {
      title: "Ancient Artifacts",
      description: "Discover relics that reveal the true purpose of the lighthouse",
      icon: "🏺"
    }
  ];

  const systemReqs = [
    { title: "Operating System", description: "Windows 10 64-bit / macOS 11.0+", icon: "💻" },
    { title: "Processor", description: "Intel i5-9400 / AMD Ryzen 5 3600", icon: "🔧" },
    { title: "Memory", description: "12 GB RAM", icon: "💾" },
    { title: "Graphics", description: "GTX 1660 / RX 6500 XT", icon: "🎮" },
    { title: "DirectX", description: "Version 12", icon: "📐" },
    { title: "Storage", description: "35 GB available space", icon: "💿" }
  ];

  return (
    <WindowsXPPage title="The Lighthouse - Game Details" windowIcon="🗼">
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
          <XPHeading level={1}>The Lighthouse</XPHeading>
          <p className="text-xl text-blue-600 font-semibold mb-4">Cosmic Horror Adventure • Single Player</p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            Isolated on a remote lighthouse, uncover the mysteries that lurk beneath the waves. 
            Some lights guide ships to safety... others lure them to their doom.
          </p>
        </div>

        {/* Game Status */}
        <XPCard title="Development Status" icon="📊">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-2">📝</div>
              <h4 className="font-bold text-gray-800">Status</h4>
              <p className="text-orange-600">Pre-Production</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📅</div>
              <h4 className="font-bold text-gray-800">Expected Release</h4>
              <p className="text-green-600">Q4 2026</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-bold text-gray-800">Target Platforms</h4>
              <p className="text-gray-700">PC, Mac, Steam Deck</p>
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

        {/* Gameplay Elements */}
        <XPCard title="Gameplay Elements" icon="🎮">
          <XPList items={gameplayElements} />
        </XPCard>

        {/* Game Concept */}
        <XPCard title="Game Concept" icon="💡">
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>The Lighthouse</strong> is a single-player cosmic horror adventure that blends atmospheric exploration 
              with psychological storytelling. Players take on the role of a lighthouse keeper who begins to notice strange 
              patterns in the ships that approach during storms, and even stranger things happening within the lighthouse itself.
            </p>
            <p className="text-gray-700">
              Drawing inspiration from Lovecraftian horror and maritime folklore, the game focuses on building tension through 
              environmental storytelling, mysterious discoveries, and the gradual revelation that the lighthouse's true purpose 
              may be far more sinister than guiding ships to safety.
            </p>
            <p className="text-gray-700">
              As players maintain the lighthouse's operations, they'll uncover journal entries from previous keepers, 
              discover ancient artifacts hidden within the structure, and slowly piece together a narrative that spans 
              centuries of maritime mystery and cosmic horror.
            </p>
          </div>
        </XPCard>

        {/* Story Themes */}
        <XPCard title="Story & Themes" icon="📜">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Narrative Themes</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Isolation and its effects on the human psyche</li>
                <li>• The mystery of what lies beneath the ocean</li>
                <li>• Ancient knowledge and forbidden discoveries</li>
                <li>• The lighthouse as a beacon... or a trap</li>
                <li>• Maritime folklore and cosmic horror</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Gameplay Focus</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Atmospheric exploration and discovery</li>
                <li>• Environmental puzzle solving</li>
                <li>• Narrative progression through investigation</li>
                <li>• Sanity mechanics that affect perception</li>
                <li>• Multiple endings based on player choices</li>
              </ul>
            </div>
          </div>
        </XPCard>

        {/* System Requirements */}
        <XPCard title="System Requirements" icon="⚙️">
          <XPList items={systemReqs} />
        </XPCard>

        {/* Development Notes */}
        <XPCard title="Development Notes" icon="📝">
          <div className="space-y-3">
            <p className="text-gray-700 text-sm">
              <strong>Current Phase:</strong> We're currently in the pre-production phase, focusing on narrative design, 
              art direction, and core gameplay mechanics. The lighthouse setting provides a perfect contained environment 
              for deep storytelling and atmospheric horror.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Art Direction:</strong> The visual style emphasizes realistic maritime environments with subtle 
              supernatural elements that become more pronounced as the story unfolds.
            </p>
            <p className="text-gray-700 text-sm">
              <strong>Audio Design:</strong> Heavy emphasis on environmental audio - ocean waves, creaking wood, 
              distant fog horns, and the subtle sounds that shouldn't be there.
            </p>
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