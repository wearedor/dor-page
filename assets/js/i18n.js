/**
 * dør — Client-side i18n (EN/ES)
 * No external dependencies. Uses data-i18n attributes on HTML elements.
 */

var translations = {
  en: {
    // Meta
    "meta.title": "dør - We Build. You Grow.",
    "meta.description": "dør is a boutique software house from Uruguay offering staff augmentation with senior LATAM engineers. Trusted by enterprise clients in aviation, biometrics, and fintech.",
    "meta.og_title": "dør - Senior LATAM Engineers Embedded in Your Team",
    "meta.og_description": "Boutique software house from Uruguay. Staff augmentation with senior engineers — same timezone, fully bilingual, minimal rotation. Trusted by enterprise clients for 5+ years.",
    "meta.tw_title": "dør - Senior LATAM Engineers Embedded in Your Team",
    "meta.tw_description": "Boutique software house from Uruguay. Staff augmentation with senior engineers — same timezone, fully bilingual, minimal rotation.",

    // Nav
    "nav.services": "Services",
    "nav.contributions": "Our Contributions",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.schedule": "Schedule Call",

    // Hero
    "hero.tagline": "We Build. You Grow.",
    "hero.title": "SCALE YOUR ENGINEERING TEAM",
    "hero.title_accent": "IN UNDER 3 WEEKS",
    "hero.subtitle": "Skip the 3-month hiring cycle. Our senior LATAM engineers integrate into your team from day one — same timezone, fully bilingual, minimal rotation. Trusted by enterprise clients for 5+ years.",
    "hero.cta_primary": "Scale Your Team",
    "hero.cta_secondary": "Learn More",
    "hero.stat1_number": "< 3 Weeks",
    "hero.stat1_label": "To Start",
    "hero.stat2_number": "5+ Years",
    "hero.stat2_label": "Client Retention",
    "hero.stat3_number": "100%",
    "hero.stat3_label": "Bilingual Team",
    "hero.stat4_number": "10+",
    "hero.stat4_label": "Enterprise Clients",

    // WHY CTOs CHOOSE
    "ctos.title": "WHY CTOs CHOOSE DØR",
    "ctos.subtitle": "The hiring problems CTOs face — and how we solve them.",
    "ctos.card1_title": "Hiring Takes 3-4 Months",
    "ctos.card1_text": "Not with us. We match you with senior engineers in 48 hours and have them embedded in your team in under 3 weeks.",
    "ctos.card2_title": "Engineer Churn Destroys Projects",
    "ctos.card2_text": "Continuity is core to how we work. The engineer who starts your project is the one who delivers it. Our boutique model means minimal rotation — by design, not by luck.",
    "ctos.card3_title": "Timezone Gaps Kill Collaboration",
    "ctos.card3_text": "Based in UTC-3, our engineers have full overlap with US East Coast hours. Real-time standups, same-day code reviews, no async delays.",
    "ctos.card4_title": "Agencies Send Juniors After Selling Seniors",
    "ctos.card4_text": "Every engineer we place is rigorously vetted for senior-level expertise. No bait-and-switch — you interview and choose who joins your team.",
    "ctos.card5_title": "Too Many Layers Between You and the Work",
    "ctos.card5_text": "You work directly with our founders. No account managers, no project coordinators filtering communication.",
    "ctos.card6_title": "Scaling Means Losing Quality",
    "ctos.card6_text": "We're a boutique team by design. Handpicked engineers, enterprise-grade delivery, and the focus that comes from staying small.",

    // Services
    "services.title": "OUR SERVICES",
    "services.subtitle": "End-to-end technology solutions that drive business growth and innovation",
    "services.staffaug_title": "Staff Augmentation",
    "services.staffaug_text": "Senior engineers embedded in your team, not outsourced to a black box. Same timezone (UTC-3), fully bilingual, minimal rotation. Scale your engineering capacity without the overhead of US hiring.",
    "services.staffaug_how": "How it works",
    "services.staffaug_step1_title": "Tell us what you need",
    "services.staffaug_step1_text": "Share your stack, team size, and timeline. We match you with the right engineers in 48 hours.",
    "services.staffaug_step2_title": "Meet your engineers",
    "services.staffaug_step2_text": "Interview candidates directly. No middlemen, no account managers. You choose who joins your team.",
    "services.staffaug_step3_title": "Ship from week one",
    "services.staffaug_step3_text": "Your engineer integrates into your workflows, tools, and standups from day one. Full overlap with US timezones.",
    "services.fullexp_title": "Full Experience",
    "services.fullexp_text": "End-to-end software development from concept to deployment. We handle the complete development lifecycle for web and mobile applications.",
    "services.fullexp_how": "How it works",
    "services.fullexp_step1_title": "Discovery & Planning",
    "services.fullexp_step1_text": "We map your requirements, define scope, and build a development roadmap aligned with your business goals.",
    "services.fullexp_step2_title": "Design & Development",
    "services.fullexp_step2_text": "Our team designs, builds, and iterates on your product using agile sprints with full transparency.",
    "services.fullexp_step3_title": "Launch & Support",
    "services.fullexp_step3_text": "We handle deployment, QA, and post-launch support to ensure a smooth go-live and ongoing stability.",
    "services.sweng_title": "Software Engineering",
    "services.sweng_text": "Expert development of scalable SaaS solutions with modern technologies. Perfect for airlines and airport management systems.",
    "services.sweng_how": "How it works",
    "services.sweng_step1_title": "Architecture Review",
    "services.sweng_step1_text": "We assess your current stack and design a scalable architecture tailored to your growth trajectory.",
    "services.sweng_step2_title": "Development & Integration",
    "services.sweng_step2_text": "Senior engineers build and integrate modules into your existing systems with minimal disruption.",
    "services.sweng_step3_title": "Testing & Optimization",
    "services.sweng_step3_text": "Rigorous QA, performance testing, and optimization to ensure production-grade reliability.",
    "services.consulting_title": "Consulting",
    "services.consulting_text": "Strategic technology consulting to help you make informed decisions about your software architecture and development roadmap.",
    "services.consulting_how": "How it works",
    "services.consulting_step1_title": "Technical Assessment",
    "services.consulting_step1_text": "We audit your current technology landscape and identify bottlenecks, risks, and opportunities.",
    "services.consulting_step2_title": "Strategic Roadmap",
    "services.consulting_step2_text": "A clear, prioritized plan for technology investments aligned with your business objectives.",
    "services.consulting_step3_title": "Ongoing Advisory",
    "services.consulting_step3_text": "Fractional CTO-level guidance on architecture decisions, vendor selection, and team scaling.",

    // Nearshore
    "nearshore.title": "WHY NEARSHORE WITH DØR",
    "nearshore.subtitle": "The advantages of working with a boutique LATAM team",
    "nearshore.tz_title": "UTC-3 Timezone",
    "nearshore.tz_text": "Full overlap with EST, partial with PST. Real-time collaboration, no async delays.",
    "nearshore.rotation_title": "Minimal Rotation",
    "nearshore.rotation_text": "The engineer who starts on your team is built to stay. Our boutique model ensures continuity — no revolving doors, no knowledge loss.",
    "nearshore.senior_title": "Senior Only",
    "nearshore.senior_text": "No juniors, no bait-and-switch. Every engineer we place is rigorously vetted for senior-level expertise.",
    "nearshore.speed_title": "Under 3 Weeks",
    "nearshore.speed_text": "From first call to engineer embedded in your team in under 3 weeks. Not 3 months.",

    // Contributions
    "contributions.title": "OUR CONTRIBUTIONS",
    "contributions.subtitle": "Our engineers contributed to these projects, delivering innovative solutions that made a measurable impact.",
    "contributions.cat_airport": "Contribution: Airport Technology",
    "contributions.cat_cruise": "Contribution: Cruise Industry",
    "contributions.cat_biometric": "Contribution: Biometric Technology",
    "contributions.cat_travel": "Contribution: Travel Technology",
    "contributions.cat_product": "Our Product",
    "contributions.carrasco_title": "Aeropuerto Internacional de Carrasco",
    "contributions.carrasco_result": "40% reduction in pre-security and migration times",
    "contributions.msc_title": "MSC Cruises: Fully Biometric Embarkation Journey",
    "contributions.msc_result": "50% reduction in boarding and disembarkation times",
    "contributions.aifa_title": "AIFA: Biometric Technology Implementation",
    "contributions.aifa_result": "40% average reduction in boarding times",
    "contributions.curacao_title": "Curaçao Express Pass",
    "contributions.curacao_result": "Automated migration processing in 10 seconds",
    "contributions.sintmaarten_title": "Sint Maarten Princess Juliana International Airport",
    "contributions.sintmaarten_result": "30% reduction in passenger wait times",
    "contributions.puntadeleste_title": "Aeropuerto Internacional de Punta del Este",
    "contributions.puntadeleste_result": "50% reduction in required personnel",
    "contributions.twarz_title": "TWARZ",
    "contributions.read_more": "Read More",

    // Team
    "team.title": "FOUNDERS & LEADERSHIP",
    "team.subtitle": "You work directly with our founders — no account managers, no layers.",
    "team.felipe_role": "Director of Solutions",
    "team.leonardo_role": "Technical Director",
    "team.fernando_role": "Director of Operations",

    // Contact
    "contact.title": "READY TO SCALE YOUR TEAM?",
    "contact.subtitle": "Tell us what you need. Your first engineer could be embedded in under 3 weeks.",
    "contact.get_in_touch": "Get in Touch",
    "contact.description": "Ready to transform your software challenges into growth opportunities? We'd love to hear about your project.",
    "contact.email_label": "Email",
    "contact.schedule_label": "Schedule a Call",
    "contact.schedule_text": "Book a free consultation to discuss your needs",
    "contact.schedule_btn": "Schedule a Meeting",

    // Footer
    "footer.tagline": "We build. You grow.",
    "footer.nav_title": "Navigation",
    "footer.nav_home": "Home",
    "footer.nav_services": "Services",
    "footer.nav_contributions": "Our Contributions",
    "footer.nav_team": "Team",
    "footer.nav_contact": "Contact",
    "footer.contact_title": "Contact",
    "footer.location": "Montevideo, Uruguay",
    "footer.linkedin": "Connect with us",
    "footer.rights": "All rights reserved.",

    // Cookie
    "cookie.text": "We use cookies to enhance your experience and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
    "cookie.learn_more": "Learn more",
    "cookie.reject": "Reject",
    "cookie.accept": "Accept All",

    // JS strings
    "js.form_validation": "Please fill in all required fields.",
    "js.sending": "Sending...",
    "js.carousel_slide": "Go to slide",

    // Success page
    "success.title": "Thank You!",
    "success.message": "Your message has been sent successfully. We've received your project details and will get back to you within 24 hours.",
    "success.back_home": "Back to Home",
    "success.schedule": "Schedule a Call",
    "success.next_title": "What happens next?",
    "success.next_step1": "1. We'll review your project requirements",
    "success.next_step2": "2. Our team will contact you within 24 hours",
    "success.next_step3": "3. We'll discuss how we can scale your team"
  },

  es: {
    // Meta
    "meta.title": "dør - Construimos. Tú creces.",
    "meta.description": "dør es una boutique de software en Uruguay que ofrece staff augmentation con ingenieros senior de LATAM. Confianza de clientes enterprise en aviación, biometría y fintech.",
    "meta.og_title": "dør - Ingenieros Senior de LATAM Integrados en Tu Equipo",
    "meta.og_description": "Boutique de software en Uruguay. Staff augmentation con ingenieros senior — misma zona horaria, totalmente bilingües, rotación mínima. Confianza de clientes enterprise por más de 5 años.",
    "meta.tw_title": "dør - Ingenieros Senior de LATAM Integrados en Tu Equipo",
    "meta.tw_description": "Boutique de software en Uruguay. Staff augmentation con ingenieros senior — misma zona horaria, totalmente bilingües, rotación mínima.",

    // Nav
    "nav.services": "Servicios",
    "nav.contributions": "Contribuciones",
    "nav.team": "Equipo",
    "nav.contact": "Contacto",
    "nav.schedule": "Agendar Llamada",

    // Hero
    "hero.tagline": "Construimos. Tú creces.",
    "hero.title": "ESCALÁ TU EQUIPO DE INGENIERÍA",
    "hero.title_accent": "EN MENOS DE 3 SEMANAS",
    "hero.subtitle": "Evitá el ciclo de contratación de 3 meses. Nuestros ingenieros senior de LATAM se integran en tu equipo desde el día uno — misma zona horaria, totalmente bilingües, rotación mínima. Confianza de clientes enterprise por más de 5 años.",
    "hero.cta_primary": "Escalá Tu Equipo",
    "hero.cta_secondary": "Conocé Más",
    "hero.stat1_number": "< 3 Semanas",
    "hero.stat1_label": "Para Empezar",
    "hero.stat2_number": "5+ Años",
    "hero.stat2_label": "Retención de Clientes",
    "hero.stat3_number": "100%",
    "hero.stat3_label": "Equipo Bilingüe",
    "hero.stat4_number": "10+",
    "hero.stat4_label": "Clientes Enterprise",

    // WHY CTOs CHOOSE
    "ctos.title": "POR QUÉ LOS CTOs ELIGEN DØR",
    "ctos.subtitle": "Los problemas de contratación que enfrentan los CTOs — y cómo los resolvemos.",
    "ctos.card1_title": "Contratar Toma 3-4 Meses",
    "ctos.card1_text": "Con nosotros no. Te conectamos con ingenieros senior en 48 horas y los integramos en tu equipo en menos de 3 semanas.",
    "ctos.card2_title": "La Rotación de Ingenieros Destruye Proyectos",
    "ctos.card2_text": "La continuidad es parte central de cómo trabajamos. El ingeniero que empieza tu proyecto es el que lo entrega. Nuestro modelo boutique garantiza rotación mínima — por diseño, no por suerte.",
    "ctos.card3_title": "La Diferencia Horaria Mata la Colaboración",
    "ctos.card3_text": "En UTC-3, nuestros ingenieros tienen solapamiento total con la costa este de EE.UU. Standups en tiempo real, code reviews en el día, sin demoras asíncronas.",
    "ctos.card4_title": "Las Agencias Envían Juniors Después de Vender Seniors",
    "ctos.card4_text": "Cada ingeniero que colocamos está rigurosamente evaluado a nivel senior. Sin sorpresas — vos entrevistás y elegís quién se une a tu equipo.",
    "ctos.card5_title": "Demasiadas Capas Entre Vos y el Trabajo",
    "ctos.card5_text": "Trabajás directamente con nuestros fundadores. Sin account managers, sin coordinadores de proyecto filtrando la comunicación.",
    "ctos.card6_title": "Escalar Significa Perder Calidad",
    "ctos.card6_text": "Somos un equipo boutique por diseño. Ingenieros seleccionados, entrega de nivel enterprise y el enfoque que viene de mantenerse pequeños.",

    // Services
    "services.title": "NUESTROS SERVICIOS",
    "services.subtitle": "Soluciones tecnológicas integrales que impulsan el crecimiento y la innovación",
    "services.staffaug_title": "Staff Augmentation",
    "services.staffaug_text": "Ingenieros senior integrados en tu equipo, no tercerizados a una caja negra. Misma zona horaria (UTC-3), totalmente bilingües, rotación mínima. Escalá tu capacidad de ingeniería sin el costo de contratar en EE.UU.",
    "services.staffaug_how": "Cómo funciona",
    "services.staffaug_step1_title": "Contanos qué necesitás",
    "services.staffaug_step1_text": "Compartí tu stack, tamaño de equipo y plazos. Te conectamos con los ingenieros correctos en 48 horas.",
    "services.staffaug_step2_title": "Conocé a tus ingenieros",
    "services.staffaug_step2_text": "Entrevistá candidatos directamente. Sin intermediarios, sin account managers. Vos elegís quién se suma a tu equipo.",
    "services.staffaug_step3_title": "Producción desde la semana uno",
    "services.staffaug_step3_text": "Tu ingeniero se integra en tus flujos de trabajo, herramientas y standups desde el día uno. Solapamiento total con zonas horarias de EE.UU.",
    "services.fullexp_title": "Experiencia Completa",
    "services.fullexp_text": "Desarrollo de software de punta a punta, desde el concepto hasta el despliegue. Manejamos el ciclo completo de desarrollo para aplicaciones web y móviles.",
    "services.fullexp_how": "Cómo funciona",
    "services.fullexp_step1_title": "Descubrimiento y Planificación",
    "services.fullexp_step1_text": "Mapeamos tus requerimientos, definimos alcance y construimos una hoja de ruta alineada con tus objetivos de negocio.",
    "services.fullexp_step2_title": "Diseño y Desarrollo",
    "services.fullexp_step2_text": "Nuestro equipo diseña, construye e itera sobre tu producto usando sprints ágiles con total transparencia.",
    "services.fullexp_step3_title": "Lanzamiento y Soporte",
    "services.fullexp_step3_text": "Nos encargamos del despliegue, QA y soporte post-lanzamiento para asegurar una puesta en marcha fluida y estabilidad continua.",
    "services.sweng_title": "Ingeniería de Software",
    "services.sweng_text": "Desarrollo experto de soluciones SaaS escalables con tecnologías modernas. Ideal para aerolíneas y sistemas de gestión aeroportuaria.",
    "services.sweng_how": "Cómo funciona",
    "services.sweng_step1_title": "Revisión de Arquitectura",
    "services.sweng_step1_text": "Evaluamos tu stack actual y diseñamos una arquitectura escalable adaptada a tu trayectoria de crecimiento.",
    "services.sweng_step2_title": "Desarrollo e Integración",
    "services.sweng_step2_text": "Ingenieros senior construyen e integran módulos en tus sistemas existentes con mínima interrupción.",
    "services.sweng_step3_title": "Testing y Optimización",
    "services.sweng_step3_text": "QA riguroso, pruebas de rendimiento y optimización para asegurar confiabilidad a nivel de producción.",
    "services.consulting_title": "Consultoría",
    "services.consulting_text": "Consultoría tecnológica estratégica para ayudarte a tomar decisiones informadas sobre tu arquitectura de software y hoja de ruta de desarrollo.",
    "services.consulting_how": "Cómo funciona",
    "services.consulting_step1_title": "Evaluación Técnica",
    "services.consulting_step1_text": "Auditamos tu panorama tecnológico actual e identificamos cuellos de botella, riesgos y oportunidades.",
    "services.consulting_step2_title": "Hoja de Ruta Estratégica",
    "services.consulting_step2_text": "Un plan claro y priorizado para inversiones tecnológicas alineado con tus objetivos de negocio.",
    "services.consulting_step3_title": "Asesoramiento Continuo",
    "services.consulting_step3_text": "Orientación a nivel CTO fraccional en decisiones de arquitectura, selección de proveedores y escalamiento de equipos.",

    // Nearshore
    "nearshore.title": "POR QUÉ NEARSHORE CON DØR",
    "nearshore.subtitle": "Las ventajas de trabajar con un equipo boutique de LATAM",
    "nearshore.tz_title": "Zona Horaria UTC-3",
    "nearshore.tz_text": "Solapamiento total con EST, parcial con PST. Colaboración en tiempo real, sin demoras asíncronas.",
    "nearshore.rotation_title": "Rotación Mínima",
    "nearshore.rotation_text": "El ingeniero que empieza en tu equipo está pensado para quedarse. Nuestro modelo boutique asegura continuidad — sin puertas giratorias, sin pérdida de conocimiento.",
    "nearshore.senior_title": "Solo Seniors",
    "nearshore.senior_text": "Sin juniors, sin sorpresas. Cada ingeniero que colocamos está rigurosamente evaluado a nivel senior.",
    "nearshore.speed_title": "En Menos de 3 Semanas",
    "nearshore.speed_text": "Desde la primera llamada hasta un ingeniero integrado en tu equipo en menos de 3 semanas. No 3 meses.",

    // Contributions
    "contributions.title": "NUESTRAS CONTRIBUCIONES",
    "contributions.subtitle": "Nuestros ingenieros contribuyeron a estos proyectos, entregando soluciones innovadoras con impacto medible.",
    "contributions.cat_airport": "Contribución: Tecnología Aeroportuaria",
    "contributions.cat_cruise": "Contribución: Industria de Cruceros",
    "contributions.cat_biometric": "Contribución: Tecnología Biométrica",
    "contributions.cat_travel": "Contribución: Tecnología de Viajes",
    "contributions.cat_product": "Nuestro Producto",
    "contributions.carrasco_title": "Aeropuerto Internacional de Carrasco",
    "contributions.carrasco_result": "40% de reducción en tiempos de pre-seguridad y migración",
    "contributions.msc_title": "MSC Cruises: Embarque Biométrico Completo",
    "contributions.msc_result": "50% de reducción en tiempos de embarque y desembarque",
    "contributions.aifa_title": "AIFA: Implementación de Tecnología Biométrica",
    "contributions.aifa_result": "40% de reducción promedio en tiempos de embarque",
    "contributions.curacao_title": "Curaçao Express Pass",
    "contributions.curacao_result": "Procesamiento migratorio automatizado en 10 segundos",
    "contributions.sintmaarten_title": "Aeropuerto Internacional Princess Juliana, Sint Maarten",
    "contributions.sintmaarten_result": "30% de reducción en tiempos de espera de pasajeros",
    "contributions.puntadeleste_title": "Aeropuerto Internacional de Punta del Este",
    "contributions.puntadeleste_result": "50% de reducción en personal requerido",
    "contributions.twarz_title": "TWARZ",
    "contributions.read_more": "Leer Más",

    // Team
    "team.title": "FUNDADORES Y LIDERAZGO",
    "team.subtitle": "Trabajás directamente con nuestros fundadores — sin account managers, sin capas intermedias.",
    "team.felipe_role": "Director de Soluciones",
    "team.leonardo_role": "Director Técnico",
    "team.fernando_role": "Director de Operaciones",

    // Contact
    "contact.title": "¿LISTO PARA ESCALAR TU EQUIPO?",
    "contact.subtitle": "Contanos qué necesitás. Tu primer ingeniero podría estar integrado en menos de 3 semanas.",
    "contact.get_in_touch": "Contactanos",
    "contact.description": "¿Listo para transformar tus desafíos de software en oportunidades de crecimiento? Nos encantaría conocer tu proyecto.",
    "contact.email_label": "Email",
    "contact.schedule_label": "Agendá una Llamada",
    "contact.schedule_text": "Reservá una consulta gratuita para hablar de tus necesidades",
    "contact.schedule_btn": "Agendar Reunión",

    // Footer
    "footer.tagline": "Construimos. Tú creces.",
    "footer.nav_title": "Navegación",
    "footer.nav_home": "Inicio",
    "footer.nav_services": "Servicios",
    "footer.nav_contributions": "Contribuciones",
    "footer.nav_team": "Equipo",
    "footer.nav_contact": "Contacto",
    "footer.contact_title": "Contacto",
    "footer.location": "Montevideo, Uruguay",
    "footer.linkedin": "Conectá con nosotros",
    "footer.rights": "Todos los derechos reservados.",

    // Cookie
    "cookie.text": "Usamos cookies para mejorar tu experiencia y analizar nuestro tráfico. Al hacer clic en \"Aceptar Todo\", consentís el uso de cookies.",
    "cookie.learn_more": "Más información",
    "cookie.reject": "Rechazar",
    "cookie.accept": "Aceptar Todo",

    // JS strings
    "js.form_validation": "Por favor completá todos los campos obligatorios.",
    "js.sending": "Enviando...",
    "js.carousel_slide": "Ir a diapositiva",

    // Success page
    "success.title": "¡Gracias!",
    "success.message": "Tu mensaje fue enviado con éxito. Recibimos los detalles de tu proyecto y te contactaremos dentro de las próximas 24 horas.",
    "success.back_home": "Volver al Inicio",
    "success.schedule": "Agendar Llamada",
    "success.next_title": "¿Qué sigue?",
    "success.next_step1": "1. Revisaremos los requerimientos de tu proyecto",
    "success.next_step2": "2. Nuestro equipo te contactará en 24 horas",
    "success.next_step3": "3. Conversaremos sobre cómo escalar tu equipo"
  }
};

/**
 * Get current language from URL param > localStorage > browser > default
 */
function getLang() {
  var params = new URLSearchParams(window.location.search);
  var urlLang = params.get('lang');
  if (urlLang === 'en' || urlLang === 'es') return urlLang;
  var stored = localStorage.getItem('dor-lang');
  if (stored === 'en' || stored === 'es') return stored;
  return navigator.language && navigator.language.startsWith('es') ? 'es' : 'en';
}

/**
 * Apply language to all data-i18n elements
 */
function setLang(lang) {
  if (lang !== 'en' && lang !== 'es') lang = 'en';
  localStorage.setItem('dor-lang', lang);
  document.documentElement.lang = lang;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    var text = translations[lang] && translations[lang][key];
    if (text) el.textContent = text;
  });

  // HTML content (for elements that need innerHTML like cookie text with links)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    var text = translations[lang] && translations[lang][key];
    if (text) el.innerHTML = text;
  });

  // Attribute translations (meta content, aria-labels, placeholders)
  document.querySelectorAll('[data-i18n-attr]').forEach(function(el) {
    var pairs = el.getAttribute('data-i18n-attr').split(';');
    pairs.forEach(function(pair) {
      var parts = pair.split(':');
      if (parts.length === 2) {
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var text = translations[lang] && translations[lang][key];
        if (text) el.setAttribute(attr, text);
      }
    });
  });

  // Update toggle buttons
  document.querySelectorAll('.lang-toggle').forEach(function(btn) {
    btn.textContent = lang === 'en' ? 'ES' : 'EN';
    btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a Español' : 'Switch to English');
  });

  // Update page title
  var titleKey = translations[lang] && translations[lang]['meta.title'];
  if (titleKey) document.title = titleKey;
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  setLang(getLang());
});
