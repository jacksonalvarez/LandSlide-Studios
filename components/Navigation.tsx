'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X, Gamepad2 } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setDropdownOpen(null);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const games = [
    { name: 'One of Us', href: '/games/one-of-us' },
    { name: 'The Lighthouse', href: '/games/the-lighthouse' },
    { name: 'All Games', href: '/games' },
  ];

  const industries = [
    { name: 'Gaming Studios', href: '/industries/gaming-studios' },
    { name: 'Indie Studios', href: '/industries/indie-studios' },
    { name: 'Entertainment', href: '/industries/entertainment' },
    { name: 'Interactive Media', href: '/industries/interactive-media' },
    { name: 'All Industries', href: '/industries' },
  ];

  const blog = [
    { name: 'Latest Posts', href: '/blog' },
    { name: 'Game Design', href: '/blog/category/game-design' },
    { name: 'Game Development', href: '/blog/category/game-development' },
    { name: 'Industry Insights', href: '/blog/category/industry-insights' },
    { name: 'Behind The Scenes', href: '/blog/category/behind-the-scenes' },
  ];

  const company = [
    { name: 'Our Story', href: '/about' },
    { name: 'Leadership Team', href: '/about/leadership' },
    { name: 'Our Process', href: '/about/process' },
  ];

  return (
    <nav ref={navRef} className="bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg sticky top-0 z-50 border-b-2 border-blue-800"
      style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.3)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 bg-gradient-to-b from-green-400 to-green-600 px-3 py-1 border border-green-700 shadow-md hover:from-green-500 hover:to-green-700 transition-all duration-200"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.3)' }}>
              <Gamepad2 className="h-6 w-6 text-white" />
              <span className="font-bold text-sm text-white">LandSlide Studios</span>
            </Link>

            {/* Contact Us - Special Button next to logo */}
            <Link href="/contact" className="bg-gradient-to-b from-orange-400 to-orange-600 text-white hover:from-orange-500 hover:to-orange-700 px-3 py-1 border border-orange-700 font-bold text-sm transition-all duration-200 shadow-sm"
              style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.3)' }}>
              Contact Us
            </Link>
          </div>

          {/* Desktop Navigation - XP Taskbar Style */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className="bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 px-3 py-1 border border-gray-400 font-bold text-sm transition-all duration-200 shadow-sm"
              style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
              Home
            </Link>

            {/* Games Dropdown - XP Style */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('games')}
                className="flex items-center bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 px-3 py-1 border border-gray-400 font-bold text-sm transition-all duration-200 shadow-sm"
                style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}
              >
                Games
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${dropdownOpen === 'games' ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === 'games' && (
                <div className="absolute left-0 mt-1 w-48 bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 shadow-xl"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.3)' }}>
                  <div className="py-1">
                    {games.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeAllDropdowns}
                        className="block px-3 py-1 text-sm text-gray-800 hover:bg-blue-200 hover:text-blue-800 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown - XP Style */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('industries')}
                className="flex items-center bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 px-3 py-1 border border-gray-400 font-bold text-sm transition-all duration-200 shadow-sm"
                style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}
              >
                Industries
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${dropdownOpen === 'industries' ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === 'industries' && (
                <div className="absolute left-0 mt-1 w-48 bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 shadow-xl"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.3)' }}>
                  <div className="py-1">
                    {industries.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeAllDropdowns}
                        className="block px-3 py-1 text-sm text-gray-800 hover:bg-blue-200 hover:text-blue-800 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Dropdown - XP Style */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('blog')}
                className="flex items-center bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 px-3 py-1 border border-gray-400 font-bold text-sm transition-all duration-200 shadow-sm"
                style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}
              >
                Blog
                <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-200 ${dropdownOpen === 'blog' ? 'rotate-180' : ''}`} />
              </button>
              {dropdownOpen === 'blog' && (
                <div className="absolute left-0 mt-1 w-48 bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 shadow-xl"
                  style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 3px 3px 6px rgba(0,0,0,0.3)' }}>
                  <div className="py-1">
                    {blog.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeAllDropdowns}
                        className="block px-3 py-1 text-sm text-gray-800 hover:bg-blue-200 hover:text-blue-800 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>



            <Link href="/careers" className="bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 px-3 py-1 border border-gray-400 font-bold text-sm transition-all duration-200 shadow-sm"
              style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
              Careers
            </Link>

            {/* Login - Special Button */}
            <Link href="/login" className="bg-gradient-to-b from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700 px-3 py-1 border border-purple-700 font-bold text-sm transition-all duration-200 shadow-sm"
              style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.3)' }}>
              Login
            </Link>
          </div>

          {/* Mobile menu button - XP Style */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 hover:from-gray-300 hover:to-gray-400 p-2 border border-gray-400 transition-all duration-200"
              style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - XP Start Menu Style */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-gray-100 to-gray-200 border-t-2 border-gray-400"
              style={{ boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 0 2px 4px rgba(0,0,0,0.2)' }}>
              <Link href="/" className="block px-3 py-2 bg-gradient-to-b from-blue-200 to-blue-300 text-blue-800 hover:from-blue-300 hover:to-blue-400 font-bold transition-all duration-200 border border-blue-400 mb-1"
                style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
                🏠 Home
              </Link>

              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-800 font-bold bg-gradient-to-b from-green-200 to-green-300 border border-green-400"
                  style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
                  🎮 Games
                </div>
                {games.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors border-l-2 border-gray-300"
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-800 font-bold bg-gradient-to-b from-orange-200 to-orange-300 border border-orange-400"
                  style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
                  🏢 Industries
                </div>
                {industries.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors border-l-2 border-gray-300"
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>



              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-800 font-bold bg-gradient-to-b from-purple-200 to-purple-300 border border-purple-400"
                  style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
                  📝 Blog
                </div>
                {blog.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-6 py-1 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition-colors border-l-2 border-gray-300"
                  >
                    • {item.name}
                  </Link>
                ))}
              </div>

              <Link href="/careers" className="block px-3 py-2 bg-gradient-to-b from-cyan-200 to-cyan-300 text-cyan-800 hover:from-cyan-300 hover:to-cyan-400 font-bold transition-all duration-200 border border-cyan-400 mb-1"
                style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)' }}>
                💼 Careers
              </Link>

              <Link href="/login" className="block px-3 py-2 bg-gradient-to-b from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700 font-bold transition-all duration-200 border border-purple-700"
                style={{ boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.3)' }}>
                🔐 Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}