import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      nav: {
        inicio: 'Inicio',
        sobre: 'Sobre Nosotros',
        servicios: 'Servicios',
        como: 'Cómo Funciona',
        contacto: 'Contacto',
        solicitar: 'Solicitar Servicio'
      },
      hero: {
        disponible: 'Servicio Disponible 24 Horas',
        titulo: 'Tu taller de confianza',
        subtitulo: 'sobre ruedas',
        descripcion: 'Mecánica profesional a domicilio para coches, camiones y tractores. Llegamos donde estés en menos de 60 minutos.',
        cta_ahora: 'Solicitar servicio ahora',
        cta_llamar: 'Llamar Directo'
      },
      about: {
        premium: 'Servicio Premium',
        premium_desc: 'Más de 500 reseñas positivas de clientes satisfechos en toda la región.',
        titulo_start: 'Expertos en mecánica móvil de',
        titulo_accent: 'alto rendimiento',
        desc1: 'En HAVE ALL hemos revolucionado la forma de entender el taller mecánico. Llevamos la tecnología y la precisión de un taller de competición directamente a tu ubicación.',
        desc2: 'Nuestra unidad móvil está equipada con sistemas de diagnosis avanzada y herramientas de precisión para garantizar que cada reparación cumpla con los más altos estándares de la industria.',
        items: {
          asistencia: 'Asistencia en carretera',
          maquinaria: 'Maquinaria agrícola',
          vehiculos: 'Vehículos industriales',
          diagnosis: 'Diagnosis electrónica',
          garantia: 'Garantía por escrito',
          precios: 'Precios cerrados'
        }
      },
      servicios: {
        titulo: 'Nuestros Servicios',
        subtitulo: 'Soluciones integrales para cualquier tipo de vehículo. Desde el mantenimiento más básico hasta las averías más complejas, todo en tu propia puerta.',
        coche: {
          title: 'Reparación de Coches',
          desc: 'Mantenimiento oficial, frenos, suspensión y mecánica general para turismos de todas las marcas.'
        },
        camion: {
          title: 'Reparación de Camiones',
          desc: 'Especialistas en sistemas neumáticos, hidráulicos y mecánica pesada para el transporte profesional.'
        },
        tractor: {
          title: 'Reparación de Tractores',
          desc: 'Asistencia inmediata en campo para maquinaria agrícola. Evitamos paradas costosas en tu producción.'
        },
        diagnosis: {
          title: 'Diagnosis de Motor',
          desc: 'Equipos de diagnosis de última generación para detectar fallos electrónicos y optimizar el rendimiento.'
        },
        aceite: {
          title: 'Cambio de Aceite',
          desc: 'Mantenimiento preventivo con lubricantes de alta gama y gestión profesional de residuos.'
        },
        frenos: {
          title: 'Frenos y Baterías',
          desc: 'Sustitución inmediata de componentes de seguridad. Trabajamos solo con primeras marcas.'
        },
        saber_mas: 'Saber más'
      },
      como: {
        titulo: 'Cómo Funciona',
        subtitulo: 'Tu mecánico a un clic de distancia',
        paso1: {
          title: 'Contacto',
          desc: 'Llámanos o escríbenos por WhatsApp. Indícanos tu ubicación y los síntomas de tu vehículo.'
        },
        paso2: {
          title: 'Diagnóstico',
          desc: 'Nuestra unidad móvil se desplaza a tu ubicación para realizar una evaluación técnica completa.'
        },
        paso3: {
          title: 'Reparación',
          desc: 'Solucionamos el problema in situ con garantía profesional. Vuelve a la carretera sin esperas.'
        }
      },
      cta: {
        titulo: '¿Te has quedado tirado?',
        subtitulo: 'No llames a la grúa todavía. Nuestro equipo puede solucionar la mayoría de averías en el lugar.',
        llamar: 'Llamar Ahora',
        whatsapp: 'WhatsApp 24h'
      },
      contacto: {
        titulo_start: 'Estamos listos para',
        titulo_accent: 'ayudarte',
        subtitulo: 'Nuestros mecánicos están distribuidos estratégicamente para llegar a cualquier punto de la región en tiempo récord.',
        labels: {
          llamada: 'Llamada Directa',
          whatsapp: 'WhatsApp Urgente',
          correo: 'Correo Electrónico'
        },
        values: {
          whatsapp: 'Chat en vivo 24/7'
        },
        form: {
          titulo: 'Solicitar presupuesto',
          nombre: 'Nombre',
          telefono: 'Teléfono',
          vehiculo: 'Vehículo y Problema',
          placeholder_nombre: 'Tu nombre',
          placeholder_telefono: 'Tu móvil',
          placeholder_mensaje: 'Ej: BMW Serie 3, no arranca. Estoy en Calle Mayor...',
          enviar: 'Enviar Solicitud Urgente',
          error: 'Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.'
        }
      },
      footer: {
        desc: 'Líderes en mecánica móvil. Profesionalidad, rapidez y transparencia en cada reparación.',
        especialidades: 'Especialidades',
        items: {
          turismos: 'Turismos y SUVs',
          transporte: 'Transporte Pesado',
          maquinaria: 'Maquinaria Agrícola',
          hibridos: 'Sistemas Híbridos'
        },
        navegacion: 'Navegación',
        contacto: 'Contacto',
        derechos: '© 2024 HAVE ALL. Todos los derechos reservados.',
        aviso: 'Aviso Legal',
        privacidad: 'Privacidad',
        cookies: 'Cookies',
        ubicacion: 'Servicio móvil en toda la Comunidad de Marbella y provincias limítrofes.',
        disponible: 'Disponible 24 horas / 365 días'
      },
      common: {
        volver: 'Volver al Inicio',
        login: 'Iniciar Sesión',
        signup: 'Crear Cuenta',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        cerrar_sesion: 'Cerrar Sesión',
        perfil: 'Mi Perfil',
        error_auth: 'Error en la autenticación. Por favor, revisa tus datos.'
      },
      privacy: {
        intro: 'De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (GDPR) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios del sitio web de la siguiente política de privacidad relativa al tratamiento de datos personales.'
      }
    }
  },
  en: {
    translation: {
      nav: {
        inicio: 'Home',
        sobre: 'About Us',
        servicios: 'Services',
        como: 'How it Works',
        contacto: 'Contact',
        solicitar: 'Request Service',
        login: 'Login',
        signup: 'Sign Up'
      },
      hero: {
        disponible: 'Service Available 24 Hours',
        titulo: 'Your trusted workshop',
        subtitulo: 'on wheels',
        descripcion: 'Professional mobile mechanics for cars, trucks, and tractors. We reach you wherever you are in less than 60 minutes.',
        cta_ahora: 'Request service now',
        cta_llamar: 'Call Directly'
      },
      about: {
        premium: 'Premium Service',
        premium_desc: 'More than 500 positive reviews from satisfied customers across the region.',
        titulo_start: 'Experts in high-performance',
        titulo_accent: 'mobile mechanics',
        desc1: 'At HAVE ALL we have revolutionized the way people understand the mechanical workshop. We bring the technology and precision of a competition workshop directly to your location.',
        desc2: 'Our mobile unit is equipped with advanced diagnostic systems and precision tools to ensure that every repair meets the highest industry standards.',
        items: {
          asistencia: 'Roadside assistance',
          maquinaria: 'Agricultural machinery',
          vehiculos: 'Industrial vehicles',
          diagnosis: 'Electronic diagnosis',
          garantia: 'Written guarantee',
          precios: 'Fixed prices'
        }
      },
      servicios: {
        titulo: 'Our Services',
        subtitulo: 'Comprehensive solutions for any type of vehicle. From the most basic maintenance to the most complex breakdowns, all at your own doorstep.',
        coche: {
          title: 'Car Repair',
          desc: 'Official maintenance, brakes, suspension, and general mechanics for passenger cars of all brands.'
        },
        camion: {
          title: 'Truck Repair',
          desc: 'Specialists in pneumatic, hydraulic systems, and heavy mechanics for professional transport.'
        },
        tractor: {
          title: 'Tractor Repair',
          desc: 'Immediate field assistance for agricultural machinery. We avoid costly downtime in your production.'
        },
        diagnosis: {
          title: 'Engine Diagnosis',
          desc: 'Latest generation diagnostic equipment to detect electronic faults and optimize performance.'
        },
        aceite: {
          title: 'Oil Change',
          desc: 'Preventive maintenance with high-end lubricants and professional waste management.'
        },
        frenos: {
          title: 'Brakes and Batteries',
          desc: 'Immediate replacement of safety components. We only work with top brands.'
        },
        saber_mas: 'Learn more'
      },
      como: {
        titulo: 'How it Works',
        subtitulo: 'Your mechanic one click away',
        paso1: {
          title: 'Contact',
          desc: 'Call us or write to us on WhatsApp. Tell us your location and your vehicle symptoms.'
        },
        paso2: {
          title: 'Diagnosis',
          desc: 'Our mobile unit travels to your location to perform a complete technical evaluation.'
        },
        paso3: {
          title: 'Repair',
          desc: 'We solve the problem on-site with professional guarantee. Get back on the road without waiting.'
        }
      },
      cta: {
        titulo: 'Are you stranded?',
        subtitulo: 'Don\'t call the tow truck yet. Our team can solve most breakdowns on the spot.',
        llamar: 'Call Now',
        whatsapp: 'WhatsApp 24h'
      },
      contacto: {
        titulo_start: 'We are ready to',
        titulo_accent: 'help you',
        subtitulo: 'Our mechanics are strategically distributed to reach any point in the region in record time.',
        labels: {
          llamada: 'Direct Call',
          whatsapp: 'Urgent WhatsApp',
          correo: 'Email'
        },
        values: {
          whatsapp: 'Live chat 24/7'
        },
        form: {
          titulo: 'Request a quote',
          nombre: 'Name',
          telefono: 'Phone',
          vehiculo: 'Vehicle and Problem',
          placeholder_nombre: 'Your name',
          placeholder_telefono: 'Your mobile',
          placeholder_mensaje: 'E.g.: BMW 3 Series, won\'t start. I\'m at Main Street...',
          enviar: 'Send Urgent Request',
          error: 'There was an error sending the request. Please try again.'
        }
      },
      footer: {
        desc: 'Leaders in mobile mechanics. Professionalism, speed, and transparency in every repair.',
        especialidades: 'Specialties',
        items: {
          turismos: 'Cars and SUVs',
          transporte: 'Heavy Transport',
          maquinaria: 'Agricultural Machinery',
          hibridos: 'Hybrid Systems'
        },
        navegacion: 'Navigation',
        contacto: 'Contact',
        derechos: '© 2024 HAVE ALL. All rights reserved.',
        aviso: 'Legal Notice',
        privacidad: 'Privacy',
        cookies: 'Cookies',
        ubicacion: 'Mobile service in the entire Community of Marbella and surrounding provinces.',
        disponible: 'Available 24 hours / 365 days'
      },
      common: {
        volver: 'Back to Home',
        login: 'Login',
        signup: 'Sign Up',
        email: 'Email',
        password: 'Password',
        cerrar_sesion: 'Logout',
        perfil: 'My Profile',
        error_auth: 'Authentication error. Please check your details.'
      },
      privacy: {
        intro: 'In accordance with the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016 (GDPR) and Organic Law 3/2018, on the Protection of Personal Data and guarantee of digital rights (LOPDGDD), users of the website are informed of the following privacy policy regarding the processing of personal data.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
