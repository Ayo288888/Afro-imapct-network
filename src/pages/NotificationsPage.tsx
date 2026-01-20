
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const NOTIFICATIONS = [
  { id: 1, type: 'success', title: 'Subscription Confirmed', message: 'You have successfully joined the Digital Education sector.', time: '2 mins ago' },
  { id: 2, type: 'info', title: 'New Course Available', message: 'Introduction to Python for Data Science is now live.', time: '1 hour ago' },
  { id: 3, type: 'warning', title: 'System Maintenance', message: 'The platform will be down for maintenance on Sunday 2 AM.', time: '1 day ago' },
  { id: 4, type: 'info', title: 'Community Meetup', message: 'Join us for a virtual town hall this Friday.', time: '2 days ago' },
];

export default function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 text-white p-6 sticky top-0 z-30 flex items-center gap-4">
        <button onClick={() => navigate('/dashboard')} className="hover:bg-white/20 p-2 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-4">
        {NOTIFICATIONS.map(notification => (
          <div key={notification.id} className="p-4 border border-gray-100 rounded-xl shadow-sm bg-white flex gap-4">
            <div className={`mt-1 p-2 rounded-full h-fit
              ${notification.type === 'success' ? 'bg-green-100 text-green-600' : ''}
              ${notification.type === 'warning' ? 'bg-orange-100 text-orange-600' : ''}
              ${notification.type === 'info' ? 'bg-blue-100 text-blue-600' : ''}
            `}>
              {notification.type === 'success' && <CheckCircle size={20} />}
              {notification.type === 'warning' && <AlertTriangle size={20} />}
              {notification.type === 'info' && <Info size={20} />}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{notification.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{notification.message}</p>
              <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
            </div>
          </div>
        ))}

        {NOTIFICATIONS.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                <Bell size={48} className="mx-auto mb-4 opacity-20" />
                <p>No notifications yet</p>
            </div>
        )}
      </div>
    </div>
  );
}
