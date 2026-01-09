import { Layout } from '@/components/layout/Layout';

const Accessibility = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-width max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Accessibility Statement</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Our Commitment</h2>
            <p className="text-muted-foreground mb-4">
              TALK POINT SOLUTIONS is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Accessibility Features</h2>
            <p className="text-muted-foreground mb-4">
              Our website includes the following accessibility features:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>Alternative text for images</li>
              <li>Clear and consistent navigation</li>
              <li>Sufficient color contrast</li>
              <li>Resizable text</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Conformance Status</h2>
            <p className="text-muted-foreground mb-4">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. 
              These guidelines explain how to make web content more accessible for people with 
              disabilities.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Feedback</h2>
            <p className="text-muted-foreground mb-4">
              We welcome your feedback on the accessibility of our website. Please let us know 
              if you encounter accessibility barriers:
              <br /><br />
              Email: accessibility@talkpointsolutions.com
              <br />
              Phone: (888) 363-0848
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Alternative Access</h2>
            <p className="text-muted-foreground mb-4">
              If you have difficulty using our website, please call us at (888) 363-0848. 
              Our team will be happy to assist you with service information and sign-up.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Accessibility;
