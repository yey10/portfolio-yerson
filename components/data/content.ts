// Contenido editable. Campos vacíos ("") se muestran como "pendiente" y sus botones quedan deshabilitados.
export type L = { es: string; en: string };
export const profile = {
  name: "Yerson Orejuela",
  email: "", github: "", linkedin: "", cv: "", // ← COMPLETAR (cv: ruta en /public, ej. "/cv-yerson.pdf")
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com", // ← COMPLETAR dominio real
  role: "Technology & Software Solutions",
  tagline: { es: "Desarrollo software, automatizo procesos y conecto tecnologías para construir soluciones funcionales, eficientes y bien diseñadas.", en: "I develop software, automate processes and connect technologies to build functional, efficient and well-designed solutions." } as L,
  about: [
    { es: "Soy Tecnólogo en Análisis y Desarrollo de Software del SENA y actualmente estudio Ingeniería de Sistemas en la Fundación Universitaria del Área Andina, en Bogotá, Colombia.", en: "I hold a Software Analysis and Development technologist degree from SENA and I'm currently studying Systems Engineering at Fundación Universitaria del Área Andina, in Bogotá, Colombia." },
    { es: "Mi trayectoria en software comenzó en el colegio, explorando la programación y construyendo mis propios proyectos. Desde entonces he desarrollado aplicaciones web con autenticación, interacción entre usuarios, publicación de contenido, carritos de compra y paneles administrativos.", en: "My software path began in school, exploring programming and building my own projects. Since then I've built web apps with authentication, user interaction, content publishing, shopping carts and admin panels." },
    { es: "En mis prácticas trabajé con Microsoft Power Platform y participé en una implementación de ISO 27001. Hoy soy Técnico Junior de TI.", en: "During my internship I worked with Microsoft Power Platform and took part in an ISO 27001 implementation. Today I'm a Junior IT Technician." },
  ] as L[],
  ideas: [
    { t: { es: "Construyo soluciones", en: "I build solutions" }, d: { es: "Desde plataformas web hasta aplicaciones empresariales.", en: "From web platforms to enterprise applications." } },
    { t: { es: "Optimizo procesos", en: "I optimize processes" }, d: { es: "Mediante automatizaciones y herramientas que mejoran los flujos de trabajo.", en: "Through automation and tools that improve workflows." } },
    { t: { es: "Conecto tecnologías", en: "I connect technologies" }, d: { es: "Combinando desarrollo, infraestructura y seguridad de la información.", en: "Combining development, infrastructure and information security." } },
  ] as { t: L; d: L }[],
};
export const nodes = [
  { id: "Development", d: { es: "Aplicaciones web, plataformas digitales y soluciones de software.", en: "Web applications, digital platforms and software solutions." } },
  { id: "Automation", d: { es: "Aplicaciones empresariales y automatización de procesos.", en: "Enterprise applications and process automation." } },
  { id: "Infrastructure", d: { es: "Soporte, mantenimiento y herramientas de infraestructura TI.", en: "Support, maintenance and IT infrastructure tools." } },
  { id: "Security", d: { es: "Gestión documental, controles y prácticas basadas en ISO 27001.", en: "Documentation, controls and practices based on ISO 27001." } },
] as { id: string; d: L }[];
export const expertise = [
  { n: "01", t: "Software Development", d: { es: "Desarrollo de aplicaciones web, plataformas interactivas y soluciones digitales.", en: "Web applications, interactive platforms and digital solutions." } as L, tags: ["JavaScript", "TypeScript", "Python", "PHP", "React", "Next.js", "Laravel", "MongoDB", "SQL"] },
  { n: "02", t: "Business Automation", d: { es: "Aplicaciones empresariales y automatización de procesos con herramientas low-code.", en: "Enterprise apps and process automation with low-code tools." } as L, tags: ["Microsoft Power Platform", "Power Apps", "Power Automate", "Odoo"] },
  { n: "03", t: "IT Infrastructure", d: { es: "Soporte tecnológico, diagnóstico de equipos, mantenimiento y gestión de herramientas empresariales.", en: "Tech support, hardware diagnostics, maintenance and business tool management." } as L, tags: ["Windows", "Linux", "Hardware", "Mantenimiento preventivo", "Mantenimiento correctivo", "Clonación de equipos", "WinPE", "Odoo", "BioStar", "Soporte a usuarios"] },
  { n: "04", t: "Information Security", d: { es: "Participación en la implementación de controles y documentación relacionados con ISO 27001.", en: "Participation in implementing controls and documentation related to ISO 27001." } as L, tags: ["ISO 27001", "Documentación", "Matrices", "Procedimientos", "Registros", "Controles"] },
];
export const stack = [
  { c: { es: "Lenguajes", en: "Languages" } as L, i: ["JavaScript", "TypeScript", "Python", "PHP"] },
  { c: { es: "Frameworks y bibliotecas", en: "Frameworks & libraries" } as L, i: ["React", "Next.js", "Laravel", "Flask"] },
  { c: { es: "Bases de datos", en: "Databases" } as L, i: ["MongoDB", "SQL"] },
  { c: { es: "Automatización y herramientas empresariales", en: "Automation & business tools" } as L, i: ["Microsoft Power Platform", "Power Apps", "Power Automate", "Odoo"] },
  { c: { es: "Desarrollo y colaboración", en: "Development & collaboration" } as L, i: ["Git", "GitHub", "Jira", "Trello"] },
  { c: { es: "Diseño", en: "Design" } as L, i: ["Figma", "Canva"] },
  { c: { es: "Sistemas e infraestructura", en: "Systems & infrastructure" } as L, i: ["Windows", "Linux", "WinPE", "BioStar"] },
  { c: { es: "Hosting", en: "Hosting" } as L, i: ["Hostinger"] },
  { c: { es: "Seguridad de la información", en: "Information security" } as L, i: ["ISO 27001"] },
];
const TBD: L = { es: "Por documentar", en: "To be documented" };
export const projects = [
  { slug: "artshop", name: "Artshop", cat: "E-commerce / Art Marketplace", d: { es: "Plataforma digital dedicada a la comercialización de obras de arte.", en: "Digital platform for selling artworks." } as L, f: ["Catálogo de obras", "Carrito de compras", "Sistema de likes", "Dashboard"], tech: [] as string[], repo: "", demo: "" },
  { slug: "storysphere", name: "StorySphere", cat: "Social Platform / Reading Community", d: { es: "Red social para lectores y escritores: publicación, descubrimiento y lectura de historias.", en: "Social network for readers and writers: publishing, discovering and reading stories." } as L, f: ["Publicación de historias", "Lectura de historias", "Comentarios", "Likes", "Seguimiento de usuarios", "Dashboard administrativo"], tech: [], repo: "", demo: "" },
  { slug: "employee-performance", name: "Employee Performance Evaluation", cat: "Enterprise Solutions / Power Platform", d: { es: "Aplicación empresarial de evaluación de desempeño desarrollada en mis prácticas profesionales.", en: "Enterprise performance-evaluation app built during my internship." } as L, f: [], tech: ["Microsoft Power Apps"], repo: "", demo: "" },
  { slug: "process-automation", name: "Business Process Automation", cat: "Automation / Enterprise Technology", d: { es: "Automatizaciones de procesos empresariales con Microsoft Power Automate durante mis prácticas.", en: "Business-process automations with Microsoft Power Automate during my internship." } as L, f: [], tech: ["Microsoft Power Automate"], repo: "", demo: "" },
  { slug: "iso-27001", name: "ISO 27001 Implementation", cat: "Information Security / Governance", d: { es: "Participación en documentación, matrices, procedimientos, registros y controles. No implica certificación.", en: "Participation in documentation, matrices, procedures, records and controls. No certification is claimed." } as L, f: [], tech: ["ISO 27001"], repo: "", demo: "" },
];
export const extras = [
  { name: "Flask Blog", d: { es: "Proyecto de blog desarrollado con Flask.", en: "Blog project built with Flask." } as L },
  { name: "Rick and Morty API Project", d: { es: "Proyecto relacionado con la API de Rick y Morty.", en: "Project built around the Rick and Morty API." } as L },
];
export const experience = [
  { t: { es: "Técnico Junior de TI", en: "Junior IT Technician" } as L, s: { es: "Actualidad", en: "Present" } as L, items: ["Soporte técnico a usuarios", "Soporte a entornos Windows", "Diagnóstico de hardware", "Mantenimiento preventivo y correctivo", "Clonación de equipos", "WinPE · Odoo · BioStar"] },
  { t: { es: "Prácticas profesionales", en: "Professional internship" } as L, s: { es: "Soluciones empresariales y automatización", en: "Enterprise solutions & automation" } as L, items: ["Aplicación de evaluación de desempeño con Power Apps", "Automatización de procesos con Power Automate", "Participación en implementación de ISO 27001", "Documentación, matrices, procedimientos, registros y controles"] },
];
export const education = [
  { t: "Ingeniería de Sistemas", o: "Fundación Universitaria del Área Andina · Bogotá, Colombia", s: { es: "En curso", en: "In progress" } as L },
  { t: "Tecnólogo en Análisis y Desarrollo de Software", o: "SENA — Servicio Nacional de Aprendizaje", s: { es: "Finalizado", en: "Completed" } as L },
];
export { TBD };
