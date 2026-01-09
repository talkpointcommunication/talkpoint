import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Disclaimer = () => {
  return (
    <Layout>
      <div className="section-padding">
        <div className="container-width max-w-4xl">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Disclaimer</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Last Updated: January 8, 2026
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              {/* Critical Disclosure */}
              <section>
                <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6">
                  <div className="flex gap-4">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-3">Independent Service Disclosure</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        TALK POINT SOLUTIONS is an independent third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by, or sponsored by any cable television, internet service, or streaming platform provider. We do not sell internet plans, cable TV packages, or streaming subscriptions. Our role is strictly limited to providing guidance, assistance, and educational support to help you navigate your options.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Nature of Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  TALK POINT SOLUTIONS provides guidance and assistance services only. We do not:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Operate as an internet service provider (ISP)</li>
                  <li>Provide cable television services</li>
                  <li>Sell or manage streaming platform subscriptions</li>
                  <li>Install, maintain, or repair provider equipment</li>
                  <li>Have access to provider billing systems or account credentials</li>
                  <li>Act as an authorized representative of any service provider</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Service Fees</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TALK POINT SOLUTIONS charges separate service and assistance fees for the guidance we provide. These fees are distinct from and in addition to any charges you incur with internet, cable, or streaming service providers. You will continue to be billed directly by your chosen provider(s) according to their terms and pricing.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">No Provider Affiliation</h2>
                <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Any references to internet providers, cable companies, or streaming platforms on this website are for informational and descriptive purposes only. Mention of provider names, trademarks®, or service marks™ does not imply:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Partnership, sponsorship, or endorsement by those providers</li>
                    <li>Authorization to act on behalf of those providers</li>
                    <li>Access to exclusive deals or official provider pricing</li>
                    <li>Direct integration with provider systems or databases</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Trademark Notice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All trademarks, service marks, logos, and brand names mentioned on this website are the property of their respective owners. Their use on this website is purely for descriptive reference and educational purposes. TALK POINT SOLUTIONS claims no ownership or affiliation with these marks.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Accuracy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive to provide accurate and up-to-date information, TALK POINT SOLUTIONS makes no representations or warranties about:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                  <li>Current provider pricing, plans, or availability</li>
                  <li>Provider service quality or performance</li>
                  <li>Provider terms, conditions, or policies</li>
                  <li>Compatibility or technical specifications</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  You should verify all details directly with service providers before making decisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TALK POINT SOLUTIONS shall not be held liable for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                  <li>Provider service outages, interruptions, or performance issues</li>
                  <li>Changes to provider pricing, terms, or availability</li>
                  <li>Provider billing errors or disputes</li>
                  <li>Equipment malfunctions or compatibility issues</li>
                  <li>Delays in provider installation or service activation</li>
                  <li>Provider customer service experiences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibility</h2>
                <div className="bg-secondary/50 rounded-xl p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    By using our assistance services, you acknowledge that:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                    <li>You are responsible for all agreements and contracts you enter into with service providers</li>
                    <li>You must review provider terms and conditions independently</li>
                    <li>You are responsible for verifying pricing, availability, and service details</li>
                    <li>You must maintain direct communication with your chosen provider(s)</li>
                    <li>TALK POINT SOLUTIONS cannot cancel, modify, or intervene in provider agreements on your behalf</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">No Guarantees</h2>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-r-xl p-6">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground leading-relaxed">
                        TALK POINT SOLUTIONS makes no guarantees regarding service availability, pricing, installation timelines, or provider acceptance of your application. We provide assistance and guidance, but final decisions and service provisioning rest solely with the individual providers.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Privacy & Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  TALK POINT SOLUTIONS will never request your service provider account passwords, sensitive financial information, or Social Security numbers. We do not have access to provider billing systems or customer databases. For information on how we handle your data, please review our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have questions about this Disclaimer or our services, please contact us:
                </p>
                <div className="bg-secondary/50 rounded-xl p-6 space-y-3">
                  <p className="text-foreground font-medium">TALK POINT SOLUTIONS</p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (888) 363-0848
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> support@talkpointsolutions.com
                  </p>
                  <p className="text-muted-foreground text-sm mt-4">
                    Available 24/7 for assistance
                  </p>
                </div>
              </section>

              <section className="bg-muted/30 rounded-xl p-6 mt-8">
                <p className="text-sm text-muted-foreground text-center">
                  This disclaimer was last updated on January 8, 2026. We reserve the right to modify this disclaimer at any time. Please check this page periodically for updates.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Disclaimer;
