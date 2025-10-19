import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton } from "../../components/WindowsXPPage";
import { BookOpen, Code, TrendingUp, Camera } from "lucide-react";

export default function BlogPage() {
  const categories = [
    {
      title: "Game Design",
      description: "Gameplay mechanics, player psychology, horror design principles, and game balance strategies.",
      icon: "🎨",
      href: "/blog/category/game-design"
    },
    {
      title: "Game Development",
      description: "Engine tools, audio programming, networking systems, and rendering optimization techniques.",
      icon: "💻",
      href: "/blog/category/game-development"
    },
    {
      title: "Industry Insights",
      description: "Market trends, business models, platform analysis, and emerging technology impact on gaming.",
      icon: "�",
      href: "/blog/category/industry-insights"
    },
    {
      title: "Behind the Scenes",
      description: "Team spotlights, creative process insights, studio life, and project development updates.",
      icon: "🎬",
      href: "/blog/category/behind-the-scenes"
    }
  ];

  return (
    <WindowsXPPage title="Development Blog - LandSlide Studios" windowIcon="📝">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <XPHeading level={1}>Development Blog</XPHeading>
          <p className="text-gray-700 text-lg mt-4">
            Insights, tutorials, and stories from our game development journey
          </p>
        </div>

        <XPCard title="Browse by Category" icon="📂">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <Link key={index} href={category.href}>
                <div className="p-4 border-2 border-gray-400 rounded bg-gradient-to-b from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{category.icon}</div>
                    <h3 className="font-semibold text-gray-800">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {category.description}
                  </p>
                  <XPButton variant="primary">
                    Explore Articles
                  </XPButton>
                </div>
              </Link>
            ))}
          </div>
        </XPCard>

        <XPCard title="Recent Posts" icon="📰">
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">
              We're just getting started! Check back soon for development insights, tutorials, and behind-the-scenes content.
            </p>
            <XPButton variant="default">
              Coming Soon
            </XPButton>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}
