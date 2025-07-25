// src/data/categories.ts
export interface Category {
  name: string;
  subcategories: string[];
}

export const categories: Category[] = [
  {
    name: 'Strategy & Business Transformation',
    subcategories: [
      'Corporate Strategy',
      'Business Restructuring',
      'Business Building',
      'Strategy & Corporate Finance',
      'Innovation Strategy',
      'Global Expansion Advisory',
      'Growth Strategy',
      'Business Growth & Transformation',
      'Business Model Innovation',
      'Start-up Advisory',
      'Start-up Catalyst',
      'Business Incubation Support',
      'Market Research & Validation',
      'Funding & Investment Guidance',
      'Business Development & Growth Strategy',
    ],
  },
  {
    name: 'Marketing, Branding & Customer Strategy',
    subcategories: [
      'Customer & Market Strategy',
      'Customer Experience',
      'Customer Insights',
      'Branding & Brand Management',
      'Product & Portfolio Management',
      'Pricing & Revenue Management',
      'Pricing',
      'Demand Marketing',
      'Marketing Campaigns',
      'Channel to Market Strategies',
      'Advertising',
      'Public Relations',
      'Digital Marketing',
      'E-commerce',
      'Digital Sales',
      'Sales Channel Strategy',
    ],
  },
  {
    name: 'Operations & Supply Chain',
    subcategories: [
      'Operations Excellence',
      'Supply Chain Management',
      'Supply Chain Transformation',
      'Sales & Operations Planning',
      'Operation Efficiency',
      'Cost Management',
      'Lean Transformation',
      'Strategic Sourcing & Procurement',
      'Planning Operation Efficiency',
    ],
  },
  {
    name: 'Technology, IT & Digital Transformation',
    subcategories: [
      'Digital, AI & Technology',
      'Digital Strategy Consulting',
      'Technology Transformation',
      'Artificial Intelligence',
      'Web 3.0',
      'IT Services',
      'System Architecture Design',
      'IT Portfolio Management',
      'Evolution of Custom Systems & Services',
      'Digital Transformation',
      'Cybersecurity Roadmaps',
      'Compliance Tracking',
      'IT Governance',
      'Risk Assessment',
      'Policy & Procedure Preparation & Review',
      'Content Assessment',
    ],
  },
  {
    name: 'Finance, Risk & Assurance',
    subcategories: [
      'M&A, Transactions, and Post-Merger Integration (PMI)',
      'Valuation & Modeling',
      'Financial Due Diligence (Financial, Commercial, Tax)',
      'Tax Planning (Direct & Indirect)',
      'Global Trade & Compliance',
      'Financial Accounting & Corporate Reporting',
      'Risk Management & Compliance',
      'Technology Risk',
      'Cybersecurity Services',
      'Financial Services Risk Management',
      'Internal Audit & Risk Assessments',
      'Third-Party Risk Management',
      'Tax Managed Services',
      'Virtual CFO',
      'Virtual Compliance',
      'Virtual Operations',
      'Virtual Counsel HRO',
      'Risk Managed Services',
    ],
  },
  {
    name: 'People, Culture & Organizational Performance',
    subcategories: [
      'People Strategy',
      'HR Transformation',
      'Change Management',
      'Learning & Development',
      'Reward & Recognition Advisory',
      'Cultural & Change Management',
      'Organisation Design',
      'People & Organizational Performance',
    ],
  },
  {
    name: 'GTM, Innovation & Growth Advisory',
    subcategories: [
      'GTM Innovation Strategy',
      'Market Entry Strategy',
      'Driving Business Growth',
      'Optimising Brand Growth',
      'Revenue Growth Advisory',
      'Strategic Partnership & Change',
      'Global Capability Centres',
      'Offshore Development Centres',
    ],
  },
];
