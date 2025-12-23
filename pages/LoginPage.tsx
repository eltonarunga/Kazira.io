
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExplorerLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      const user = await login('', true);
      if (user) navigate('/learn');
    } catch (err) {
      setError('Unexpected error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const user = await login(email, false);
      if (user) navigate('/learn');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md w-full space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-black tracking-tight">
            Get Started with Kazira.io
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Choose how you'd like to experience the platform.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-1 bg-gray-50 rounded-2xl border border-gray-100">
            <Button 
              type="button" 
              variant="primary" 
              size="lg"
              className="w-full !py-6 text-xl rounded-xl"
              onClick={handleExplorerLogin}
              isLoading={isLoading && !email}
              disabled={isLoading}
            >
              Explore App Features
            </Button>
            <p className="text-center text-xs text-gray-400 mt-3 pb-2">
              Instant access. No details required.
            </p>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400 font-medium">OR</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-black mb-4">Guest Access</h3>
            <form onSubmit={handleGuestLogin} className="space-y-4">
              {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-4 py-3 border border-gray-300 placeholder-gray-400 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all sm:text-sm"
                  placeholder="Enter your email address"
                  disabled={isLoading}
                />
              </div>
              <Button 
                type="submit" 
                variant="outline" 
                className="w-full !py-3 rounded-xl font-bold border-2 border-black text-black hover:bg-black hover:text-white" 
                isLoading={isLoading && !!email} 
                disabled={isLoading}
              >
                Continue as Guest
              </Button>
              <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
                Save your progress & paths
              </p>
            </form>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          Want priority updates? {' '}
          <a href="#/" className="font-bold text-black hover:underline underline-offset-4">
            Join the waitlist
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
