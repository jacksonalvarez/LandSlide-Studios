import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton, XPList } from "../../../components/WindowsXPPage";
import { ArrowLeft, Play, Video, Users, Sparkles, Monitor, Headphones } from "lucide-react";

export default function EntertainmentPage() {
  const services = [
    {
      title: "Interactive Content Development",
      description: "Create engaging interactive experiences for film, TV, and digital media properties.",
      icon: "🎬"
    },
    {
      title: "Virtual & Augmented Reality",
      description: "Immersive VR/AR experiences for entertainment venues, marketing campaigns, and media tie-ins.",
      icon: "🥽"
    },
    {
      title: "Branded Gaming Experiences",
      description: "Custom games and interactive content that extend your brand's reach and engagement.",
      icon: "🎮"
    },
    {
      title: "Educational Entertainment",
      description: "Gamified learning experiences that entertain while educating your audience.",
      icon: "🎓"
    },
    {
      title: "Event & Installation Games",
      description: "Interactive installations for trade shows, museums, and entertainment venues.",
      icon: "🏛️"
    },
    {
      title: "Transmedia Storytelling",
      description: "Interactive narrative experiences that span multiple platforms and media types.",
      icon: "📚"
    }
  ];

  const capabilities = [
    {
      title: "Cross-Platform Deployment",
      description: "Deploy across web, mobile, console, and specialized hardware platforms",
      icon: "📱"
    },
    {
      title: "Real-Time Technologies",
      description: "Leverage cutting-edge real-time rendering and interactive technologies",
      icon: "⚡"
    },
    {
      title: "Content Management Systems",
      description: "Build systems for easy content updates and audience engagement tracking",
      icon: "📊"
    },
    {
      title: "Social Integration",
      description: "Seamless integration with social media and community platforms",
      icon: "🌐"
    }
  ];

  return (
    <WindowsXPPage title="Entertainment Industry - LandSlide Studios" windowIcon="🎬">
      <div className="space-y-6">
        <div className="mb-6">
          <Link href="/industries">
            <XPButton variant="default">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Industries
            </XPButton>
          </Link>
        </div>
        
        <XPCard title="Interactive Entertainment Solutions" icon="🎬">
          <div className="flex items-center space-x-4 mb-4">
            <Play className="h-12 w-12 text-purple-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Bringing Stories to Interactive Life</h2>
              <p className="text-gray-600">
                We create immersive interactive experiences that bridge traditional entertainment 
                with cutting-edge gaming technology, expanding your audience engagement possibilities.
              </p>
            </div>
          </div>
        </XPCard>

        <XPHeading level={2}>Entertainment Services</XPHeading>
        <XPList items={services} />

        <XPHeading level={2}>Technical Capabilities</XPHeading>
        <XPList items={capabilities} />

        {/* Industry Applications */}
        <XPCard title="Applications Across Entertainment" icon="🌟">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Video className="h-4 w-4 mr-2 text-red-500" />
                Film & Television
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Interactive movie tie-in experiences</li>
                <li>• Virtual set visualization tools</li>
                <li>• Audience engagement applications</li>
                <li>• Behind-the-scenes interactive content</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Monitor className="h-4 w-4 mr-2 text-blue-500" />
                Digital Media
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Interactive web experiences</li>
                <li>• Social media gaming campaigns</li>
                <li>• Virtual events and activations</li>
                <li>• Cross-platform content delivery</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Users className="h-4 w-4 mr-2 text-green-500" />
                Live Entertainment
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Interactive venue installations</li>
                <li>• Audience participation systems</li>
                <li>• AR-enhanced live experiences</li>
                <li>• Real-time audience feedback tools</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Headphones className="h-4 w-4 mr-2 text-purple-500" />
                Audio Entertainment
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Interactive podcast experiences</li>
                <li>• Music visualization applications</li>
                <li>• Audio-driven games and experiences</li>
                <li>• Spatial audio implementations</li>
              </ul>
            </div>
          </div>
        </XPCard>

        {/* Call to Action */}
        <XPCard title="Transform Your Entertainment Vision" icon="✨">
          <div className="text-center space-y-4">
            <p className="text-gray-700 text-lg">
              Ready to create interactive experiences that captivate your audience? 
              Let's explore how gaming technology can enhance your entertainment properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <XPButton variant="primary">
                  <Sparkles className="h-4 w-4 mr-2 inline" />
                  Discuss Your Vision
                </XPButton>
              </Link>
              <Link href="/games">
                <XPButton variant="default">
                  <Play className="h-4 w-4 mr-2 inline" />
                  See Our Work
                </XPButton>
              </Link>
            </div>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}