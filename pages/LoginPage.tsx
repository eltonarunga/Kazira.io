
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await login(email, password);
      if (user) {
        navigate('/learn'); // Redirect to a protected page
      } else {
        setError('Login failed. Please check your credentials. (Hint: any valid email/password will create an account if one does not exist.)');
      }
    } catch (err) {
      console.error("Login error:", err);
      setError('An unexpected server error occurred. Please try again in a moment.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAnonymousLogin = async () => {
    setError('');
    setIsLoading(true);
    try {
      // Use a predefined guest account for the mock login
      const user = await login('guest@kazira.io', 'guest');
      if (user) {
        navigate('/learn');
      } else {
        setError('Could not log in as guest. Please try again in a moment.');
      }
    } catch (err) {
      console.error("Guest login error:", err);
      setError('An unexpected error occurred during guest login.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-md w-full bg-white p-10 rounded-xl shadow-2xl border border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className={`mt-6 text-center text-3xl font-extrabold text-gray-900`}>
            Sign in to Kazira.io
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access your personalized learning and automation tools.
            <br/>
            (This is a mock login: any email/password will create an account)
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {error && <p className="text-sm text-gray-800 bg-gray-100 p-3 rounded-md">{error}</p>}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                disabled={isLoading}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <Button type="submit" variant="primary" className="w-full" isLoading={isLoading} disabled={isLoading}>
              Sign in
            </Button>
          </div>
        </form>

        <div className="mt-6">
            <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
            </div>
        </div>

        <div className="mt-6">
            <Button type="button" variant="outline" className="w-full" onClick={handleAnonymousLogin} isLoading={isLoading} disabled={isLoading}>
              Continue as Guest
            </Button>
        </div>
        
         <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#/" className={`font-medium text-black hover:text-gray-700`}>
              Join the waitlist
            </a>
          </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;