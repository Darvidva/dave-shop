import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // for now, just logs to console
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-8"
      >
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Contact Us</h2>
        <p className="text-gray-600 mb-4">
          Have questions about your order or a product? Our team is here to help.
        </p>

        {/* About Section */}
        <div className="mb-8 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-center">About Dave Shop</h3>
          <p className="text-gray-700">
            Dave Shop is dedicated to making modern, high-quality clothing
            accessible. We curate pieces with care and deliver them quickly to
            your door. Our mission is to help you build a wardrobe that works
            for you, with effortless style and excellent service.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Inquiry Type
              </label>
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              >
                <option value="">Select...</option>
                <option>Order Issue</option>
                <option>Product Question</option>
                <option>Return or Refund</option>
                <option>Vendor / Partnership</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2.5 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition"
            >
              <Send size={18} /> Send Message
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 text-center mt-2"
              >
                Message sent successfully! We’ll get back to you shortly.
              </motion.p>
            )}
          </form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <Mail className="text-red-600" />
              <div>
                <p className="font-semibold text-gray-700">Email</p>
                <p className="text-gray-600">support@yourstore.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-red-600" />
              <div>
                <p className="font-semibold text-gray-700">Phone</p>
                <p className="text-gray-600">+234 800 123 4567</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="text-red-600" />
              <div>
                <p className="font-semibold text-gray-700">Office</p>
                <p className="text-gray-600">24 Market Street, Lagos, Nigeria</p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-gray-500">
                You can also reach us through our social media handles or via
                WhatsApp for faster response.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
