import { motion } from 'framer-motion';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import streamingImage from '@/assets/streaming-family.jpg';

export const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={streamingImage}
          alt="Family enjoying entertainment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/85 to-foreground/75" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary-foreground/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-width section-padding relative">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Independent Internet Advisors 24/7
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
          >
            Need Independent Internet or Cable TV Help?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-primary-foreground/80 mb-8"
          >
            Talk to our independent advisors who help you understand connectivity options from multiple providers. 
            We are NOT an ISP—we provide unbiased guidance to help you make informed decisions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button variant="cta" size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 group" asChild>
              <a href="tel:(888) 363-0848">
                Call for Independent Service Guidance
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <motion.a
              href="tel:(888) 363-0848"
              className="btn-outline flex items-center justify-center gap-2 !border-primary-foreground !text-primary-foreground hover:!bg-primary-foreground hover:!text-foreground h-14 px-8 text-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              Get Cable TV Service Help
            </motion.a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-sm text-primary-foreground/60"
          >
            Not an ISP. No brand affiliation. We provide independent guidance only—we are not affiliated, authorized, or endorsed by any telecom/cable company.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
