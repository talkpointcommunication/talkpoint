import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Internet Plans', href: '/internet-plans' },
      { name: 'Cable TV Plans', href: '/cable-tv-plans' },
      { name: 'Bundle Deals', href: '/bundles' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  },
];

const Sitemap = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-width max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {sitemapSections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-foreground mb-4">{section.title}</h2>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sitemap;
