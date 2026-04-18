'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, MapPin, Clock, Zap } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectIdea: '',
    projectType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Replace 'YOUR_SHEETDB_API_URL' with your actual SheetDB API URL
      // Get your API URL from https://sheetdb.io/ after connecting your Google Sheet
      // Example: 'https://sheetdb.io/api/v1/abc123def456'
      const response = await fetch('https://sheetdb.io/api/v1/chjse7zd9vgw3', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            project_type: formData.projectType,
            project_idea: formData.projectIdea,
            timestamp: new Date().toISOString()
          }]
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectIdea: '',
          projectType: 'general'
        });
        
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or contact us directly.');
      console.error('Form submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-white pt-20">
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Let's <span className="gradient-text">Build Together</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300">
              Have an idea? We'd love to hear from you. Get in touch with our team to discuss your blockchain project.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 sm:mb-4">
                <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">Get in touch via email</p>
              <a href="mailto:contact@luminic-labs.com" className="text-xs sm:text-sm text-blue-400 font-semibold hover:text-blue-300">
                contact@luminic...
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 sm:mb-4">
                <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">Quick messaging</p>
              <a href="https://wa.me/919876543210" className="text-xs sm:text-sm text-blue-400 font-semibold hover:text-blue-300">
                +91 98765 43210
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20"
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3 sm:mb-4">
                <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Call</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">Direct contact</p>
              <a href="tel:+919876543210" className="text-xs sm:text-sm text-blue-400 font-semibold hover:text-blue-300">
                +91 98765 43210
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Send us a Message</h2>
              
              {isSubmitted && (
                <motion.div className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm">
                  ✓ Thank you! We've received your message.
                </motion.div>
              )}

              {error && (
                <motion.div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm">
                  ✗ {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-base text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-base text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-base text-white placeholder-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Project Type</label>
                  <Select
                    name="projectType"
                    value={formData.projectType}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
                  >
                    <SelectTrigger className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-base text-white">
                      <SelectValue placeholder="Select project type..." />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0D1117] border-white/10">
                      <SelectItem value="general" className="text-white hover:bg-white/10">Select project type...</SelectItem>
                      <SelectItem value="token" className="text-white hover:bg-white/10">Token Development</SelectItem>
                      <SelectItem value="smartcontract" className="text-white hover:bg-white/10">Smart Contract Development</SelectItem>
                      <SelectItem value="dapp" className="text-white hover:bg-white/10">DApp Development</SelectItem>
                      <SelectItem value="exchange" className="text-white hover:bg-white/10">Exchange Listing</SelectItem>
                      <SelectItem value="consulting" className="text-white hover:bg-white/10">Blockchain Consulting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold mb-2">Tell us About Your Project</label>
                  <textarea
                    name="projectIdea"
                    value={formData.projectIdea}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Describe your blockchain project idea..."
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-base text-white placeholder-gray-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-gradient py-2 sm:py-3 font-semibold text-xs sm:text-base"
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Why Contact Us?</h2>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: Zap, title: 'Quick Response', desc: 'We typically respond within 24 hours' },
                  { icon: Clock, title: 'Available 24/7', desc: 'Reach us anytime via email or WhatsApp' },
                  { icon: MapPin, title: 'Global Team', desc: 'Direct access to our developers' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-start gap-4 p-4 sm:p-6 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base mb-1">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 sm:mt-12 p-4 sm:p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20">
                <h3 className="font-bold mb-3 sm:mb-4 text-blue-400 text-sm sm:text-base">Next Steps</h3>
                <ol className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-400 flex-shrink-0">1.</span>
                    <span>Fill out the form with your project details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-400 flex-shrink-0">2.</span>
                    <span>We respond within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-400 flex-shrink-0">3.</span>
                    <span>Schedule a consultation call</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-blue-400 flex-shrink-0">4.</span>
                    <span>Get a custom proposal</span>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {[
              { q: 'What is the typical project timeline?', a: 'Project timelines vary based on complexity. Simple token launches can take 2-4 weeks, while comprehensive DApp ecosystems may take 3-6 months.' },
              { q: 'Do you provide post-launch support?', a: 'Yes! We offer comprehensive post-launch support including monitoring, updates, and maintenance.' },
              { q: 'What blockchains do you specialize in?', a: 'We work with Ethereum, BNB Chain, Solana, Polygon, and other major blockchains.' },
              { q: 'Can you help with token listings?', a: 'Absolutely! We have established relationships with DEXs and can assist with CEX listings on major exchanges.' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 sm:p-6 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-bold text-xs sm:text-lg mb-2 text-blue-400">{item.q}</h3>
                <p className="text-xs sm:text-sm text-gray-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
