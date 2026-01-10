import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Logo } from '@/components/Logo';

const footerLinks = {
  services: [
    { name: 'Internet Guidance', href: '/contact' },
    { name: 'Cable TV Help', href: '/contact' },
    { name: 'Connectivity Support', href: '/contact' },
    { name: 'Business Consultation', href: '/contact' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <Logo className="w-12 h-12 transition-transform group-hover:scale-105" />
              <div className="flex flex-col">
                <span className="text-lg font-black leading-tight">TALK POINT</span>
                <span className="text-xs font-semibold text-primary leading-tight">SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-primary-foreground/70 mb-4 sm:mb-6 max-w-sm">
              An independent third-party advisory service helping you navigate internet and cable TV options. We are NOT an ISP or affiliated with any provider—we provide unbiased guidance only.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:(888) 363-0848" className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (888) 363-0848
              </a>
              <a href="mailto:support@talkpointsolutions.com" className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                support@talkpointsolutions.com
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>123 Tech Street, Innovation City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mandatory Disclosure */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="bg-primary-foreground/10 rounded-xl p-6 mb-6 border-2 border-primary/20">
            <p className="text-sm text-primary-foreground font-medium text-center leading-relaxed">
              <strong className="block mb-2 text-base">What We DON'T Do:</strong>
              We are NOT an internet service provider (ISP). We are NOT affiliated, authorized, or endorsed by any telecom/cable company. We do NOT sell official ISP services. We do NOT provide guaranteed technical fixes. All mentions of providers are for informational purposes only. TALK POINT SOLUTIONS is an independent third-party advisory startup providing guidance services only.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} TALK POINT SOLUTIONS. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/terms" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/refund-policy" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                Refund Policy
              </Link>
              <Link to="/disclaimer" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
