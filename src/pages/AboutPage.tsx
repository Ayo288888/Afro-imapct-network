
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white p-6 sticky top-0 z-30 flex items-center gap-4">
        <button onClick={() => navigate('/dashboard')} className="hover:bg-white/20 p-2 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">About Us</h1>
      </div>

      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To create a resilient, interconnected Africa where youth are the drivers of sustainable development through technology and community action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Afro-Impact Network bridges the gap between potential and opportunity. We provide a platform for young people to engage in five key sectors: Education, Health, Governance, Agriculture, and Environment. By leveraging digital tools, we amplify local efforts to achieve continental impact.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">The Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TeamMember name="Sarah Johnson" role="Founder & CEO" />
            <TeamMember name="David Ochieng" role="CTO" />
            <TeamMember name="Amina Yusuf" role="Head of Operations" />
            <TeamMember name="Kwame Mensah" role="Community Lead" />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Partners</h2>
          <div className="flex flex-wrap gap-4">
            {['TechAfrica', 'GreenEarth NGO', 'Future Farmers', 'HealthPlus', 'CivicWatch'].map(partner => (
              <span key={partner} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                {partner}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function TeamMember({ name, role }: { name: string, role: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div>
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
