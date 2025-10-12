import type { NavLink, Service, Product, TeamMember, FooterLinks, NewsItem } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { Bot, Code, Brush, BarChart3, Database, Cloud } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/media-center', label: 'Media Center' },
];

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'Digital Strategy',
    description:
      'We craft bespoke digital strategies to navigate the complexities of the modern market, ensuring your business achieves sustainable growth and a competitive edge. Our data-driven insights form the bedrock of your success.',
    longDescription:
      'Our Digital Strategy service involves a comprehensive analysis of your market landscape, competitive positioning, and internal capabilities. We develop a clear roadmap for digital transformation, focusing on key areas such as customer experience, operational efficiency, and new revenue streams. We help you leverage technology to not just meet but exceed your business goals.',
    icon: Bot,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-strategy')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-strategy')!.imageHint,
  },
  {
    id: 'development',
    title: 'Custom Development',
    description:
      'Our team builds robust, scalable, and secure custom software solutions tailored to your specific business needs. From web applications to enterprise systems, we deliver excellence in every line of code.',
    longDescription:
      'We specialize in full-stack development, creating high-performance applications using modern technologies. Our agile process ensures transparency, flexibility, and a final product that is perfectly aligned with your vision. We handle everything from backend architecture to frontend development, ensuring a seamless and powerful user experience.',
    icon: Code,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-development')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-development')!.imageHint,
  },
  {
    id: 'design',
    title: 'UX/UI Design',
    description:
      'We create intuitive and engaging user experiences that captivate your audience and drive conversion. Our design philosophy marries aesthetics with functionality to deliver products that are both beautiful and easy to use.',
    longDescription:
      'Our UX/UI Design process is user-centric, starting with in-depth research and user testing. We create wireframes, prototypes, and high-fidelity mockups to ensure every interaction is intuitive. We focus on creating a cohesive brand experience across all digital touchpoints, enhancing user satisfaction and loyalty.',
    icon: Brush,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-design')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-design')!.imageHint,
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    description:
      'Amplify your brand\'s voice and reach your target audience with our data-driven digital marketing services. We specialize in SEO, content marketing, and paid advertising campaigns that deliver measurable results.',
    longDescription:
      'Our digital marketing strategies are designed to increase your online visibility and generate qualified leads. We conduct thorough keyword research, create compelling content, and manage targeted ad campaigns across various platforms. We continuously monitor performance and optimize our strategies to ensure the highest possible return on investment.',
    icon: BarChart3,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-marketing')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-marketing')!.imageHint,
  },
   {
    id: 'data-analytics',
    title: 'Data Analytics',
    description:
      'Unlock the power of your data. We provide advanced analytics and business intelligence solutions to help you make smarter, data-informed decisions and uncover hidden opportunities.',
    longDescription:
      'We help you collect, process, and visualize your data to gain actionable insights. Our services include data warehousing, building custom dashboards, and implementing predictive analytics models. We empower your team to understand trends, forecast outcomes, and optimize business performance based on robust data evidence.',
    icon: Database,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-data')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-data')!.imageHint,
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description:
      'Leverage the power and scalability of the cloud. We offer cloud migration, architecture, and management services across major platforms like AWS, Azure, and Google Cloud.',
    longDescription:
      'Our cloud experts guide you through every step of your cloud journey. We design resilient and cost-effective cloud architectures, manage seamless migrations from on-premise systems, and provide ongoing support and optimization. We ensure your cloud infrastructure is secure, scalable, and aligned with your business objectives.',
    icon: Cloud,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-cloud')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-cloud')!.imageHint,
  },
];

export const products: Product[] = [
  {
    id: 'product-alpha',
    name: 'Nexus Platform',
    description: 'An all-in-one enterprise resource planning (ERP) system designed for maximum efficiency and scalability.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-alpha')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'product-alpha')!.imageHint,
    specifications: [
      'Cloud-Native Architecture',
      'Modular & Customizable',
      'Advanced AI-driven Analytics',
      'Bank-Grade Security',
      'Seamless Third-Party Integrations',
    ],
  },
  {
    id: 'product-beta',
    name: 'Momentum AI',
    description: 'A cutting-edge machine learning framework that accelerates your data science workflows from research to production.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-beta')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'product-beta')!.imageHint,
    specifications: [
      'Automated Model Training',
      'Real-time Data Processing',
      'Supports TensorFlow & PyTorch',
      'Scalable Deployment Options',
      'Comprehensive Visualization Tools',
    ],
  },
  {
    id: 'product-gamma',
    name: 'ConnectSphere',
    description: 'A unified communications platform that integrates chat, video conferencing, and project management into a single, intuitive interface.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-gamma')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'product-gamma')!.imageHint,
    specifications: [
      'HD Video & Audio',
      'End-to-End Encryption',
      'Kanban-style Task Boards',
      'Unlimited File Storage',
      'AI-Powered Meeting Summaries',
    ],
  },
  {
    id: 'product-delta',
    name: 'Guardian Security Suite',
    description: 'A proactive cybersecurity solution that provides 360-degree protection against internal and external threats.',
    imageUrl: PlaceHolderImages.find(p => p.id === 'product-delta')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'product-delta')!.imageHint,
    specifications: [
      'Threat Intelligence Feeds',
      'Behavioral Anomaly Detection',
      'Automated Incident Response',
      'Vulnerability Scanning',
      'Compliance Reporting',
    ],
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Aria Montgomery',
    title: 'Chief Executive Officer',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member1')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member1')!.imageHint,
  },
  {
    id: '2',
    name: 'Jaxson Riley',
    title: 'Chief Technology Officer',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member2')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member2')!.imageHint,
  },
  {
    id: '3',
    name: 'Zoe Washington',
    title: 'Head of Product',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member3')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member3')!.imageHint,
  },
  {
    id: '4',
    name: 'Caleb Chen',
    title: 'Lead Designer',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member4')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member4')!.imageHint,
  },
  {
    id: '5',
    name: 'Nora Patel',
    title: 'Director of Engineering',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member5')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member5')!.imageHint,
  },
  {
    id: '6',
    name: 'Liam Goldberg',
    title: 'VP of Marketing',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member6')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member6')!.imageHint,
  },
];


export const footerLinks: FooterLinks = {
  quickLinks: [
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/media-center', label: 'Media Center' },
  ],
  ourPolicy: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
  ],
  countries: ['United States', 'United Kingdom', 'Germany', 'Japan', 'Australia'],
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Apex Solutions Unveils Groundbreaking "Nexus Platform"',
    date: '2024-07-15',
    excerpt: 'Today, Apex Solutions announced the launch of its new flagship ERP system, the Nexus Platform, set to redefine industry standards for efficiency and integration. The platform promises to deliver unparalleled performance and AI-driven insights.',
  },
  {
    id: '2',
    title: 'Apex Solutions Ranks in Top 5 of "Innovator of the Year" Awards',
    date: '2024-06-28',
    excerpt: 'In recognition of its pioneering work in machine learning and custom development, Apex Solutions has been named a top-five finalist in the prestigious annual Innovator of the Year awards.',
  },
  {
    id: '3',
    title: 'New Partnership with QuantumLeap Inc. to Drive Digital Transformation',
    date: '2024-05-10',
    excerpt: 'Apex Solutions is proud to announce a strategic partnership with QuantumLeap Inc. to accelerate their digital transformation journey, focusing on cloud infrastructure and data analytics.',
  },
];
