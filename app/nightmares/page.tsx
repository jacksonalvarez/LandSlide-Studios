import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Skull, Zap, Calendar, Users } from "lucide-react";

export default function NightmaresPage() {
  const games = [
    {
      id: 'one-of-us',
      title: 'One of Us',
      subtitle: 'Survival Horror',
      description: 'A psychological horror game where paranoia and trust collide. In a world where anyone could be the threat, the real enemy might be closer than you think.',
      status: 'In Development',
      releaseDate: 'Q2 2026',
      features: [
        'Multiplayer deception mechanics',
        'Atmospheric psychological horror',
        'Dynamic trust system',
        'Immersive voice chat integration',
      ],
      screenshot: '/games/one-of-us-screenshot.jpg',
      href: '/nightmares/one-of-us'
    },
    {
      id: 'the-lighthouse',
      title: 'The Lighthouse',
      subtitle: 'Cosmic Horror Adventure',
      description: 'Isolated on a remote lighthouse, uncover the mysteries that lurk beneath the waves. Some lights guide ships to safety... others lure them to their doom.',
      status: 'Pre-Production',
      releaseDate: 'Q4 2026',
      features: [
        'Lovecraftian storytelling',
        'Environmental puzzle solving',
        'Sanity mechanics',
        'Multiple endings based on choices',
      ],
      screenshot: '/games/the-lighthouse-screenshot.jpg',
      href: '/nightmares/the-lighthouse'
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-red-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-red-100 mb-6">
              Our <span className="text-red-500">Nightmares</span>
            </h1>
            <p className="text-xl text-red-200 max-w-3xl mx-auto mb-8">
              Step into the darkness we've crafted. Each game is a descent into terror, 
              designed to test your courage and challenge your sanity.
            </p>
          </div>
        </div>
        
        {/* Floating horror elements */}
        <div className="absolute top-10 left-10 text-red-500/20 animate-pulse">
          <Skull className="h-16 w-16" />
        </div>
        <div className="absolute bottom-10 right-10 text-red-500/20 animate-bounce">
          <Eye className="h-12 w-12" />
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
            {games.map((game, index) => (
              <div key={game.id} className="group">
                <div className="bg-gradient-to-br from-red-950/50 to-black border border-red-900/50 rounded-lg overflow-hidden shadow-2xl shadow-red-900/20 hover:shadow-red-500/30 transition-all duration-300">
                  {/* Game Screenshot */}
                  <div className="relative h-64 bg-gradient-to-br from-red-900/30 to-black overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Skull className="h-16 w-16 text-red-500 mx-auto mb-4 animate-pulse" />
                        <p className="text-red-300 text-sm">Screenshot Coming Soon</p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-600 text-red-100 px-3 py-1 rounded-full text-sm font-medium">
                        {game.status}
                      </span>
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-red-100 mb-2">{game.title}</h3>
                      <p className="text-red-400 font-medium mb-3">{game.subtitle}</p>
                      <p className="text-red-200 leading-relaxed">{game.description}</p>
                    </div>

                    {/* Release Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-red-300">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{game.releaseDate}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-red-100 font-semibold mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {game.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-red-300 text-sm">
                            <Zap className="h-3 w-3 text-red-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <Link 
                      href={game.href}
                      className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium group"
                    >
                      <span>Explore the Terror</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-gradient-to-r from-red-950/30 to-black border-t border-red-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-100 mb-6">
            More Nightmares Await
          </h2>
          <p className="text-red-200 text-lg mb-8">
            Our dark imagination never rests. Stay tuned for announcements of our upcoming 
            horror experiences that will push the boundaries of fear.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg"
          >
            <span>Join Our Dark Newsletter</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}