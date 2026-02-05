import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface PremiumBenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function PremiumBenefitCard({ icon: Icon, title, description, index }: PremiumBenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 group overflow-hidden"
      style={{
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
      }}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />

      {/* Diagonal Light Scan on Hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ x: '-100%', y: '-100%' }}
          animate={{ x: '100%', y: '100%' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.08) 45%, rgba(59, 130, 246, 0.15) 50%, rgba(59, 130, 246, 0.08) 55%, transparent 100%)',
          }}
        />
      )}

      {/* Enhanced Glow on Hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.3)'
        }}
      />

      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-blue-400/20"
        >
          <Icon className="w-8 h-8 text-blue-400" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-white mb-4">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-base">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
}