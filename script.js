document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
    event.preventDefault();
  }
});

// Inicializar i18next
i18next.init(
  {
    lng: "es", // Establecer español como idioma predeterminado
    fallbackLng: "es", // Establecer español como idioma de respaldo
    debug: true,
    resources: {
      en: {
        translation: {
          navbar: {
            brand: "TOGAF",
            home: "Home",
            definition: "What is TOGAF?",
            benefits: "Benefits",
            fundamentals: "Fundamentals",
            adm: "ADM Cycle",
            resources: "Resources",
            consulting: "Consulting",
            darkMode: "Dark Mode",
            language: { en: "English", es: "Spanish" },
          },
          hero: {
            title: "Empower Business Transformation with TOGAF",
            subtitle:
              "The leading framework for enterprise architecture that drives alignment between technology and business strategy.",
            discover: "Discover TOGAF",
            course: "Access the Basic Course",
          },
          definition: {
            title: "What is TOGAF?",
            description1:
              "OGAF (The Open Group Architecture Framework) is a widely recognized framework for the development and management of enterprise architecture. It provides a structured and flexible approach that facilitates the alignment of IT strategy with business objectives, enabling more efficient planning and execution of projects. Additionally, TOGAF integrates best practices and international standards, making it a key tool for improving technological decision-making and optimizing resources in large organizations.",
            description2: "Over 80% of Fortune 500 companies trust TOGAF.",
          },
          benefits: {
            title: "Why Adopt TOGAF?",
            communication: {
              title: "Communication",
              description: "Facilitates stakeholder communication.",
            },
            structure: {
              title: "Structure",
              description:
                "Provides a structured approach to business transformation.",
            },
            cost: {
              title: "Cost Reduction",
              description: "Optimizes processes and resources.",
            },
            innovation: {
              title: "Innovation",
              description: "Fosters new strategic opportunities.",
            },
            performance: {
              title: "Performance Improvement",
              description:
                "Helps enhance overall performance by optimizing key resources.",
            },
            global: {
              title: "Global Standards",
              description:
                "Promotes the implementation of international standards to ensure interoperability.",
            },
          },
          fundamentals: {
            title: "Fundamentals of TOGAF",
            business: {
              title: "Business Architecture",
              text: "Provides a representation of the business, including processes, functions, and strategic objectives.",
              processes: "Business processes",
              organization: "Organizational structure",
              goals: "Strategic objectives",
              metrics: "Performance metrics",
            },
            data: {
              title: "Data Architecture",
              text: "Describes the structure of data, how it is stored, integrated, and managed within the organization.",
              models: "Data models",
              governance: "Data governance",
              quality: "Data quality",
              security: "Data security",
            },
            application: {
              title: "Application Architecture",
              text: "Establishes how applications interact with each other and with end-users to support business processes.",
              portfolio: "Application portfolio",
              integration: "System integration",
              interfaces: "User interfaces",
              services: "Shared services",
            },
            technology: {
              title: "Technology Architecture",
              text: "Defines the technological infrastructure that supports applications and data, including hardware, software, and communications.",
              infrastructure: "IT infrastructure",
              networks: "Networks and communications",
              cloud: "Cloud platforms",
              security: "Technological security",
            },
          },
          adm: {
            title: "The ADM Cycle: An Iterative Roadmap",
            text: "The TOGAF Architecture Development Method (ADM) guides step-by-step from vision to implementation.",
            cardHeader: "Select each phase to see more details", // Nueva clave
            footer:
              "The ADM is iterative, flexible and customizable. Organizations can adapt and organizations can adapt and modify the process according to their specific needs specific needs.",
            phases: [
              {
                id: "preliminary",
                title: "Preliminary Phase",
                description:
                  "Prepares the organization for successful enterprise architecture projects. Defines principles, tools, and frameworks to be used.",
              },
              {
                id: "a",
                title: "A. Architecture Vision",
                description:
                  "Establishes the project’s scope, constraints, and expectations. Creates the Architecture Vision and gains approval.",
              },
              {
                id: "b",
                title: "B. Business Architecture",
                description:
                  "Develops the baseline and target business architectures, analyzes gaps, and identifies roadmap components.",
              },
              {
                id: "c",
                title: "C. Information Systems Architectures",
                description:
                  "Defines data and application architectures, both current and target. Includes gap analysis.",
              },
              {
                id: "d",
                title: "D. Technology Architecture",
                description:
                  "Defines the IT infrastructure required to support the deployment of services.",
              },
              {
                id: "e",
                title: "E. Opportunities and Solutions",
                description:
                  "Performs initial implementation planning and identifies delivery vehicles for the target architecture.",
              },
              {
                id: "f",
                title: "F. Migration Planning",
                description:
                  "Develops the detailed implementation and migration plan that addresses how to transition from the baseline to the target architecture.",
              },
              {
                id: "g",
                title: "G. Implementation Governance",
                description:
                  "Provides architectural oversight for implementation and ensures the project aligns with the target architecture.",
              },
              {
                id: "h",
                title: "H. Architecture Change Management",
                description:
                  "Establishes procedures to manage changes to the new architecture, continuously monitors, and mitigates risks.",
              },
            ],
          },
          resources: {
            title: "Resources to Get Started with TOGAF",
            guide: "Introductory Guide",
            contentgui:
              "A complete guide for beginners in TOGAF. It includes basic concepts, methodology, and best practices.",
            linkgui: "Download Guide",
            whitepaper: "Downloadable Whitepaper",
            contentwhi:
              "A technical whitepaper detailing case studies and practical applications of TOGAF in organizations.",
            linkwhi: "Download Whitepaper",
            infographic: "Process Infographic",
            contentinfo:
              "A visual infographic that explains the ADM process clearly and concisely.",
            linkinfo: "Download Infographic",
          },
          consulting: {
            title: "Enterprise Architecture Consulting Services",
            text: "COMUNICACIÓN 'A' 7724 from the BCRA establishes requirements for financial entities regarding the management of technological risks and information security, with mandatory compliance since March 2023. In particular, Circular RUNOR 1-1785 defines the requirements for enterprise architecture. In this context, we offer specialized Enterprise Architecture services, with international certifications, that help financial entities comply with these requirements, optimizing their technological infrastructure and efficiently managing risks.",
            messsageOne: "Certified Consultants by The Open Group",
            messsageTwo: "Experience in Digital Transformation",
            messsageThree: "Specialists in TOGAF, ARIS, ArchiMate",
            formTitle: "Request a Consultation",
            messageOne: "Full Name",
            messageTwo: "Email Address",
            messageThree: "Company",
            messageFour: "Service Type",
            messageFive: "Additional Message",
          },
        },
      },
      es: {
        translation: {
          navbar: {
            brand: "TOGAF",
            home: "Inicio",
            definition: "¿Qué es TOGAF?",
            benefits: "Beneficios",
            fundamentals: "Fundamentos",
            adm: "Ciclo ADM",
            resources: "Recursos",
            consulting: "Consultorías",
            darkMode: "Modo Oscuro",
            language: { en: "Inglés", es: "Español" },
          },
          hero: {
            title: "Potencia la Transformación Empresarial con TOGAF",
            subtitle:
              "El marco líder para la arquitectura empresarial que impulsa la alineación entre tecnología y estrategia de negocio.",
            discover: "Descubre TOGAF",
            course: "Accede al Curso Básico",
          },
          definition: {
            title: "¿Qué es TOGAF?",
            description1:
              "TOGAF (The Open Group Architecture Framework) es un marco de trabajo ampliamente reconocido para el desarrollo y la gestión de arquitecturas empresariales. Proporciona un enfoque estructurado y flexible que facilita la alineación de la estrategia de TI con los objetivos de negocio, permitiendo una planificación y ejecución más eficiente de proyectos. Además, TOGAF integra buenas prácticas y estándares internacionales, lo que lo convierte en una herramienta clave para mejorar la toma de decisiones tecnológicas y optimizar los recursos en grandes organizaciones.",
            description2:
              "Más del 80% de las empresas Fortune 500 confían en TOGAF.",
          },
          benefits: {
            title: "¿Por qué adoptar TOGAF?",
            communication: {
              title: "Comunicación",
              description:
                "Facilita la comunicación entre las partes interesadas.",
            },
            structure: {
              title: "Estructura",
              description:
                "Proporciona un enfoque estructurado para la transformación empresarial.",
            },
            cost: {
              title: "Reducción de Costos",
              description: "Optimiza procesos y recursos.",
            },
            innovation: {
              title: "Innovación",
              description: "Fomenta nuevas oportunidades estratégicas.",
            },
            performance: {
              title: "Mejora del Rendimiento",
              description:
                "Ayuda a mejorar el desempeño general mediante la optimización de recursos clave.",
            },
            global: {
              title: "Estándares Globales",
              description:
                "Promueve la implementación de estándares internacionales para garantizar la interoperabilidad.",
            },
          },
          fundamentals: {
            title: "Fundamentos de TOGAF",
            business: {
              title: "Arquitectura de Negocio",
              text: "Proporciona una representación del negocio, incluyendo procesos, funciones y objetivos estratégicos. Permite alinear las operaciones con la estrategia empresarial.",
              processes: "Procesos de negocio",
              organization: "Estructura organizacional",
              goals: "Objetivos estratégicos",
              metrics: "Métricas de rendimiento",
            },
            data: {
              title: "Arquitectura de Datos",
              text: "Describe la estructura de los datos, cómo se almacenan, integran y gestionan en la organización. Define los activos de información críticos.",
              models: "Modelos de datos",
              governance: "Gobernanza de datos",
              quality: "Calidad de datos",
              security: "Seguridad de datos",
            },
            application: {
              title: "Arquitectura de Aplicaciones",
              text: "Establece cómo las aplicaciones interactúan entre sí y con los usuarios finales para apoyar los procesos empresariales.",
              portfolio: "Portafolio de aplicaciones",
              integration: "Integración de sistemas",
              interfaces: "Interfaces de usuario",
              services: "Servicios compartidos",
            },
            technology: {
              title: "Arquitectura Tecnológica",
              text: "Define la infraestructura tecnológica que soporta las aplicaciones y datos, incluyendo hardware, software y comunicaciones.",
              infrastructure: "Infraestructura de TI",
              networks: "Redes y comunicaciones",
              cloud: "Plataformas cloud",
              security: "Seguridad tecnológica",
            },
          },
          adm: {
            title: "El Ciclo ADM: Una Hoja de Ruta Iterativa",
            text: "El Método de Desarrollo de Arquitectura (ADM) de TOGAF guía paso a paso desde la visión hasta la implementación.",
            cardHeader: "Selecciona cada fase para ver más detalles", // Nueva clave
            footer:
              "El ADM es iterativo, flexible y personalizable. Las organizaciones pueden adaptar y modificar el proceso según sus necesidades específicas.",
            phases: [
              {
                id: "preliminary",
                title: "Fase Preliminar",
                description:
                  "Prepara la organización para proyectos exitosos de arquitectura empresarial. Define principios, herramientas y frameworks a utilizar.",
              },
              {
                id: "a",
                title: "A. Visión de Arquitectura",
                description:
                  "Establece el alcance, limitaciones y expectativas del proyecto. Crea la Visión de Arquitectura y obtiene aprobaciones.",
              },
              {
                id: "b",
                title: "B. Arquitectura de Negocio",
                description:
                  "Desarrolla la arquitectura de negocio base y objetivo, analiza brechas e identifica componentes de la hoja de ruta.",
              },
              {
                id: "c",
                title: "C. Arquitectura de Sistemas de Información",
                description:
                  "Define arquitecturas de datos y aplicaciones, tanto actuales como objetivos. Incluye análisis de brechas.",
              },
              {
                id: "d",
                title: "D. Arquitectura Tecnológica",
                description:
                  "Define la infraestructura de TI necesaria para soportar el despliegue de servicios.",
              },
              {
                id: "e",
                title: "E. Oportunidades y Soluciones",
                description:
                  "Realiza la planificación de implementación inicial y identifica vehículos de entrega para la arquitectura objetivo.",
              },
              {
                id: "f",
                title: "F. Planificación de Migración",
                description:
                  "Desarrolla el plan detallado de implementación y migración que aborda cómo moverse de la arquitectura base a la objetivo.",
              },
              {
                id: "g",
                title: "G. Gobierno de Implementación",
                description:
                  "Proporciona supervisión arquitectónica para la implementación y asegura que el proyecto de implementación cumpla con la arquitectura objetivo.",
              },
              {
                id: "h",
                title: "H. Gestión de Cambios",
                description:
                  "Establece procedimientos para gestionar cambios en la nueva arquitectura, monitorea continuamente y gestiona los riesgos.",
              },
            ],
          },
          resources: {
            title: "Recursos para Comenzar con TOGAF",
            guide: "Guía Introductoria",
            contentgui:
              "Una guía completa para principiantes en TOGAF. Incluye conceptos básicos, metodología y mejores prácticas.",
            linkgui: "Descargar Guía",
            whitepaper: "Whitepaper Descargable",
            contentwhi:
              "Whitepaper técnico detallando casos de estudio y aplicaciones prácticas de TOGAF en organizaciones.",
            linkwhi: "Descargar Whitepaper",
            infographic: "Infografía de Procesos",
            contentinfo:
              "Infografía visual que explica el proceso ADM de manera clara y concisa.",
            linkinfo: "Descargar Infografía",
          },
          consulting: {
            title: "Servicios de Consultoría en Arquitectura Empresarial",
            text: "La COMUNICACIÓN “A” 7724 del BCRA establece requisitos para las entidades financieras en relación con la gestión de los riesgos tecnológicos y la seguridad de la información, siendo de cumplimiento obligatorio desde marzo de 2023. En particular, la Circular RUNOR 1-1785 define los requerimientos para la arquitectura empresarial. En este marco, brindamos servicios especializados en Arquitectura Empresarial, con certificaciones internacionales, que apoyan a las entidades financieras en el cumplimiento de estos requisitos, optimizando su infraestructura tecnológica y gestionando los riesgos de manera eficiente. ",
            messsageOne: "Consultores Certificados por The Open Group",
            messsageTwo: "Experiencia en Transformación Digital",
            messsageThree: "Especialistas en TOGAF, ARIS, ArchiMate",
            formTitle: "Solicita una Consultoría",
            messageOne: "Nombre y Apellido",
            messageTwo: "Correo Electrónico",
            messageThree: "Empresa",
            messageFour: "Tipo de Servicio",
            messageFive: "Mensaje Adicional",
          },
        },
      },
    },
  },

  function (err, t) {
    // Actualizar el selector de idiomas para que muestre español por defecto
    document.getElementById("languageSelector").value = "es";

    updateContent(); // Actualizar contenido inicial
    //loadPhases(); // Cargar fases iniciales
  }
);

// Cambiar idioma
document
  .getElementById("languageSelector")
  .addEventListener("change", function (event) {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage, () => {
      updateContent();
      loadPhases(); // Recargar fases al cambiar idioma
    });
  });

// Actualizar contenido
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = i18next.t(translationKey);
  });
}

// Modo Oscuro
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const darkModeIcon = document.getElementById("darkModeIcon");
  const navbar = document.getElementById("navbar");

  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    navbar.classList.toggle("navbar-dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      darkModeIcon.classList.remove("fa-moon");
      darkModeIcon.classList.add("fa-sun");
      darkModeToggle.classList.remove("btn-outline-secondary");
      darkModeToggle.classList.add("btn-warning");
    } else {
      darkModeIcon.classList.remove("fa-sun");
      darkModeIcon.classList.add("fa-moon");
      darkModeToggle.classList.remove("btn-warning");
      darkModeToggle.classList.add("btn-outline-secondary");
    }
  });
});

const phases = [
  {
    id: "preliminary",
    title: "Fase Preliminar",
    description:
      "Prepara la organización para proyectos exitosos de arquitectura empresarial. Define principios, herramientas y frameworks a utilizar.",
  },
  {
    id: "a",
    title: "A. Visión de Arquitectura",
    description:
      "Establece el alcance, limitaciones y expectativas del proyecto. Crea la Visión de Arquitectura y obtiene aprobaciones.",
  },
  {
    id: "b",
    title: "B. Arquitectura de Negocio",
    description:
      "Desarrolla la arquitectura de negocio base y objetivo, analiza brechas e identifica componentes de la hoja de ruta.",
  },
  {
    id: "c",
    title: "C. Arquitectura de Sistemas de Información",
    description:
      "Define arquitecturas de datos y aplicaciones, tanto actuales como objetivos. Incluye análisis de brechas.",
  },
  {
    id: "d",
    title: "D. Arquitectura Tecnológica",
    description:
      "Define la infraestructura de TI necesaria para soportar el despliegue de servicios.",
  },
  {
    id: "e",
    title: "E. Oportunidades y Soluciones",
    description:
      "Realiza la planificación de implementación inicial y identifica vehículos de entrega para la arquitectura objetivo.",
  },
  {
    id: "f",
    title: "F. Planificación de Migración",
    description:
      "Desarrolla el plan detallado de implementación y migración que aborda cómo moverse de la arquitectura base a la objetivo.",
  },
  {
    id: "g",
    title: "G. Gobierno de Implementación",
    description:
      "Proporciona supervisión arquitectónica para la implementación y asegura que el proyecto de implementación cumpla con la arquitectura objetivo.",
  },
  {
    id: "h",
    title: "H. Gestión de Cambios",
    description:
      "Establece procedimientos para gestionar cambios en la nueva arquitectura, monitorea continuamente y gestiona los riesgos.",
  },
];

const phasesGrid = document.getElementById("phasesGrid");
let activePhase = null;

// Crear las tarjetas de fase
phases.forEach((phase) => {
  const phaseCard = document.createElement("div");
  phaseCard.className = "phase-card";
  phaseCard.setAttribute("data-phase-id", phase.id);

  phaseCard.innerHTML = `
        <h3>${phase.title}</h3>
        <p class="phase-description">${phase.description}</p>
    `;

  phaseCard.addEventListener("click", () => togglePhase(phase.id));
  phasesGrid.appendChild(phaseCard);
});

// Función para alternar la fase activa
function togglePhase(phaseId) {
  const clickedCard = document.querySelector(`[data-phase-id="${phaseId}"]`);

  if (activePhase === phaseId) {
    // Si la fase ya está activa, la desactivamos
    clickedCard.classList.remove("active");
    activePhase = null;
  } else {
    // Desactivar la fase anterior si existe
    if (activePhase) {
      document
        .querySelector(`[data-phase-id="${activePhase}"]`)
        .classList.remove("active");
    }

    // Activar la nueva fase
    clickedCard.classList.add("active");
    activePhase = phaseId;
  }
}

function loadPhases() {
  const phasesGrid = document.getElementById("phasesGrid");

  // Limpiar COMPLETAMENTE las fases existentes antes de agregar nuevas
  phasesGrid.innerHTML = "";

  // Evitar duplicación agregando una bandera
  if (phasesGrid.getAttribute("data-phases-loaded") === "true") {
    return;
  }

  // Obtener las fases traducidas
  const translatedPhases = i18next.t("adm.phases", { returnObjects: true });

  // Crear las tarjetas de fase con traducciones
  translatedPhases.forEach((phase) => {
    const phaseCard = document.createElement("div");
    phaseCard.className = "phase-card";
    phaseCard.setAttribute("data-phase-id", phase.id);

    phaseCard.innerHTML = `
      <h3>${phase.title}</h3>
      <p class="phase-description">${phase.description}</p>
    `;

    phaseCard.addEventListener("click", () => togglePhase(phase.id));
    phasesGrid.appendChild(phaseCard);
  });

  // Marcar que las fases ya han sido cargadas
  phasesGrid.setAttribute("data-phases-loaded", "true");
}

// Modificar el evento de cambio de idioma
document
  .getElementById("languageSelector")
  .addEventListener("change", function (event) {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage, () => {
      // Eliminar la bandera de carga para permitir recarga
      document
        .getElementById("phasesGrid")
        .removeAttribute("data-phases-loaded");

      updateContent();
      loadPhases(); // Recargar fases al cambiar idioma
    });
  });

// Recursos
let activeContent = null;

function toggleContent(id) {
  const content = document.getElementById(`${id}-content`);

  // Si hay un contenido activo y no es el actual, ocúltalo
  if (activeContent && activeContent !== content) {
    activeContent.classList.remove("active");
  }

  // Toggle del contenido actual
  content.classList.toggle("active");

  // Actualizar el contenido activo
  activeContent = content.classList.contains("active") ? content : null;

  // Cerrar al hacer click fuera
  document.addEventListener("click", function closeContent(e) {
    if (!e.target.closest(".recurso-item")) {
      if (activeContent) {
        activeContent.classList.remove("active");
        activeContent = null;
      }
      document.removeEventListener("click", closeContent);
    }
  });
}
