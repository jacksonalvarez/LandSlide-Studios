'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Users, 
  Gamepad2, 
  Settings, 
  BarChart3, 
  LogOut,
  Shield,
  Building,
  Code
} from 'lucide-react';

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/profile');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        router.push('/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to login
  }

  const dashboardStats = [
    {
      title: 'Active Projects',
      value: '8',
      icon: Gamepad2,
      color: 'blue'
    },
    {
      title: 'Team Members', 
      value: '15',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Contractors',
      value: '12',
      icon: Building,
      color: 'purple'
    },
    {
      title: 'Systems Online',
      value: '99.9%',
      icon: Code,
      color: 'orange'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-500',
      green: 'bg-green-500', 
      purple: 'bg-purple-500',
      orange: 'bg-orange-500'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-gray-900">LandSlide Admin</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome back, <span className="font-semibold">{user.name}</span>
              </div>
              <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {user.role}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600">
            Welcome to the LandSlide Studios admin panel. Monitor projects, team performance, and system status.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Gamepad2 className="h-5 w-5 mr-2 text-blue-600" />
              Project Management
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">View Active Projects</div>
                <div className="text-sm text-gray-500">Monitor current game development projects</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Team Assignments</div>
                <div className="text-sm text-gray-500">Manage contractor assignments and schedules</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Project Analytics</div>
                <div className="text-sm text-gray-500">View performance metrics and progress reports</div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Settings className="h-5 w-5 mr-2 text-purple-600" />
              System Administration
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Infrastructure Status</div>
                <div className="text-sm text-gray-500">Monitor technical systems and API endpoints</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">User Management</div>
                <div className="text-sm text-gray-500">Manage team access and permissions</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Business Operations</div>
                <div className="text-sm text-gray-500">Invoicing, scheduling, and administrative tools</div>
              </button>
            </div>
          </div>
        </div>

        {/* Role-specific Content */}
        {user.role === 'CEO' && (
          <div className="mt-8 bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-blue-900 mb-4">CEO Dashboard</h2>
            <p className="text-blue-800 mb-4">
              As CEO, you have access to all creative direction tools, product lifecycle management, 
              and team building resources.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Creative Projects
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Team Performance
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Product Presentations
              </button>
            </div>
          </div>
        )}

        {user.role === 'CTO' && (
          <div className="mt-8 bg-purple-50 rounded-lg p-6 border border-purple-200">
            <h2 className="text-xl font-bold text-purple-900 mb-4">CTO Dashboard</h2>
            <p className="text-purple-800 mb-4">
              As CTO, you have access to all technical infrastructure, business operations, 
              and system administration tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Infrastructure Monitor
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                Business Operations
              </button>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                System Analytics
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}