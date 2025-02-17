import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    // console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      {/* Logo */}
      <h1 className="text-4xl font-bold text-purple-500 mb-8">StoryVerse</h1>
      
      {/* Auth Container */}
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Tabs */}
        <div className="flex mb-8">
          <button
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2 text-center ${
              activeTab === 'login' 
                ? 'border-b-2 border-purple-500 text-white' 
                : 'text-gray-400'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab('signup')}
            className={`flex-1 py-2 text-center ${
              activeTab === 'signup' 
                ? 'border-b-2 border-purple-500 text-white' 
                : 'text-gray-400'
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {activeTab === 'signup' && (
            <div>
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="Enter your username"
              />
            </div>
          )}

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {activeTab === 'signup' && (
            <div>
              <label className="block text-gray-300 mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:outline-none"
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition duration-200"
          >
            {activeTab === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        <p className="text-gray-400 text-center mt-6">
          {activeTab === 'login' 
            ? "Don't have an account? "
            : "Already have an account? "}
          <button
            onClick={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
            className="text-purple-500 hover:text-purple-400 underline"
          >
            {activeTab === 'login' ? 'Sign up' : 'Login'}
          </button>
        </p>
      </div>

      {/* Tagline */}
      <p className="mt-8 text-gray-400 text-center max-w-md">
        Discover stories beyond sight. See the unseen.
      </p>
    </div>
  );
}