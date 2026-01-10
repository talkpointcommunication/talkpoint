import { motion } from 'framer-motion';
import { MapPin, Calendar, Wrench, Wifi } from 'lucide-react';

const steps = [
  {
    icon: MapPin,
    title: 'Tell Us Your Needs',
    description: 'Share your location and connectivity requirements with our independent advisors.',
  },
  {
    icon: Calendar,
    title: 'Learn About Options',
    description: 'We help you understand the available internet/broadband options in your area.',
  },
  {
    icon: Wrench,
    title: 'Get Independent Guidance',
    description: 'Receive unbiased advice to help you understand options from multiple providers.',
  },
  {
    icon: Wifi,
    title: 'Make Informed Decisions',
    description: 'Use our expert guidance to navigate provider processes and choose what works for you.',
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container-width relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Getting Independent Advice is <span className="gradient-text">Easy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From consultation to decision, our independent advisors guide you through every step.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div 
                  className="flex flex-col items-center text-center"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step number */}
                  <motion.div 
                    className="relative mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-card shadow-card border border-border/50 flex items-center justify-center relative z-10">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <motion.div 
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      {index + 1}
                    </motion.div>
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-[250px]">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
