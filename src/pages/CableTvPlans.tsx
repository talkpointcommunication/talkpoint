import { motion } from 'framer-motion';
import { Check, Tv, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import cableTvImage from '@/assets/cable-tv-service.jpg';

const plans = [
  {
    name: 'Basic',
    channels: '75+',
    price: '49.99',
    description: 'Essential entertainment',
    features: [
      '75+ HD channels',
      'Local channels included',
      'On-demand library',
      'Cloud DVR (50 hours)',
      'Watch on 2 devices',
    ],
    popular: false,
  },
  {
    name: 'Select',
    channels: '150+',
    price: '69.99',
    description: 'More channels, more content',
    features: [
      '150+ HD channels',
      'All Basic channels',
      'Sports channels',
      'Cloud DVR (100 hours)',
      'Watch on 3 devices',
      'Premium on-demand',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    channels: '200+',
    price: '89.99',
    description: 'Ultimate entertainment',
    features: [
      '200+ HD channels',
      'All Select channels',
      'Premium movie channels',
      'International channels',
      'Cloud DVR (unlimited)',
      'Watch on 5 devices',
      '4K content available',
    ],
    popular: false,
  },
];

const CableTvPlans = () => {
  return (
    <Layout>
      {/* Disclosure Banner */}
      <div className="bg-primary/10 border-b-2 border-primary/30 py-4">
        <div className="container-width">
          <p className="text-xs sm:text-sm text-foreground text-center leading-relaxed">
            <strong>Important Disclosure:</strong> The TV packages shown are examples from various providers. TALK POINT SOLUTIONS does NOT sell these plans. 
            We are an independent assistance service that charges separate fees to help you understand cable TV options.
          </p>
        </div>
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
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
                className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
              >
                Cable TV Plans
              </motion.span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Understanding <span className="gradient-text">Cable TV Options</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We help you navigate HD channels, on-demand content, and sports packages. 
                Our team provides expert guidance to help you understand cable TV options.
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
                src={cableTvImage}
                alt="Premium cable TV experience"
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
              TV Packages for Everyone
            </h2>
            <p className="text-lg text-muted-foreground">
              From local channels to premium entertainment, we have a package for every household.
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
                  <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    <Tv className="w-5 h-5 text-primary" />
                    <span className="text-3xl font-bold text-foreground">{plan.channels}</span>
                    <span className="text-muted-foreground">Channels</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
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
                >
                  <a href="tel:(888) 363-0848">Get Assistance</a>
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
              * Channel availability may vary by region. Prices shown are for new customers. 
              Some channels require additional equipment or fees. See full terms and conditions for details.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CableTvPlans;
