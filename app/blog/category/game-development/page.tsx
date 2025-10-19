import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton } from "../../../../components/WindowsXPPage";
import { ArrowLeft } from "lucide-react";

export default function GameDevelopmentPage() {
  return (
    <WindowsXPPage title="Behind the Scenes - LandSlide Studios" windowIcon="🎬">
      <div className="space-y-6">
        <div className="mb-6">
          <Link href="/blog">
            <XPButton variant="default">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Blog
            </XPButton>
          </Link>
        </div>
        <XPHeading level={1}>Game Development</XPHeading>
        <p className="text-gray-700 text-lg mb-6">
          Technical deep-dives, coding tutorials, and development workflows for creating immersive horror experiences and interactive media.
        </p>
        <XPCard title="Development Focus Areas" icon="�">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🔧 Engine & Tools</h4>
                <p className="text-xs text-gray-600">Unity, Unreal, and custom development tools</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🎵 Audio Programming</h4>
                <p className="text-xs text-gray-600">Spatial audio and horror sound design</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🌐 Networking</h4>
                <p className="text-xs text-gray-600">Multiplayer systems and voice chat</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🎨 Rendering</h4>
                <p className="text-xs text-gray-600">Graphics optimization and visual effects</p>
              </div>
            </div>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}