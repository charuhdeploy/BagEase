import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your login logic here
    setIsLoggedIn(true);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold mb-6 text-[#ff8c00]">
            {isLoggedIn ? 'Profile' : 'Login'}
          </h2>

          {isLoggedIn ? (
            <div>
              <div className="mb-4">
                <h3 className="font-semibold">Welcome, User!</h3>
                <p className="text-gray-600">email@example.com</p>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full bg-[#ff8c00] text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff8c00] text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;