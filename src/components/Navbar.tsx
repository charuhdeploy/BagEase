import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Settings, Box, Truck, Send, Info, Phone, Briefcase, UserCircle2, Menu } from 'lucide-react';

interface NavbarProps {
  onSignInClick: () => void;
}

const Navbar = ({ onSignInClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-lg">
        <nav className="container mx-auto px-6 lg:px-16 flex flex-wrap items-center justify-between h-auto overflow-hidden">

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <Menu size={32} />
          </button>

          {/* Centered Brand Name */}
          <div className="flex justify-center w-full md:w-auto order-1 md:order-none py-5 lg:py-6">
            <div className="flex items-center space-x-4">
              <Truck className="text-orange-600 h-12 w-12" />
              <span className="text-4xl font-extrabold tracking-wide text-gray-800">
                Bag<span className="text-orange-500">E</span>ase
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className={`flex flex-wrap items-center justify-center ${isOpen ? 'block' : 'hidden'} md:flex md:justify-end w-full md:w-auto`}>
            <ul className="flex flex-wrap items-center justify-center gap-6 w-full md:w-auto">

              {/* Navigation Items */}
              {[
                { to: "/", label: "Home", icon: <Home size={26} /> },
                { to: "/services", label: "Services", icon: <Settings size={26} /> },
                { to: "/storage", label: "Storage", icon: <Box size={26} /> },
                { to: "/pickup", label: "Pickup", icon: <Truck size={26} /> },
                { to: "/delivery", label: "Delivery", icon: <Send size={26} /> },
                { to: "/about", label: "About", icon: <Info size={26} /> },
                { to: "/contact", label: "Contact", icon: <Phone size={26} /> }
              ].map((item) => (
                <li key={item.to} className="mb-3"> 
                  <Link
                    to={item.to}
                    className="flex items-center space-x-4 px-5 py-3 rounded-lg bg-orange-50 text-gray-700 font-medium hover:bg-orange-100 transition-all duration-300 border border-orange-200 shadow-sm"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}

              {/* Book Now */}
              <li className="mb-3"> 
                <Link
                  to="/book"
                  className="flex items-center space-x-4 px-7 py-3 rounded-lg border-2 border-orange-500 text-orange-600 font-bold hover:bg-orange-100 transition-all duration-300 shadow-md"
                >
                  <Briefcase size={28} />
                  <span>Book Now</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Fixed Sign-In Icon */}
      <button
        onClick={onSignInClick}
        aria-label="Sign In"
        className="fixed top-6 right-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg p-4 transition-all duration-300 z-50"
      >
        <UserCircle2 size={36} />
      </button>
    </>
  );
};

export default Navbar;
