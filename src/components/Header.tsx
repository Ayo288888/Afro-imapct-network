import { Globe } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const navItems = [
    { name: 'HOME', path: 'home' },
    { name: 'ABOUT US', path: 'about' },
    { name: 'SOLUTIONS', path: 'solutions' },
    { name: 'TEAM', path: 'team' },
    { name: 'NEWS', path: 'news' },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative">
              <Globe className="w-12 h-12 text-teal-600" strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-6 bg-teal-600 rounded-full" style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-800 leading-tight">AFRO-IMPACT NETWORK</span>
              <span className="text-xs text-gray-600 leading-tight">NETWORK</span>
            </div>
          </div>

          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-sm font-medium transition-colors ${
                  (currentPage === item.path || (item.path === 'home' && currentPage === 'main'))
                    ? 'text-gray-900 border-b-2 border-teal-600 pb-1'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="bg-teal-600 text-white px-6 py-2 rounded text-sm font-medium hover:bg-teal-700 transition-colors"
            >
              CONTACT US
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
