import { Layout } from '@/components/layout/Layout';

const Cookies = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-width max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">What Are Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Cookies are small text files that are placed on your computer or mobile device when 
              you visit a website. They are widely used to make websites work more efficiently and 
              to provide information to the owners of the site.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Cookies</h2>
            <p className="text-muted-foreground mb-4">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve your browsing experience</li>
              <li>Analyze website traffic and performance</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Types of Cookies We Use</h2>
            <p className="text-muted-foreground mb-4">
              <strong>Essential Cookies:</strong> Required for the website to function properly.
              <br /><br />
              <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.
              <br /><br />
              <strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Managing Cookies</h2>
            <p className="text-muted-foreground mb-4">
              You can control and manage cookies through your browser settings. Please note that 
              removing or blocking cookies may impact your user experience and some features may 
              not function properly.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about our use of cookies, please contact us at privacy@talkpointsolutions.com.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
