import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Internet', href: '/internet-plans' },
  { name: 'Cable TV', href: '/cable-tv-plans' },
  { name: 'Bundles', href: '/bundles' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-width !px-4 sm:!px-6 lg:!px-8 !py-3 sm:!py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <Logo className="w-10 h-10 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-black text-foreground leading-tight">TALK POINT</span>
              <span className="text-[8px] sm:text-[10px] md:text-xs font-semibold gradient-text leading-tight">SOLUTIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a href="tel:(888) 363-0848" className="hidden xl:flex items-center gap-2 text-xs lg:text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
              (888) 363-0848
            </a>
            <Button variant="cta" size="sm" asChild className="hidden xl:flex text-xs lg:text-sm">
              <a href="tel:(888) 363-0848">Call Now (888) 363-0848</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors touch-manipulation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-up">
            <div className="flex flex-col gap-3 sm:gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm sm:text-base font-medium transition-colors py-2 touch-manipulation ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 sm:pt-4 border-t border-border mt-2">
                <a href="tel:(888) 363-0848" className="flex items-center gap-2 text-sm sm:text-base font-medium text-muted-foreground mb-3 sm:mb-4 touch-manipulation">
                  <Phone className="w-4 h-4" />
                  (888) 363-0848
                </a>
                <Button variant="cta" className="w-full touch-manipulation" asChild>
                  <a href="tel:(888) 363-0848">Get Started</a>
                </Button>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
