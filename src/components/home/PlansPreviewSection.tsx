import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Essential',
    speed: '100',
    price: '39.99',
    features: [
      'Up to 100 Mbps download',
      'Unlimited data',
      'Free modem rental',
      '24/7 customer support',
    ],
    popular: false,
  },
  {
    name: 'Performance',
    speed: '300',
    price: '59.99',
    features: [
      'Up to 300 Mbps download',
      'Unlimited data',
      'Free modem & router',
      'Priority support',
      'Free installation',
    ],
    popular: true,
  },
  {
    name: 'Ultimate',
    speed: '1000',
    price: '89.99',
    features: [
      'Up to 1 Gbps download',
      'Unlimited data',
      'Premium WiFi 6 router',
      'VIP support line',
      'Same-day installation',
      'Free mesh WiFi extender',
    ],
    popular: false,
  },
];

export const PlansPreviewSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-width">
        {/* Disclosure Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-4 mb-8 max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm text-foreground text-center leading-relaxed">
            <strong>Important:</strong> The pricing and plans shown below are examples of connectivity options available from various providers. 
            TALK POINT SOLUTIONS does NOT sell these plans. We charge separate fees for our assistance services to help you understand and navigate these options.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Example Internet Options
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are typical connectivity options you might find in your area. We help you understand and choose what fits your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className={`relative card-base p-6 lg:p-8 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  Most Popular
                </motion.div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-4xl font-bold text-foreground">{plan.speed}</span>
                  <span className="text-muted-foreground">Mbps</span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? 'cta' : 'outline'}
                className="w-full"
                asChild
              >
                <a href="tel:(888) 363-0848">Call Now (888) 363-0848</a>
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="tel:(888) 363-0848"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Call Now (888) 363-0848
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
