// Inicializar i18next
i18next.init(
  {
    lng: "es", // Idioma inicial
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
              "TOGAF (The Open Group Architecture Framework) is a widely recognized framework for developing and managing enterprise architectures.",
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
          },
          resources: {
            title: "Resources to Get Started with TOGAF",
            guide: "Introductory Guide",
            whitepaper: "Downloadable Whitepaper",
            infographic: "Process Infographic",
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
              "TOGAF (The Open Group Architecture Framework) es un marco de trabajo ampliamente reconocido para el desarrollo y la gestión de arquitecturas empresariales.",
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
          },
          resources: {
            title: "Recursos para Comenzar con TOGAF",
            guide: "Guía Introductoria",
            whitepaper: "Whitepaper Descargable",
            infographic: "Infografía de Procesos",
          },
        },
      },
    },
  },
  function (err, t) {
    updateContent(); // Actualizar contenido inicial
  }
);

// Cambiar idioma
document
  .getElementById("languageSelector")
  .addEventListener("change", function (event) {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage, updateContent);
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
