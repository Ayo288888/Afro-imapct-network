
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ChevronLeft, Loader2 } from 'lucide-react';

type AuthMode = 'selection' | 'login' | 'signup';

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>('selection');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Signup specific
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [category, setCategory] = useState<'Organization' | 'Individual'>('Individual');
  const [whatsapp, setWhatsapp] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await signIn(email, password);
      if (error) throw error;
      navigate('/dashboard');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to login';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error } = await signUp(email, password, {
        full_name: fullName,
        dob,
        category,
        whatsapp
      });
      if (error) throw error;
      navigate('/dashboard');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign up';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 relative">

        {/* Header / Back Button */}
        {mode !== 'selection' && (
          <button
            onClick={() => { setMode('selection'); setError(null); }}
            className="absolute top-6 left-6 text-gray-400 hover:text-gray-600"
          >
            <ChevronLeft size={24} />
          </button>
        )}

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            {mode === 'selection' && 'Welcome'}
            {mode === 'login' && 'Welcome Back'}
            {mode === 'signup' && 'Create Account'}
          </h2>
          <p className="text-gray-500 mt-2">
            {mode === 'selection' && 'Join the Afro-Impact Network today.'}
            {mode === 'login' && 'Login to access your dashboard.'}
            {mode === 'signup' && 'Fill in your details to get started.'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
            {error}
          </div>
        )}

        {/* SELECTION MODE */}
        {mode === 'selection' && (
          <div className="flex gap-4">
            <button
              onClick={() => setMode('signup')}
              className="flex-1 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-md"
            >
              SIGN UP
            </button>
            <button
              onClick={() => setMode('login')}
              className="flex-1 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-xl transition-all transform hover:-translate-y-1 shadow-md"
            >
              LOGIN
            </button>
          </div>
        )}

        {/* LOGIN FORM */}
        {mode === 'login' && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="login-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                id="login-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg shadow-md transition-all mt-4 flex justify-center items-center"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'SAVE & ENTER'}
            </button>
          </form>
        )}

        {/* SIGNUP FORM */}
        {mode === 'signup' && (
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="signup-fullname" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                id="signup-fullname"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="signup-dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  id="signup-dob"
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="signup-category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  id="signup-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as 'Organization' | 'Individual')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                >
                  <option value="Individual">Individual</option>
                  <option value="Organization">Organization</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                id="signup-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="signup-whatsapp" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Contact</label>
              <input
                id="signup-whatsapp"
                type="tel"
                required
                placeholder="+254 700 000 000"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>
              <div>
                <label htmlFor="signup-confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                <input
                  id="signup-confirm"
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg shadow-md transition-all mt-4 flex justify-center items-center"
            >
              {loading ? <Loader2 className="animate-spin" /> : 'SAVE & ENTER'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
