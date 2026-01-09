import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Wifi, Tv, Package } from 'lucide-react';
import internetImage from '@/assets/internet-service.jpg';
import cableImage from '@/assets/cable-tv-service.jpg';
import bundleImage from '@/assets/bundle-service.jpg';

const services = [
  {
    icon: Wifi,
    title: 'Internet Assistance',
    description: 'Get guidance on fiber and cable internet options. We help you understand speeds, data plans, and what works best for your needs.',
    image: internetImage,
    href: '/internet-plans',
    highlight: 'Expert Guidance',
  },
  {
    icon: Tv,
    title: 'Cable TV Support',
    description: 'Navigate HD channels, on-demand options, and sports packages. We assist you in finding entertainment that fits your lifestyle.',
    image: cableImage,
    href: '/cable-tv-plans',
    highlight: 'Personalized Help',
  },
  {
    icon: Package,
    title: 'Bundle Guidance',
    description: 'Learn about combining internet and TV services. We facilitate your understanding of bundled options from various providers.',
    image: bundleImage,
    href: '/bundles',
    highlight: 'Comprehensive Support',
  },
];

export const ServicesSection = () => {
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
            Our Assistance Services
          </h2>
          <p className="text-lg text-muted-foreground">
            We guide you through connectivity options to help you make informed decisions about internet, TV, and streaming services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                to={service.href}
                className="group block h-full"
              >
                <motion.div 
                  className="card-base overflow-hidden h-full"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                    
                    {/* Floating price badge */}
                    <motion.div 
                      className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium shadow-lg"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {service.highlight}
                    </motion.div>
                  </div>
                  
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Call Now (888) 363-0848
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
