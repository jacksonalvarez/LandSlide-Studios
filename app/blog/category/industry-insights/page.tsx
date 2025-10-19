import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton } from "../../../../components/WindowsXPPage";
import { ArrowLeft } from "lucide-react";

export default function IndustryInsightsPage() {
  return (
    <WindowsXPPage title="Industry Insights - LandSlide Studios" windowIcon="📊">
      <div className="space-y-6">
        <div className="mb-6">
          <Link href="/blog">
            <XPButton variant="default">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Blog
            </XPButton>
          </Link>
        </div>
        <XPHeading level={1}>Industry Insights</XPHeading>
        <p className="text-gray-700 text-lg mb-6">
          Market trends, business strategy, and the evolving landscape of horror gaming and interactive entertainment.
        </p>
        <XPCard title="Industry Analysis Topics" icon="�">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">📊 Market Trends</h4>
                <p className="text-xs text-gray-600">Horror gaming market growth and audience analysis</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">💰 Business Models</h4>
                <p className="text-xs text-gray-600">Monetization strategies and platform economics</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🎮 Platform Insights</h4>
                <p className="text-xs text-gray-600">Console vs PC vs mobile gaming trends</p>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <h4 className="font-semibold text-sm mb-1">🔮 Future Tech</h4>
                <p className="text-xs text-gray-600">VR/AR and emerging technology impact</p>
              </div>
            </div>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}