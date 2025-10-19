import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton, XPList } from "../../components/WindowsXPPage";
import { ArrowRight, Gamepad2, Users, Play, Zap, Building, Briefcase, Star } from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      id: 'gaming-studios',
      title: 'Gaming Studios',
      description: 'Complete game development services for studios of all sizes, from concept to launch.',
      icon: '🎮',
      services: [
        'Full-cycle game development',
        'Technical consultation & architecture',
        'Art & design partnership',
        'Platform optimization & porting'
      ],
      href: '/industries/gaming-studios'
    },
    {
      id: 'indie-studios',
      title: 'Independent Developers',
      description: 'Specialized support for indie developers to bring creative visions to life.',
      icon: '🎨',
      services: [
        'Creative partnership & collaboration',
        'Technical development support',
        'Publishing guidance & strategy',
        'Community building assistance'
      ],
      href: '/industries/indie-studios'
    },
    {
      id: 'entertainment',
      title: 'Entertainment Industry',
      description: 'Interactive media solutions for entertainment companies and content creators.',
      icon: '🎬',
      services: [
        'Interactive content development',
        'Virtual & augmented reality experiences',
        'Branded gaming experiences',
        'Educational entertainment solutions'
      ],
      href: '/industries/entertainment'
    },
    {
      id: 'interactive-media',
      title: 'Interactive Media',
      description: 'Cutting-edge interactive experiences for digital platforms and emerging technologies.',
      icon: '💻',
      services: [
        'Web-based interactive experiences',
        'Mobile app gamification',
        'Digital installation development',
        'Emerging technology integration'
      ],
      href: '/industries/interactive-media'
    }
  ];

  return (
    <WindowsXPPage title="Industries - LandSlide Studios" windowIcon="🏢">
      <div className="space-y-6">
        <XPHeading level={1}>Industries We Serve</XPHeading>
        
        <p className="text-gray-700 text-lg mb-6">
          LandSlide Studios partners with organizations across multiple industries to create 
          exceptional interactive experiences. Our expertise spans game development, 
          interactive media, and cutting-edge technology solutions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {industries.map((industry, index) => (
            <XPCard key={index} title={industry.title} icon={industry.icon}>
              <div className="space-y-4">
                <p className="text-gray-700">{industry.description}</p>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Our Services:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {industry.services.map((service, serviceIndex) => (
                      <li key={serviceIndex}>• {service}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <Link href={industry.href}>
                    <XPButton variant="primary" className="w-full">
                      <ArrowRight className="h-4 w-4 mr-2 inline" />
                      Learn More
                    </XPButton>
                  </Link>
                </div>
              </div>
            </XPCard>
          ))}
        </div>

        {/* Why Choose LandSlide */}
        <XPCard title="Why Choose LandSlide Studios?" icon="⭐">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                Industry Expertise
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Deep understanding of game development pipelines</li>
                <li>• Cross-platform development experience</li>
                <li>• Proven track record across multiple industries</li>
                <li>• Technical excellence and innovative solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-500" />
                Partnership Approach
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Collaborative development process</li>
                <li>• Flexible engagement models</li>
                <li>• Transparent communication and reporting</li>
                <li>• Long-term strategic partnerships</li>
              </ul>
            </div>
          </div>
        </XPCard>

        {/* Call to Action */}
        <div className="text-center pt-6">
          <div className="space-y-4">
            <p className="text-gray-700 text-lg">
              Ready to transform your ideas into exceptional interactive experiences?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <XPButton variant="primary">
                  <Briefcase className="h-4 w-4 mr-2 inline" />
                  Start Your Project
                </XPButton>
              </Link>
              <Link href="/games">
                <XPButton variant="default">
                  <Gamepad2 className="h-4 w-4 mr-2 inline" />
                  View Our Portfolio
                </XPButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </WindowsXPPage>
  );
}