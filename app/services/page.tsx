import type { Metadata } from "next";
import Link from "next/link";
import VideoHero from '@/components/VideoHero';
import { 
  Gamepad2, 
  Code, 
  Users, 
  Zap, 
  Palette, 
  Settings,
  ArrowRight,
  CheckCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Game Development Services | LandSlide Studios - Complete Solutions",
  description: "Professional game development services including game design, technical infrastructure, MVP development, business operations, and consulting. Expert solutions for indie and enterprise game projects.",
  keywords: "game development services, Unity development, Unreal Engine, game design, technical infrastructure, MVP development, game consulting, indie games",
};

export default function Services() {
  const services = [
    {
      title: "Game Development",
      description: "Full-cycle game development from concept to launch",
      icon: Gamepad2,
      color: "blue",
      href: "/services/game-development",
      features: ["Unity & Unreal Engine", "Cross-platform development", "Performance optimization", "Quality assurance"]
    },
    {
      title: "Game Design", 
      description: "Creative direction and gameplay systems design",
      icon: Palette,
      color: "purple",
      href: "/services/game-design",
      features: ["Concept development", "Systems design", "Level design", "User experience"]
    },
    {
      title: "Technical Infrastructure",
      description: "Robust backend systems and architecture",
      icon: Code,
      color: "green",
      href: "/services/technical-infrastructure", 
      features: ["Cloud architecture", "API development", "DevOps setup", "Scalable solutions"]
    },
    {
      title: "Business Operations",
      description: "Complete operational support for game studios",
      icon: Users,
      color: "orange",
      href: "/services/business-operations",
      features: ["Project management", "Team coordination", "Process optimization", "Administrative support"]
    },
    {
      title: "MVP Development",
      description: "Rapid prototyping and minimum viable products",
      icon: Zap,
      color: "red",
      href: "/services/mvp-development",
      features: ["Rapid prototyping", "Core feature validation", "Market testing", "Iterative development"]
    },
    {
      title: "Consulting",
      description: "Strategic guidance and technical expertise",
      icon: Settings,
      color: "gray",
      href: "/services/consulting",
      features: ["Technical audits", "Strategy planning", "Team training", "Best practices"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-200 hover:shadow-blue-100 text-blue-600",
      purple: "border-purple-200 hover:shadow-purple-100 text-purple-600", 
      green: "border-green-200 hover:shadow-green-100 text-green-600",
      orange: "border-orange-200 hover:shadow-orange-100 text-orange-600",
      red: "border-red-200 hover:shadow-red-100 text-red-600",
      gray: "border-gray-200 hover:shadow-gray-100 text-gray-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[80vh] overflow-hidden">
        <VideoHero 
          videoDuration={10000}
          fadeDuration={1200}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
              Game Development Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive solutions for every aspect of game development, from initial 
              concept to successful launch and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer end-to-end game development services with deep expertise in 
              both creative and technical aspects of modern game production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link 
                  key={service.title}
                  href={service.href}
                  className={`block p-8 rounded-xl border-2 hover:shadow-xl transition-all duration-300 bg-white ${getColorClasses(service.color)}`}
                >
                  <div className="text-center">
                    <IconComponent className={`h-16 w-16 mx-auto mb-6 ${service.color === 'blue' ? 'text-blue-600' : 
                      service.color === 'purple' ? 'text-purple-600' :
                      service.color === 'green' ? 'text-green-600' :
                      service.color === 'orange' ? 'text-orange-600' :
                      service.color === 'red' ? 'text-red-600' : 'text-gray-600'}`} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center justify-center text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 inline-flex items-center text-sm font-semibold">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures quality, efficiency, 
              and client satisfaction at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your vision, requirements, and goals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Strategic roadmap and technical architecture design</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Iterative development with regular client feedback</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">Deployment, optimization, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose LandSlide Studios?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Experienced Leadership</h3>
                    <p className="text-gray-600">Led by industry veterans with proven track records in game development and technical infrastructure.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Full-Spectrum Expertise</h3>
                    <p className="text-gray-600">We handle both creative and technical aspects, providing comprehensive solutions under one roof.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Scalable Operations</h3>
                    <p className="text-gray-600">Our operational infrastructure scales with your needs, from indie projects to enterprise solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Quality Focused</h3>
                    <p className="text-gray-600">We maintain high quality standards throughout development with rigorous testing and optimization.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h3>
              <p className="text-gray-600 mb-6">
                Let's discuss how we can bring your gaming vision to life with our 
                comprehensive development expertise.
              </p>
              <div className="space-y-4">
                <Link 
                  href="/contact" 
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="/about/leadership" 
                  className="block w-full border border-blue-600 text-blue-600 text-center px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
                >
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}