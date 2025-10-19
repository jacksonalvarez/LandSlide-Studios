import type { Metadata } from "next";
import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton } from "../../components/WindowsXPPage";
import { ArrowRight, Target, Lightbulb, Rocket, Users, Heart, Award, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | LandSlide Studios - Game Development & Creative Solutions",
  description: "Discover the story of LandSlide Studios, our mission to create innovative game experiences, and the team behind our creative vision.",
  keywords: "LandSlide Studios game development, Thomas Maglietto, Jackson Alvarez, indie game studio, creative solutions, game design",
};

export default function About() {
  return (
    <WindowsXPPage title="About Us - LandSlide Studios" windowIcon="ℹ️">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <XPHeading level={1}>Our Story</XPHeading>
          <p className="text-gray-700 text-lg mt-4">
            Born from a shared passion for innovative game development and interactive experiences, 
            LandSlide Studios exists to create memorable games that engage players 
            and push creative boundaries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <XPCard title="Our Mission" icon="🎯">
            <div className="text-center space-y-3">
              <Target className="h-12 w-12 text-blue-600 mx-auto" />
              <p className="text-gray-700">
                To craft engaging experiences that push the boundaries of interactive entertainment, 
                creating memorable games through innovative technology and 
                compelling storytelling.
              </p>
            </div>
          </XPCard>
          
          <XPCard title="Our Vision" icon="💡">
            <div className="text-center space-y-3">
              <Lightbulb className="h-12 w-12 text-green-600 mx-auto" />
              <p className="text-gray-700">
                To become a recognized creative game studio, known for crafting experiences 
                that set new standards for how players connect with interactive media.
              </p>
            </div>
          </XPCard>
          
          <XPCard title="Our Approach" icon="🚀">
            <div className="text-center space-y-3">
              <Rocket className="h-12 w-12 text-purple-600 mx-auto" />
              <p className="text-gray-700">
                We embrace creativity and innovation, combining player research with technical 
                excellence to create experiences that engage players and leave lasting impressions.
              </p>
            </div>
          </XPCard>
        </div>

        <XPCard title="How Our Journey Began" icon="📖">
          <div className="space-y-4 text-gray-700">
            <p className="text-lg leading-relaxed">
              LandSlide Studios emerged from a shared passion for the untapped potential 
              of interactive gaming. We saw an industry that could benefit from fresh, 
              innovative interactive experiences, and knew there was something exciting 
              waiting to be created.
            </p>
            
            <p className="leading-relaxed">
              Our founders, Thomas Maglietto and Jackson Alvarez, discovered their complementary 
              strengths during collaborative development sessions, crafting prototypes that explored 
              new approaches to game design. Thomas brings the creative vision and 
              technical expertise to architect experiences, while Jackson provides the infrastructure 
              and operational expertise to bring ambitious projects to life.
            </p>
            
            <p className="leading-relaxed">
              What sets us apart is our methodical approach to game development. We don't just create 
              games; we study player engagement—its psychological aspects, its cultural 
              variations, its impact on player experience. Every project becomes 
              an opportunity for innovation, refined through research and tested through experience.
            </p>
            
            <p className="leading-relaxed">
              We work with creators who understand that great games aren't just about graphics—
              it's about what you make players experience. If you have a vision that excites you, 
              we have the expertise to bring it to reality.
            </p>
          </div>
        </XPCard>

        <XPCard title="Our Core Principles" icon="⭐">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gradient-to-b from-blue-50 to-blue-100 border border-gray-300 rounded"
                 style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)'}}>
              <Heart className="h-8 w-8 text-red-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Player Experience</h4>
              <p className="text-gray-600 text-sm">
                We craft experiences that engage players emotionally, creating 
                memorable moments that resonate long after playing.
              </p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-b from-green-50 to-green-100 border border-gray-300 rounded"
                 style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)'}}>
              <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Technical Excellence</h4>
              <p className="text-gray-600 text-sm">
                We leverage modern technology and best practices to 
                create polished, professional gaming experiences.
              </p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-b from-purple-50 to-purple-100 border border-gray-300 rounded"
                 style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)'}}>
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Creative Innovation</h4>
              <p className="text-gray-600 text-sm">
                We embrace bold concepts, exploring new mechanics 
                and approaches that push creative boundaries.
              </p>
            </div>
            
            <div className="text-center p-4 bg-gradient-to-b from-orange-50 to-orange-100 border border-gray-300 rounded"
                 style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)'}}>
              <Target className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Meaningful Impact</h4>
              <p className="text-gray-600 text-sm">
                We create games that make a difference, influencing how 
                players connect with interactive entertainment.
              </p>
            </div>
          </div>
        </XPCard>

        <XPCard title="Meet Our Team" icon="👥">
          <div className="text-center space-y-4">
            <Users className="h-12 w-12 text-blue-600 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800">
              Meet the Leadership Team
            </h3>
            <p className="text-gray-700 mb-6">
              Discover the passionate minds behind LandSlide Studios—the visionaries 
              who transform creative ideas into interactive reality.
            </p>
            <Link href="/about/leadership">
              <XPButton variant="primary">
                <Users className="mr-2 h-4 w-4 inline" />
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4 inline" />
              </XPButton>
            </Link>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}