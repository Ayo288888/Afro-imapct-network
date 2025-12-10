import { Globe, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Globe className="w-10 h-10 text-teal-500" strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-5 bg-teal-500 rounded-full" style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight">AFRO-IMPACT NETWORK</span>
              <span className="text-xs text-gray-400 leading-tight">NETWORK</span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <p className="text-xs text-gray-300">Lorem.oforum@essend.com</p>
            <p className="text-xs text-gray-300">+1800 1920 300 200 Com</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
