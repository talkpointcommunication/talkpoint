import { Layout } from '@/components/layout/Layout';

const Terms = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-width max-w-4xl">
          {/* Mandatory Disclosure Banner */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-bold text-foreground mb-2">Independent Service Disclosure</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              TALK POINT SOLUTIONS is an <strong>independent third-party assistance service</strong>, launched in 2026. 
              We are NOT affiliated with, endorsed by, or acting as an official representative of any internet, cable, 
              or telecommunications provider. We do NOT sell internet or cable TV plans. We provide guidance and assistance 
              to help you understand available connectivity options. We charge separate fees for our assistance services, 
              independent of any provider charges. All provider names and trademarks are the property of their respective owners.
            </p>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              Last updated: January 2025
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using our assistance services, you agree to be bound by these Terms of Service 
              and all applicable laws and regulations. If you do not agree with any of these terms, 
              you are prohibited from using or accessing our services.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4">
              TALK POINT SOLUTIONS is an independent third-party assistance platform that provides guidance 
              to help customers understand and navigate internet and cable TV connectivity options. We do NOT 
              sell plans or services. We do NOT act on behalf of any provider. We provide informational support 
              and assistance only. All actual services are subject to the terms and conditions of the respective providers.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Assistance Fees and Payments</h2>
            <p className="text-muted-foreground mb-4">
              We charge separate fees for our assistance and guidance services. These fees are independent 
              of any provider charges you may incur. All assistance fees are disclosed before you engage our services. 
              Provider pricing is subject to change by the providers themselves. We do not control or receive provider fees.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Service Availability</h2>
            <p className="text-muted-foreground mb-4">
              The availability of connectivity options varies by location and provider. We assist you in understanding 
              what may be available in your area, but we cannot guarantee specific availability, speeds, or services 
              until confirmed by the actual provider. Our assistance is informational only.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              TALK POINT SOLUTIONS shall not be liable for any indirect, incidental, special, consequential, 
              or punitive damages resulting from your use of our assistance services or the services provided 
              by third-party providers. We provide guidance only and are not responsible for provider service quality, 
              availability, or performance.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Refund Policy</h2>
            <p className="text-muted-foreground mb-4">
              For information about refunds on our assistance fees, please see our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> page. 
              Refunds for provider services are subject to the provider's own refund policies.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Contact Information</h2>
            <p className="text-muted-foreground mb-4">
              For questions about these Terms of Service, please contact us at:
              <br />
              Email: legal@talkpointsolutions.com
              <br />
              Phone: (888) 363-0848
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
