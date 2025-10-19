import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton } from "../../../../components/WindowsXPPage";
import { ArrowLeft } from "lucide-react";

export default function GameDesignPage() {
  return (
    <WindowsXPPage title="Game Design - LandSlide Studios" windowIcon="�">
      <div className="space-y-6">
        <div className="mb-6">
          <Link href="/blog">
            <XPButton variant="default">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Blog
            </XPButton>
          </Link>
        </div>
        <XPHeading level={1}>Game Design</XPHeading>
        <p className="text-gray-700 text-lg mb-6">
          Exploring creative gameplay mechanics, player psychology, and innovative design philosophies that make games memorable and engaging.
        </p>
        <XPCard title="Design Topics" icon="🎯">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🎮 Gameplay Mechanics</h4>
                <p className="text-xs text-gray-600">Core systems that drive player interaction</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🧠 Player Psychology</h4>
                <p className="text-xs text-gray-600">Understanding what motivates players</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🎪 Horror Design</h4>
                <p className="text-xs text-gray-600">Creating tension and fear through design</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">⚖️ Game Balance</h4>
                <p className="text-xs text-gray-600">Crafting fair and challenging experiences</p>
              </div>
            </div>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}