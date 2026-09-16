/* ==========================================================================
   dør site — i18n (ES/EN), header behavior, scroll reveals, magnetic CTAs.
   Shared by index.html and partner-nearshoring.html. No dependencies.
   Copy sourced from dør's real material (main landing + Landing Umbral).
   ========================================================================== */
(function () {
  'use strict';

  var CAL = 'https://fantastical.app/felipestanham/30-min-with-felipe-dor';

  /* ---- i18n dictionary ------------------------------------------------- */
  var DICT = {
    'nav.how':      { es: 'Cómo trabajamos', en: 'How we work' },
    'nav.what':     { es: 'Qué hacemos',     en: 'What we do' },
    'nav.why':      { es: 'Por qué dør',     en: 'Why dør' },
    'nav.cases':    { es: 'Casos',           en: 'Cases' },
    'nav.partner':  { es: 'Nearshoring',     en: 'Nearshoring' },
    'nav.about':    { es: 'Quiénes somos',   en: 'About us' },
    'cta.book':     { es: 'Agendá una llamada', en: 'Book a call' },
    'cta.back':     { es: 'Volver al inicio', en: 'Back to home' },

    'proof.s1n':    { es: '+5 años',   en: '5+ years' },
    'proof.s1k':    { es: 'operando',  en: 'in business' },
    'proof.s2n':    { es: '+90%',      en: '90%+' },
    'proof.s2k':    { es: 'retención de equipo', en: 'team retention' },
    'proof.s3n':    { es: '<3 semanas', en: '<3 weeks' },
    'proof.s3k':    { es: 'para arrancar', en: 'to get started' },
    'proof.s4n':    { es: '+10',       en: '10+' },
    'proof.s4k':    { es: 'clientes enterprise', en: 'enterprise clients' },
    'proof.link':   { es: 'Conocé quiénes somos', en: 'Get to know us' },

    'whoami.eyebrow': { es: 'Quiénes somos', en: 'Who we are' },
    'whoami.h2a':   { es: 'Somos un equipo, ', en: 'We’re a team, ' },
    'whoami.h2b':   { es: 'no un proveedor.', en: 'not a vendor.' },
    'whoami.p1':    { es: 'dør es una compañía uruguaya de software. Trabajás directo con la gente que construye — senior, en tu huso horario, cercana. Sin account managers ni capas que filtren la comunicación.',
                      en: 'dør is a Uruguayan software company. You work directly with the people who build — senior, in your time zone, close. No account managers or layers filtering communication.' },
    'whoami.p2':    { es: 'Entendemos tu operación, construimos lo que necesita y respondemos por el resultado. Un socio, no un recurso más.',
                      en: 'We understand your operation, build what it needs and answer for the result. A partner, not just another resource.' },
    'whoami.link':  { es: 'Conocé quiénes somos', en: 'Get to know us' },

    'hero.kicker':  { es: 'Tecnología con nombre y apellido.',
                      en: 'Technology with a name and a face.' },
    'hero.h1a':     { es: 'Construimos software que te hace ',
                      en: 'We build software that makes you ' },
    'hero.h1accent':{ es: 'crecer.', en: 'grow.' },
    'hero.sub':     { es: 'Desarrollo a medida, automatización e IA — accesible y personalizado. Primero entendemos tu operación, después construimos. En ese orden.',
                      en: 'Custom development, automation and AI — accessible and personalized. First we understand your operation, then we build. In that order.' },
    'hero.cta1':    { es: 'Agendá una llamada', en: 'Book a call' },
    'hero.cta2':    { es: 'Cómo trabajamos', en: 'How we work' },
    'hero.scroll':  { es: 'Scrolleá', en: 'Scroll' },

    'door.eyebrow': { es: 'dør = puerta', en: 'dør = door' },
    'door.h2a':     { es: 'dør significa puerta. ', en: 'dør means door. ' },
    'door.h2b':     { es: 'La nuestra da a Sudamérica.', en: 'Ours opens onto South America.' },
    'door.p1':      { es: 'En danés. Equipos de software que trabajan en tu huso horario, en tu idioma, dentro de tu empresa. No somos una agencia más de outsourcing.',
                      en: 'In Danish. Software teams working in your time zone, in your language, inside your company. Not one more outsourcing agency.' },
    'door.p2':      { es: 'Arrancamos entendiendo, no vendiendo. Definimos qué mueve la aguja, en qué orden y por qué — y recién ahí construimos.',
                      en: 'We start by understanding, not selling. We define what moves the needle, in what order and why — and only then we build.' },

    'how.eyebrow':  { es: 'Cómo trabajamos', en: 'How we work' },
    'how.h2':       { es: 'Primero entendemos. Después construimos.', en: 'First we understand. Then we build.' },
    'how.sub':      { es: 'Sin propuesta de cuarenta páginas. Con nombres y caras — sabés quién construye tu proyecto.',
                      en: 'No forty-page proposal. With names and faces — you know who builds your project.' },
    'how.s1.n':     { es: 'Discovery', en: 'Discovery' },
    'how.s1.h':     { es: 'Entendemos el problema', en: 'We understand the problem' },
    'how.s1.p':     { es: 'Antes de escribir una línea de código. Qué necesitás, para qué y qué resultado esperar.',
                      en: 'Before writing a line of code. What you need, what for and what result to expect.' },
    'how.s2.n':     { es: 'Equipo', en: 'Team' },
    'how.s2.h':     { es: 'Presentamos el equipo', en: 'We introduce the team' },
    'how.s2.p':     { es: 'Nombres y caras. Sabés exactamente quién va a construir tu producto, no un recurso anónimo.',
                      en: 'Names and faces. You know exactly who will build your product, not an anonymous resource.' },
    'how.s3.n':     { es: 'Plan', en: 'Plan' },
    'how.s3.h':     { es: 'Plan claro y preciso', en: 'A clear, precise plan' },
    'how.s3.p':     { es: 'Alcance, tiempos y responsables por escrito. Sin sorpresas ni gastos sin sentido.',
                      en: 'Scope, timing and owners, in writing. No surprises, no pointless spend.' },
    'how.s4.n':     { es: 'Ejecución', en: 'Execution' },
    'how.s4.h':     { es: 'Ponemos en marcha tu proyecto', en: 'We put your project in motion' },
    'how.s4.p':     { es: 'Arrancamos, integramos y seguimos con vos mientras crece. No entregamos y desaparecemos.',
                      en: 'We start, integrate and stay with you as it grows. We don’t deliver and vanish.' },
    'how.after.h':  { es: 'No desaparecemos después del arranque', en: 'We don’t disappear after kickoff' },
    'how.after.1':  { es: 'Un referente de dør sigue el proyecto. No un ticket.', en: 'A dør lead follows the project. Not a ticket.' },
    'how.after.2':  { es: 'El equipo escala cuando lo necesitás, con la misma vara de selección.', en: 'The team scales when you need it, held to the same selection bar.' },
    'how.after.3':  { es: 'Si algo no funciona, lo decimos antes de que sea un problema.', en: 'If something isn’t working, we say so before it becomes a problem.' },

    'what.eyebrow': { es: 'Qué hacemos', en: 'What we do' },
    'what.h2':      { es: 'Construimos lo que tu negocio necesita.', en: 'We build what your business needs.' },
    'what.sub':     { es: 'Desde automatizar una tarea repetitiva hasta un sistema entero. Algunas cosas que hacemos:',
                      en: 'From automating a repetitive task to an entire system. Some of what we do:' },
    'what.c1.h':    { es: 'Automatización de procesos', en: 'Process automation' },
    'what.c1.p':    { es: 'Eso que hacés a mano todos los días, funcionando solo.', en: 'That thing you do by hand every day, running on its own.' },
    'what.c2.h':    { es: 'Bots de WhatsApp e IA', en: 'WhatsApp bots & AI' },
    'what.c2.p':    { es: 'Agentes que atienden, responden y resuelven — con IA aplicada a tu negocio, no de adorno.', en: 'Agents that answer, respond and resolve — with AI applied to your business, not for show.' },
    'what.c3.h':    { es: 'Desarrollo a medida', en: 'Custom development' },
    'what.c3.p':    { es: 'Cuando lo que necesitás todavía no existe, lo construimos desde cero.', en: 'When what you need doesn’t exist yet, we build it from scratch.' },
    'what.c4.h':    { es: 'Integraciones', en: 'Integrations' },
    'what.c4.p':    { es: 'Que todo lo que ya usás deje de estar desconectado y hable entre sí.', en: 'So everything you already use stops being disconnected and talks to each other.' },
    'what.c5.h':    { es: 'Nearshoring', en: 'Nearshoring' },
    'what.c5.p':    { es: 'Sumá desarrolladores senior a tu equipo, en tu huso horario y con rotación mínima. Trabajá con nosotros en formato partner.', en: 'Add senior developers to your team, in your time zone and with minimal turnover. Work with us in partner mode.' },
    'what.c5.tag':  { es: 'Partner', en: 'Partner' },
    'what.c5.link': { es: 'Conocé el modelo partner', en: 'See the partner model' },
    'what.c6.h':    { es: 'Sistemas y paneles internos', en: 'Internal systems & dashboards' },
    'what.c6.p':    { es: 'Para ordenar la información que hoy vive en mil planillas y verla en un solo lugar.', en: 'To organize the information that lives in a thousand spreadsheets and see it in one place.' },
    'what.note.a':  { es: '¿No tenés claro qué necesitás? ', en: 'Not sure what you need? ' },
    'what.note.b':  { es: 'Para eso está el discovery. Lo vemos juntos.', en: 'That’s what discovery is for. We figure it out together.' },

    'why.eyebrow':  { es: 'Por qué dør', en: 'Why dør' },
    'why.h2':       { es: 'No vendemos recursos. Entregamos resultados.', en: 'We don’t sell resources. We deliver results.' },
    'why.i1.h':     { es: 'Experiencia en sistemas que no pueden fallar', en: 'Experience in systems that can’t fail' },
    'why.i1.p':     { es: 'Construimos desde sistemas biométricos de embarque en aeropuertos internacionales hasta plataformas para el Estado. Entregamos en producción, no solo prototipos.', en: 'We’ve built everything from biometric boarding systems in international airports to platforms for government. We ship to production, not just prototypes.' },
    'why.i2.h':     { es: 'Trabajás directo con los fundadores', en: 'You work directly with the founders' },
    'why.i2.p':     { es: 'Sin account managers ni capas que filtren la comunicación. Hablás con quien decide y construye.', en: 'No account managers or layers filtering communication. You talk to who decides and builds.' },
    'why.i3.h':     { es: 'Cerca, en tu huso horario', en: 'Close, in your time zone' },
    'why.i3.p':     { es: 'Base en Montevideo (GMT-3), con solapamiento con la costa este de US. Colaboración en tiempo real, no a 12 horas de distancia.', en: 'Based in Montevideo (GMT-3), overlapping the US East Coast. Real-time collaboration, not 12 hours away.' },
    'why.i4.h':     { es: 'Respondemos por el resultado', en: 'We answer for the result' },
    'why.i4.p':     { es: 'No entregamos y desaparecemos: nos quedamos hasta que funciona en producción. Nos comprometemos con el resultado, no con las horas.', en: 'We don’t deliver and vanish: we stay until it works in production. We commit to the result, not the hours.' },

    'cases.eyebrow':{ es: 'Casos', en: 'Cases' },
    'cases.h2':     { es: 'Lo que hicimos, con resultado', en: 'What we did, with results' },
    'cases.sub':    { es: 'No vendemos tecnología: dejamos operaciones funcionando. Algunos trabajos reales, contados sin nombres.',
                      en: 'We don’t sell technology: we leave operations running. Some real work, told without names.' },
    'cases.c1.cat': { es: 'Tecnología aeroportuaria', en: 'Airport technology' },
    'cases.c1.h':   { es: 'Embarque biométrico en un aeropuerto internacional', en: 'Biometric boarding at an international airport' },
    'cases.c1.p':   { es: '40% menos de tiempo en los procesos de pre-embarque y migración.', en: '40% less time in pre-boarding and immigration processes.' },
    'cases.c2.cat': { es: 'Industria de cruceros', en: 'Cruise industry' },
    'cases.c2.h':   { es: 'Recorrido de embarque totalmente biométrico para una naviera global', en: 'A fully biometric embarkation journey for a global cruise line' },
    'cases.c2.p':   { es: '50% menos de tiempo en embarque y desembarque de pasajeros.', en: '50% less time in passenger boarding and disembarkation.' },
    'cases.more':   { es: 'Ver todos los casos', en: 'See all cases' },
    'case.view':    { es: 'Ver caso', en: 'View case' },

    /* casos — grid cards (shared by landing teaser + casos.html) */
    'cs1.cat':      { es: 'Nearshoring', en: 'Nearshoring' },
    'cs1.title':    { es: 'Escalamos la ingeniería de un líder global de tecnología de viajes', en: 'We scaled engineering for a global travel-tech leader' },
    'cs1.teaser':   { es: 'Sumamos ingenieros senior que se integraron a sus equipos para construir sistemas de embarque biométrico desplegados en aeropuertos internacionales.', en: 'We added senior engineers who joined their teams to build biometric boarding systems deployed in international airports.' },
    'cs2.cat':      { es: 'Sector público', en: 'Public sector' },
    'cs2.title':    { es: 'Sacamos del papel los trámites de un organismo del Estado', en: 'We took a government body’s procedures off paper' },
    'cs2.teaser':   { es: 'Transformamos un proceso manual y lento en un flujo digital automatizado, integrado con los sistemas del Estado.', en: 'We turned a slow, manual process into an automated digital flow, integrated with government systems.' },
    'cs3.cat':      { es: 'IA', en: 'AI' },
    'cs3.title':    { es: 'IA que responde sobre tus datos y tus documentos', en: 'AI that answers across your data and your documents' },
    'cs3.teaser':   { es: 'Un asistente que cruza los datos del sistema con los documentos del negocio, y extrae automáticamente la información clave de cada uno.', en: 'An assistant that cross-references system data with the business’s documents, and automatically extracts the key information from each one.' },
    'cs4.cat':      { es: 'Automatización', en: 'Automation' },
    'cs4.title':    { es: 'Automatizamos la conciliación a tres vías sobre un ERP', en: 'We automated three-way matching on an ERP' },
    'cs4.teaser':   { es: 'Nuestro motor propio de matching —que aprende de las correcciones— sacó del día a día un proceso manual y propenso a errores.', en: 'Our own matching engine —which learns from corrections— removed a manual, error-prone process from the day-to-day.' },

    /* casos — shared detail labels */
    'cd.rubro':     { es: 'Rubro', en: 'Industry' },
    'cd.model':     { es: 'Modelo', en: 'Model' },
    'cd.problem':   { es: 'El problema', en: 'The problem' },
    'cd.did':       { es: 'Qué hicimos', en: 'What we did' },
    'cd.result':    { es: 'El resultado', en: 'The result' },
    'cd.back':      { es: 'Volver a casos', en: 'Back to cases' },
    'cd.cta.h':     { es: '¿Tenés un desafío parecido?', en: 'Have a similar challenge?' },
    'cd.cta.p':     { es: 'Lo miramos juntos y te decimos qué mover primero. Sin compromiso.', en: 'We look at it together and tell you what to move first. No commitment.' },

    /* casos — detail #1 (nearshoring) */
    'cd1.rubro':    { es: 'Tecnología para viajes y aviación', en: 'Travel & aviation technology' },
    'cd1.model':    { es: 'Nearshoring · staff augmentation', en: 'Nearshoring · staff augmentation' },
    'cd1.intro':    { es: 'Un líder global en tecnología para la industria de viajes y aviación necesitaba escalar su ingeniería sin resignar seniority ni sumar husos horarios en contra.', en: 'A global leader in travel and aviation technology needed to scale its engineering without giving up seniority or adding opposing time zones.' },
    'cd1.problem.p':{ es: 'El ciclo de contratación local era largo y caro, y las opciones offshore sumaban distancia horaria y barreras de comunicación. Necesitaban ingenieros senior que arrancaran rápido y trabajaran sincronizados con sus equipos, en sistemas donde un error se paga caro.', en: 'Local hiring was slow and expensive, and offshore options added time-zone distance and communication barriers. They needed senior engineers who could start fast and work in sync with their teams, on systems where a mistake is costly.' },
    'cd1.d1.h':     { es: 'Perfiles senior en semanas', en: 'Senior profiles in weeks' },
    'cd1.d1.p':     { es: 'Propusimos perfiles senior que entrevistaron en menos de tres semanas. El cliente eligió a quién sumar — sin imponer perfiles ni bait-and-switch.', en: 'We proposed senior profiles they interviewed in under three weeks. The client chose who to add — no imposed profiles, no bait-and-switch.' },
    'cd1.d2.h':     { es: 'Integrados al equipo', en: 'Embedded in the team' },
    'cd1.d2.p':     { es: 'Nuestros ingenieros trabajaron dentro de sus equipos, con sus procesos y en su huso horario (GMT-3, con solapamiento con la costa este de US).', en: 'Our engineers worked inside their teams, with their processes and in their time zone (GMT-3, overlapping the US East Coast).' },
    'cd1.d3.h':     { es: 'Sistemas críticos en producción', en: 'Critical systems in production' },
    'cd1.d3.p':     { es: 'Contribuimos a sistemas de embarque biométrico desplegados en aeropuertos internacionales, con foco en la confiabilidad de producción, no en prototipos.', en: 'We contributed to biometric boarding systems deployed in international airports, focused on production reliability, not prototypes.' },
    'cd1.result.p': { es: 'Escalaron su ingeniería sin perder velocidad ni continuidad: el mismo equipo que arrancó siguió hasta producción. Los sistemas de embarque biométrico llegaron a reducir hasta un 40–50% los tiempos de embarque, pre-embarque y migración.', en: 'They scaled engineering without losing speed or continuity: the same team that started stayed through to production. The biometric boarding systems cut boarding, pre-boarding and immigration times by up to 40–50%.' },

    /* casos — detail #2 (organismo público / SIGREM) */
    'cd2.rubro':    { es: 'Sector público', en: 'Public sector' },
    'cd2.model':    { es: 'Desarrollo a medida', en: 'Custom development' },
    'cd2.intro':    { es: 'Un organismo del Estado gestionaba trámites de alto volumen a mano y en papel, con la información repartida entre sistemas que no se hablaban entre sí.', en: 'A government body handled high-volume procedures by hand and on paper, with information split across systems that didn’t talk to each other.' },
    'cd2.problem.p':{ es: 'Cada trámite pasaba por múltiples manos, planillas y sistemas desconectados. Los tiempos se estiraban, saber el estado de un expediente era difícil, y todo dependía de pasos manuales que se rompían.', en: 'Each procedure passed through many hands, spreadsheets and disconnected systems. Turnaround dragged, the status of a file was hard to know, and everything depended on manual steps that broke.' },
    'cd2.d1.h':     { es: 'Un flujo digital de punta a punta', en: 'An end-to-end digital flow' },
    'cd2.d1.p':     { es: 'Modelamos todo el ciclo del trámite como un flujo digital con estados claros, del inicio a la resolución, para que nada se pierda ni dependa de la memoria de alguien.', en: 'We modeled the whole procedure as a digital flow with clear states, from start to resolution, so nothing gets lost or depends on someone’s memory.' },
    'cd2.d2.h':     { es: 'Integrado con los sistemas del Estado', en: 'Integrated with government systems' },
    'cd2.d2.p':     { es: 'Conectamos identidad, antecedentes, expedientes y notificaciones, para que los datos se consulten y validen automáticamente en lugar de recargarse a mano.', en: 'We connected identity, records, files and notifications, so data is queried and validated automatically instead of re-entered by hand.' },
    'cd2.d3.h':     { es: 'Una plataforma que la gente usa', en: 'A platform people actually use' },
    'cd2.d3.p':     { es: 'Una web app responsive con autenticación del Estado, pensada para el trabajo real de los agentes, no solo para cumplir un requisito.', en: 'A responsive web app with government authentication, built for the agents’ real work, not just to tick a box.' },
    'cd2.result.p': { es: 'El proceso pasó de manual y en papel a un flujo digital único y trazable. El proyecto está en marcha: lo que ya dejamos andando reduce los tiempos de gestión y hace visible el estado de cada trámite en un solo lugar.', en: 'The process went from manual and paper-based to a single, traceable digital flow. The project is under way: what’s already live cuts processing times and makes the status of every procedure visible in one place.' },

    /* casos — detail #3 (comercio exterior / aduanas) */
    'cd3.rubro':    { es: 'Operación intensiva en documentos', en: 'Document-heavy operation' },
    'cd3.model':    { es: 'IA · Desarrollo a medida', en: 'AI · Custom development' },
    'cd3.intro':    { es: 'Una empresa cuya operación dependía de cruzar a mano los datos de su sistema con un gran volumen de documentos. Queríamos que eso lo hiciera el software.', en: 'A company whose operation depended on manually cross-referencing its system data with a large volume of documents. We wanted the software to do that.' },
    'cd3.problem.p':{ es: 'La información vivía en dos mundos: los datos estructurados del sistema y una montaña de documentos no estructurados. Responder una pregunta o completar un proceso exigía cruzar ambos a mano — lento y propenso a errores.', en: 'Information lived in two worlds: structured system data and a mountain of unstructured documents. Answering a question or completing a process meant cross-referencing both by hand — slow and error-prone.' },
    'cd3.d1.h':     { es: 'Un asistente sobre datos + documentos', en: 'An assistant over data + documents' },
    'cd3.d1.p':     { es: 'Un chat que responde combinando los datos del sistema y los documentos, eligiendo el nivel de modelo según la pregunta y generando gráficos o Excel cuando hace falta.', en: 'A chat that answers by combining system data and documents, picking the model tier per question and generating charts or Excel when needed.' },
    'cd3.d2.h':     { es: 'Extracción automática de documentos', en: 'Automatic document extraction' },
    'cd3.d2.p':     { es: 'Extracción de los campos clave de cada documento hacia el sistema, con nivel de confianza y trazabilidad por campo.', en: 'Extraction of each document’s key fields into the system, with confidence and traceability per field.' },
    'cd3.d3.h':     { es: 'Sobre nuestro motor propio', en: 'On our own engine' },
    'cd3.d3.p':     { es: 'Apoyado en nuestro motor de correspondencia —propiedad intelectual de dør, reutilizable— que aprende de las correcciones, más recuperación híbrida sobre la base documental.', en: 'Built on our matching engine —dør’s reusable intellectual property— which learns from corrections, plus hybrid retrieval over the document base.' },
    'cd3.result.p': { es: 'Pensada para sacar la carga manual del medio y reducir los errores, con trazabilidad en cada dato. El motor que la sostiene ya es parte de nuestras herramientas: lo reutilizamos, no lo empezamos de cero.', en: 'Designed to take the manual load out of the loop and cut errors, with traceability on every field. The engine behind it is already part of our toolkit: we reuse it, we don’t start from scratch.' },

    /* casos — detail #4 (automatización ERP) */
    'cd4.rubro':    { es: 'Distribución · ERP empresarial', en: 'Distribution · Enterprise ERP' },
    'cd4.model':    { es: 'Automatización · IA', en: 'Automation · AI' },
    'cd4.intro':    { es: 'Una empresa con un ERP empresarial conciliaba facturas, órdenes de compra y recepciones a mano — un proceso lento, repetitivo y propenso a errores.', en: 'A company on an enterprise ERP reconciled invoices, purchase orders and receipts by hand — a slow, repetitive, error-prone process.' },
    'cd4.problem.p':{ es: 'El equipo cruzaba a mano facturas contra órdenes y recepciones (conciliación a tres vías) y cargaba órdenes una por una. Cada excepción —un nombre distinto, una unidad distinta— frenaba todo y abría la puerta a errores costosos.', en: 'The team matched invoices against orders and receipts by hand (three-way matching) and keyed in orders one by one. Every exception —a different name, a different unit— stalled everything and opened the door to costly errors.' },
    'cd4.d1.h':     { es: 'Un motor propio de matching', en: 'Our own matching engine' },
    'cd4.d1.p':     { es: 'Construimos un motor de correspondencia —propiedad intelectual de dør— que empareja documentos con una cascada de reglas y aprende de cada corrección: alias aprendidos, sin repetir el mismo error dos veces.', en: 'We built a matching engine —dør’s intellectual property— that pairs documents through a cascade of rules and learns from every correction: learned aliases, never the same mistake twice.' },
    'cd4.d2.h':     { es: 'Un grafo de conocimiento del ERP', en: 'A knowledge graph of the ERP' },
    'cd4.d2.p':     { es: 'Modelamos las relaciones del ERP como un grafo con niveles de confianza, para que la automatización entienda cómo se conectan los datos y no adivine.', en: 'We modeled the ERP’s relationships as a graph with trust tiers, so the automation understands how data connects instead of guessing.' },
    'cd4.d3.h':     { es: 'Conciliación y carga automatizadas', en: 'Automated matching and entry' },
    'cd4.d3.p':     { es: 'La conciliación a tres vías y la carga de órdenes pasaron a correr solas; el equipo interviene solo en las excepciones que de verdad lo necesitan.', en: 'Three-way matching and order entry now run on their own; the team steps in only on the exceptions that truly need it.' },
    'cd4.result.p': { es: 'Sacamos del día a día un proceso manual y propenso a errores. El motor mejora con el uso —cada corrección lo hace más preciso— y es reutilizable: el mismo engine potencia otras soluciones de dør.', en: 'We removed a manual, error-prone process from the day-to-day. The engine improves with use —each correction makes it sharper— and is reusable: the same engine powers other dør solutions.' },

    'agenda.eyebrow':{ es: 'Agendá', en: 'Book' },
    'agenda.h2':    { es: 'Una llamada de 30 minutos', en: 'A 30-minute call' },
    'agenda.p':     { es: 'Sin propuesta de cuarenta páginas. Contanos el problema y te decimos si podemos resolverlo.',
                      en: 'No forty-page proposal. Tell us the problem and we tell you whether we can solve it.' },
    'agenda.name':  { es: 'Felipe Stanham', en: 'Felipe Stanham' },
    'agenda.role':  { es: 'Solutions Architect', en: 'Solutions Architect' },
    'agenda.f1k':   { es: 'Duración', en: 'Length' },
    'agenda.f1v':   { es: '30 minutos', en: '30 minutes' },
    'agenda.f2k':   { es: 'Idioma', en: 'Language' },
    'agenda.f2v':   { es: 'Español o inglés', en: 'English or Spanish' },
    'agenda.f3k':   { es: 'Formato', en: 'Format' },
    'agenda.f3v':   { es: 'Videollamada', en: 'Video call' },
    'agenda.cta':   { es: 'Ver horarios disponibles', en: 'See available times' },

    'foot.tag':     { es: 'We build. You grow.', en: 'We build. You grow.' },
    'foot.desc':    { es: 'Compañía uruguaya de desarrollo de software. Accesible y personalizado.', en: 'Uruguayan software development company. Accessible and personalized.' },
    'foot.explore': { es: 'Explorar', en: 'Explore' },
    'foot.contact': { es: 'Contacto', en: 'Contact' },
    'foot.loc':     { es: 'Montevideo, Uruguay · GMT-3', en: 'Montevideo, Uruguay · GMT-3' },
    'foot.privacy': { es: 'Privacidad', en: 'Privacy' },
    'foot.cookies': { es: 'Configurar cookies', en: 'Cookie settings' },

    'nf.eyebrow':   { es: 'Error 404', en: 'Error 404' },
    'nf.h':         { es: 'Esta puerta no lleva a ningún lado.', en: 'This door leads nowhere.' },
    'nf.p':         { es: 'La página que buscás no existe o cambió de lugar. Cruzá de nuevo y seguimos.', en: 'The page you’re looking for doesn’t exist or moved. Step back through and let’s continue.' },
    'nf.home':      { es: 'Volver al inicio', en: 'Back to home' },
    'nf.cases':     { es: 'Ver casos', en: 'See cases' },
    'foot.rights':  { es: '© ' + new Date().getFullYear() + ' dør. Todos los derechos reservados.', en: '© ' + new Date().getFullYear() + ' dør. All rights reserved.' },

    /* ---- /partner-nearshoring ---- */
    'pt.kicker':    { es: 'Modelo partner · Nearshoring', en: 'Partner model · Nearshoring' },
    'pt.h1a':       { es: 'Sumá un equipo senior a tu empresa, ', en: 'Add a senior team to your company, ' },
    'pt.h1accent':  { es: 'no un proveedor.', en: 'not a vendor.' },
    'pt.sub':       { es: 'Staff augmentation nearshore: desarrolladores senior de Uruguay y Argentina que se integran a tu equipo — en tu huso horario, en inglés y con rotación mínima. Un partner, no una agencia de outsourcing.',
                      en: 'Nearshore staff augmentation: senior developers from Uruguay and Argentina who join your team — in your time zone, in English and with minimal turnover. A partner, not an outsourcing agency.' },
    'pt.cta':       { es: 'Agendá una llamada', en: 'Book a call' },

    'pt.steps.eyebrow': { es: 'Cómo arrancamos', en: 'How we start' },
    'pt.steps.h':   { es: 'Tu equipo escalado en menos de un mes', en: 'Your team scaled in under a month' },
    'pt.s1.n':      { es: 'Discovery', en: 'Discovery' },
    'pt.s1.h':      { es: 'Contacto y requirement gathering', en: 'Contact and requirement gathering' },
    'pt.s1.p':      { es: 'Una llamada. Qué necesitás, cuándo y con quién.', en: 'One call. What you need, when, and with whom.' },
    'pt.s2.n':      { es: 'Fit', en: 'Fit' },
    'pt.s2.h':      { es: 'Buscamos el fit ideal en menos de 3 semanas', en: 'We find the ideal fit in under 3 weeks' },
    'pt.s2.p':      { es: 'Primero miramos candidatos internos. Si el perfil no está, lo salimos a buscar.', en: 'We look at internal candidates first. If the profile isn’t there, we go find it.' },
    'pt.s3.n':      { es: 'Elegís vos', en: 'You choose' },
    'pt.s3.h':      { es: 'El cliente elige las personas', en: 'You choose the people' },
    'pt.s3.p':      { es: 'Entrevistás vos. No imponemos perfiles ni hacemos bait-and-switch.', en: 'You run the interviews. We don’t impose profiles or do bait-and-switch.' },
    'pt.s4.n':      { es: 'Arranque', en: 'Start' },
    'pt.s4.h':      { es: 'Tu equipo escalado en menos de un mes', en: 'Your team scaled in under a month' },
    'pt.s4.p':      { es: 'Trabajando con tu gente, con tus procesos, en tu huso horario.', en: 'Working with your people, your process, your time zone.' },

    'pt.tz.eyebrow':{ es: 'Huso horario', en: 'Time zone' },
    'pt.tz.h':      { es: 'Solapamiento real con tu equipo', en: 'Real overlap with your team' },
    'pt.tz.p':      { es: 'Base en GMT-3 (Uruguay y Argentina): solapamiento completo con la costa este de US y parcial con la oeste. Standups en tiempo real, code reviews el mismo día, sin demoras async.',
                      en: 'Based in GMT-3 (Uruguay and Argentina): full overlap with the US East Coast and partial with the West. Real-time standups, same-day code reviews, no async delays.' },
    'pt.tz.city1':  { es: 'Montevideo · base', en: 'Montevideo · base' },
    'pt.tz.city2':  { es: 'New York · +7h solapamiento', en: 'New York · +7h overlap' },
    'pt.tz.city3':  { es: 'Chicago · +6h solapamiento', en: 'Chicago · +6h overlap' },
    'pt.tz.city4':  { es: 'San Francisco · +4h solapamiento', en: 'San Francisco · +4h overlap' },

    'pt.team.eyebrow': { es: 'Quiénes están del otro lado', en: 'Who’s on the other side' },
    'pt.team.h':    { es: 'Gente senior, cuidada', en: 'Senior people, looked after' },
    'pt.t1.h':      { es: 'Equipos senior', en: 'Senior teams' },
    'pt.t1.p':      { es: 'Beneficios, bonos y crecimiento profesional. La gente se queda, y eso lo nota tu proyecto.', en: 'Benefits, bonuses and career growth. People stay, and your project feels it.' },
    'pt.t2.h':      { es: 'Por qué Uruguay y Argentina', en: 'Why Uruguay and Argentina' },
    'pt.t2.p':      { es: 'Dos mercados con formación técnica fuerte y una cultura de trabajo cercana a la de tu equipo.', en: 'Two markets with strong technical training and a work culture close to your own team.' },
    'pt.t3.h':      { es: 'Inglés y horario', en: 'English and hours' },
    'pt.t3.p':      { es: 'Todo el equipo trabaja en inglés. El solapamiento horario lo definimos con vos, no al revés.', en: 'The whole team works in English. We set the overlap with you, not the other way around.' },

    'pt.rules.eyebrow': { es: 'Las reglas del juego', en: 'The rules of the game' },
    'pt.rules.hNo': { es: 'Qué no hacemos', en: 'What we don’t do' },
    'pt.no1':       { es: 'No hacemos body shopping.', en: 'No body shopping.' },
    'pt.no2':       { es: 'No vendemos horas sueltas.', en: 'No selling loose hours.' },
    'pt.no3':       { es: 'No rotamos gente sin avisar.', en: 'No rotating people without notice.' },
    'pt.rules.hYou':{ es: 'Qué necesitamos de tu lado', en: 'What we need from your side' },
    'pt.you1':      { es: 'Un decisor con presupuesto.', en: 'A decision-maker with budget.' },
    'pt.you2':      { es: 'Feedback en 48 horas.', en: 'Feedback within 48 hours.' },
    'pt.you3':      { es: 'Acceso a repos y entornos.', en: 'Access to repos and environments.' },
    'pt.you4':      { es: 'Prioridades claras y por escrito.', en: 'Clear priorities, in writing.' },

    'pt.stack.eyebrow': { es: 'Con qué construimos', en: 'What we build with' },
    'pt.stack.h':   { es: 'Nuestro stack', en: 'Our stack' },
    'pt.g1':        { es: 'Frontend & Mobile', en: 'Frontend & Mobile' },
    'pt.g2':        { es: 'Backend', en: 'Backend' },
    'pt.g3':        { es: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    'pt.g4':        { es: 'Datos & AI', en: 'Data & AI' },

    'pt.final.h':   { es: '¿Sumamos gente a tu equipo?', en: 'Shall we add people to your team?' },
    'pt.final.p':   { es: 'Contanos qué perfil necesitás. Perfiles propuestos en menos de 3 semanas.', en: 'Tell us what profile you need. Profiles proposed in under 3 weeks.' },

    /* ---- /quienes-somos ---- */
    'qs.kicker':    { es: 'Quiénes somos', en: 'About us' },
    'qs.h1a':       { es: 'Somos la puerta entre tu negocio y el software que lo hace ', en: 'We’re the door between your business and the software that makes it ' },
    'qs.h1accent':  { es: 'crecer.', en: 'grow.' },
    'qs.sub':       { es: 'Una compañía uruguaya de desarrollo de software. Accesible y personalizado — ayudamos a las empresas a tomar decisiones estratégicas y hacer crecer su negocio.',
                      en: 'A Uruguayan software development company. Accessible and personalized — we help companies make strategic decisions and grow their business.' },

    'qs.mission.eyebrow': { es: 'Misión', en: 'Mission' },
    'qs.mission.h': { es: 'Construimos. Vos crecés.', en: 'We build. You grow.' },
    'qs.mission.p': { es: 'Existimos para que la tecnología deje de ser un cuello de botella y pase a ser el motor de tu crecimiento. Entendemos tu operación, construimos lo que necesita y respondemos por el resultado — como un socio, no como un proveedor.',
                      en: 'We exist so technology stops being a bottleneck and becomes the engine of your growth. We understand your operation, build what it needs and answer for the result — as a partner, not a vendor.' },

    'qs.door.eyebrow': { es: 'Por qué dør', en: 'Why dør' },
    'qs.door.h':    { es: 'dør significa puerta', en: 'dør means door' },
    'qs.door.p1':   { es: 'En danés. Elegimos ese nombre porque eso es lo que somos: la puerta que conecta a tu empresa con el talento y el software que la hacen crecer. Una puerta que da a Sudamérica — equipos que trabajan en tu huso horario, en tu idioma, dentro de tu empresa.',
                      en: 'In Danish. We chose that name because that’s what we are: the door connecting your company to the talent and software that make it grow. A door that opens onto South America — teams working in your time zone, in your language, inside your company.' },
    'qs.door.p2':   { es: 'La ø atravesada del logo es esa puerta: un umbral que se cruza para pasar de un lado al otro. De la idea al producto. Del caos a la dirección. De tu problema, a resuelto.',
                      en: 'The struck-through ø in our logo is that door: a threshold you cross to get from one side to the other. From idea to product. From chaos to direction. From your problem, to solved.' },

    'qs.values.eyebrow': { es: 'Cómo somos', en: 'How we are' },
    'qs.values.h':  { es: 'Nuestros valores', en: 'Our values' },
    'qs.v1.h':      { es: 'Cercanía real', en: 'Real closeness' },
    'qs.v1.p':      { es: 'Mismo huso horario, trato directo con quien decide y construye. Sin capas ni account managers en el medio.', en: 'Same time zone, direct contact with who decides and builds. No layers or account managers in between.' },
    'qs.v2.h':      { es: 'Seniority y continuidad', en: 'Seniority and continuity' },
    'qs.v2.p':      { es: 'Equipos senior que se quedan. La gente que arranca tu proyecto es la que lo termina.', en: 'Senior teams that stay. The people who start your project are the ones who finish it.' },
    'qs.v3.h':      { es: 'Honestidad', en: 'Honesty' },
    'qs.v3.p':      { es: 'Prometemos lo que podemos cumplir. Si algo no funciona, lo decimos antes de que sea un problema.', en: 'We promise what we can deliver. If something isn’t working, we say so before it becomes a problem.' },
    'qs.v4.h':      { es: 'Accesible y personalizado', en: 'Accessible and personalized' },
    'qs.v4.p':      { es: 'Lenguaje claro, soluciones a tu medida. No hay dos negocios iguales, ni dos soluciones iguales.', en: 'Clear language, solutions built for you. No two businesses are alike, and no two solutions are either.' },

    'qs.team.eyebrow': { es: 'Fundadores', en: 'Founders' },
    'qs.team.h':    { es: 'Trabajás directo con nosotros', en: 'You work directly with us' },
    'qs.team.p':    { es: 'Sin account managers ni capas intermedias. Los fundadores están en el día a día de tu proyecto.', en: 'No account managers or middle layers. The founders are in the day-to-day of your project.' },
    'qs.m1.r':      { es: 'Director of Solutions', en: 'Director of Solutions' },
    'qs.m2.r':      { es: 'Technical Director', en: 'Technical Director' },
    'qs.m3.r':      { es: 'Director of Operations', en: 'Director of Operations' },

    'qs.final.h':   { es: '¿Trabajamos juntos?', en: 'Shall we work together?' },
    'qs.final.p':   { es: 'Contanos qué querés construir o qué equipo necesitás. La primera llamada es sin costo.', en: 'Tell us what you want to build or what team you need. The first call is free.' }
  };

  var VALID = { es: 1, en: 1 };

  function currentLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && VALID[q]) return q;
    var stored;
    try { stored = localStorage.getItem('dor_lang'); } catch (e) {}
    if (stored && VALID[stored]) return stored;
    return 'es';
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var e = DICT[el.getAttribute('data-i18n')];
      if (e && e[lang] != null) el.textContent = e[lang];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var e = DICT[el.getAttribute('data-i18n-aria')];
      if (e && e[lang] != null) el.setAttribute('aria-label', e[lang]);
    });
    // language blocks (used by long-form pages like /privacidad)
    document.querySelectorAll('[data-lb]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lb') !== lang;
    });
    var tEs = document.body.getAttribute('data-title-es');
    var tEn = document.body.getAttribute('data-title-en');
    var titleKey = document.body.getAttribute('data-title-key');
    if (tEs || tEn) {
      document.title = lang === 'en' ? (tEn || tEs) : (tEs || tEn);
    } else if (titleKey === 'partner') {
      document.title = lang === 'en' ? 'dør — Nearshoring partner teams' : 'dør — Nearshoring en formato partner';
    } else if (titleKey === 'about') {
      document.title = lang === 'en' ? 'dør — About us' : 'dør — Quiénes somos';
    } else if (titleKey === 'cases') {
      document.title = lang === 'en' ? 'dør — Cases' : 'dør — Casos';
    } else {
      document.title = lang === 'en' ? 'dør — We build. You grow.' : 'dør — Construimos software que te hace crecer.';
    }
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    try { localStorage.setItem('dor_lang', lang); } catch (e) {}
  }

  function setLang(lang) {
    if (!VALID[lang]) return;
    var url = new URL(location.href);
    url.searchParams.set('lang', lang);
    history.replaceState(null, '', url);
    applyLang(lang);
    if (window.dorTrack) window.dorTrack('language_switch', { to: lang, event_category: 'audience' });
  }

  function initHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var onS = function () { header.classList.toggle('is-scrolled', window.scrollY > 40); };
    window.addEventListener('scroll', onS, { passive: true });
    onS();
  }

  function initReveals() {
    var els = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  function initMagnetic() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return;
    document.querySelectorAll('[data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        el.style.transform = 'translate(' + x * 0.22 + 'px,' + y * 0.30 + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
    });
  }

  function initMobileNav() {
    var toggle = document.querySelector('.nav-toggle');
    var drawer = document.querySelector('.mnav');
    if (!toggle || !drawer) return;
    var close = drawer.querySelector('.mnav__close');
    var open = function () { drawer.classList.add('open'); document.body.style.overflow = 'hidden'; };
    var shut = function () { drawer.classList.remove('open'); document.body.style.overflow = ''; };
    toggle.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    drawer.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', shut); });
  }

  function boot() {
    applyLang(currentLang());
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.dataset.lang); });
    });
    initHeader();
    initReveals();
    initMagnetic();
    initMobileNav();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
