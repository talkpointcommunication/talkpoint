import { motion } from 'framer-motion';
import workFromHome from '@/assets/work-from-home.jpg';
import gamingImage from '@/assets/gaming-experience.jpg';
import technicianImage from '@/assets/technician-install.jpg';

const features = [
  {
    title: 'Work From Home Support',
    description: 'We help you find connectivity options that support crystal-clear video calls and fast file transfers to keep you productive.',
    image: workFromHome,
    reverse: false,
  },
  {
    title: 'Gaming Connectivity Guidance',
    description: 'Get assistance finding low-latency, high-speed options for smoother gameplay and faster response times.',
    image: gamingImage,
    reverse: true,
  },
  {
    title: 'Setup Assistance',
    description: 'Our team guides you through understanding installation options and setup requirements for optimal connectivity.',
    image: technicianImage,
    reverse: false,
  },
];

export const LifestyleSection = () => {
  return (
    <section className="section-padding">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Guidance for Your <span className="gradient-text">Lifestyle</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you work from home, game online, or stream in 4K, we help you understand the connectivity options that fit your needs.
          </p>
        </motion.div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`flex flex-col ${
                feature.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12 lg:gap-20`}
            >
              <motion.div 
                className="flex-1 w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="relative rounded-2xl shadow-xl w-full"
                  />
                </div>
              </motion.div>
              
              <div className="flex-1 text-center lg:text-left">
                <motion.span 
                  className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                  initial={{ opacity: 0, x: feature.reverse ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  0{index + 1}
                </motion.span>
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
