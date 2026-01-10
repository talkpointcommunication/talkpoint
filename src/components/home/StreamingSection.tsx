import { motion } from 'framer-motion';
import { Tv, Film, Gamepad2, Music, Monitor, Smartphone } from 'lucide-react';
import video2 from '@/assets/video2.mp4';

const streamingFeatures = [
  {
    icon: Tv,
    title: 'Understanding 4K Streaming',
    description: 'We help you understand what internet speeds you need for 4K streaming',
  },
  {
    icon: Film,
    title: 'Multi-Device Guidance',
    description: 'Learn how to support multiple devices streaming simultaneously',
  },
  {
    icon: Gamepad2,
    title: 'Gaming Requirements',
    description: 'Understand latency and speed needs for online gaming',
  },
  {
    icon: Music,
    title: 'Audio Streaming Info',
    description: 'Get guidance on bandwidth for high-fidelity audio streaming',
  },
  {
    icon: Monitor,
    title: 'Remote Work Setup',
    description: 'Learn about connectivity needs for video calls and remote work',
  },
  {
    icon: Smartphone,
    title: 'Smart Home Planning',
    description: 'Understand how to support all your smart devices',
  },
];

export const StreamingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Understanding Your <span className="gradient-text">Connectivity Needs</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We help you understand what internet speeds and capabilities you need for streaming, gaming, remote work, and smart home devices. Get practical guidance on connectivity requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8"
          >
            {streamingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-3 sm:gap-4 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Video Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-br from-primary/20 via-accent/20 to-success/20 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold">1 Gbps</div>
              <div className="text-sm opacity-90">Max Speed</div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-accent text-white px-6 py-4 rounded-2xl shadow-lg"
            >
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Support</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
