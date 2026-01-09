import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Users, Award, TrendingUp, Shield } from 'lucide-react';
import video4 from '@/assets/video4.mp4';

const highlights = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    value: '1 Gbps',
    description: 'Experience speeds that power your entire home',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: '1,000+ Assisted',
    value: 'Trusted',
    description: 'People helped with connectivity decisions',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Award,
    title: 'Award Winning',
    value: '#1 Rated',
    description: 'Excellence in service delivery',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: CheckCircle2,
    title: '99.9% Uptime',
    value: 'Reliable',
    description: 'Connection you can count on',
    color: 'from-green-500 to-emerald-500',
  },
];

export const VideoSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Full Width Video Container */}
      <div className="relative w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[750px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced Gradient Overlay with radial effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

        {/* Content Overlay */}
        <div className="relative h-full flex items-center">
          <div className="container-width">
            <div className="max-w-6xl mx-auto">
              {/* Top Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8"
              >
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-white">Helping people understand connectivity options</span>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-12"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6 leading-[1.1]">
                  Navigate the
                  <span className="block mt-1 sm:mt-2">
                    Future of{' '}
                    <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent">
                      Connectivity
                    </span>
                  </span>
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-3 sm:mb-4 leading-relaxed max-w-3xl">
                  We help you understand options for streaming, gaming, working, and learning.
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-success" />
                  <span className="text-white/80 text-xs sm:text-sm">Independent guidance • Expert assistance • Transparent support</span>
                </div>
              </motion.div>

              {/* Highlights Grid - Styled Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 h-full">
                      {/* Icon with gradient background */}
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" strokeWidth={2.5} />
                      </div>
                      
                      {/* Value badge */}
                      <div className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/20 backdrop-blur-sm mb-2 sm:mb-3">
                        <span className="text-[10px] sm:text-xs font-bold text-white">{highlight.value}</span>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-white font-bold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2 leading-tight">
                        {highlight.title}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                        {highlight.description}
                      </p>

                      {/* Hover effect border */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
