'use client';

import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
  accentColor?: string;
}

const accentMap: Record<string, { bg: string; border: string; text: string; hoverBorder: string }> = {
  blue: { bg: 'from-blue-500/20 to-blue-600/10', border: 'border-blue-500/25', text: 'text-blue-400', hoverBorder: 'hover:border-blue-500/45' },
  violet: { bg: 'from-sky-500/20 to-sky-600/10', border: 'border-sky-500/25', text: 'text-sky-400', hoverBorder: 'hover:border-sky-500/45' },
  cyan: { bg: 'from-cyan-500/20 to-cyan-600/10', border: 'border-cyan-500/25', text: 'text-cyan-400', hoverBorder: 'hover:border-cyan-500/45' },
  green: { bg: 'from-green-500/20 to-green-600/10', border: 'border-green-500/25', text: 'text-green-400', hoverBorder: 'hover:border-green-500/45' },
  amber: { bg: 'from-amber-500/20 to-amber-600/10', border: 'border-amber-500/25', text: 'text-amber-400', hoverBorder: 'hover:border-amber-500/45' },
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
  accentColor = 'blue',
}: ServiceCardProps) {
  const accent = accentMap[accentColor] || accentMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative group cursor-default rounded-2xl p-6 border border-white/8 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.055] ${accent.hoverBorder} hover:shadow-xl overflow-hidden`}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 60%)' }}
      />
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent.bg} border ${accent.border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className={`w-6 h-6 ${accent.text}`} />
      </div>
      <h3 className="text-white font-semibold text-lg mb-2.5 group-hover:text-blue-100 transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
