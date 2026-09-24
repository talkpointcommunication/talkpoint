import { Layout } from '@/components/layout/Layout';
import { useSEO } from '@/hooks/useSEO';
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
        q: 'Are you an official streaming platform or content provider?',
        a: 'No. Talk Point Communication is an independent third-party advisory service. We are NOT a streaming platform, NOT a content provider, and NOT affiliated with any streaming service. We provide independent guidance to help you understand and navigate streaming and entertainment options.',
      },
      {
        q: 'Do you sell streaming subscriptions or entertainment services?',
        a: 'No. We do NOT sell streaming subscriptions, music services, or entertainment plans. We are independent advisors providing guidance only. We do NOT provide official platform support, do NOT represent any streaming service, and do NOT provide guaranteed access or technical fixes. All service decisions and purchases are made directly between you and your chosen platform.',
      },
      {
        q: 'Do you charge for your services?',
        a: 'Yes. Our service fees are separate from subscription charges. We charge for the assistance, guidance, and support we provide. These fees are clearly disclosed before you proceed with our services.',
      },
      {
        q: 'Are you affiliated with any streaming or entertainment platforms?',
        a: 'No. Talk Point Communication is completely independent and is NOT affiliated with, authorized by, or endorsed by any streaming, music, or entertainment company. We maintain complete independence to provide unbiased guidance. All mentions of platforms are for informational purposes only.',
      },
    ],
  },
  {
    category: 'Billing & Payments',
    questions: [
      {
        q: 'Will I still be billed by my streaming platform?',
        a: 'Yes. Platform billing remains completely unchanged. You will continue to be billed directly by your chosen streaming service according to their terms and pricing. Our assistance fees are separate and distinct from subscription charges.',
      },
      {
        q: 'What forms of payment do you accept?',
        a: 'We accept major credit cards, debit cards, and electronic payment methods for our assistance service fees. All streaming subscription billing is handled directly by the service provider.',
      },
      {
        q: 'Can you help me with platform billing disputes?',
        a: 'We can provide guidance on how to contact your streaming platform regarding billing issues. However, we do not have access to platform billing systems and cannot resolve billing disputes on your behalf. You must contact the service directly for billing matters.',
      },
    ],
  },
  {
    category: 'Privacy & Security',
    questions: [
      {
        q: 'Do you need my account passwords or sensitive information?',
        a: 'No. We never request streaming account passwords, Social Security numbers, or sensitive financial credentials. We do not have access to platform systems or customer databases. Please review our Privacy Policy for details on how we handle your information.',
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
        q: 'Which streaming platforms do you provide guidance for?',
        a: 'We may reference multiple streaming, music, and entertainment platforms for guidance purposes only. Mention of platform names or trademarksÂ® does not indicate affiliation, partnership, or endorsement. We maintain no formal relationships with any platforms.',
      },
      {
        q: 'Can you guarantee service availability in my area?',
        a: 'No. We cannot guarantee platform availability, pricing, content offerings, or service approval. We provide assistance in exploring your options, but final decisions and service availability are determined by the individual platforms.',
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
        a: 'Contact us at (888) 882-4649 or support@talkpointcommunication.com within the applicable refund window. Include your full name, service date, and reason for the request. Refunds are processed within 7-10 business days upon approval.',
      },
      {
        q: 'Can you cancel my streaming subscription for me?',
        a: 'No. We cannot cancel, modify, or manage streaming subscriptions on your behalf. You must contact your streaming platform directly to make changes to your subscription agreements.',
      },
    ],
  },
  {
    category: 'Support & Assistance',
    questions: [
      {
        q: 'What type of guidance do you provide?',
        a: 'We help users understand streaming services, on-demand platforms, music subscriptions, and entertainment options. We provide practical guidance on subscription features, content libraries, device compatibility, and help you learn how to navigate platform processes. We do NOT provide official platform support, or represent any streaming service.',
      },
      {
        q: 'How do I contact customer support?',
        a: 'Our support team is available 24/7 by phone at (888) 882-4649 or via email at support@talkpointcommunication.com. We\'re here to answer questions about our advisory services.',
      },
      {
        q: 'Do you provide technical support for streaming services?',
        a: 'No. We do not provide technical support for streaming platforms or devices. For technical issues with streaming services or equipment, you must contact your platform or device manufacturer directly.',
      },
    ],
  },
];

const FAQ = () => {
  useSEO({
    title: 'FAQ - Talk Point Communication Streaming Guidance Service',
    description: 'Frequently asked questions about Talk Point Communication streaming and entertainment advisory services, billing, privacy, refunds, and support options.',
    keywords: 'streaming service FAQ, entertainment guidance questions, advisor support, streaming help center',
    canonicalUrl: 'https://talkpointcommunication.com/faq',
  });

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
              Talk Point Communication is an independent third-party service assistance startup, launched in 2026, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We provide guidance and assistance services only.
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
            <a href="tel:+18888824649">
              <Button variant="cta" size="lg">
                <Phone className="w-5 h-5" />
                Call Now (888) 882-4649
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
