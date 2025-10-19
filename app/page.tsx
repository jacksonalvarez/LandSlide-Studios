import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Gamepad2, Users, Zap } from "lucide-react";
import VideoBackground from "../components/VideoBackground";
import FlashlightEffect from "../components/FlashlightEffect";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-50">
      {/* Hero Section - Windows XP Desktop Style */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-400 via-blue-200 to-blue-100">
        {/* Windows XP Wallpaper Style Background */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 via-green-300 to-blue-200">
          <div className="absolute inset-0 opacity-20 bg-white bg-opacity-10"></div>
        </div>

        {/* XP Style Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/30 via-transparent to-green-200/30"></div>

        {/* Windows XP Style Decorative Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-500 rounded opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 bg-green-500 rounded-full opacity-30 animate-bounce"></div>

        {/* XP Style Subtle Pattern */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white via-transparent to-blue-100"></div>

        {/* Content - Windows XP Window Style */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* XP Style Window */}
          <div className="bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg shadow-xl">
            {/* Window Title Bar */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
                <span className="text-white font-bold text-sm">LandSlide Studios - Game Development</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 font-sans">
                Professional Game Development
                <span className="text-green-600 block mt-2">Since 2024</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto leading-relaxed">
                LandSlide Studios creates engaging and immersive games with cutting-edge technology
                and creative storytelling. We deliver professional game development services
                that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/games"
                  className="bg-gradient-to-b from-blue-400 to-blue-600 text-white px-8 py-3 border border-blue-700 hover:from-blue-500 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-bold shadow-lg transform hover:scale-105"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.3)' }}
                >
                  View Our Games <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/industries"
                  className="bg-gradient-to-b from-blue-400 to-blue-600 text-white px-8 py-3 border border-blue-700 hover:from-blue-500 hover:to-blue-700 transition-all duration-200 flex items-center justify-center font-bold shadow-lg transform hover:scale-105"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3), 2px 2px 4px rgba(0,0,0,0.3)' }}
                >
                  View Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 px-8 py-3 border border-gray-400 hover:from-gray-300 hover:to-gray-400 transition-all duration-200 font-bold shadow-lg"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 2px 2px 4px rgba(0,0,0,0.3)' }}
                >
                  About Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - Windows XP Style */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-sans">
              Our Professional Services
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From game development to technical consulting, we provide comprehensive
              solutions with industry-leading expertise and reliable delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 border-2 border-blue-300 hover:border-blue-400 transition-all duration-200 p-6 shadow-lg hover:shadow-xl"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.2)' }}>
              <Gamepad2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-blue-800 mb-2 text-center">Game Development</h3>
              <p className="text-gray-700 text-sm text-center">Professional game creation from concept to launch with cutting-edge technology</p>
            </div>

            <div className="bg-gradient-to-b from-green-50 to-green-100 border-2 border-green-300 hover:border-green-400 transition-all duration-200 p-6 shadow-lg hover:shadow-xl"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.2)' }}>
              <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-green-800 mb-2 text-center">Technical Consulting</h3>
              <p className="text-gray-700 text-sm text-center">Expert technical solutions and system architecture for complex projects</p>
            </div>

            <div className="bg-gradient-to-b from-orange-50 to-orange-100 border-2 border-orange-300 hover:border-orange-400 transition-all duration-200 p-6 shadow-lg hover:shadow-xl"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.2)' }}>
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-orange-800 mb-2 text-center">Team Management</h3>
              <p className="text-gray-700 text-sm text-center">Complete project management and team coordination services</p>
            </div>

            <div className="bg-gradient-to-b from-purple-50 to-purple-100 border-2 border-purple-300 hover:border-purple-400 transition-all duration-200 p-6 shadow-lg hover:shadow-xl"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.2)' }}>
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-purple-800 mb-2 text-center">Rapid Prototyping</h3>
              <p className="text-gray-700 text-sm text-center">Fast iteration and proof-of-concept development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview - Windows XP Dialog Style */}
      <section className="py-20 bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 font-sans">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experienced professionals dedicated to delivering exceptional game development services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-400 p-6 shadow-lg"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.2)' }}>
              <div className="text-center">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 text-white w-20 h-20 flex items-center justify-center text-xl font-bold mx-auto mb-4 border-2 border-blue-800 shadow-md"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3)' }}>
                  TM
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Thomas Maglietto</h3>
                <p className="text-blue-600 font-semibold mb-3">CEO & Co-Founder</p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Experienced game developer specializing in creative design,
                  project management, and innovative gameplay mechanics.
                </p>
                <div className="bg-yellow-100 border border-yellow-300 px-2 py-1 text-xs text-gray-600 rounded">
                  ⅔ Equity Owner
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-gray-50 to-gray-100 border-2 border-gray-400 p-6 shadow-lg"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.2)' }}>
              <div className="text-center">
                <div className="bg-gradient-to-b from-green-400 to-green-600 text-white w-20 h-20 flex items-center justify-center text-xl font-bold mx-auto mb-4 border-2 border-green-800 shadow-md"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3)' }}>
                  JA
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Jackson Alvarez</h3>
                <p className="text-green-600 font-semibold mb-3">CTO & Co-Founder</p>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  Technical expert specializing in system architecture,
                  operations management, and scalable development infrastructure.
                </p>
                <div className="bg-yellow-100 border border-yellow-300 px-2 py-1 text-xs text-gray-600 rounded">
                  ⅓ Equity Owner
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/about/leadership"
              className="inline-flex items-center bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 px-6 py-2 border border-gray-400 hover:from-gray-300 hover:to-gray-400 transition-all duration-200 font-bold text-sm"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              View Full Team Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Windows XP Taskbar Style */}
      <section className="py-16 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 relative">
        {/* XP Taskbar Style Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-blue-600"
          style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.2)' }}></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="bg-gradient-to-b from-white to-gray-100 border-2 border-gray-300 p-8 shadow-xl"
            style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 4px 4px 8px rgba(0,0,0,0.3)' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800 font-sans">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your game development needs. We provide professional
              consultation and custom solutions for projects of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-b from-green-400 to-green-600 text-white px-8 py-3 border-2 border-green-700 hover:from-green-500 hover:to-green-700 transition-all duration-200 font-bold shadow-lg"
                style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3), 3px 3px 6px rgba(0,0,0,0.3)' }}
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}