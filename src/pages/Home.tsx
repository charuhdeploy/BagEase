import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1596431366096-37552e347a8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Travel Hassle-Free Across India
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Let us handle your luggage while you enjoy your journey. Professional
              luggage handling services at train stations across India.
            </p>
            <Link
              to="/book"
              className="bg-[#ff8c00] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#ff8c00]">
            Why Choose BagEase?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <MapPin className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Pan India Coverage</h3>
              <p className="text-gray-600">
                Available at major train stations across India
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Clock className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">24/7 Service</h3>
              <p className="text-gray-600">
                Round-the-clock luggage handling support
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure Handling</h3>
              <p className="text-gray-600">
                Your luggage is insured and handled with care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#ff8c00] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Travel Stress-Free?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Book our services now and experience hassle-free travel
          </p>
          <Link
            to="/book"
            className="bg-white text-[#ff8c00] px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors inline-block"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#ff8c00]">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#ff8c00]">Luggage Storage</h3>
              <p className="text-gray-600 mb-4">
                Secure storage facilities at major train stations. Store your luggage for hours or days.
              </p>
              <Link to="/storage" className="text-[#ff8c00] font-semibold hover:text-orange-600 transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#ff8c00]">Pickup Service</h3>
              <p className="text-gray-600 mb-4">
                Door-to-door luggage collection and delivery to your desired train station.
              </p>
              <Link to="/pickup" className="text-[#ff8c00] font-semibold hover:text-orange-600 transition-colors">
                Learn More →
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#ff8c00]">Express Delivery</h3>
              <p className="text-gray-600 mb-4">
                Fast and reliable delivery service from train stations to your destination.
              </p>
              <Link to="/delivery" className="text-[#ff8c00] font-semibold hover:text-orange-600 transition-colors">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;