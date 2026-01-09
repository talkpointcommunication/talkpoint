import { ArrowRight, Check, Play, Wifi, Tv, Zap, Star, Shield, Clock, Sparkles, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-family.jpg';

const features = [
  { text: 'Expert Guidance', icon: Zap },
  { text: '24/7 Support', icon: Wifi },
  { text: 'No Hidden Fees', icon: Check },
];

const stats = [
  { icon: Star, value: '4.9', unit: '/5', label: 'Rating' },
  { icon: Shield, value: '500K', unit: '+', label: 'Customers' },
  { icon: Clock, value: '24', unit: '/7', label: 'Support' },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
        <motion.img
          src={heroImage}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-10"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-gradient-to-tr from-success/30 to-accent/30 blur-3xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-width relative z-20 min-h-screen flex items-center py-20">
        {/* Center-Aligned Content */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center space-y-8">
            {/* Disclosure Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-4 mb-4 max-w-4xl mx-auto"
            >
              <p className="text-xs sm:text-sm text-foreground text-center leading-relaxed">
                <strong className="block sm:inline mb-1 sm:mb-0">Independent Service Disclosure:</strong> TALK POINT SOLUTIONS is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide guidance and assistance services only.
              </p>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-success/10 border-2 border-primary/20 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold gradient-text">Assistance Services Available 24/7</span>
              <Sparkles className="w-4 h-4 text-success" />
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-foreground mb-6 leading-[1.05]">
                Navigate Your
                <span className="block mt-3">
                  <span className="gradient-text">Connectivity</span>
                </span>
                <span className="block">Options with Ease</span>
              </h1>
              <motion.div
                className="w-32 h-1.5 bg-gradient-to-r from-primary via-accent to-success rounded-full mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 128 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4"
            >
              We <span className="font-bold text-foreground">guide you</span> through internet, cable TV, and streaming options. Get <span className="font-bold text-foreground">personalized assistance</span> to help you make informed decisions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0 max-w-2xl mx-auto"
            >
              <Button variant="cta" size="xl" className="group shadow-2xl hover:shadow-primary/25 w-full sm:w-auto sm:min-w-[240px]" asChild>
                <a href="tel:(888) 363-0848">
                  Call Now (888) 363-0848
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="gap-2 group w-full sm:w-auto sm:min-w-[200px]" asChild>
                <a href="tel:(888) 363-0848">
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Call Now (888) 363-0848
                </a>
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-6 px-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 sm:gap-3 bg-card/80 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="pt-16"
            >
              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative group"
                  >
                    <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 border border-border/50 hover:border-primary/50 transition-all shadow-lg hover:shadow-xl">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-center">
                          <div className="flex items-baseline justify-center">
                            <span className="text-4xl font-black text-foreground">{stat.value}</span>
                            <span className="text-2xl font-bold text-primary">{stat.unit}</span>
                          </div>
                          <p className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Floating Mini Cards */}
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute left-10 top-1/3 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-success to-emerald-500 flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">1 Gbps</p>
                    <p className="text-xs text-muted-foreground">Ultra Fast</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="absolute right-10 top-1/2 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                    <Tv className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">200+</p>
                    <p className="text-xs text-muted-foreground">Channels</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
