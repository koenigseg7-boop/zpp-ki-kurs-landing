import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface AnimatedCurriculumModuleProps {
  icon: LucideIcon;
  title: string;
  duration: string;
  topics: string[];
  index: number;
  color: 'blue' | 'indigo';
}

export function AnimatedCurriculumModule({ 
  icon: Icon, 
  title, 
  duration, 
  topics, 
  index,
  color 
}: AnimatedCurriculumModuleProps) {
  const colorClasses = {
    blue: {
      border: 'border-blue-500/30',
      bg: 'from-blue-500/10 to-transparent',
      icon: 'text-blue-400',
      iconBg: 'bg-blue-500/20',
      iconBorder: 'border-blue-400/30'
    },
    indigo: {
      border: 'border-indigo-500/30',
      bg: 'from-indigo-500/10 to-transparent',
      icon: 'text-indigo-400',
      iconBg: 'bg-indigo-500/20',
      iconBorder: 'border-indigo-400/30'
    }
  };

  const classes = colorClasses[color];

  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.3 }}
      className={`border-l ${classes.border} pl-6 py-3 relative`}
    >
      {/* Dot indicator */}
      <div className={`absolute left-0 top-6 w-2 h-2 rounded-full ${classes.iconBg} border ${classes.iconBorder} -translate-x-1/2`} />
      
      <div className="flex items-start gap-4">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className={`w-11 h-11 bg-gradient-to-br ${classes.bg} rounded-xl flex items-center justify-center flex-shrink-0 border border-white/10`}
        >
          <Icon className={`w-5 h-5 ${classes.icon}`} strokeWidth={1.5} />
        </motion.div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h4 className="font-semibold text-white text-base lg:text-lg">{title}</h4>
            <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10 whitespace-nowrap">
              {duration}
            </span>
          </div>
          
          {/* Topics list */}
          <ul className="space-y-2 text-sm text-gray-400">
            {topics.map((topic, topicIndex) => (
              <li
                key={topicIndex}
                className="flex items-start gap-2.5"
              >
                <span className={`${classes.icon} mt-1 text-xs`}>•</span>
                <span className="leading-relaxed">{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}