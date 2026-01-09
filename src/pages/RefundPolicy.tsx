import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const RefundPolicy = () => {
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
            {/* Disclosure Banner */}
            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 mb-8">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-2">Independent Service Disclosure</h3>
                  <p className="text-sm text-muted-foreground">
                    TALK POINT SOLUTIONS is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide guidance and assistance services only—we do not sell plans or services directly.
                  </p>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Refund Policy</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Last Updated: January 8, 2026
            </p>

            <div className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Refund Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. The refund window and eligibility criteria are determined by whether our assistance services have already been delivered and the nature of the support requested.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Please note that TALK POINT SOLUTIONS charges separate service and assistance fees. These fees are distinct from any charges you may incur directly with internet, cable, or streaming service providers. Our refund policy applies only to the assistance fees charged by TALK POINT SOLUTIONS—not to provider charges.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7-Day Refund Window</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Services eligible for a 7-day refund include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Initial consultation services where limited or no personalized guidance was provided</li>
                  <li>General support requests that were not fully addressed</li>
                  <li>Guidance sessions that did not meet the scope outlined at purchase</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">15-Day Refund Window</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Services eligible for a 15-day refund include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Comprehensive assistance packages with ongoing support components</li>
                  <li>Multi-session guidance programs</li>
                  <li>Educational and training assistance services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Non-Refundable Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are not eligible for refunds:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Assistance services that have been fully delivered and completed</li>
                  <li>Customized guidance sessions that have already been conducted</li>
                  <li>Requests made after the applicable refund window (7 or 15 days) has expired</li>
                  <li>Third-party provider charges, fees, or plan costs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Request a Refund</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To request a refund, please contact us within the applicable refund window:
                </p>
                <div className="bg-secondary/50 rounded-xl p-6 space-y-3">
                  <p className="text-foreground font-medium">Contact Information:</p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> (888) 363-0848
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> support@talkpointsolutions.com
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Please include your full name, contact information, service date, and reason for the refund request. Refund requests will be reviewed within 5-7 business days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Processing Time</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Approved refunds will be processed within 7-10 business days and will be credited to the original payment method used at the time of purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Important Clarifications</h2>
                <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6">
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>TALK POINT SOLUTIONS does not process refunds for service provider charges</li>
                    <li>We do not have access to provider billing systems</li>
                    <li>For provider billing disputes, contact the provider directly</li>
                    <li>Our refund policy applies exclusively to our assistance service fees</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about our Refund Policy, please contact us at support@talkpointsolutions.com or call (888) 363-0848. Our support team is available 24/7 to assist you.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default RefundPolicy;
