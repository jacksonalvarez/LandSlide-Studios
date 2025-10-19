import type { Metadata } from "next";
import Link from "next/link";
import { 
  Gamepad2, 
  Code, 
  Monitor,
  Smartphone,
  Settings,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Game Development Services | Unity, Unreal Engine & Cross-Platform Games",
  description: "Professional game development services using Unity, Unreal Engine, and custom solutions. Full-cycle development from concept to launch with cross-platform support.",
  keywords: "Unity game development, Unreal Engine development, cross-platform games, mobile game development, PC games, console games, indie game development",
};

export default function GameDevelopment() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Gamepad2 className="h-20 w-20 text-blue-300 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Game Development
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Full-cycle game development from initial concept to successful launch. 
              We bring your gaming vision to life with cutting-edge technology and creative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Complete Game Development Solutions
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                At LandSlide Studios, we handle every aspect of game development under 
                the leadership of Thomas Maglietto, our CEO and Lead Game Developer. 
                From concept to launch, we ensure your game meets the highest standards 
                of quality and player engagement.
              </p>
              <p className="text-gray-600 mb-8">
                Our development process is owned by Thomas, who brings extensive expertise 
                in product lifecycle management, creative direction, and technical implementation. 
                This hands-on leadership ensures consistent vision and quality throughout your project.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <Monitor className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">PC & Console</h3>
                <p className="text-sm text-gray-600 mt-2">Windows, Mac, PlayStation, Xbox, Nintendo Switch</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Mobile</h3>
                <p className="text-sm text-gray-600 mt-2">iOS, Android, cross-platform solutions</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Custom Engines</h3>
                <p className="text-sm text-gray-600 mt-2">Tailored solutions for unique requirements</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900">Performance</h3>
                <p className="text-sm text-gray-600 mt-2">Optimization for smooth, engaging gameplay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology & Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading tools and technologies to create games 
              that perform exceptionally across all platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  U
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unity Engine</h3>
                <p className="text-gray-600 mb-6">
                  Cross-platform development with Unity's powerful 2D and 3D capabilities, 
                  perfect for indie games and mobile experiences.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li>• Cross-platform deployment</li>
                  <li>• Advanced physics and rendering</li>
                  <li>• Asset store integration</li>
                  <li>• VR/AR support</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  UE
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Unreal Engine</h3>
                <p className="text-gray-600 mb-6">
                  AAA-quality games with Unreal's cutting-edge graphics capabilities 
                  and blueprint visual scripting system.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li>• Photorealistic graphics</li>
                  <li>• Blueprint visual scripting</li>
                  <li>• Console-ready performance</li>
                  <li>• Advanced lighting systems</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Settings className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Tailored development approaches using specialized tools and frameworks 
                  for unique project requirements.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li>• Custom engine development</li>
                  <li>• Specialized tooling</li>
                  <li>• Performance optimization</li>
                  <li>• Platform-specific features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thomas Maglietto personally oversees the complete product lifecycle, 
              ensuring quality and vision consistency from concept to launch.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Concept & Vision</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We start by understanding your vision and goals. Thomas leads the creative 
                  direction process, helping refine concepts into actionable game design documents 
                  and technical specifications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Game concept refinement
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technical feasibility analysis
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Platform and audience targeting
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Creative Leadership</h4>
                <p className="text-gray-600">
                  Thomas brings extensive experience in storytelling, systems design, 
                  and overall gameplay experience to ensure your game stands out in the market.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl lg:order-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Team Assembly</h4>
                <p className="text-gray-600">
                  Thomas assembles the perfect team for your project, including specialized 
                  contractors and creative talent matched to your specific needs.
                </p>
              </div>
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Team Building & Planning</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We assemble a specialized team tailored to your project needs and create 
                  detailed development roadmaps with clear milestones and deliverables.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Specialized talent recruitment
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Project roadmap creation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Milestone definition
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Development & Iteration</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Agile development process with regular builds, testing, and client feedback. 
                  Thomas ensures the creative vision remains consistent throughout development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Weekly build deliveries
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regular client feedback sessions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quality assurance testing
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h4>
                <p className="text-gray-600">
                  Continuous testing and optimization ensure your game performs flawlessly 
                  across all target platforms and delivers the intended player experience.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl lg:order-1">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Launch Support</h4>
                <p className="text-gray-600">
                  Complete launch support including platform submissions, marketing assets, 
                  and post-launch monitoring to ensure a successful release.
                </p>
              </div>
              <div className="lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Launch & Support</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Comprehensive launch preparation and ongoing support to ensure your 
                  game reaches its audience successfully and continues to perform well.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Platform certification assistance
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Marketing asset creation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Post-launch support & updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Develop Your Game?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let Thomas and our experienced team bring your gaming vision to life 
            with professional development expertise and creative excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="border border-blue-300 text-blue-100 px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}