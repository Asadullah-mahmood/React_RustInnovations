
import type { NavLink, Service, Product, TeamMember, FooterLinks, NewsItem, BlogPost } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { Bot, Code, Brush, BarChart3, Database, Cloud, Bitcoin, PenSquare, Type, Video, ShoppingCart, Search, Building, Facebook, Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About Us' },
  { href: '/media-center', label: 'Media Center' },
  { href: '/contact', label: 'Contact Us' },
];

export const services: Service[] = [
  {
    id: 'digital-strategy',
    title: 'Digital Strategy',
    description: 'Crafting bespoke digital strategies for sustainable growth.',
    longDescription: 'Crafting bespoke digital strategies to navigate the modern market for sustainable growth and a competitive edge.',
    icon: Bot,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-strategy')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-strategy')!.imageHint,
  },
  {
    id: 'ui-ux-design',
    title: 'UI & UX Design',
    description: 'Intuitive and engaging user experiences that captivate.',
    longDescription: 'Creating intuitive and engaging user experiences that captivate your audience and drive conversion.',
    icon: Brush,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-design')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-design')!.imageHint,
  },
  {
    id: 'app-development',
    title: 'App Development',
    description: 'Robust, scalable, and secure custom mobile applications.',
    longDescription: 'Building robust, scalable, and secure custom mobile applications tailored to your specific business needs.',
    icon: Code,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-development')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-development')!.imageHint,
  },
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Full-stack development of high-performance websites.',
    longDescription: 'Specializing in full-stack development to create high-performance websites with a seamless user experience.',
    icon: Code,
    imageUrl: "https://picsum.photos/seed/108/600/400",
    imageHint: "website code"
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    description: 'Complete e-commerce solutions to sell your products online.',
    longDescription: 'Providing complete e-commerce solutions, from store setup to payment gateway integration, to sell your products online effectively.',
    icon: ShoppingCart,
    imageUrl: "https://picsum.photos/seed/109/600/400",
    imageHint: "online store"
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven digital marketing to amplify your brand\'s voice.',
    longDescription: 'Data-driven digital marketing services including SEO, content marketing, and paid advertising to amplify your brand\'s voice.',
    icon: BarChart3,
    imageUrl: PlaceHolderImages.find(p => p.id === 'service-marketing')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'service-marketing')!.imageHint,
  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    description: 'Professional video editing for compelling storytelling.',
    longDescription: 'Professional video editing services to create compelling visual stories for marketing, corporate, and creative projects.',
    icon: Video,
    imageUrl: "https://picsum.photos/seed/110/600/400",
    imageHint: "video editing"
  },
  {
    id: 'seo',
    title: 'SEO',
    description: 'Increase online visibility and generate qualified leads.',
    longDescription: 'Increasing your online visibility and generating qualified leads through thorough keyword research and optimization strategies.',
    icon: Search,
    imageUrl: "https://picsum.photos/seed/111/600/400",
    imageHint: "search engine"
  },
  {
    id: 'crypto-otc',
    title: 'Crypto OTC Services',
    description: 'Secure and efficient over-the-counter crypto trading.',
    longDescription: 'Providing secure and efficient over-the-counter (OTC) trading for large cryptocurrency transactions with privacy and minimal market impact.',
    icon: Bitcoin,
    imageUrl: "https://picsum.photos/seed/112/600/400",
    imageHint: "cryptocurrency trading"
  },
  {
    id: 'blogging',
    title: 'Blogging',
    description: 'Creating engaging content to connect with your audience.',
    longDescription: 'Developing and managing blogs with engaging content to connect with your audience and build a strong online presence.',
    icon: PenSquare,
    imageUrl: "https://picsum.photos/seed/113/600/400",
    imageHint: "writing blog"
  },
  {
    id: 'cms-development',
    title: 'CMS Development',
    description: 'Custom content management systems for easy content handling.',
    longDescription: 'Developing custom content management systems (CMS) that allow for easy and efficient handling of your website\'s content.',
    icon: Type,
    imageUrl: "https://picsum.photos/seed/114/600/400",
    imageHint: "content management"
  },
  {
    id: 'virtual-assets',
    title: 'Virtual Assets & NFTs',
    description: 'Expertise in the creation and management of virtual assets.',
    longDescription: 'Providing expertise in the creation, management, and trading of virtual assets and non-fungible tokens (NFTs).',
    icon: Building,
    imageUrl: "https://picsum.photos/seed/115/600/400",
    imageHint: "virtual reality"
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
    name: 'Shahid Mehmood',
    title: 'CEO & Founder',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member1')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member1')!.imageHint,
  },
  {
    id: '2',
    name: 'Muhammad Usman',
    title: 'Development Head',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member2')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member2')!.imageHint,
  },
  {
    id: '3',
    name: 'Asadullah Mehmood',
    title: 'Marketing Head',
    imageUrl: PlaceHolderImages.find(p => p.id === 'team-member3')!.imageUrl,
    imageHint: PlaceHolderImages.find(p => p.id === 'team-member3')!.imageHint,
  },
  {
    id: '4',
    name: 'Zahid Mehmood',
    title: 'CTO',
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
    { href: '/media-center', label: 'Media Center' },
    { href: '/contact', label: 'Contact Us' },
  ],
  ourPolicy: [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/aml-policy', label: 'AML Policy' },
    { href: '/terms-and-conditions', label: 'Terms & Conditions' },
  ],
  countries: ['Pakistan', 'Indonesia', 'UAE'],
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Rust Innovations Unveils Groundbreaking "Nexus Platform"',
    date: '2024-07-15',
    excerpt: 'Today, Rust Innovations announced the launch of its new flagship ERP system, the Nexus Platform, set to redefine industry standards for efficiency and integration. The platform promises to deliver unparalleled performance and AI-driven insights.',
  },
  {
    id: '2',
    title: 'Rust Innovations Ranks in Top 5 of "Innovator of the Year" Awards',
    date: '2024-06-28',
    excerpt: 'In recognition of its pioneering work in machine learning and custom development, Rust Innovations has been named a top-five finalist in the prestigious annual Innovator of the Year awards.',
  },
  {
    id: '3',
    title: 'New Partnership with QuantumLeap Inc. to Drive Digital Transformation',
    date: '2024-05-10',
    excerpt: 'Rust Innovations is proud to announce a strategic partnership with QuantumLeap Inc. to accelerate their digital transformation journey, focusing on cloud infrastructure and data analytics.',
  },
];

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of Web Development: Trends to Watch in 2025',
        author: 'Aria Montgomery',
        date: '2024-07-20',
        tags: ['Web Development', 'Technology', 'Future'],
        imageUrl: 'https://picsum.photos/seed/blog1/800/400',
        imageHint: 'futuristic code',
        excerpt: 'Explore the upcoming trends in web development for 2025, from AI-powered tools to the evolution of JavaScript frameworks. Stay ahead of the curve and see what\'s next for the web.',
        content: `
<p>The web development landscape is in a constant state of flux. As we look towards 2025, several key trends are emerging that will shape the future of how we build and interact with websites and applications.</p>

<h3 class="font-headline text-xl font-semibold mt-6 mb-2">1. AI-Powered Development</h3>
<p>Artificial intelligence is no longer just a buzzword. AI-powered tools are becoming integral to the development process, assisting with everything from code completion and debugging to automated testing and deployment. Expect to see more sophisticated AI assistants that can understand complex requirements and generate entire components or even full applications.</p>

<h3 class="font-headline text-xl font-semibold mt-6 mb-2">2. The Rise of Meta-Frameworks</h3>
<p>Frameworks like Next.js, Nuxt.js, and SvelteKit, often called meta-frameworks, will continue to gain popularity. They build upon foundational libraries like React and Vue, providing a more structured and feature-rich environment out of the box, including server-side rendering, static site generation, and optimized performance.</p>

<h3 class="font-headline text-xl font-semibold mt-6 mb-2">3. WebAssembly (WASM)</h3>
<p>WebAssembly allows developers to run high-performance code written in languages like C++, Rust, and Go directly in the browser. This opens up new possibilities for web applications that require intensive computation, such as gaming, video editing, and scientific simulations.</p>
        `,
    },
    {
        id: '2',
        title: 'Mastering UI/UX: A Guide to User-Centric Design',
        author: 'Caleb Chen',
        date: '2024-07-18',
        tags: ['UI/UX', 'Design', 'User Experience'],
        imageUrl: 'https://picsum.photos/seed/blog2/800/400',
        imageHint: 'design wireframe',
        excerpt: 'A deep dive into the principles of user-centric design. Learn how to create interfaces that are not only beautiful but also intuitive, accessible, and a joy to use.',
        content: `
<p>In today\'s competitive digital world, a great user experience (UX) is not a luxury; it\'s a necessity. User-centric design is a philosophy that places the user at the heart of the design process. This guide will walk you through the core principles.</p>

<h3 class="font-headline text-xl font-semibold mt-6 mb-2">1. Empathize with Your Users</h3>
<p>Before you write a single line of code or draw a single pixel, you must understand your users. Conduct user research, create user personas, and map out user journeys to gain deep insights into their needs, goals, and pain points.</p>

<h3 class="font-headline text-xl font-semibold mt-6 mb-2">2. Clarity and Simplicity</h3>
<p>A good interface is one that is easy to understand and navigate. Avoid clutter, use clear language, and ensure that the most common user actions are the most accessible. As Antoine de Saint-Exupéry said, "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."</p>

<h3 class="font-headline text-xl font-semibold mt-6 mb-2">3. Consistency is Key</h3>
<p>A consistent design allows users to develop patterns of use. This means using consistent colors, typography, and interactive elements throughout your application. This predictability makes the interface feel familiar and easy to learn.</p>
        `,
    },
];
