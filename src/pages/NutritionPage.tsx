import { Globe } from 'lucide-react';
import Footer from '../components/Footer';

interface NutritionPageProps {
  onNavigate: (page: string) => void;
}

export default function NutritionPage({ onNavigate }: NutritionPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl w-full">
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="relative">
                <Globe className="w-12 h-12 text-teal-600" strokeWidth={1.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-6 bg-teal-600 rounded-full" style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800 leading-tight">AFRO-IMPACT NETWORK</span>
                <span className="text-xs text-gray-600 leading-tight">NETWORK</span>
              </div>
            </div>

            <div className="flex gap-3">
              <select className="px-4 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-teal-600">
                <option>English</option>
                <option>French</option>
                <option>Swahili</option>
              </select>
              <select className="px-4 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-teal-600">
                <option>English</option>
                <option>French</option>
                <option>Swahili</option>
              </select>
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-teal-900 mb-3">
              Community<br />Nutrition Advisor
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aligned with Afro-Impact Network:<br />
              Analysis and suggestions for local<br />
              recipes.
            </p>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-3">
              Enter your recipe or list of local<br />ingredients:
            </label>
            <textarea
              placeholder="Ex: Matapa (pumpkin leaves cooked in coconut milk with peanuts), Ugali with Sukuma Wiki (collard greens)."
              className="w-full h-40 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 text-sm resize-none placeholder-gray-400"
            />
          </div>

          <button className="w-full bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800 transition-colors shadow-md">
            Analyze and Suggest
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
