import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import WindowsXPPage, { XPHeading, XPCard, XPButton } from "../../components/WindowsXPPage";

export const metadata: Metadata = {
  title: "Contact Us | LandSlide Studios - Game Development & Technical Solutions",
  description: "Get in touch with LandSlide Studios for game development projects, technical consulting, or career opportunities. Contact our team today.",
  keywords: "contact LandSlide Studios, game development consultation, Unity development, Unreal Engine projects, game design services",
};

export default function Contact() {
  return (
    <WindowsXPPage title="Contact Us - LandSlide Studios" windowIcon="📧">
      <div className="space-y-8">
        <div className="text-center mb-8">
          <XPHeading level={1}>Get In Touch</XPHeading>
          <p className="text-gray-700 text-lg mt-4">
            Ready to bring your gaming vision to life? Let's discuss your project
            and explore how our team can help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <XPCard title="Contact Form" icon="📝">
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-3 py-2 border-2 border-gray-400 bg-white text-gray-800 focus:border-blue-600 focus:outline-none"
                    style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-3 py-2 border-2 border-gray-400 bg-white text-gray-800 focus:border-blue-600 focus:outline-none"
                    style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border-2 border-gray-400 bg-white text-gray-800 focus:border-blue-600 focus:outline-none"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-3 py-2 border-2 border-gray-400 bg-white text-gray-800 focus:border-blue-600 focus:outline-none"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full px-3 py-2 border-2 border-gray-400 bg-white text-gray-800 focus:border-blue-600 focus:outline-none"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                >
                  <option value="">Select project type</option>
                  <option value="game-development">Full Game Development</option>
                  <option value="mvp-development">MVP Development</option>
                  <option value="game-design">Design Consultation</option>
                  <option value="technical-infrastructure">Technical Infrastructure</option>
                  <option value="business-operations">Business Operations</option>
                  <option value="consulting">General Consulting</option>
                  <option value="career">Career Opportunities</option>
                  <option value="other">Other Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-3 py-2 border-2 border-gray-400 bg-white text-gray-800 focus:border-blue-600 focus:outline-none"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                >
                  <option value="">Select budget range</option>
                  <option value="under-25k">Under $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="over-250k">Over $250,000</option>
                  <option value="discuss">Let's discuss</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-3 py-2 border-2 border-gray-400 bg-white text-gray-800 focus:border-blue-600 focus:outline-none"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-3 py-2 border-2 border-gray-400 bg-white text-gray-800 focus:border-blue-600 focus:outline-none resize-none"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.1)' }}
                  placeholder="Describe your project, goals, and any specific requirements..."
                ></textarea>
              </div>

              <XPButton variant="primary">
                <Send className="mr-2 h-4 w-4 inline" />
                Send Message
              </XPButton>

              <p className="text-sm text-gray-600">
                * Required fields. We'll respond within 24 hours during business hours.
              </p>
            </form>
          </XPCard>

          {/* Contact Information */}
          <div className="space-y-6">
            <XPCard title="Contact Information" icon="📞">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    Email Addresses
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">General Inquiries</p>
                      <a href="mailto:hello@landslidestudios.com" className="text-blue-600 hover:text-blue-800">
                        hello@landslidestudios.com
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Thomas Maglietto (CEO)</p>
                      <a href="mailto:thomas@landslidestudios.com" className="text-blue-600 hover:text-blue-800">
                        thomas@landslidestudios.com
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Jackson Alvarez (CTO)</p>
                      <a href="mailto:jackson@landslidestudios.com" className="text-blue-600 hover:text-blue-800">
                        jackson@landslidestudios.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </XPCard>

            <XPCard title="Business Hours" icon="⏰">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3">
                Emergency support available 24/7 for active clients.
              </p>
            </XPCard>

            <XPCard title="Our Location" icon="🌍">
              <p className="text-gray-700 mb-2">
                <strong>Distributed Team</strong>
              </p>
              <p className="text-gray-600 text-sm">
                We operate as a distributed team with contractors and partners
                worldwide. Our leadership is based in North America, with team
                members across multiple time zones for comprehensive project coverage.
              </p>
            </XPCard>

            <XPCard title="Response Times" icon="📅">
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span><strong>Initial Response:</strong> Within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span><strong>Project Quote:</strong> Within 3-5 business days</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span><strong>Detailed Proposal:</strong> Within 1-2 weeks</span>
                </div>
              </div>
            </XPCard>
          </div>
        </div>

        <XPCard title="Frequently Asked Questions" icon="❓">
          <div className="space-y-6">
            <div className="border-b border-gray-300 pb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                What types of games do you develop?
              </h4>
              <p className="text-gray-700 text-sm">
                We develop games across all platforms, including mobile (iOS/Android),
                PC (Windows/Mac), and console (PlayStation, Xbox, Nintendo Switch). Our expertise
                spans 2D and 3D games, from indie projects to enterprise-level applications.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                How long does a typical project take?
              </h4>
              <p className="text-gray-700 text-sm">
                Project timelines vary greatly depending on scope and complexity. Simple mobile
                games may take 3-6 months, while complex PC/console games can take 12-24 months
                or more. We provide detailed timeline estimates during the planning phase.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-4">
              <h4 className="font-semibold text-gray-800 mb-2">
                Do you work with existing teams?
              </h4>
              <p className="text-gray-700 text-sm">
                Absolutely! We can integrate with your existing team as consultants, provide
                specialized expertise, or take on specific aspects of development while you
                handle others. Our flexible contractor model makes this seamless.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                What is your pricing model?
              </h4>
              <p className="text-gray-700 text-sm">
                We offer both project-based contracts and hourly contractor rates depending
                on the engagement type. We provide detailed quotes after understanding your
                specific requirements and can work within various budget ranges.
              </p>
            </div>
          </div>
        </XPCard>
      </div>
    </WindowsXPPage>
  );
}