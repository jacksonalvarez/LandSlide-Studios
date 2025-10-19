import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton, XPList } from "../../../components/WindowsXPPage";
import { ArrowLeft, Monitor, Smartphone, Globe, Zap, Layers, Cpu } from "lucide-react";

export default function InteractiveMediaPage() {
  const services = [
    {
      title: "Web-Based Interactive Experiences",
      description: "Rich, engaging web applications that push the boundaries of browser-based interactivity.",
      icon: "🌐"
    },
    {
      title: "Mobile App Gamification",
      description: "Transform mobile applications with game mechanics that drive engagement and retention.",
      icon: "📱"
    },
    {
      title: "Digital Installation Development",
      description: "Custom interactive installations for museums, exhibitions, and public spaces.",
      icon: "🖥️"
    },
    {
      title: "Emerging Technology Integration",
      description: "Leverage cutting-edge technologies including AI, machine learning, and IoT integration.",
      icon: "🔬"
    },
    {
      title: "Real-Time Data Visualization",
      description: "Interactive dashboards and visualizations that make complex data engaging and actionable.",
      icon: "📊"
    },
    {
      title: "Cross-Platform Experiences",
      description: "Seamless interactive experiences that work across multiple devices and platforms.",
      icon: "🔄"
    }
  ];

  const technologies = [
    {
      title: "WebGL & Three.js",
      description: "Advanced 3D graphics and interactive visualizations in web browsers",
      icon: "🎨"
    },
    {
      title: "Progressive Web Apps",
      description: "App-like experiences that work across all devices and platforms",
      icon: "📲"
    },
    {
      title: "Real-Time Communication",
      description: "WebRTC, WebSockets, and real-time data streaming technologies",
      icon: "⚡"
    },
    {
      title: "Machine Learning Integration",
      description: "AI-powered interactive experiences and intelligent content adaptation",
      icon: "🤖"
    }
  ];

  return (
    <WindowsXPPage title="Interactive Media - LandSlide Studios" windowIcon="💻">
      <div className="space-y-6">
        <div className="mb-6">
          <Link href="/industries">
            <XPButton variant="default">
              <ArrowLeft className="h-4 w-4 mr-2 inline" />
              Back to Industries
            </XPButton>
          </Link>
        </div>
        
        <XPCard title="Cutting-Edge Interactive Media Solutions" icon="💻">
          <div className="flex items-center space-x-4 mb-4">
            <Monitor className="h-12 w-12 text-cyan-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Pushing Interactive Boundaries</h2>
              <p className="text-gray-600">
                We create innovative interactive media experiences that leverage the latest web technologies, 
                emerging platforms, and cutting-edge development techniques to engage modern audiences.
              </p>
            </div>
          </div>
        </XPCard>

        <XPHeading level={2}>Interactive Media Services</XPHeading>
        <XPList items={services} />

        <XPHeading level={2}>Technology Stack</XPHeading>
        <XPList items={technologies} />

        {/* Use Cases */}
        <XPCard title="Interactive Media Applications" icon="🚀">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Globe className="h-4 w-4 mr-2 text-blue-500" />
                Digital Platforms
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Interactive websites and web applications</li>
                <li>• E-learning and training platforms</li>
                <li>• Data visualization dashboards</li>
                <li>• Virtual showrooms and product configurators</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Smartphone className="h-4 w-4 mr-2 text-green-500" />
                Mobile & App Integration
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Gamified mobile applications</li>
                <li>• AR/VR mobile experiences</li>
                <li>• Location-based interactive content</li>
                <li>• Social and community features</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Layers className="h-4 w-4 mr-2 text-purple-500" />
                Physical Installations
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Museum and exhibition interactives</li>
                <li>• Retail and showroom experiences</li>
                <li>• Public art installations</li>
                <li>• Trade show and event activations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Cpu className="h-4 w-4 mr-2 text-orange-500" />
                Emerging Technologies
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• AI-powered interactive experiences</li>
                <li>• IoT and sensor integration</li>
                <li>• Blockchain and Web3 applications</li>
                <li>• Voice and gesture control interfaces</li>
              </ul>
            </div>
          </div>
        </XPCard>

        {/* Call to Action */}
        <XPCard title="Ready to Innovate?" icon="⚡">
          <div className="text-center space-y-4">
            <p className="text-gray-700 text-lg">
              Let's push the boundaries of what's possible with interactive media. 
              Whether you need a cutting-edge web experience or an innovative digital installation, 
              we have the expertise to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <XPButton variant="primary">
                  <Zap className="h-4 w-4 mr-2 inline" />
                  Start Your Project
                </XPButton>
              </Link>
              <Link href="/games">
                <XPButton variant="default">
                  <Monitor className="h-4 w-4 mr-2 inline" />
                  View Examples
                </XPButton>
              </Link>
            </div>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}