import { useState } from 'react';
import { Phone, Mail, Send, Clock } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useSEO } from '@/hooks/useSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['(888) 882-4649', 'Mon-Fri 8am-8pm, Sat 9am-5pm'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['support@talkpointcommunication.com', 'We respond within 24 hours'],
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Monday - Friday: 8am - 8pm', 'Saturday: 9am - 5pm'],
  },
];

const Contact = () => {
  useSEO({
    title: 'Contact Talk Point Communication - 24/7 Independent Entertainment Guidance',
    description: 'Get in touch with our independent entertainment advisors. Available 24/7 to help you understand streaming services and find the right entertainment solution for your needs.',
    keywords: 'contact streaming advisor, entertainment guidance, customer support, streaming help',
    canonicalUrl: 'https://talkpointcommunication.com/contact',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <Layout>
      {/* Disclosure Banner */}
      <div className="bg-primary/10 border-b-2 border-primary/30 py-4">
        <div className="container-width">
          <p className="text-xs sm:text-sm text-foreground text-center leading-relaxed">
            <strong>Not a streaming provider. No brand affiliation.</strong> We are independent third-party entertainment advisors. 
            We do NOT sell subscriptions or represent any streaming platform. We provide unbiased guidance only.
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-width section-padding relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Get Independent <span className="gradient-text">Guidance</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Have questions about streaming services, music subscriptions, or entertainment options? Need help understanding available services? 
              Our independent advisors are here to provide unbiased guidance—NOT to sell you anything.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-base p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Request Independent Guidance</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button variant="cta" size="lg" type="submit" className="w-full">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="card-base p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Quick Call CTA */}
              <div className="bg-primary rounded-2xl p-6 text-center">
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  Prefer to Talk?
                </h3>
                <p className="text-primary-foreground/80 mb-4">
                  Call us now and speak with a specialist
                </p>
                <a
                  href="tel:+18888824649"
                  className="inline-flex items-center gap-2 bg-primary-foreground text-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary-foreground/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  (888) 882-4649
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
