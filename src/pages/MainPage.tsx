import Header from '../components/Header';
import Footer from '../components/Footer';
import { GraduationCap, Sprout, Building2 } from 'lucide-react';

interface MainPageProps {
  onNavigate: (page: string) => void;
}

export default function MainPage({ onNavigate }: MainPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-gray-100">
      <Header onNavigate={onNavigate} currentPage="main" />

      <main className="flex-1">
        <div className="relative h-[500px] bg-gradient-to-br from-blue-100 to-blue-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          </div>

          <div className="relative z-10 h-full flex flex-col items-start justify-center max-w-7xl mx-auto px-6">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
              CONNECT. EMPOWER. GROW
            </h1>
            <p className="text-2xl text-white mb-8 drop-shadow-md">
              Innovative Solutions for a Sustainable Africa
            </p>
            <button className="bg-teal-600 text-white px-8 py-3 rounded font-medium hover:bg-teal-700 transition-colors shadow-lg">
              LEARN MORE
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            OUR SOLUTIONS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/1034662/pexels-photo-1034662.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Coastal monitoring"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Utilizing Coastal Monitoring
                </h3>
                <p className="text-gray-600 text-sm">
                  For environmental data collection and analysis
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
              <div className="bg-white rounded-full p-6 shadow-lg mb-4">
                <GraduationCap className="w-16 h-16 text-teal-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Digital Education
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Fostering larchlike development for all
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
              <div className="bg-white rounded-full p-6 shadow-lg mb-4">
                <Sprout className="w-16 h-16 text-teal-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Agritech & Innovation
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Tansforming agriculture technology for food security
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
              <div className="bg-white rounded-full p-6 shadow-lg mb-4">
                <Building2 className="w-16 h-16 text-teal-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                Civic Governance
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Ethancing operations and governmentity sustainability
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Community Nutrition Advisor
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get AI-powered analysis and suggestions for local recipes aligned with sustainable nutrition practices
            </p>
            <button
              onClick={() => onNavigate('nutrition')}
              className="bg-white text-teal-700 px-10 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Try Nutrition Advisor
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
