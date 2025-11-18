
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { User } from '../types';
import { generateBio } from '../services/geminiService';
import { getFriendlyErrorMessage } from '../services/errorService';

const UserProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Partial<User>>({ name: '', email: '', bio: '' });
  const [isSaving, setIsSaving] = useState(false);
  const [isGeneratingBio, setIsGeneratingBio] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [apiKey] = useState<string | null>(process.env.API_KEY || null);

  useEffect(() => {
    if (user) {
      setFormData({ name: user.name, email: user.email, bio: user.bio || '' });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleGenerateBio = async () => {
    if (!user || !apiKey) return;
    setIsGeneratingBio(true);
    setError('');
    try {
        const bio = await generateBio(user.name, apiKey);
        setFormData(prev => ({ ...prev, bio }));
    } catch (err) {
        console.error("Bio generation error:", err);
        setError(getFriendlyErrorMessage(err));
    } finally {
        setIsGeneratingBio(false);
    }
  };

  const handleSaveChanges = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !formData.name) return;

    setIsSaving(true);
    setError('');
    try {
      const updatedUser = await updateUser({ name: formData.name, bio: formData.bio });
      if (updatedUser) {
        setIsEditing(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        setError("We couldn't save your changes. Please check your connection and try again.");
      }
    } catch (err) {
      console.error("Profile update error:", err);
      setError("An unexpected error occurred while saving. Please try again in a moment.");
    } finally {
      setIsSaving(false);
    }
  };
  
  const handleCancel = () => {
    if (user) {
      setFormData({ name: user.name, email: user.email, bio: user.bio || '' });
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
        <h1 className="text-4xl font-bold text-gray-900 mb-3">My Profile</h1>
        <p className="text-lg text-gray-600">View and manage your personal information.</p>
      </motion.div>
      
      <div className="max-w-2xl mx-auto relative">
        <AnimatePresence>
            {showSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4 bg-gray-100 border border-gray-400 text-gray-700 px-4 py-2 rounded-md text-sm shadow-lg"
                    role="alert"
                >
                    Profile updated successfully!
                </motion.div>
            )}
        </AnimatePresence>

        <Card className="!shadow-2xl">
          <form onSubmit={handleSaveChanges}>
            <div className="space-y-6 p-4">
              {error && <p className="text-sm text-gray-800 bg-gray-100 p-3 rounded-md">{error}</p>}
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

              <div>
                <div className="flex justify-between items-center mb-1">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
                    {isEditing && (
                        <Button
                            type="button"
                            size="sm"
                            variant="outline"
                            onClick={handleGenerateBio}
                            isLoading={isGeneratingBio}
                            disabled={isSaving || isGeneratingBio || !apiKey}
                            className="text-xs px-2 py-1"
                        >
                           {isGeneratingBio ? 'Generating...' : 'Generate with AI ✨'}
                        </Button>
                    )}
                </div>
                <textarea
                    name="bio"
                    id="bio"
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 ${!isEditing ? 'bg-gray-100 text-gray-500' : 'border-gray-300'}`}
                    value={formData.bio || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing || isSaving}
                    aria-readonly={!isEditing}
                    placeholder="Tell us a little about yourself..."
                />
              </div>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end items-center space-x-4 rounded-b-lg">
              {isEditing ? (
                <>
                  <Button type="button" variant="outline" onClick={handleCancel} disabled={isSaving}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" isLoading={isSaving} disabled={isSaving}>
                    Save Changes
                  </Button>
                </>
              ) : (
                <Button type="button" variant="secondary" onClick={() => setIsEditing(true)}>
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