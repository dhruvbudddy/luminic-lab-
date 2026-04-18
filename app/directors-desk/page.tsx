'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import Image from 'next/image';

export default function DirectorsDeskPage() {
  return (
    <div className="min-h-screen bg-[#080C14] text-white pt-20">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              👨‍💼 <span className="gradient-text">Director's Desk</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300">
              Leadership & Vision Behind Luminic Labs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start"
          >
            {/* Profile Image/Avatar */}
            <div className="flex justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border-2 border-blue-500/30 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/director.jpeg"
                    alt="Ayush Bhardwaj - Founder & CEO"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover rounded-xl"
                    priority
                  />
                </div>
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 opacity-20 blur-xl" />
              </motion.div>
            </div>

            {/* Profile Content */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-2">Ayush Bhardwaj</h2>
                <p className="text-2xl text-blue-400 font-semibold mb-6">Founder & CEO, Luminic Labs Pvt Ltd</p>

                <div className="space-y-4 mb-8">
                  <p className="text-xs sm:text-lg text-gray-300 leading-relaxed">
                    Ayush Bhardwaj is the visionary founder and CEO of Luminic Labs Pvt Ltd. A skilled blockchain developer and an alumnus of <span className="text-blue-400 font-semibold">Banaras Hindu University</span>, he brings both technical expertise and strategic insight into the rapidly evolving Web3 space.
                  </p>

                  <p className="text-xs sm:text-lg text-gray-300 leading-relaxed">
                    Driven by a mission to make India blockchain-ready, Ayush actively promotes awareness and education around decentralized technologies. He believes that empowering the youth with blockchain knowledge is key to ensuring India's competitiveness on the global stage.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-blue-500/20 border border-blue-500/50 flex items-center justify-center hover:bg-blue-500/30 transition-colors"
                    title="Email"
                  >
                    <Mail className="w-5 h-5 text-blue-400" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Leadership Philosophy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: '🎯 Vision',
                  desc: 'Make India a global leader in blockchain technology and Web3 innovation'
                },
                {
                  title: '🤝 Collaboration',
                  desc: 'Foster partnerships and collaboration within the blockchain ecosystem'
                },
                {
                  title: '📚 Education',
                  desc: 'Empower youth through blockchain knowledge and technical expertise'
                },
                {
                  title: '💡 Innovation',
                  desc: 'Push boundaries and create cutting-edge decentralized solutions'
                },
                {
                  title: '🔒 Security',
                  desc: 'Maintain the highest standards of security and code quality'
                },
                {
                  title: '🌱 Growth',
                  desc: 'Build sustainable, scalable solutions that create lasting impact'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Message from Director */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20"
          >
            <p className="text-2xl font-bold mb-6 text-blue-400 text-center">"A Message from Our Founder"</p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              "Our mission at Luminic Labs is simple yet ambitious: to empower India and the world with blockchain technology. We don't just build smart contracts or tokens—we build the future of decentralized finance and Web3."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              "Every project we undertake, every line of code we write, and every team member we mentor is a step toward making India a global hub for blockchain innovation. I believe that the next decade belongs to decentralized technologies, and we're committed to leading that charge."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              "If you share our vision and want to be part of this revolution, let's connect. Together, we can build something extraordinary."
            </p>
            <p className="text-blue-400 font-semibold mt-6">— Ayush Bhardwaj</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Let's Connect & Build Together</h2>
            <p className="text-lg text-gray-300 mb-8">
              Have a blockchain project in mind? Reach out to discuss opportunities
            </p>
            <a href="/contact" className="btn-gradient text-lg inline-block">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
