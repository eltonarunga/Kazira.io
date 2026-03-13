
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';
import Modal from '../components/common/Modal';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleExplorerLogin = async () => {
    setIsLoading(true);
    try {
      const user = await login('', true);
      if (user) navigate('/learn');
    } catch (err) {
      console.error('Explorer login error:', err);
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
            Welcome to Kazira.io
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Experience the future of AI automation and learning.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-1 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm">
            <Button 
              type="button" 
              variant="primary" 
              size="lg"
              className="w-full !py-6 text-xl rounded-xl"
              onClick={handleExplorerLogin}
              isLoading={isLoading}
              disabled={isLoading}
            >
              Explore App Features
            </Button>
            <p className="text-center text-xs text-gray-400 mt-3 pb-2">
              Instant access to all modules. No registration required.
            </p>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-400 font-medium uppercase tracking-widest">Connect</span>
            </div>
          </div>

          <div className="text-center">
             <Button 
                type="button" 
                variant="outline" 
                size="lg"
                className="w-full !py-4 rounded-xl font-black text-lg border-4 !border-black !text-black !bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                onClick={() => setIsUpdateModalOpen(true)}
              >
                Get App Updates
              </Button>
              <p className="mt-4 text-sm text-gray-500 font-medium">
                Stay informed about new tools and AI releases.
              </p>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500">
          Interested in our roadmap? {' '}
          <button 
            onClick={() => setIsUpdateModalOpen(true)}
            className="font-bold text-black hover:underline underline-offset-4"
          >
            Join the inner circle
          </button>
        </p>
      </motion.div>

      <Modal 
        isOpen={isUpdateModalOpen} 
        onClose={() => setIsUpdateModalOpen(false)} 
        title="Stay Updated"
      >
        <div className="w-full min-h-[450px] overflow-hidden rounded-lg">
          <iframe
            src="https://form.jotform.com/260052273727050"
            title="Get App Updates"
            className="w-full h-[500px] border-none"
            allow="geolocation; microphone; camera"
          />
        </div>
      </Modal>
    </div>
  );
};

export default LoginPage;
