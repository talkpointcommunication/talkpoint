import { motion } from 'framer-motion';
import { Shield, Headphones, Rocket, Gift, Wifi, Clock } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Expert Guidance',
    description: 'We help you understand connectivity options and make informed decisions.',
    color: 'primary',
  },
  {
    icon: Shield,
    title: 'Transparent Process',
    description: 'Clear information about options and our separate assistance fees.',
    color: 'success',
  },
  {
    icon: Headphones,
    title: '24/7 Support Available',
    description: 'Real humans ready to assist you anytime, day or night.',
    color: 'accent',
  },
  {
    icon: Gift,
    title: 'No Hidden Fees',
    description: 'Transparent pricing for our assistance services. What you see is what you pay.',
    color: 'primary',
  },
  {
    icon: Wifi,
    title: 'Comprehensive Options',
    description: 'We help you explore all available connectivity solutions in your area.',
    color: 'success',
  },
  {
    icon: Clock,
    title: 'Quick Assistance',
    description: 'Get guidance and support as soon as you need it.',
    color: 'accent',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const FeaturesGrid = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-width">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">TALK POINT SOLUTIONS</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            We're your independent partner in navigating connectivity options with expert guidance.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border/50 hover:shadow-card-hover transition-shadow"
            >
              <motion.div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  feature.color === 'primary' ? 'bg-primary/10' :
                  feature.color === 'success' ? 'bg-success/10' : 'bg-accent/10'
                }`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className={`w-7 h-7 ${
                  feature.color === 'primary' ? 'text-primary' :
                  feature.color === 'success' ? 'text-success' : 'text-accent'
                }`} />
              </motion.div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
