
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
      if (user) navigate('/home');
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
          <h2 className="text-4xl font-serif text-black tracking-tight">
            Welcome to Kazira
          </h2>
          <p className="mt-4 text-black/50 text-lg font-light">
            Experience the future of AI automation and learning.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-1 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm">
            <Button 
              type="button" 
              variant="gold" 
              size="lg"
              className="w-full !py-6 text-xl rounded-xl"
              onClick={handleExplorerLogin}
              isLoading={isLoading}
              disabled={isLoading}
            >
              Explore App Features
            </Button>
            <p className="text-center text-xs text-black/40 mt-3 pb-2 font-mono">
              Instant access to all modules. No registration required.
            </p>
          </div>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-black/40 font-mono uppercase tracking-widest">Connect</span>
            </div>
          </div>

          <div className="text-center">
             <Button 
                type="button" 
                variant="outline" 
                size="lg"
                className="w-full !py-4 rounded-xl text-lg"
                onClick={() => setIsUpdateModalOpen(true)}
              >
                Get App Updates
              </Button>
              <p className="mt-4 text-sm text-black/50 font-light">
                Stay informed about new tools and AI releases.
              </p>
          </div>
        </div>

        <p className="text-center text-sm text-black/50 font-light">
          Interested in our roadmap? {' '}
          <button 
            onClick={() => setIsUpdateModalOpen(true)}
            className="text-gold hover:text-black transition-colors underline-offset-4"
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
