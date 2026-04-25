'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
            <div className="mx-auto mb-8 w-36 sm:w-44">
              <Image
                src="/images/Shopvix.png"
                alt="Shopvix Logo"
                width={176}
                height={176}
                className="mx-auto h-auto"
                priority
              />
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About <span className="gradient-text">Luminic Labs</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Building the Future of Web3 with Innovation, Expertise, and Dedication
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
              🌐 Who We Are
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Luminic Labs Pvt Ltd is a forward-thinking blockchain development company dedicated to building secure, scalable, and innovative decentralized solutions. With expertise in token development, smart contract engineering, decentralized applications (DApps), and exchange listings, we empower businesses and startups to seamlessly enter the Web3 ecosystem.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We combine deep technical knowledge with market-driven strategies to deliver blockchain products that are not only functional but also future-ready.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
              🚀 Our Vision
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              At Luminic Labs, our vision is to accelerate India's transition into a technology-driven economy by fostering the adoption of next-generation blockchain solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We aim to make blockchain technology accessible, understandable, and practical for businesses, developers, and the youth of India. By bridging the gap between innovation and implementation, we strive to position India as a global leader in decentralized technologies and digital infrastructure.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
              🎯 Our Mission
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
              {[
                "Simplify blockchain adoption",
                "Deliver secure and scalable solutions",
                "Educate and empower youth",
                "Build globally competitive products"
              ].map((mission, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                  <p className="text-sm sm:text-lg text-gray-300">{mission}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">
              📊 Our Achievements
            </h2>
            <p className="text-sm sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
              We take pride in our track record of delivering <span className="text-blue-400 font-semibold">60+ successful blockchain projects</span> across various domains, including DeFi, AI integrations, token ecosystems, and decentralized platforms.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {[
                { num: "60+", label: "Projects Delivered" },
                { num: "100+", label: "Satisfied Clients" },
                { num: "4+", label: "Years Experience" },
                { num: "Global", label: "Client Reach" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 sm:p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-500/20"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">{stat.num}</div>
                  <div className="text-xs sm:text-gray-300 text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Transform Your Vision?</h2>
            <p className="text-sm sm:text-lg text-gray-300 mb-6 sm:mb-8">
              Let's work together to bring your blockchain project to life
            </p>
            <a href="/contact" className="btn-gradient text-lg">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
