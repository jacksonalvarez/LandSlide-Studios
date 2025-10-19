

import Link from "next/link";
import WindowsXPPage, { XPHeading, XPCard, XPButton, XPList } from "../../components/WindowsXPPage";
import { Calendar, Users, Gamepad2, Star, Clock } from "lucide-react";

export default function GamesPage() {
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
      href: '/games/one-of-us',
      icon: '👥'
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
      href: '/games/the-lighthouse',
      icon: '🗼'
    },
  ];

  const gameLibraryItems = games.map(game => ({
    title: game.title,
    description: `${game.subtitle} - ${game.status}`,
    icon: game.icon
  }));

  return (
    <WindowsXPPage title="LandSlide Studios - Game Portfolio" windowIcon="🎮">
      <div className="space-y-6">
        <XPHeading level={1}>Game Development Portfolio</XPHeading>
        
        <p className="text-gray-700 text-lg mb-6">
          Welcome to our game development showcase. Here you'll find our current projects, 
          upcoming releases, and the innovative gaming experiences we're crafting.
        </p>

        {/* Game Library Overview */}
        <XPCard title="Game Library" icon="📚">
          <XPList items={gameLibraryItems} />
        </XPCard>

        {/* Featured Games */}
        <XPHeading level={2}>Featured Projects</XPHeading>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {games.map((game) => (
            <XPCard key={game.id} title={game.title} icon={game.icon}>
              <div className="space-y-4">
                <div className="text-sm text-blue-600 font-semibold">{game.subtitle}</div>
                
                <p className="text-gray-700">{game.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span><strong>Status:</strong> {game.status}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-green-500" />
                    <span><strong>Release:</strong> {game.releaseDate}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-500" />
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {game.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-300">
                  <Link href={game.href}>
                    <XPButton variant="primary" className="w-full">
                      View Project Details
                    </XPButton>
                  </Link>
                </div>
              </div>
            </XPCard>
          ))}
        </div>

        {/* Development Process */}
        <XPCard title="Our Development Approach" icon="⚙️">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="font-semibold text-gray-800 mb-2">Concept & Design</h4>
              <p className="text-sm text-gray-600">
                We start with innovative concepts and create detailed design documents.
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🔧</div>
              <h4 className="font-semibold text-gray-800 mb-2">Development & Testing</h4>
              <p className="text-sm text-gray-600">
                Iterative development with continuous testing and player feedback.
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="font-semibold text-gray-800 mb-2">Launch & Support</h4>
              <p className="text-sm text-gray-600">
                Professional launch with ongoing updates and community support.
              </p>
            </div>
          </div>
        </XPCard>

        {/* Call to Action */}
        <div className="text-center pt-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <XPButton variant="primary">
                <Users className="h-4 w-4 mr-2 inline" />
                Partner With Us
              </XPButton>
            </Link>
            <Link href="/blog">
              <XPButton variant="default">
                <Gamepad2 className="h-4 w-4 mr-2 inline" />
                Development Blog
              </XPButton>
            </Link>
          </div>
        </div>
      </div>
    </WindowsXPPage>
  );
}