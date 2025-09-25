
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { User } from '../types';

const UserProfilePage: React.FC = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<User>>({ name: '', email: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !formData.name) return;

    setIsSaving(true);
    setError('');
    try {
      const updatedUser = await updateUser({ name: formData.name });
      if (updatedUser) {
        setIsEditing(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        setError("Failed to update profile. Please try again.");
      }
    } catch (err) {
      console.error("Profile update error:", err);
      setError("An unexpected error occurred while updating your profile.");
    } finally {
      setIsSaving(false);
    }
  };
  
  const handleCancel = () => {
    if (user) {
      setFormData({ name: user.name, email: user.email });
    }
    setIsEditing(false);
    setError('');
  };
  
  if (!user) {
    // This case is unlikely if the page is protected, but good for robustness
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p>Loading user profile...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-3">My Profile</h1>
        <p className="text-lg text-gray-600">View and manage your personal information.</p>
      </motion.div>
      
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence>
            {showSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded-md text-sm shadow-lg"
                    role="alert"
                >
                    Profile updated successfully!
                </motion.div>
            )}
        </AnimatePresence>

        <Card className="!shadow-2xl">
          <form onSubmit={handleSaveChanges}>
            <div className="space-y-6 p-4">
              {error && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 ${!isEditing ? 'bg-gray-100 text-gray-500' : 'border-gray-300'}`}
                    value={formData.name || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing || isSaving}
                    aria-readonly={!isEditing}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 text-gray-500 cursor-not-allowed"
                    value={formData.email || ''}
                    disabled
                    aria-readonly="true"
                    title="Email address cannot be changed."
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end items-center space-x-4 rounded-b-lg">
              {isEditing ? (
                <>
                  <Button type="button" variant="outline" onClick={handleCancel} disabled={isSaving}>
                    Cancel
                  </Button>
                  <Button type="submit" isLoading={isSaving} disabled={isSaving}>
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button type="button" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
              )}
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default UserProfilePage;
