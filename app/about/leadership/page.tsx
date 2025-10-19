import type { Metadata } from "next";
import WindowsXPPage, { XPHeading, XPCard, XPButton } from "../../../components/WindowsXPPage";
import { User, Crown, Building, Code, Users, Gamepad2, Settings, TrendingUp, Mail, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership Team | LandSlide Studios - Thomas Maglietto & Jackson Alvarez",
  description: "Meet the leadership team of LandSlide Studios: Thomas Maglietto (CEO) and Jackson Alvarez (CTO). Learn about their roles in game development and business operations.",
  keywords: "Thomas Maglietto CEO, Jackson Alvarez CTO, LandSlide Studios founders, game development leadership, leadership team",
};

export default function Leadership() {
  return (
    <WindowsXPPage title="Leadership Team - LandSlide Studios" windowIcon="👥">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <XPHeading level={1}>Our Leadership Team</XPHeading>
          <p className="text-gray-700 text-lg mt-4">
            Meet the founders and leaders who drive innovation and excellence
            in game development at LandSlide Studios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Thomas Maglietto - CEO Window */}
          <div className="bg-gradient-to-b from-blue-100 to-blue-200 border-2 border-gray-400 shadow-lg"
            style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.3)' }}>
            {/* Window Title Bar */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 text-sm font-bold border-b border-gray-400 flex items-center">
              <User className="h-4 w-4 mr-2" />
              Thomas Maglietto - CEO
              <div className="ml-auto flex space-x-1">
                <div className="w-3 h-3 bg-gray-300 border border-gray-500"></div>
                <div className="w-3 h-3 bg-gray-300 border border-gray-500"></div>
                <div className="w-3 h-3 bg-red-500 border border-gray-500"></div>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 space-y-4">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-b from-green-400 to-green-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-2 border-gray-400"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3)' }}>
                  TM
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Thomas Maglietto</h3>
                <p className="text-blue-600 font-semibold mb-1">Co-Founder & CEO</p>
                <div className="flex justify-center items-center space-x-2 text-sm">
                  <Crown className="h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">⅔ Equity Owner</span>
                </div>
              </div>

              <XPCard title="Core Responsibilities" icon="🎯">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <Gamepad2 className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Project Lifecycle</p>
                      <p className="text-gray-600">Oversees full game development from concept through delivery, ensuring quality and client satisfaction.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <User className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Creative Vision</p>
                      <p className="text-gray-600">Leads game design, storytelling, and overall user experience across all projects.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Users className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Team Leadership</p>
                      <p className="text-gray-600">Builds and leads development teams, including contractors and creative talent.</p>
                    </div>
                  </div>
                </div>
              </XPCard>

              <XPCard title="Contact Information" icon="📧">
                <div className="text-sm space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <a href="mailto:thomas@landslidestudios.com" className="text-blue-600 hover:text-blue-800">
                      thomas@landslidestudios.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">Strategic Partnerships & Creative Direction</span>
                  </div>
                </div>
              </XPCard>
            </div>
          </div>

          {/* Jackson Alvarez - CTO Window */}
          <div className="bg-gradient-to-b from-blue-100 to-blue-200 border-2 border-gray-400 shadow-lg"
            style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.3)' }}>
            {/* Window Title Bar */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1 text-sm font-bold border-b border-gray-400 flex items-center">
              <Code className="h-4 w-4 mr-2" />
              Jackson Alvarez - CTO
              <div className="ml-auto flex space-x-1">
                <div className="w-3 h-3 bg-gray-300 border border-gray-500"></div>
                <div className="w-3 h-3 bg-gray-300 border border-gray-500"></div>
                <div className="w-3 h-3 bg-red-500 border border-gray-500"></div>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-6 space-y-4">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-b from-purple-400 to-purple-600 text-white w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border-2 border-gray-400"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3)' }}>
                  JA
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">Jackson Alvarez</h3>
                <p className="text-blue-600 font-semibold mb-1">Co-Founder & CTO</p>
                <div className="flex justify-center items-center space-x-2 text-sm">
                  <Crown className="h-4 w-4 text-yellow-600" />
                  <span className="text-gray-700">⅓ Equity Owner</span>
                </div>
              </div>

              <XPCard title="Core Responsibilities" icon="⚙️">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <Building className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Business Operations</p>
                      <p className="text-gray-600">Manages LLC administration, invoicing, financial systems, and studio logistics.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Code className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Technical Infrastructure</p>
                      <p className="text-gray-600">Maintains websites, backend services, APIs, project management tools, and automation systems.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Settings className="h-4 w-4 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">Team Support</p>
                      <p className="text-gray-600">Ensures development teams have the tools, workflows, and resources needed for efficient delivery.</p>
                    </div>
                  </div>
                </div>
              </XPCard>

              <XPCard title="Contact Information" icon="📧">
                <div className="text-sm space-y-2">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-purple-600" />
                    <a href="mailto:jackson@landslidestudios.com" className="text-blue-600 hover:text-blue-800">
                      jackson@landslidestudios.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700">Technical Operations & Infrastructure</span>
                  </div>
                </div>
              </XPCard>
            </div>
          </div>
        </div>

        <XPCard title="Shared Leadership Responsibilities" icon="🤝">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 rounded"
              style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
              <Gamepad2 className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Game Design Leadership</h4>
              <p className="text-gray-600 text-sm">
                Joint oversight of creative vision, ensuring games align with studio values and quality standards.
              </p>
            </div>

            <div className="text-center p-4 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 rounded"
              style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Marketing & Content Strategy</h4>
              <p className="text-gray-600 text-sm">
                Collaborative responsibility for messaging, audience targeting, and public-facing content strategies.
              </p>
            </div>

            <div className="text-center p-4 bg-gradient-to-b from-gray-50 to-gray-100 border border-gray-300 rounded"
              style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Stakeholder Relations</h4>
              <p className="text-gray-600 text-sm">
                Both founders represent the studio to external partners, clients, and investors.
              </p>
            </div>
          </div>
        </XPCard>


      </div>
    </WindowsXPPage>
  );
}