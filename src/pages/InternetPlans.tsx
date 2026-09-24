import { motion } from 'framer-motion';
import { Check, Music, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';
import internetImage from '@/assets/internet-service.jpg';

const plans = [
  {
    name: 'Music Express',
    content: 'Ad-Supported',
    price: '5.99',
    description: 'Music streaming with ads',
    features: [
      'Millions of songs',
      'Standard audio quality',
      'Ad-supported playback',
      'Mobile and desktop',
      'Offline downloads on mobile',
      'Skip limitations',
    ],
    popular: false,
  },
  {
    name: 'Music Premium',
    content: 'Ad-Free',
    price: '10.99',
    description: 'Full music experience',
    features: [
      'Millions of songs',
      'High fidelity audio quality',
      'Ad-free listening',
      'All devices supported',
      'Unlimited downloads',
      'Family plan available',
      'Offline playback',
    ],
    popular: true,
  },
  {
    name: 'Live TV Stream',
    content: '50+ Channels',
    price: '64.99',
    description: 'Live sports and events',
    features: [
      '50+ live channels',
      'Sports coverage',
      'News and events',
      'Cloud DVR 100 hours',
      'Watch on 2 devices',
      '4K sports available',
      'Mobile viewing',
    ],
    popular: false,
  },
  {
    name: 'Entertainment+',
    content: 'All Inclusive',
    price: '89.99',
    description: 'Complete entertainment',
    features: [
      'Video streaming + Music',
      'Live TV channels',
      'Exclusive content',
      'No ads',
      '4K/HDR quality',
      'Watch on 4 devices',
      'Priority support',
    ],
    popular: false,
  },
];

const InternetPlans = () => {
  useSEO({
    title: 'Music & Live TV Streaming Services - Talk Point Communication',
    description: 'Get guidance on music streaming services and live TV platforms. Understand subscription options, features, and find the right entertainment services for you.',
    keywords: 'music streaming, live TV streaming, audio streaming services, streaming music comparison',
    canonicalUrl: 'https://talkpointcommunication.com/internet-plans',
  });

  return (
    <Layout>
      {/* Disclosure Banner */}
      <div className="bg-primary/10 border-b-2 border-primary/30 py-4">
        <div className="container-width">
          <p className="text-xs sm:text-sm text-foreground text-center leading-relaxed">
            <strong>Important Disclosure:</strong> The services shown are examples from various platforms. Talk Point Communication does NOT sell these subscriptions. 
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
                Subscription Services
              </motion.span>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Understanding <span className="gradient-text">Music & Live TV Options</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We help you navigate music streaming, live TV services, and entertainment bundles. 
                Our expert team provides guidance on finding the right subscription fit.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" className="group" asChild>
                  <a href="tel:+18888824649">
                    Call Now (888) 882-4649
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+18888824649">Call (888) 882-4649</a>
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
                alt="Music streaming and live entertainment platform interface showing artist library and playlists"
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
              Popular Subscription Tiers
            </h2>
            <p className="text-lg text-muted-foreground">
              These are typical entertainment subscription options from various services. We help you understand which may work best for you.
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
                    <Music className="w-5 h-5 text-primary" />
                    <span className="text-3xl font-bold text-foreground">{plan.content}</span>
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
                  <a href="tel:+18888824649">Call Now (888) 882-4649</a>
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
              * Service availability may vary by region. Prices shown are examples and may require subscription agreements. 
              Features and content libraries vary by service and region. Family plans and bundled options may be available. See full terms and conditions for details.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default InternetPlans;
