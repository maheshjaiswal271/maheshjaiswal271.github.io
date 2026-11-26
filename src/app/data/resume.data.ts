/**
 * MAHESH.SYS — single source of truth for all portfolio content.
 * Update this file to change what the site displays.
 */

export const PROFILE = {
  name: 'Mahesh Jaiswal',
  systemName: 'MAHESH.SYS',
  version: 'v3.2.0',
  roles: ['Senior Software Engineer', 'C# / ASP.NET Core Engineer', 'Full-Stack .NET Developer', 'Azure Cloud Developer', 'Generative AI Engineer', 'Desktop App Architect'],
  tagline:
    'Senior Software Engineer with 3+ years of experience building enterprise-grade desktop and web applications — C#, .NET 8, ASP.NET Core, React, Angular, Avalonia UI and Azure. I ship CI/CD-automated pipelines, scalable services and Generative AI features (LangChain, LangGraph, RAG) that stay up.',
  location: 'Mohali, Punjab, IN',
  email: 'maheshjaiswal271@gmail.com',
  phone: '+91 6239674164',
  github: 'https://github.com/maheshjaiswal271',
  linkedin: 'https://www.linkedin.com/in/mahesh-jaiswal-3b40611bb/',
  resumeUrl: 'Mahesh_Jaiswal_Senior_Software_Engineer_DotNet_FullStack_AI.pdf',
  photoUrl: 'profile.jpg',
  careerStart: new Date(2023, 8, 1), // Sep 2023 — drives the live uptime counter
  availability: 'OPEN TO NEW OPPORTUNITIES',
  freelance: 'AVAILABLE FOR FREELANCE PROJECTS',
  freelanceMail:
    'mailto:maheshjaiswal271@gmail.com?subject=Freelance%20Project%20Inquiry&body=Hi%20Mahesh%2C%0A%0AI%20have%20a%20project%20I%27d%20like%20to%20discuss...',
};

/** infinite tech ticker strip */
export const TICKER = [
  'C#', '.NET 8', 'ASP.NET Core', 'Avalonia UI', 'Azure DevOps', 'Entity Framework Core',
  'SQL Server', 'REST APIs', 'MVVM', 'Windows Services', 'React.js', 'TypeScript',
  'Docker', 'Python', 'FastAPI', 'CI/CD Pipelines', 'Microservices', 'Tailwind CSS',
  'Angular', 'LangChain', 'LangGraph', 'RAG', 'Redis', 'Apache Kafka', 'Azure Key Vault',
];

export const HERO_STATS = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 10, suffix: 'k+', label: 'Daily Transactions Served' },
  { value: 40, suffix: '%', label: 'Release Cycle Reduced' },
  { value: 0, suffix: '', label: 'Critical Post-Release Defects' },
];

export interface SkillModule {
  id: string;
  name: string;
  icon: string;
  status: 'RUNNING' | 'STABLE';
  skills: { name: string; level: number }[];
}

export const SKILL_MODULES: SkillModule[] = [
  {
    id: 'dotnet-core', name: 'dotnet.core', icon: '⚙️', status: 'RUNNING',
    skills: [
      { name: 'C#', level: 95 },
      { name: '.NET Core 8', level: 92 },
      { name: 'ASP.NET Core MVC / Web API', level: 90 },
      { name: 'Avalonia UI', level: 88 },
      { name: 'Entity Framework Core', level: 88 },
      { name: 'WPF', level: 82 },
    ],
  },
  {
    id: 'azure-cloud', name: 'azure.cloud', icon: '☁️', status: 'RUNNING',
    skills: [
      { name: 'Azure DevOps · CI/CD Pipelines', level: 90 },
      { name: 'Azure App Service', level: 86 },
      { name: 'Azure Notification Hubs', level: 85 },
      { name: 'Azure Blob Storage', level: 85 },
      { name: 'Azure Functions', level: 80 },
      { name: 'Azure Service Bus', level: 76 },
      { name: 'Azure Key Vault', level: 80 },
    ],
  },
  {
    id: 'architecture', name: 'architecture.patterns', icon: '📐', status: 'RUNNING',
    skills: [
      { name: 'MVVM / MVC', level: 92 },
      { name: 'REST API Design', level: 90 },
      { name: 'SOLID Principles', level: 90 },
      { name: 'Dependency Injection (DI/IoC)', level: 90 },
      { name: 'Repository & Factory Patterns', level: 88 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    id: 'data-access', name: 'data.persistence', icon: '🗄️', status: 'RUNNING',
    skills: [
      { name: 'LINQ', level: 90 },
      { name: 'SQL Server', level: 88 },
      { name: 'ADO.NET', level: 82 },
      { name: 'Dapper', level: 80 },
      { name: 'SQLite', level: 78 },
      { name: 'MySQL', level: 75 },
      { name: 'Redis', level: 72 },
      { name: 'Apache Kafka', level: 70 },
    ],
  },
  {
    id: 'windows-internals', name: 'windows.internals', icon: '🖥️', status: 'RUNNING',
    skills: [
      { name: 'Windows Services / Runtime Service', level: 90 },
      { name: 'Auto-Update Systems', level: 88 },
      { name: 'Process Management', level: 85 },
      { name: 'Inno Setup Installers', level: 85 },
      { name: 'Service ACL Hardening', level: 82 },
    ],
  },
  {
    id: 'frontend', name: 'frontend.ui', icon: '🎨', status: 'STABLE',
    skills: [
      { name: 'HTML5 / CSS3', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'Angular', level: 80 },
      { name: 'TypeScript / JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Material UI / Bootstrap', level: 82 },
    ],
  },
  {
    id: 'ai-ml', name: 'ai.inference', icon: '🤖', status: 'STABLE',
    skills: [
      { name: 'LangChain · LangGraph Agents', level: 78 },
      { name: 'RAG · LLM Integration', level: 78 },
      { name: 'Python · FastAPI', level: 82 },
      { name: 'ONNX Optimised Inference', level: 76 },
      { name: 'scikit-learn · Isolation Forest', level: 75 },
      { name: 'PyTorch · LSTM Networks', level: 70 },
    ],
  },
  {
    id: 'devops-tools', name: 'devops.toolchain', icon: '🧰', status: 'RUNNING',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Semantic Versioning', level: 88 },
      { name: 'Postman · Swagger / OpenAPI', level: 88 },
      { name: 'NuGet', level: 85 },
      { name: 'Docker', level: 75 },
    ],
  },
];

export interface TimelineNode {
  pid: string;
  type: 'work' | 'education';
  role: string;
  org: string;
  location: string;
  period: string;
  status: 'RUNNING' | 'EXITED OK';
  tech: string[];
  bullets: string[];
}

export const TIMELINE: TimelineNode[] = [
  {
    pid: '0x2025',
    type: 'work',
    role: 'Senior Software Engineer',
    org: 'Techbit Solutions Pvt. Ltd.',
    location: 'Mohali, Punjab',
    period: 'Aug 2025 — Present',
    status: 'RUNNING',
    tech: ['C#', '.NET 8', 'Avalonia UI', 'MVVM', 'Azure DevOps', 'Azure Key Vault', 'Notification Hubs', 'Inno Setup'],
    bullets: [
      'Architected an enterprise Desktop Application from scratch — a production-grade cross-platform desktop app for Windows runtime service management, real-time monitoring and process lifecycle control.',
      'Built a C# Windows Runtime Service watchdog delivering automatic UI recovery and zero-downtime service continuity across enterprise deployments.',
      'Integrated Azure Notification Hubs for real-time push alerts to Windows desktop clients.',
      'Engineered a fully automated Azure DevOps pipeline — build, semantic versioning, obfuscation, packaging and Inno Setup installer generation — cutting release cycle time by ~40%.',
      'Hardened deployments with Windows Service ACL hardening, critical-process protection and WDAC/AppLocker policy evaluation.',
      'Migrated application secrets to Azure Key Vault using certificate-based service principal authentication.',
      'Shipped silent background auto-updates via Azure Blob Storage-hosted binaries — zero user interruption.',
    ],
  },
  {
    pid: '0x2023',
    type: 'work',
    role: 'Full Stack Developer',
    org: 'Xorosoft Inc.',
    location: 'Mohali, Punjab',
    period: 'Sep 2023 — Aug 2025',
    status: 'EXITED OK',
    tech: ['Spring Boot', 'React.js', 'TypeScript', 'JWT', 'SQL Server', 'Azure DevOps', 'Material UI'],
    bullets: [
      'Developed a scalable delivery management platform handling 10,000+ daily transactions in production, on clean MVC architecture.',
      'Designed modular RESTful APIs with Swagger/OpenAPI docs and enterprise JWT auth — token rotation, refresh tokens, blacklisting and session management.',
      'Built responsive, cross-browser UI components with React.js, TypeScript, Material UI and Tailwind CSS.',
      'Contributed to CI/CD pipeline configuration and managed Azure DevOps boards for sprint tracking.',
      'Delivered 8+ product sprints on time with zero critical post-release defects.',
    ],
  },
  {
    pid: '0x2020',
    type: 'education',
    role: 'B.Tech — Computer Science Engineering',
    org: 'Lovely Professional University (LPU)',
    location: 'Phagwara, Punjab',
    period: 'Sep 2020 — May 2024',
    status: 'EXITED OK',
    tech: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'OOP'],
    bullets: [
      'Completed a Computer Science Engineering degree with a focus on software engineering fundamentals, systems programming and databases.',
    ],
  },
];

export interface Project {
  id: string;
  serviceName: string;
  displayName: string;
  year: string;
  status: 'RUNNING' | 'DEPLOYED';
  version: string;
  tagline: string;
  tech: string[];
  bullets: string[];
  logs: string[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'desktop-application',
    serviceName: 'desktop.application',
    displayName: 'Desktop Application',
    year: '2025 — Present',
    status: 'RUNNING',
    version: 'v2.4.1',
    tagline:
      'Production-grade cross-platform desktop application for real-time Windows service monitoring, management and process control — built from scratch.',
    tech: ['C#', '.NET Core 8', 'Avalonia UI', 'MVVM', 'Azure DevOps', 'Azure Blob', 'Notification Hubs', 'Inno Setup'],
    bullets: [
      'Fully modular MVVM architecture with Avalonia UI for cross-platform desktop.',
      'Windows Runtime Service watchdog with automatic recovery and zero-downtime rollout.',
      'Silent background auto-update from Azure Blob-hosted binaries.',
      'End-to-end CI/CD: build → version → obfuscate → sign → package → installer.',
      'Org-scoped configuration for B2B deployments; push alerts via Azure Notification Hubs.',
    ],
    logs: [
      '[09:41:02] watchdog     : service heartbeat OK — uptime 99.98%',
      '[09:41:07] updater      : checked blob storage — binary up to date',
      '[09:41:12] notif-hub    : push delivered to 148 connected clients',
      '[09:41:15] process-mgr  : 12 services monitored, 0 faults',
      '[09:41:19] ci-pipeline  : release 2.4.1 signed + packaged in 4m 12s',
    ],
      },
  {
    id: 'aiol',
    serviceName: 'aiol.autonomous.layer',
    displayName: 'AIOL — Autonomous Intelligent Operating Layer',
    year: '2025',
    status: 'DEPLOYED',
    version: 'v1.0.0',
    tagline:
      'Microservices-based autonomous monitoring platform — 7 independent FastAPI services for telemetry, AI anomaly detection, decision-making, security and self-healing.',
    tech: ['Python', 'FastAPI', 'PyTorch', 'ONNX', 'scikit-learn', 'LSTM', 'Isolation Forest', 'Azure Functions'],
    bullets: [
      'LSTM + Isolation Forest models with ONNX-optimised inference — 60-second proactive crash prediction.',
      'Behavioural security engine: signature-free ransomware identification and privilege-escalation detection.',
      'Automatic process quarantine and self-healing actions.',
      'Serverless trigger-based alerting via Azure Functions.',
    ],
    logs: [
      '[14:02:31] telemetry    : 7/7 services healthy — ingesting 2.3k events/s',
      '[14:02:44] anomaly-ai   : LSTM inference 8ms (ONNX) — no drift detected',
      '[14:03:01] predictor    : crash risk 0.03 — next 60s window clear',
      '[14:03:18] sec-engine   : privilege escalation attempt blocked, PID 4211',
      '[14:03:19] self-heal    : process quarantined + service restored in 900ms',
    ],
    link: 'https://github.com/maheshjaiswal271/Autonomous-Intelligent-OS-Layer',
  },
  {
    id: 'porter',
    serviceName: 'porter.delivery.api',
    displayName: 'Porter Delivery App',
    year: '2024',
    status: 'DEPLOYED',
    version: 'v3.2.0',
    tagline:
      'Scalable RESTful delivery management platform — Spring Boot MVC backend with a React + TypeScript frontend, serving 10k+ daily transactions.',
    tech: ['Java', 'Spring Boot', 'React.js', 'TypeScript', 'SQL Server', 'JWT', 'Swagger', 'Material UI'],
    bullets: [
      'Modular REST APIs documented with Swagger/OpenAPI.',
      'Enterprise JWT auth — access/refresh tokens, rotation, blacklisting and expiry strategies.',
      'Responsive Material UI + Tailwind frontend, cross-browser and mobile ready.',
      'Production-hardened to security and compliance standards.',
    ],
    logs: [
      '[11:20:05] api-gateway  : 10,412 transactions processed today',
      '[11:20:16] auth         : token rotation OK — 0 replay attempts',
      '[11:20:28] orders       : avg response 94ms across 14 endpoints',
      '[11:20:40] swagger      : /api/v3/docs served — 100% endpoint coverage',
    ],
    link: 'https://github.com/maheshjaiswal271/Porter-Xpresso',
  },
];

export const BOOT_LINES = [
  '[ OK ] Initializing MAHESH.SYS kernel v3.2.0 ...',
  '[ OK ] Mounting /skills — 8 modules, 49 packages loaded',
  '[ OK ] Starting service: dotnet.core.runtime',
  '[ OK ] Starting service: azure.cloud.link',
  '[ OK ] Starting service: genai.langchain.rag',
  '[ OK ] Watchdog armed — zero-downtime mode enabled',
  '[ OK ] Loading profile: MAHESH JAISWAL — SENIOR SOFTWARE ENGINEER',
  'BOOT COMPLETE — launching control panel',
];
