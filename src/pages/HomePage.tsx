import { Globe } from 'lucide-react';
import Footer from '../components/Footer';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Globe className="w-20 h-20 text-teal-600" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-10 bg-teal-600 rounded-full" style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}></div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              WELCOME TO
            </h1>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              AFRO-IMPACT NETWORK
            </h2>
            <p className="text-gray-600 text-lg mb-12">
              Connecting for a Sustainable Future
            </p>

            <div className="mb-12 flex justify-center">
              <div className="relative w-64 h-64">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="80" fill="#e0f2f1" />
                  <ellipse cx="100" cy="100" rx="35" ry="45" fill="#14b8a6" />
                  <path
                    d="M 60 60 Q 50 80 60 100 L 80 90 Z"
                    fill="#8b5e3c"
                  />
                  <path
                    d="M 140 60 Q 150 80 140 100 L 120 90 Z"
                    fill="#c89968"
                  />
                  <path
                    d="M 100 40 Q 80 50 70 70 L 85 75 Z"
                    fill="#d4a574"
                  />
                  <path
                    d="M 100 160 Q 120 150 130 130 L 115 125 Z"
                    fill="#6d4c41"
                  />
                  <circle cx="45" cy="75" r="8" fill="#81c784" opacity="0.7" />
                  <circle cx="155" cy="75" r="8" fill="#81c784" opacity="0.7" />
                  <circle cx="75" cy="45" r="8" fill="#81c784" opacity="0.7" />
                  <circle cx="125" cy="45" r="8" fill="#81c784" opacity="0.7" />
                  <circle cx="75" cy="155" r="8" fill="#81c784" opacity="0.7" />
                  <circle cx="125" cy="155" r="8" fill="#81c784" opacity="0.7" />
                  <circle cx="45" cy="125" r="8" fill="#81c784" opacity="0.7" />
                  <circle cx="155" cy="125" r="8" fill="#81c784" opacity="0.7" />
                </svg>
              </div>
            </div>

            <button
              onClick={() => onNavigate('main')}
              className="bg-teal-600 text-white px-10 py-3 rounded-full text-lg font-medium hover:bg-teal-700 transition-colors mb-4"
            >
              GET STARTED
            </button>

            <p className="text-gray-600 text-sm">
              Already have a account?{' '}
              <button
                onClick={() => onNavigate('login')}
                className="text-teal-600 hover:underline font-medium"
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
