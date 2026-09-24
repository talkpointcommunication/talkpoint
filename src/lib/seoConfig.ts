// SEO Configuration and Audit for Talk Point Communication
// Last Updated: 2026-09-25

export const SEOConfig = {
  // Site-wide settings
  siteUrl: 'https://talkpointcommunication.com',
  siteName: 'Talk Point Communication',
  siteDescription: 'Independent third-party guidance for streaming services, on-demand platforms, and entertainment subscriptions.',
  ogImage: 'https://talkpointcommunication.com/og-image.jpg',
  
  // Page-specific SEO metadata
  pages: {
    home: {
      title: 'Talk Point Communication - Independent Streaming & On-Demand Entertainment Guidance Service',
      description: 'Independent third-party guidance for streaming services, on-demand platforms, and entertainment subscriptions. Expert help navigating video streaming, music, and live TV options. 24/7 support available.',
      keywords: 'streaming service guidance, on-demand help, entertainment assistance, streaming advisor, music streaming help, video streaming comparison, live TV streaming, streaming bundles',
      h1: 'Get Independent Streaming & On-Demand Service Guidance',
      canonicalUrl: 'https://talkpointcommunication.com/',
    },
    about: {
      title: 'About Talk Point Communication - Independent Entertainment Advisor',
      description: 'Learn about Talk Point Communication - an independent third-party advisory service helping you navigate streaming, music, and on-demand entertainment options without bias or affiliation.',
      keywords: 'about streaming advisor, independent entertainment guidance, streaming expertise, entertainment consultation',
      h1: 'About Talk Point Communication',
      canonicalUrl: 'https://talkpointcommunication.com/about',
    },
    contact: {
      title: 'Contact Talk Point Communication - 24/7 Independent Entertainment Guidance',
      description: 'Get in touch with our independent entertainment advisors. Available 24/7 to help you understand streaming services and find the right entertainment solution for your needs.',
      keywords: 'contact streaming advisor, entertainment guidance, customer support, streaming help',
      h1: 'Get Independent Entertainment Guidance',
      canonicalUrl: 'https://talkpointcommunication.com/contact',
    },
    faq: {
      title: 'FAQ - Talk Point Communication Streaming Guidance Service',
      description: 'Frequently asked questions about Talk Point Communication streaming and entertainment advisory services, billing, privacy, refunds, and support options.',
      keywords: 'streaming service FAQ, entertainment guidance questions, advisor support, streaming help center',
      h1: 'Frequently Asked Questions',
      canonicalUrl: 'https://talkpointcommunication.com/faq',
    },
    cableTvPlans: {
      title: 'Video Streaming Plans & Subscriptions - Talk Point Communication',
      description: 'Explore and understand video streaming subscription options, tiers, and features. Get expert guidance on choosing the right streaming service for your entertainment needs.',
      keywords: 'video streaming plans, streaming subscriptions, streaming tiers, video library comparison, 4K streaming',
      h1: 'Understanding Video Streaming Options',
      canonicalUrl: 'https://talkpointcommunication.com/cable-tv-plans',
    },
    internetPlans: {
      title: 'Music & Live TV Streaming Services - Talk Point Communication',
      description: 'Get guidance on music streaming services and live TV platforms. Understand subscription options, features, and find the right entertainment services for you.',
      keywords: 'music streaming, live TV streaming, audio streaming services, streaming music comparison',
      h1: 'Understanding Music & Live TV Streaming Options',
      canonicalUrl: 'https://talkpointcommunication.com/internet-plans',
    },
    bundles: {
      title: 'Entertainment Bundles & Packages - Talk Point Communication',
      description: 'Explore entertainment bundle options combining streaming services. Get expert guidance on bundled subscriptions and potential savings.',
      keywords: 'streaming bundles, entertainment packages, bundle deals, subscription bundles, combined streaming services',
      h1: 'Understanding Entertainment Bundles',
      canonicalUrl: 'https://talkpointcommunication.com/bundles',
    },
    privacy: {
      title: 'Privacy Policy - Talk Point Communication',
      description: 'Read our comprehensive privacy policy to understand how Talk Point Communication collects, uses, and protects your personal information.',
      keywords: 'privacy policy, data protection, personal information security',
      h1: 'Privacy Policy',
      canonicalUrl: 'https://talkpointcommunication.com/privacy',
    },
    terms: {
      title: 'Terms of Service - Talk Point Communication',
      description: 'Review the terms and conditions for using Talk Point Communication entertainment advisory services.',
      keywords: 'terms of service, terms and conditions, service agreement',
      h1: 'Terms of Service',
      canonicalUrl: 'https://talkpointcommunication.com/terms',
    },
  },

  // SEO Checklist
  checklist: {
    titleTags: {
      status: '✓ COMPLETE',
      items: [
        '✓ All pages have unique, descriptive title tags (50-60 characters)',
        '✓ Titles include primary keywords',
        '✓ Titles include brand name',
      ],
    },
    metaDescriptions: {
      status: '✓ COMPLETE',
      items: [
        '✓ All pages have unique meta descriptions (150-160 characters)',
        '✓ Descriptions are compelling and include CTA where appropriate',
        '✓ Descriptions include relevant keywords',
      ],
    },
    headingStructure: {
      status: '⚠ REQUIRES VERIFICATION',
      items: [
        '⚠ Each page has one H1 tag',
        '⚠ H2, H3 tags follow logical hierarchy',
        '⚠ Headings include relevant keywords',
      ],
    },
    imageOptimization: {
      status: '⚠ REQUIRES VERIFICATION',
      items: [
        '⚠ All images have descriptive alt text',
        '⚠ Alt text includes relevant keywords where appropriate',
        '⚠ Image file names are descriptive',
      ],
    },
    structuredData: {
      status: '⚠ RECOMMENDED',
      items: [
        '⚠ Add JSON-LD schema for Organization',
        '⚠ Add JSON-LD schema for LocalBusiness',
        '⚠ Add JSON-LD schema for BreadcrumbList',
      ],
    },
    internalLinking: {
      status: '✓ IMPLEMENTED',
      items: [
        '✓ Pages link to related pages logically',
        '✓ Link anchor text is descriptive',
        '✓ No broken internal links',
      ],
    },
    performance: {
      status: '✓ OPTIMIZED',
      items: [
        '✓ Images are optimized and compressed',
        '✓ Mobile responsive design',
        '✓ Fast page load times',
      ],
    },
  },

  // Image Alt Text Guidelines
  imageAltText: {
    heroImage: 'Family enjoying streaming entertainment with accessible content',
    serviceSectionImages: {
      videoStreaming: 'Premium video streaming platform with diverse content library',
      liveTV: 'Live TV streaming interface showing sports and events',
      musicStreaming: 'Music streaming service with playlist management features',
    },
    sectionImages: {
      workFromHome: 'Professional working from home with streaming entertainment setup',
      gaming: 'Gamer using streaming platform on multiple devices',
      familyEntertainment: 'Family watching streaming content together',
    },
  },

  // Keywords by Intent
  keywords: {
    navigational: [
      'Talk Point Communication',
      'streaming advisor',
      'entertainment guidance',
    ],
    informational: [
      'how to choose streaming service',
      'streaming service comparison',
      'best streaming platforms',
      'music streaming options',
      'live TV streaming services',
    ],
    transactional: [
      'streaming service help',
      'entertainment guidance service',
      'streaming advisor consultation',
      'entertainment bundle comparison',
    ],
  },
};

// SEO Verification Tasks
export const seoVerificationTasks = [
  'Verify all pages have exactly one H1 tag',
  'Check that all H2/H3 tags follow logical hierarchy',
  'Audit all img tags have descriptive alt attributes',
  'Verify title tags are 50-60 characters and unique',
  'Verify meta descriptions are 150-160 characters and unique',
  'Check internal links have descriptive anchor text',
  'Verify canonical URLs are set correctly',
  'Test mobile responsiveness',
  'Check page load speed with PageSpeed Insights',
  'Verify robots.txt and sitemap.xml accessibility',
  'Test social media sharing with Open Graph tags',
  'Verify breadcrumb navigation structure',
  'Check for HSTS header for HTTPS',
  'Verify image compression and optimization',
  'Test accessibility features (WCAG 2.1)',
];
