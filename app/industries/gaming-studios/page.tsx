import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton, XPList } from "../../../components/WindowsXPPage";
import { ArrowLeft, Building, Code, Gamepad2, Users, Zap, Target } from "lucide-react";

export default function GamingStudiosPage() {
  const services = [
    {
      title: "Full-Cycle Development",
      description: "End-to-end game development from initial concept through launch and post-release support.",
      icon: "🔄"
    },
    {
      title: "Technical Architecture",
      description: "Scalable game architecture design and implementation for complex multiplayer and single-player experiences.",
      icon: "🏗️"
    },
    {
      title: "Platform Optimization",
      description: "Performance optimization and porting across PC, console, and mobile platforms.",
      icon: "⚡"
    },
    {
      title: "Live Operations",
      description: "Post-launch content updates, community management, and ongoing technical support.",
      icon: "📊"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing including functionality, performance, and compatibility across all target platforms.",
      icon: "✅"
    },
    {
      title: "Technology Integration",
      description: "Integration of cutting-edge technologies including AI, VR/AR, and emerging game technologies.",
      icon: "🔬"
    }
  ];

  const expertise = [
    {
      title: "Unity & Unreal Engine",
      description: "Expert-level development in industry-standard game engines",
      icon: "🎮"
    },
    {
      title: "Multiplayer Systems",
      description: "Robust networking and server architecture for multiplayer games",
      icon: "🌐"
    },
    {
      title: "Performance Optimization",
      description: "Advanced optimization techniques for smooth gameplay across all platforms",
      icon: "⚡"
    },
    {
      title: "Cross-Platform Development",
      description: "Seamless deployment across PC, console, and mobile platforms",
      icon: "📱"
    }
  ];

  return (
    <WindowsXPPage title="Gaming Studios - LandSlide Studios" windowIcon="🎮">
      <div className="space-y-6">
        <div className="mb-6">
          <Link href="/industries">
            <XPButton variant="default">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Industries
            </XPButton>
          </Link>
        </div>
        
        <XPCard title="Professional Game Development Services" icon="🎮">
          <div className="flex items-center space-x-4 mb-4">
            <Building className="h-12 w-12 text-blue-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Partner with Gaming Industry Experts</h2>
              <p className="text-gray-600">
                LandSlide Studios provides comprehensive game development services for studios 
                of all sizes, from independent developers to established publishers.
              </p>
            </div>
          </div>
        </XPCard>

        <XPHeading level={2}>Development Services</XPHeading>
        <XPList items={services} />

        <XPHeading level={2}>Technical Expertise</XPHeading>
        <XPList items={expertise} />

        {/* Success Stories */}
        <XPCard title="Why Gaming Studios Choose Us" icon="⭐">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Proven Track Record</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Successfully delivered projects across multiple genres</li>
                <li>• Experience with AAA and indie development pipelines</li>
                <li>• Expertise in horror, multiplayer, and interactive experiences</li>
                <li>• Strong portfolio of completed and launched games</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Development Philosophy</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Agile development methodology with regular milestones</li>
                <li>• Transparent communication and project management</li>
                <li>• Focus on code quality and long-term maintainability</li>
                <li>• Collaborative approach respecting your creative vision</li>
              </ul>
            </div>
          </div>
        </XPCard>

        {/* Call to Action */}
        <XPCard title="Ready to Start Your Project?" icon="🚀">
          <div className="text-center space-y-4">
            <p className="text-gray-700 text-lg">
              Whether you're looking for a development partner for your next game or need 
              technical expertise to bring your vision to life, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <XPButton variant="primary">
                  <Target className="h-4 w-4 mr-2 inline" />
                  Discuss Your Project
                </XPButton>
              </Link>
              <Link href="/games">
                <XPButton variant="default">
                  <Gamepad2 className="h-4 w-4 mr-2 inline" />
                  View Our Work
                </XPButton>
              </Link>
            </div>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}