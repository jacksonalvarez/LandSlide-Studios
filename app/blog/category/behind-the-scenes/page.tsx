import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton } from "../../../../components/WindowsXPPage";
import { ArrowLeft } from "lucide-react";

export default function BehindTheScenesPage() {
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
        <XPHeading level={1}>Behind the Scenes</XPHeading>
        <p className="text-gray-700 text-lg mb-6">
          Studio updates, team stories, and exclusive looks at our development process.
        </p>
        <XPCard title="Studio Content Areas" icon="🎬">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">� Team Spotlights</h4>
                <p className="text-xs text-gray-600">Meet the developers, artists, and creators</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🎨 Creative Process</h4>
                <p className="text-xs text-gray-600">From concept to final product development</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🏢 Studio Life</h4>
                <p className="text-xs text-gray-600">Daily operations and company culture</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">📈 Project Updates</h4>
                <p className="text-xs text-gray-600">Development milestones and progress reports</p>
              </div>
            </div>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}