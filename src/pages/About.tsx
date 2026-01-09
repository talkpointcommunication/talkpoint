import { motion } from 'framer-motion';
import { Users, Award, Clock, Shield } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import technicianImage from '@/assets/technician-install.jpg';

const stats = [
  { value: '2026', label: 'Founded' },
  { value: '100%', label: 'Independent' },
  { value: '1000+', label: 'People Assisted' },
  { value: '24/7', label: 'Assistance Available' },
];

const values = [
  { icon: Users, title: 'Customer Guidance', description: 'We provide personalized assistance to help you understand your connectivity options.' },
  { icon: Award, title: 'Expert Knowledge', description: 'Our team has extensive knowledge of connectivity solutions and provider offerings.' },
  { icon: Clock, title: 'Always Available', description: '24/7 assistance available to answer your questions anytime.' },
  { icon: Shield, title: 'Independent Service', description: 'We are completely independent and not affiliated with any provider.' },
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
              <p className="text-lg text-muted-foreground mb-6">Launched in 2026, we're an independent third-party assistance platform dedicated to helping you navigate the complex world of internet and cable TV connectivity options.</p>
              <p className="text-lg text-muted-foreground mb-6">We don't sell plans. We don't represent providers. We provide expert guidance and support to help you make informed decisions about your connectivity needs.</p>
              <p className="text-lg text-muted-foreground">Our mission: transparent assistance, expert knowledge, and support you can trust.</p>
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
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">Independent Service Disclosure</h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto">
              TALK POINT SOLUTIONS is an independent third-party assistance service launched in 2026. We are NOT affiliated with, 
              endorsed by, or acting as an official representative of any internet, cable, or telecommunications provider. 
              We do NOT sell services or plans. We provide guidance and assistance for separate fees. All provider names and 
              trademarks are property of their respective owners.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
