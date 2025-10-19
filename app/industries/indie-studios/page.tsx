import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton, XPList } from "../../../components/WindowsXPPage";
import { ArrowLeft, Users, Code, Lightbulb, Target, Zap, Heart } from "lucide-react";

export default function IndieStudiosPage() {
  const services = [
    {
      title: "Technical Development",
      description: "Complete game development from concept to release, handling the technical complexity so you can focus on creativity.",
      icon: "💻"
    },
    {
      title: "Creative Partnership", 
      description: "Collaborative design and creative direction to enhance your vision with professional game development expertise.",
      icon: "🎨"
    },
    {
      title: "Market Strategy",
      description: "Industry insights and marketing strategies to help position your indie game for maximum impact and reach.",
      icon: "📈"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and optimization to ensure your game meets professional standards across all platforms.",
      icon: "🔍"
    },
    {
      title: "Publishing Support",
      description: "Guidance through platform requirements, store optimization, and launch strategies for indie game success.",
      icon: "🚀"
    },
    {
      title: "Post-Launch Support", 
      description: "Ongoing maintenance, updates, and community management to keep your game thriving after release.",
      icon: "🛠️"
    }
  ];

  const benefits = [
    {
      title: "Creative Freedom",
      description: "Maintain full creative control while we handle the technical complexity",
      icon: "🎭"
    },
    {
      title: "Industry Connections",
      description: "Access to our network of publishers, platforms, and industry professionals",
      icon: "🤝"
    },
    {
      title: "Flexible Partnership",
      description: "Work arrangements that adapt to your budget, timeline, and project needs",
      icon: "⚙️"
    },
    {
      title: "Learning Opportunities", 
      description: "Expand your skills working on varied projects with new technologies",
      icon: "📚"
    }
  ];

  return (
    <WindowsXPPage title="Independent Developers - LandSlide Studios" windowIcon="🎨">
      <div className="space-y-6">
        <div className="mb-6">
          <Link href="/industries">
            <XPButton variant="default">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Industries
            </XPButton>
          </Link>
        </div>
        
        <XPCard title="Indie Game Studios Partnership" icon="🎮">
          <div className="flex items-center space-x-4 mb-4">
            <Users className="h-12 w-12 text-blue-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Empowering Independent Developers</h2>
              <p className="text-gray-600">
                We provide the technical expertise, creative partnership, and industry guidance 
                needed to transform your concepts into unforgettable gaming experiences.
              </p>
            </div>
          </div>
        </XPCard>

        <XPHeading level={2}>Partnership Services</XPHeading>
        <XPList items={services} />

        <XPHeading level={2}>Why Partner With Us?</XPHeading>
        <XPList items={benefits} />

        {/* Call to Action */}
        <XPCard title="Ready to Partner?" icon="🤝">
          <div className="text-center space-y-4">
            <p className="text-gray-700 text-lg">
              We understand the unique challenges indie developers face. Our partnership approach 
              ensures your creative vision remains intact while providing the technical and business 
              support needed for success in the competitive gaming market.
            </p>
            <Link href="/contact">
              <XPButton variant="primary">
                <Heart className="h-4 w-4 mr-2 inline" />
                Start Your Partnership
              </XPButton>
            </Link>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}