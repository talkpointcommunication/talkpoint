import { Layout } from '@/components/layout/Layout';

const Privacy = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-width max-w-4xl">
          {/* Disclosure Banner */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-2">Independent Service Disclosure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TALK POINT SOLUTIONS is an independent third-party assistance service. We do NOT collect 
              provider account passwords or credentials. We only collect information necessary to provide 
              our guidance and assistance services.
            </p>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you request assistance, 
              fill out a form, or contact us for support. This may include your name, 
              address, email, phone number, and connectivity needs. <strong>We NEVER collect or request 
              provider account passwords or login credentials.</strong>
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-4">
              <li>Provide assistance and guidance services</li>
              <li>Help you understand connectivity options in your area</li>
              <li>Communicate with you about our assistance services</li>
              <li>Improve our website and guidance services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              As an independent assistance platform, we may share limited information (such as your contact details 
              and connectivity preferences) with providers only when you explicitly request our assistance in 
              exploring their services. We do not sell your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              You have the right to access, correct, or delete your personal information. 
              You may also opt out of marketing communications at any time.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For privacy-related inquiries, please contact:
              <br />
              Email: privacy@talkpointsolutions.com
              <br />
              Phone: (888) 363-0848
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
