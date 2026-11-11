const translations = {
  es: {
    skip:"Saltar al contenido",navAbout:"Sobre mí",navStack:"Tecnologías",navProjects:"Proyectos",navExperience:"Experiencia",navEducation:"Formación",navContact:"Contacto",
    heroEyebrow:"Desarrolladora Backend Junior",heroDescription:"Construyo soluciones backend y APIs. Combino mi formación en desarrollo de software con experiencia en operación y soporte de sistemas productivos.",heroProjects:"Ver proyectos",heroNote:"Bogotá, Colombia · Disponible para oportunidades junior",stickerBackend:"BACKEND<br>DEVELOPER",
    aboutKicker:"01 / PERFIL",aboutTitle:"Sobre mí",aboutLead:"Me interesa crear software útil, comprensible y mantenible.",aboutText:"Soy desarrolladora backend junior, graduada de Ingeniería de Sistemas. Tengo experiencia en operación de sistemas empresariales, monitoreo de servicios críticos y gestión de incidencias en entornos productivos. Actualmente enfoco mi desarrollo profesional en Java, Spring Boot, bases de datos y construcción de APIs REST.",linkedinLink:"Conecta conmigo en LinkedIn ↗",
    stackKicker:"02 / HERRAMIENTAS",stackTitle:"Tecnologías",stackBackend:"Backend",stackData:"Datos",stackQuality:"Pruebas y calidad",stackTools:"Herramientas",stackNote:"Tecnologías y herramientas trabajadas durante mi formación y proyectos personales.",
    projectsKicker:"03 / TRABAJO SELECCIONADO",projectsTitle:"Proyectos",projectsAside:"Desarrollo y aprendizaje continuo",projectMain:"PROYECTO PRINCIPAL",statusProgress:"En desarrollo",projectApi:"API REST",statusReview:"Por validar",projectBackend:"CONTRIBUCIÓN BACKEND",salitreDescription:"Sistema web para apoyar la gestión operativa de un parque de diversiones, con módulos para clientes, empleados, atracciones y tiquetes. Proyecto en desarrollo.",airlineDescription:"API REST para gestionar reservas, pasajeros y vuelos. Incluye controladores, servicios, DTO, validaciones y persistencia relacional.",nasaDescription:"Mi contribución fue el desarrollo de la lógica del servidor con JavaScript y la integración con la API Astronomy Picture of the Day de NASA.",projectsDisclaimer:"Los estados indican el nivel de avance o validación pendiente; no se presentan demos que aún no han sido verificadas.",
    experienceKicker:"04 / TRAYECTORIA",experienceTitle:"Experiencia",experienceDate:"JUN 2024 — SEP 2025",experienceRole:"Analista de Operaciones TI y Soporte",experienceText:"Monitoreo de servicios críticos en ambientes productivos, gestión y escalamiento de incidencias, seguimiento de tareas programadas y soporte a la continuidad operativa. Uso de herramientas de gestión como BMC Helix y Jira.",
    educationKicker:"05 / FORMACIÓN",educationTitle:"Educación y cursos",generationTitle:"Desarrolladora Full Stack Junior",degreeTitle:"Ingeniería de Sistemas",certTitle:"CURSOS Y CERTIFICACIONES",certNote:"Nombres según la información disponible; agregar enlaces o entidades emisoras cuando se documenten las credenciales.",
    contactKicker:"06 / HABLEMOS",contactTitle:"¿Construimos<br><span class='gradient-text'>algo útil?</span>",contactText:"Estoy abierta a oportunidades junior y conversaciones sobre desarrollo backend.",footerText:"Diseñado y desarrollado con intención.",backTop:"Volver arriba ↑"
  },
  en: {
    skip:"Skip to content",navAbout:"About",navStack:"Tech stack",navProjects:"Projects",navExperience:"Experience",navEducation:"Education",navContact:"Contact",
    heroEyebrow:"Junior Backend Developer",heroDescription:"I build backend solutions and APIs. I combine my software development training with hands-on experience in production systems operations and support.",heroProjects:"View projects",heroNote:"Bogotá, Colombia · Open to junior opportunities",stickerBackend:"BACKEND<br>DEVELOPER",
    aboutKicker:"01 / PROFILE",aboutTitle:"About me",aboutLead:"I enjoy building useful, understandable and maintainable software.",aboutText:"I am a junior backend developer with a degree in Systems Engineering. I have experience in enterprise systems operations, critical service monitoring and incident management in production environments. I am currently focusing on Java, Spring Boot, databases and REST API development.",linkedinLink:"Connect with me on LinkedIn ↗",
    stackKicker:"02 / TOOLKIT",stackTitle:"Tech stack",stackBackend:"Backend",stackData:"Data",stackQuality:"Testing & quality",stackTools:"Tools",stackNote:"Technologies and tools used during my training and personal projects.",
    projectsKicker:"03 / SELECTED WORK",projectsTitle:"Projects",projectsAside:"Building and continuous learning",projectMain:"FEATURED PROJECT",statusProgress:"In progress",projectApi:"REST API",statusReview:"Needs validation",projectBackend:"BACKEND CONTRIBUTION",salitreDescription:"Web system to support amusement park operations, with modules for customers, employees, attractions and tickets. Project in progress.",airlineDescription:"REST API for managing bookings, passengers and flights. Includes controllers, services, DTOs, validation and relational persistence.",nasaDescription:"My contribution focused on server-side logic using JavaScript and integration with NASA's Astronomy Picture of the Day API.",projectsDisclaimer:"Statuses indicate project progress or pending validation; unverified live demos are not displayed.",
    experienceKicker:"04 / CAREER",experienceTitle:"Experience",experienceDate:"JUN 2024 — SEP 2025",experienceRole:"IT Operations & Support Analyst",experienceText:"Monitored critical services in production environments, managed and escalated incidents, tracked scheduled jobs and supported operational continuity. Worked with management tools such as BMC Helix and Jira.",
    educationKicker:"05 / LEARNING",educationTitle:"Education & courses",generationTitle:"Junior Full Stack Developer",degreeTitle:"Systems Engineering",certTitle:"COURSES & CERTIFICATIONS",certNote:"Names are based on the available information; issuer links can be added once credentials are documented.",
    contactKicker:"06 / GET IN TOUCH",contactTitle:"Shall we build<br><span class='gradient-text'>something useful?</span>",contactText:"I am open to junior opportunities and conversations about backend development.",footerText:"Designed and built with intention.",backTop:"Back to top ↑"
  }
};

const languageButton = document.querySelector(".language-toggle");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

function setLanguage(language) {
  const dictionary = translations[language] || translations.es;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });
  languageButton.textContent = language === "es" ? "EN" : "ES";
  languageButton.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
  try { localStorage.setItem("portfolio-language", language); } catch { /* Storage may be unavailable. */ }
}

languageButton.addEventListener("click", () => {
  setLanguage(document.documentElement.lang === "es" ? "en" : "es");
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("current-year").textContent = new Date().getFullYear();

try {
  const savedLanguage = localStorage.getItem("portfolio-language");
  if (savedLanguage && translations[savedLanguage]) setLanguage(savedLanguage);
} catch { /* The default language remains Spanish. */ }
