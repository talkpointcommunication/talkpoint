import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import internetImage from '@/assets/internet-service.jpg';

const plans = [
  {
    name: 'Essential',
    speed: '100',
    price: '39.99',
    description: 'Perfect for browsing and streaming',
    features: [
      'Up to 100 Mbps download',
      'Up to 10 Mbps upload',
      'Unlimited data',
      'Free modem rental',
      '24/7 customer support',
      'Email included',
    ],
    popular: false,
  },
  {
    name: 'Performance',
    speed: '300',
    price: '59.99',
    description: 'Ideal for families and remote work',
    features: [
      'Up to 300 Mbps download',
      'Up to 30 Mbps upload',
      'Unlimited data',
      'Free modem & router',
      'Priority support',
      'Free installation',
      'WiFi optimization',
    ],
    popular: true,
  },
  {
    name: 'Ultimate',
    speed: '500',
    price: '79.99',
    description: 'Great for gamers and streamers',
    features: [
      'Up to 500 Mbps download',
      'Up to 50 Mbps upload',
      'Unlimited data',
      'Premium WiFi 6 router',
      'VIP support line',
      'Same-day installation',
      'Free mesh WiFi extender',
    ],
    popular: false,
  },
  {
    name: 'Gigabit',
    speed: '1000',
    price: '99.99',
    description: 'Maximum speed for power users',
    features: [
      'Up to 1 Gbps download',
      'Up to 100 Mbps upload',
      'Unlimited data',
      'Premium WiFi 6E router',
      'Dedicated support team',
      'Priority installation',
      '2 mesh WiFi extenders',
      'Static IP option',
    ],
    popular: false,
  },
];

const InternetPlans = () => {
  return (
    <Layout>
      {/* Disclosure Banner */}
      <div className="bg-primary/10 border-b-2 border-primary/30 py-4">
        <div className="container-width">
          <p className="text-xs sm:text-sm text-foreground text-center leading-relaxed">
            <strong>Important Disclosure:</strong> The plans shown are examples from various providers. TALK POINT SOLUTIONS does NOT sell these plans. 
            We are an independent assistance service that charges separate fees to help you understand and navigate these options.
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div 
          className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container-width section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              >
                Internet Plans
              </motion.span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Understanding <span className="gradient-text">Internet Options</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We help you navigate fiber and cable internet options with speeds up to 1 Gbps. 
                Our expert team provides guidance on streaming, gaming, working from home, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" className="group" asChild>
                  <a href="tel:(888) 363-0848">
                    Call Now (888) 363-0848
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:(888) 363-0848">Call (888) 363-0848</a>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img
                src={internetImage}
                alt="High-speed internet router"
                className="relative rounded-2xl shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Example Speed Tiers
            </h2>
            <p className="text-lg text-muted-foreground">
              These are typical connectivity options from various providers. We help you understand which may work best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative card-base p-6 ${
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
                    Best Value
                  </motion.div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-3xl font-bold text-foreground">{plan.speed}</span>
                    <span className="text-muted-foreground">Mbps</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.popular ? 'cta' : 'outline'}
                  className="w-full"
                  size="lg"
                  asChild
                >
                  <a href="tel:(888) 363-0848">Call Now (888) 363-0848</a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding">
        <div className="container-width">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-6 text-center"
          >
            <p className="text-sm text-muted-foreground">
              * Speeds may vary based on location and network conditions. Prices shown are for new customers and may require a 12-month agreement. 
              Equipment rental and installation fees may apply. See full terms and conditions for details.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default InternetPlans;
