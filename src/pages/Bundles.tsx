import { motion } from 'framer-motion';
import { Check, Package, ArrowRight, Star, Wifi, Tv } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import bundleImage from '@/assets/bundle-service.jpg';

const bundles = [
  {
    name: 'Essential Bundle',
    savings: '15',
    price: '79.99',
    internet: '100 Mbps Internet',
    tv: '75+ TV Channels',
    features: ['Free modem & router', 'Cloud DVR included', 'Unlimited data', '24/7 support'],
    popular: false,
  },
  {
    name: 'Value Bundle',
    savings: '25',
    price: '109.99',
    internet: '300 Mbps Internet',
    tv: '150+ TV Channels',
    features: ['WiFi 6 router included', '100-hour Cloud DVR', 'Sports package', 'Priority support', 'Free installation'],
    popular: true,
  },
  {
    name: 'Ultimate Bundle',
    savings: '40',
    price: '159.99',
    internet: '1 Gbps Internet',
    tv: '200+ TV Channels',
    features: ['Premium WiFi 6E router', 'Unlimited Cloud DVR', 'All premium channels', 'VIP support', 'Whole-home WiFi mesh', '4K content included'],
    popular: false,
  },
];

const Bundles = () => {
  return (
    <Layout>
      {/* Disclosure Banner */}
      <div className="bg-primary/10 border-b-2 border-primary/30 py-4">
        <div className="container-width">
          <p className="text-xs sm:text-sm text-foreground text-center leading-relaxed">
            <strong>Important Disclosure:</strong> The bundle options shown are examples from various providers. TALK POINT SOLUTIONS does NOT sell these bundles. 
            We are an independent assistance service that charges separate fees to help you understand bundled connectivity options.
          </p>
        </div>
      </div>

      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        
        <div className="container-width section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Save up to $40/month
              </motion.div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Understanding <span className="gradient-text">Bundle Options</span></h1>
              <p className="text-lg text-muted-foreground mb-8">We help you explore combined internet and TV packages to understand potential savings and options.</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="cta" size="lg" className="group" asChild><a href="tel:(888) 363-0848">Call Now (888) 363-0848 <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></a></Button>
                <Button variant="outline" size="lg" asChild><a href="tel:(888) 363-0848">Call (888) 363-0848</a></Button>
              </div>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img src={bundleImage} alt="Bundle deal" className="relative rounded-2xl shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Example Bundle Options</h2>
            <p className="text-lg text-muted-foreground">These are typical bundled packages from providers. We help you understand which options may fit your needs.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bundles.map((bundle, index) => (
              <motion.div key={bundle.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} whileHover={{ y: -8 }} className={`relative card-base p-6 lg:p-8 ${bundle.popular ? 'ring-2 ring-primary' : ''}`}>
                {bundle.popular && <motion.div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5, type: "spring" }}>Best Value</motion.div>}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium mb-3">Save ${bundle.savings}/mo</div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{bundle.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-center gap-2 text-sm"><Wifi className="w-4 h-4 text-primary" /><span className="text-foreground font-medium">{bundle.internet}</span></div>
                    <div className="flex items-center justify-center gap-2 text-sm"><Tv className="w-4 h-4 text-primary" /><span className="text-foreground font-medium">{bundle.tv}</span></div>
                  </div>
                  <div className="flex items-baseline justify-center gap-1"><span className="text-3xl font-bold text-foreground">${bundle.price}</span><span className="text-muted-foreground">/mo</span></div>
                </div>
                <ul className="space-y-3 mb-8">{bundle.features.map((feature) => (<li key={feature} className="flex items-start gap-2"><Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{feature}</span></li>))}</ul>
                <Button variant={bundle.popular ? 'cta' : 'outline'} className="w-full" size="lg">Get Bundle</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-muted rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground">* Bundle pricing requires subscription to both services. Savings compared to purchasing services separately.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Bundles;
