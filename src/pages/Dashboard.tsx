
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, BookOpen, HeartPulse, Landmark, Sprout, Leaf } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const SECTORS = [
  { id: 'education', name: 'Digital Education', icon: BookOpen, subscribers: '1,250' },
  { id: 'health', name: 'Health & Nutrition', icon: HeartPulse, subscribers: '980' },
  { id: 'governance', name: 'Civic Governance', icon: Landmark, subscribers: '850' },
  { id: 'agriculture', name: 'Agriculture', icon: Sprout, subscribers: '2,100' },
  { id: 'environment', name: 'Environmental Sustainability', icon: Leaf, subscribers: '1,500' },
];

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Top Navigation Bar (Mobile) */}
      <div className="bg-white p-4 shadow-sm flex items-center justify-between sticky top-0 z-30">
        <button onClick={() => setIsSidebarOpen(true)} className="p-2 hover:bg-gray-100 rounded-full">
          <Menu size={24} className="text-gray-700" />
        </button>
        <span className="font-bold text-gray-800">Afro-Impact</span>
        <div className="w-8"></div> {/* Spacer for alignment */}
      </div>

      {/* Hero / Cover Section */}
      <div className="relative h-64 md:h-80 bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
          alt="Community Hub"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Central Dashboard</h1>
          <p className="max-w-xl text-lg opacity-90">
            Select a sector below to join the movement and start making an impact in your community.
          </p>
        </div>
      </div>

      {/* Sectors Grid */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector) => (
            <div key={sector.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-4">
                <sector.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{sector.name}</h3>
              <p className="text-gray-500 mb-6 text-sm">{sector.subscribers} subscribers</p>

              <button
                onClick={() => navigate(`/sector/${sector.id}`)}
                className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors"
              >
                JOIN
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
