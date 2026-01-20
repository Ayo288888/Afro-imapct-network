
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Afro-Impact Network
        </h1>

        <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Connecting youth, technology, and community action for a more resilient Africa.
        </p>

        <button
          onClick={() => navigate('/auth')}
          className="mt-8 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg rounded-full transition-transform transform hover:scale-105 shadow-lg"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
}
