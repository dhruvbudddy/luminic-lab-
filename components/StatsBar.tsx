'use client';

import { motion } from 'framer-motion';
import { Rocket, Globe, TrendingUp, Zap } from 'lucide-react';

const stats = [
  { icon: Rocket, value: '60+', label: 'Projects Delivered', color: 'text-blue-400', bg: 'from-blue-500/15 to-blue-600/10', border: 'border-blue-500/20' },
  { icon: Globe, value: 'Global', label: 'Client Reach', color: 'text-sky-400', bg: 'from-sky-500/15 to-sky-600/10', border: 'border-sky-500/20' },
  { icon: TrendingUp, value: 'CMC', label: 'Listed Projects', color: 'text-green-400', bg: 'from-green-500/15 to-green-600/10', border: 'border-green-500/20' },
  { icon: Zap, value: 'Fast', label: 'Deployment', color: 'text-amber-400', bg: 'from-amber-500/15 to-amber-600/10', border: 'border-amber-500/20' },
];

export default function StatsBar() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0 border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/4 via-sky-600/3 to-blue-600/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-white/8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-6 py-4 group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.bg} border ${stat.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
