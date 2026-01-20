
import { X, User, Bell, Info, Mail, LogOut, LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const { signOut, user } = useAuth();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="font-bold text-xl text-gray-800">Menu</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 flex flex-col h-full">
            {/* User Info (Optional) */}
            <div className="mb-8 flex items-center gap-3 text-gray-600">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User size={20} />
                </div>
                <div className="text-sm overflow-hidden">
                    <p className="font-semibold truncate">{user?.email}</p>
                    <p className="text-xs">Member</p>
                </div>
            </div>

            <nav className="space-y-4 flex-1">
                <SidebarItem icon={Info} label="About Us" onClick={() => handleNavigation('/about')} />
                <SidebarItem icon={Bell} label="Notifications" onClick={() => handleNavigation('/notifications')} />
                <SidebarItem icon={Mail} label="Contact" onClick={() => handleNavigation('/contact')} />
            </nav>

            <div className="border-t pt-6 pb-20">
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
      </div>
    </>
  );
}

function SidebarItem({ icon: Icon, label, onClick }: { icon: LucideIcon, label: string, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
            <Icon size={20} />
            <span className="font-medium">{label}</span>
        </button>
    );
}
