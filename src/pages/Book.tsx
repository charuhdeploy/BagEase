import React, { useState } from 'react';

const Book = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'pickup',
    date: '',
    location: '',
    destination: '',
    bags: '1',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your booking logic here
    console.log('Booking submitted:', bookingData);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-[#ff8c00]">Book Our Services</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              value={bookingData.name}
              onChange={(e) =>
                setBookingData({ ...bookingData, name: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
              required
            />
          </div>
          
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={bookingData.email}
              onChange={(e) =>
                setBookingData({ ...bookingData, email: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={bookingData.phone}
            onChange={(e) =>
              setBookingData({ ...bookingData, phone: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Service Type
          </label>
          <select
            value={bookingData.service}
            onChange={(e) =>
              setBookingData({ ...bookingData, service: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
          >
            <option value="pickup">Pickup</option>
            <option value="delivery">Delivery</option>
            <option value="storage">Storage</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            value={bookingData.date}
            onChange={(e) =>
              setBookingData({ ...bookingData, date: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Pickup Location
          </label>
          <input
            type="text"
            value={bookingData.location}
            onChange={(e) =>
              setBookingData({ ...bookingData, location: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Destination
          </label>
          <input
            type="text"
            value={bookingData.destination}
            onChange={(e) =>
              setBookingData({ ...bookingData, destination: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Number of Bags
          </label>
          <select
            value={bookingData.bags}
            onChange={(e) =>
              setBookingData({ ...bookingData, bags: e.target.value })
            }
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff8c00]"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#ff8c00] text-white py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Book;