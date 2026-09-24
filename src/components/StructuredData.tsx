import { Helmet } from 'react-helmet';

interface StructuredDataProps {
  pageTitle?: string;
  pageDescription?: string;
}

export const StructuredData = ({ pageTitle, pageDescription }: StructuredDataProps) => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Talk Point Communication',
    url: 'https://talkpointcommunication.com',
    logo: 'https://talkpointcommunication.com/og-image.jpg',
    description: 'Independent third-party guidance for streaming services, on-demand platforms, and entertainment subscriptions',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+1-888-882-4649',
      areaServed: 'US',
      availableLanguage: 'en',
      hoursAvailable: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '20:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '17:00',
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/talkpointcom',
      'https://www.twitter.com/talkpointcom',
      'https://www.linkedin.com/company/talkpointcom',
    ],
    founder: {
      '@type': 'Organization',
      name: 'Talk Point Communication',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Talk Point Communication',
    image: 'https://talkpointcommunication.com/og-image.jpg',
    description: 'Independent Entertainment Advisory Service',
    url: 'https://talkpointcommunication.com',
    telephone: '(888) 882-4649',
    email: 'support@talkpointcommunication.com',
    areaServed: {
      '@type': 'Country',
      name: 'US',
    },
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://talkpointcommunication.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: pageTitle || 'Page',
        item: pageTitle ? `https://talkpointcommunication.com/${pageTitle.toLowerCase().replace(/\s+/g, '-')}` : 'https://talkpointcommunication.com/',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Talk Point Communication',
    url: 'https://talkpointcommunication.com',
    telephone: '(888) 882-4649',
    description: 'Independent advisory service for streaming and entertainment subscriptions',
    areaServed: {
      '@type': 'Country',
      name: 'US',
    },
    knowsAbout: [
      'Streaming Services',
      'Video Streaming',
      'Music Streaming',
      'Live TV Streaming',
      'Entertainment Subscriptions',
      'Streaming Bundles',
      'On-Demand Content',
    ],
  };

  // Only render Helmet if react-helmet is available, otherwise just return null
  // since Helmet must be inside a HelmetProvider
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </>
  );
};
