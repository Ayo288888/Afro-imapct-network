import { useState } from 'react';
import { Globe } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-xl shadow-lg p-12 max-w-4xl w-full">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative">
              <Globe className="w-16 h-16 text-teal-600" strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-8 bg-teal-600 rounded-full" style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-800 leading-tight">AFRO-IMPACT NETWORK</span>
              <span className="text-sm text-gray-600 leading-tight">NETWORK</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('login')}
            className={`px-12 py-2 font-medium transition-colors ${
              activeTab === 'login'
                ? 'text-gray-800'
                : 'text-gray-500'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`px-12 py-2 rounded border-2 font-medium transition-colors ${
              activeTab === 'register'
                ? 'border-teal-600 text-teal-600'
                : 'border-gray-300 text-gray-500'
            }`}
          >
            Register
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Hamaname Islmeem"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Username or Email Address
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-sm"
                />
              </div>

              <button className="w-full bg-teal-600 text-white py-2.5 rounded font-medium hover:bg-teal-700 transition-colors">
                Login
              </button>

              <div className="space-y-2">
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Remember Me
                </label>
                <label className="flex items-center text-sm text-gray-600">
                  <input type="checkbox" className="mr-2" />
                  Don't have im account? Register now.
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-sm"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-teal-600 text-sm"
                />
              </div>

              <label className="flex items-start text-sm text-gray-600">
                <input type="checkbox" className="mr-2 mt-0.5" />
                <span>I agree the Terms & Conditions</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
