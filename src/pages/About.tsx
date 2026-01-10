import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import technicianImage from '@/assets/technician-install.jpg';

const stats = [
  { value: '2026', label: 'Founded' },
  { value: '100%', label: 'Independent' },
  { value: '1000+', label: 'Consultations' },
  { value: '24/7', label: 'Advisory Service' },
];

const values = [
  { icon: Users, title: 'Independent Guidance', description: 'We provide unbiased advice to help you understand connectivity options from multiple providers.' },
  { icon: Award, title: 'Expert Knowledge', description: 'Our team has extensive knowledge of internet/broadband options and provider offerings.' },
  { icon: Clock, title: 'Always Available', description: '24/7 independent advisory service available to answer your questions anytime.' },
  { icon: Shield, title: 'No ISP Affiliation', description: 'We are completely independent and NOT affiliated with any internet or cable provider.' },
];

const About = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <motion.div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        
        <div className="container-width section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">About <span className="gradient-text">TALK POINT SOLUTIONS</span></h1>
              <h2 className="text-2xl font-bold text-foreground mb-4">What We Do</h2>
              <p className="text-lg text-muted-foreground mb-6">At https://talkpointcommunication.com/, we help users understand internet/broadband service options, get practical guidance on connectivity issues, and learn how to navigate service provider processes.</p>
              <h2 className="text-2xl font-bold text-foreground mb-4">What We DON'T Do</h2>
              <p className="text-lg text-muted-foreground mb-6">We are NOT an internet service provider (ISP). We are NOT affiliated, authorized, or endorsed by any telecom/cable company. We do NOT sell official ISP services. We do NOT provide guaranteed technical fixes. All mentions of providers are for informational purposes only.</p>
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <img src={technicianImage} alt="Professional installation" className="relative rounded-2xl shadow-xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} animate={{ x: [0, 40] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
        <div className="container-width px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="text-center">
                <motion.div className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-2" whileHover={{ scale: 1.1 }}>{stat.value}</motion.div>
                <div className="text-primary-foreground/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-width">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">These principles guide everything we do.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -8 }} className="text-center">
                <motion.div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4" whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.5 }}>
                  <value.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-8 shadow-card">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">What We DON'T Do - To Avoid Confusion</h3>
            <div className="text-muted-foreground text-center max-w-3xl mx-auto space-y-3">
              <p>• We are NOT an internet service provider (ISP)</p>
              <p>• We are NOT affiliated, authorized, or endorsed by any telecom/cable company</p>
              <p>• We do NOT sell official ISP services</p>
              <p>• We do NOT provide guaranteed technical fixes</p>
              <p className="mt-4 font-semibold">All mentions of providers are for informational purposes only.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
