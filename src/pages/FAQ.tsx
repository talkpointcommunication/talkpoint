import { Layout } from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

const faqs = [
  {
    category: 'About Our Service',
    questions: [
      {
        q: 'Are you an official cable or internet service provider?',
        a: 'No. TALK POINT SOLUTIONS is an independent third-party assistance platform. We are not an internet service provider (ISP) or cable company. We provide guidance and support to help you navigate your connectivity options.',
      },
      {
        q: 'Do you sell internet, cable, or streaming plans?',
        a: 'No. We do not sell internet, cable TV, or streaming plans. We provide guidance and assistance services only. All service purchases and agreements are made directly between you and the service provider of your choice.',
      },
      {
        q: 'Do you charge for your services?',
        a: 'Yes. Our service fees are separate from provider charges. We charge for the assistance, guidance, and support we provide. These fees are clearly disclosed before you proceed with our services.',
      },
      {
        q: 'Are you affiliated with any service providers?',
        a: 'No. TALK POINT SOLUTIONS is completely independent and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We maintain independence to provide unbiased guidance.',
      },
    ],
  },
  {
    category: 'Billing & Payments',
    questions: [
      {
        q: 'Will I still be billed by my service provider?',
        a: 'Yes. Provider billing remains completely unchanged. You will continue to be billed directly by your chosen service provider according to their terms and pricing. Our assistance fees are separate and distinct from provider charges.',
      },
      {
        q: 'What forms of payment do you accept?',
        a: 'We accept major credit cards, debit cards, and electronic payment methods for our assistance service fees. All provider billing is handled directly by the provider.',
      },
      {
        q: 'Can you help me with provider billing disputes?',
        a: 'We can provide guidance on how to contact your provider regarding billing issues. However, we do not have access to provider billing systems and cannot resolve billing disputes on your behalf. You must contact the provider directly for billing matters.',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        q: 'Do you need my account passwords or sensitive information?',
        a: 'No. We never request provider account passwords, Social Security numbers, or sensitive financial credentials. We do not have access to provider systems or customer databases. Please review our Privacy Policy for details on how we handle your information.',
      },
      {
        q: 'How do you protect my personal information?',
        a: 'We use industry-standard security measures and HTTPS encryption. We collect only the information necessary to provide guidance services. We never sell your personal data to third parties. See our Privacy Policy for complete details.',
      },
    ],
  },
  {
    category: 'Service Coverage',
    questions: [
      {
        q: 'Which providers do you support?',
        a: 'We may reference multiple internet, cable, and streaming providers for guidance purposes only. Mention of provider names or trademarks® does not indicate affiliation, partnership, or endorsement. We maintain no formal relationships with any providers.',
      },
      {
        q: 'Can you guarantee service availability in my area?',
        a: 'No. We cannot guarantee service availability, pricing, or provider acceptance. We provide assistance in exploring your options, but final decisions and service availability are determined by the individual providers.',
      },
    ],
  },
  {
    category: 'Refunds & Cancellations',
    questions: [
      {
        q: 'Are your services refundable?',
        a: 'Yes. Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Please review our Refund Policy page for complete eligibility details and terms.',
      },
      {
        q: 'How do I request a refund?',
        a: 'Contact us at (888) 363-0848 or support@talkpointsolutions.com within the applicable refund window. Include your full name, service date, and reason for the request. Refunds are processed within 7-10 business days upon approval.',
      },
      {
        q: 'Can you cancel my provider service for me?',
        a: 'No. We cannot cancel, modify, or manage provider services on your behalf. You must contact your service provider directly to make changes to your service agreements.',
      },
    ],
  },
  {
    category: 'Support & Assistance',
    questions: [
      {
        q: 'What type of assistance do you provide?',
        a: 'We provide guidance, educational support, and assistance to help you understand and navigate your internet, cable TV, and streaming options. This includes explaining plan features, comparing options, and guiding you through the selection process.',
      },
      {
        q: 'How do I contact customer support?',
        a: 'Our support team is available 24/7 by phone at (888) 363-0848 or via email at support@talkpointsolutions.com. We\'re here to answer questions about our assistance services.',
      },
      {
        q: 'Do you provide technical support for provider equipment?',
        a: 'No. We do not install, maintain, or repair provider equipment. For technical support with your internet, cable, or streaming equipment, you must contact your service provider directly.',
      },
    ],
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container-width section-padding relative">
          {/* Disclosure Banner */}
          <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
            <p className="text-sm text-foreground text-center leading-relaxed">
              <strong className="block mb-2">Independent Service Disclosure:</strong>
              TALK POINT SOLUTIONS is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide guidance and assistance services only.
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our assistance services, billing, privacy, and more. Can't find what you're looking for? Give us a call!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="section-padding">
        <div className="container-width max-w-4xl">
          {faqs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{section.category}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {section.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${section.category}-${index}`}
                    className="card-base px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to assist you with any questions about our guidance services.
            </p>
            <a href="tel:(888) 363-0848">
              <Button variant="cta" size="lg">
                <Phone className="w-5 h-5" />
                Call Now (888) 363-0848
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
