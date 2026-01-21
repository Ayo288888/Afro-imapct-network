
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, MessageCircle, BarChart3, Users, TrendingUp, LucideIcon, Bot } from 'lucide-react';
import NutritionChatbot from '../components/NutritionChatbot';

const SECTOR_DATA: Record<string, { title: string, description: string[], googleForm: string }> = {
  education: {
    title: 'Digital Education',
    description: [
      'Empowering the next generation with essential digital skills. Our program focuses on coding, digital literacy, and providing access to modern educational resources.',
      'We partner with local schools and tech companies to create a comprehensive curriculum that bridges the digital divide in underserved communities.',
      'Join us to mentor students, donate equipment, or facilitate workshops that spark curiosity and innovation.'
    ],
    googleForm: 'https://forms.google.com/placeholder-education'
  },
  health: {
    title: 'Health & Nutrition',
    description: [
      'Improving community health through education, access to nutritious food, and preventive care. We focus on maternal health, child nutrition, and disease prevention.',
      'Our network connects healthcare professionals with communities to provide screenings, vaccinations, and health workshops.',
      'Subscribe to get access to our Nutrition Chatbot and receive personalized health tips directly on your phone.'
    ],
    googleForm: 'https://forms.google.com/placeholder-health'
  },
  governance: {
    title: 'Civic Governance',
    description: [
      'Fostering transparency, accountability, and citizen participation in local governance. We provide tools and platforms for citizens to engage with their leaders.',
      'Our initiatives include town halls, policy tracking, and civic education campaigns to strengthen democratic institutions.',
      'Be part of the change by joining our monitoring teams and advocacy groups.'
    ],
    googleForm: 'https://forms.google.com/placeholder-governance'
  },
  agriculture: {
    title: 'Agriculture',
    description: [
      'Revolutionizing farming with sustainable practices and modern technology. We support smallholder farmers with training, inputs, and market access.',
      'Our goal is to increase food security and rural incomes through climate-smart agriculture and value addition.',
      'Join our network of farmers, agronomists, and innovators to transform the agricultural landscape.'
    ],
    googleForm: 'https://forms.google.com/placeholder-agriculture'
  },
  environment: {
    title: 'Environmental Sustainability',
    description: [
      'Protecting our planet through reforestation, waste management, and renewable energy projects. We mobilize communities to take action against climate change.',
      'From planting trees to cleaning up rivers, our volunteers are on the frontlines of environmental conservation.',
      'Subscribe to participate in our green initiatives and learn how to lead a more sustainable lifestyle.'
    ],
    googleForm: 'https://forms.google.com/placeholder-environment'
  }
};

export default function SectorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const data = id ? SECTOR_DATA[id] : null;

  useEffect(() => {
    // Check local storage for subscription status
    if (id) {
      const stored = localStorage.getItem(`subscribed_${id}`);
      if (stored === 'true') {
        setIsSubscribed(true);
      }
    }
  }, [id]);

  if (!data) {
    return <div className="p-10 text-center">Sector not found</div>;
  }

  const handleSubscribe = () => {
    // Open Google Form in new tab
    window.open(data.googleForm, '_blank');

    // Simulate return after a delay or immediate update for demo
    // In a real app, this might wait for a callback or user confirmation
    setTimeout(() => {
        setIsSubscribed(true);
        if (id) localStorage.setItem(`subscribed_${id}`, 'true');
    }, 2000); // Simulate time taken to fill form
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-900 text-white p-6 sticky top-0 z-30 flex items-center gap-4">
        <button onClick={() => navigate('/dashboard')} className="hover:bg-white/20 p-2 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold truncate">{data.title}</h1>
      </div>

      <div className="max-w-3xl mx-auto p-6 space-y-8">

        {/* Description */}
        <div className="prose prose-lg text-gray-700">
          {data.description.map((para, idx) => (
            <p key={idx} className="mb-4 leading-relaxed">{para}</p>
          ))}
        </div>

        {/* Action Section */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm">
          {!isSubscribed ? (
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Ready to make an impact?</h3>
              <button
                onClick={handleSubscribe}
                className="w-full sm:w-auto px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              >
                SUBSCRIBE NOW <ExternalLink size={18} />
              </button>
              <p className="text-sm text-gray-500 mt-3">Opens registration form in a new tab</p>
            </div>
          ) : (
            <div className="text-center space-y-4 animate-fade-in">
              <div className="bg-green-100 text-green-800 p-4 rounded-lg inline-block">
                <p className="font-bold">Subscription received!</p>
                <p className="text-sm">Please wait for our team to contact you.</p>
              </div>

              {id === 'health' && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                   <h4 className="mb-2 text-lg font-bold text-gray-800">Choose Your Nutrition Assistant Platform:</h4>
                   <p className="mb-6 text-sm text-gray-600">You can access our AI-powered nutrition advisor directly on this site or via WhatsApp.</p>

                   <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button
                       onClick={() => setShowChatbot(true)}
                       className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                     >
                       <Bot size={20} />
                       OPEN IN-SITE ASSISTANT
                     </button>

                     <button
                       onClick={() => window.open('https://wa.me/254700000000?text=Hello%2C%20I%20joined%20the%20Afro-Impact%20Health%20Sector%20and%20need%20assistance.', '_blank')}
                       className="w-full sm:w-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
                     >
                       <MessageCircle size={20} />
                       CHAT ON WHATSAPP
                     </button>
                   </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Live Dashboard / Stats */}
        <div className="pt-8 border-t">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <BarChart3 className="text-yellow-600" />
            Live Impact Dashboard
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard label="Total Subscribers" value="1,245" icon={Users} color="bg-blue-50 text-blue-600" />
            <StatCard label="Active Projects" value="12" icon={TrendingUp} color="bg-purple-50 text-purple-600" />
            <StatCard label="Impact Score" value="98%" icon={BarChart3} color="bg-orange-50 text-orange-600" />
          </div>

          <div className="mt-6 bg-gray-50 p-4 rounded-xl h-48 flex items-end justify-between gap-2">
             {/* Mock Bar Chart */}
             {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
               <div key={i} className="w-full bg-gray-200 rounded-t-md relative group">
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-yellow-500 rounded-t-md transition-all duration-1000"
                    style={{ height: `${h}%` }}
                  ></div>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                    {h * 10}
                  </div>
               </div>
             ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Activity over the last 7 days</p>
        </div>

      </div>

      {showChatbot && <NutritionChatbot onClose={() => setShowChatbot(false)} />}
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  color: string;
}

function StatCard({ label, value, icon: Icon, color }: StatCardProps) {
  return (
    <div className="bg-white border border-gray-100 p-4 rounded-xl shadow-sm flex items-center gap-4">
      <div className={`p-3 rounded-lg ${color}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-xs text-gray-500 uppercase font-medium">{label}</p>
      </div>
    </div>
  );
}
