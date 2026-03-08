import { VerticalConfig } from '@/lib/types'

const WHATSAPP_URL = `https://wa.me/${process.env.NEXT_PUBLIC_TOMAS_PHONE}?text=Hola%2C%20soy%20operador%20tur%C3%ADstico%20y%20quiero%20cotizar%20un%20seguro%20para%20mi%20empresa`

export const config: VerticalConfig = {
  vertical: 'turismo',

  meta: {
    titulo: 'Seguros para Empresas de Turismo y Outdoor | Towen Seguros',
    descripcion:
      'Responsabilidad Civil, Accidentes Personales, Vehículos y D&O para operadores turísticos. Cotiza en minutos con un experto. Sin papeleos.',
  },

  marca: {
    nombre: 'Towen Seguros',
    colorPrimario: '#d4a853',
    colorFondo: '#0a0c0f',
    colorTexto: '#f8f9fa',
  },

  topbar: {
    telefono: '+56 9 XXXX XXXX',
    ctaTexto: 'Cotizar ahora',
    ctaUrl: WHATSAPP_URL,
  },

  hero: {
    badge: 'Especialistas en seguros para turismo',
    headline: 'Los operadores turísticos que crecen, operan protegidos.',
    subheadline:
      'En el turismo hay accidentes y demandas. Los que están bien cubiertos los enfrentan con tranquilidad y siguen operando. Cotiza Responsabilidad Civil, Accidentes Personales, Vehículos e Incendio con un experto en minutos.',
    imagenFondo:
      'https://images.unsplash.com/photo-1469521669194-babb45599def?w=1920&q=80',
    cta: {
      texto: 'Hablar con un experto de seguros por WhatsApp',
      url: WHATSAPP_URL,
      tipo: 'whatsapp',
      subTexto: 'Respuesta inmediata · Sin compromiso',
    },
    trustItems: [
      '✓ Más de 50 operadores asegurados en Chile',
      '✓ Respuesta en menos de 2 horas',
      '✓ Corredor asociado a NICO Corredores de Seguros',
    ],
  },

  clientLogos: {
    titulo: 'Empresas que confían en Towen Seguros',
    logos: [
      { nombre: 'Cliente 1', placeholder: true },
      { nombre: 'Cliente 2', placeholder: true },
      { nombre: 'Cliente 3', placeholder: true },
      { nombre: 'Cliente 4', placeholder: true },
      { nombre: 'Cliente 5', placeholder: true },
    ],
  },

  stats: {
    titulo: 'El turismo de aventura tiene riesgos reales. Los números no mienten.',
    items: [
      {
        valor: 'Ley 19.496',
        label: 'establece responsabilidad objetiva del operador turístico ante accidentes de sus clientes',
        fuente: 'Código Civil chileno + Ley del Consumidor',
      },
      {
        valor: '+29',
        label: 'compañías de seguros disponibles para cotizar tu cobertura',
        fuente: 'Red NICO Corredores de Seguros',
      },
      {
        valor: '1 a 3 años',
        label: 'puede durar un juicio civil por responsabilidad. Sin seguro, lo enfrentas tú',
        fuente: 'Wolfenson Abogados / Código de Procedimiento Civil',
      },
      {
        valor: 'UF 500+',
        label: 'puede alcanzar una demanda por daño moral en accidentes con lesiones graves',
        fuente: 'Jurisprudencia chilena - Corte Suprema',
      },
    ],
    parrafoLegal:
      'En Chile, la Ley 19.496 y el Código Civil establecen responsabilidad objetiva del operador turístico ante accidentes de sus clientes. Sin seguro de Responsabilidad Civil adecuado, un solo incidente puede significar el fin de tu empresa.',
  },

  productos: {
    titulo: 'Los seguros más solicitados por operadores turísticos',
    items: [
      {
        icono: '⚖️',
        nombre: 'Responsabilidad Civil frente a Terceros',
        descripcion:
          'En el turismo de aventura los accidentes existen. La diferencia está en estar preparado: este seguro cubre las demandas civiles, los gastos legales y las indemnizaciones para que sigas operando sin que un incidente ponga en riesgo todo lo que construiste.',
        destacado: true,
        tag: 'El más solicitado',
      },
      {
        icono: '🏥',
        nombre: 'Accidentes Personales',
        descripcion:
          'Tus clientes y guías merecen salir protegidos. Este seguro cubre lesiones, fracturas o incapacidad temporal durante actividades outdoor. Las isapres y Fonasa no cubren accidentes deportivos, esta póliza sí. Operar con esto activo es operar con confianza.',
        destacado: false,
        tag: null,
      },
      {
        icono: '🚐',
        nombre: 'Vehículos de Transporte Turístico',
        descripcion:
          'Si llevas clientes en tu van o minibús, el seguro de auto convencional no te cubre. Esta póliza está diseñada específicamente para transporte remunerado de pasajeros. Así tus traslados son parte del servicio, no un punto ciego.',
        destacado: false,
        tag: null,
      },
      {
        icono: '🔥',
        nombre: 'Incendio para Hoteles y Locales',
        descripcion:
          'Años de inversión en tu infraestructura merecen respaldo. Esta cobertura protege tu establecimiento, equipamiento y contenido ante incendios, y cubre pérdida de renta mientras recuperas la operación. Tu negocio sigue en pie incluso cuando lo imprevisto ocurre.',
        destacado: false,
        tag: null,
      },
      {
        icono: '🏢',
        nombre: 'D&O — Responsabilidad de Directivos',
        descripcion:
          'Los buenos directivos toman decisiones difíciles. Esta póliza protege tu patrimonio personal ante reclamaciones por decisiones de gestión, para que lideres con libertad sabiendo que estás respaldado.',
        destacado: false,
        tag: null,
      },
    ],
  },

  comoFunciona: {
    titulo: 'Cotiza en 3 pasos. Sin formularios eternos.',
    pasos: [
      {
        numero: '01',
        titulo: 'Escríbenos por WhatsApp',
        descripcion:
          '"Hola, quiero cotizar un seguro para mi empresa de turismo"',
      },
      {
        numero: '02',
        titulo: 'Te hacemos las preguntas correctas',
        descripcion:
          'En 5 a 10 minutos recopilamos todo: actividades, empleados, vehículos, facturación anual.',
      },
      {
        numero: '03',
        titulo: 'Recibes tu propuesta en menos de 24 horas',
        descripcion:
          'Con cobertura, prima mensual y condiciones claras. Sin letra pequeña, sin sorpresas.',
      },
    ],
  },

  testimonios: {
    titulo: 'Operadores que ya viajan tranquilos',
    items: [
      {
        texto:
          'Nos cotizaron todo en una sola tarde. Teníamos 3 pólizas distintas y las consolidaron en una solución más barata y mejor cubierta.',
        autor: 'Carlos M.',
        empresa: 'Operador Outdoor',
        ciudad: 'Coyhaique',
      },
      {
        texto:
          'Nunca habíamos tenido cobertura de D&O. No sabíamos que la necesitábamos hasta que nos explicaron los riesgos. Hoy dormimos más tranquilos.',
        autor: 'Patricia V.',
        empresa: 'Termas & Lodges',
        ciudad: 'Pucón',
      },
      {
        texto:
          'La renovación fue automática y nos avisaron 45 días antes. Por primera vez no tuvimos el susto de quedar sin seguro entre temporadas.',
        autor: 'Roberto A.',
        empresa: 'Expediciones',
        ciudad: 'Atacama',
      },
    ],
    logos: ['Unnio Seguros', 'Mapfre', 'HDI Seguros'],
  },

  faq: {
    titulo: 'Preguntas frecuentes',
    items: [
      {
        pregunta: '¿Cuánto cuesta un seguro de RC para mi empresa?',
        respuesta:
          'Depende de tu facturación anual, tipo de actividades y número de personas. Coberturas básicas de RC para operadores pequeños parten desde $80.000/mes. Te damos el precio exacto en minutos.',
      },
      {
        pregunta: '¿Necesito seguro si ya tengo los waivers firmados?',
        respuesta:
          'Los waivers limitan pero NO eliminan tu responsabilidad legal en Chile. La jurisprudencia muestra que tribunales chilenos fallan a favor del accidentado en la mayoría de los casos de turismo de aventura.',
      },
      {
        pregunta:
          '¿Pueden asegurar actividades de alto riesgo como rafting clase IV o escalada?',
        respuesta:
          'Sí. Tenemos coberturas especializadas para actividades de alto riesgo que las aseguradoras generalistas rechazan. Es nuestro foco.',
      },
      {
        pregunta: '¿Cuánto demora el proceso?',
        respuesta:
          'La cotización demora 24 a 48 horas. La emisión de la póliza 3 a 5 días hábiles.',
      },
      {
        pregunta: '¿Trabajan con empresas pequeñas?',
        respuesta:
          'Sí. Desde guías independientes hasta grandes operadores. El tamaño no importa, el riesgo es el mismo.',
      },
    ],
  },

  ctaFinal: {
    imagenFondo:
      'https://images.unsplash.com/photo-1534488972407-5a4aa1e47d84?w=1920&q=80',
    headline:
      'Un accidente sin seguro puede cerrar tu empresa en semanas. Una conversación con nuestros expertos puede protegerla para siempre.',
    subheadline: 'Más de 50 operadores ya lo hicieron. ¿Cuándo te sumas?',
    cta: {
      texto: 'Hablar con un experto. Es gratis.',
      url: WHATSAPP_URL,
    },
    microCopy: 'Sin compromiso · Sin formularios · Respuesta en minutos',
  },

  footer: {
    razonSocial: 'Towen SpA',
    rut: 'RUT 77.878.353-3',
    descripcionLegal:
      'Corredor asociado a NICO Corredores de Seguros SpA · RUT 77.303.506-7',
    email: 'contacto@towenseguros.cl',
  },

  tracking: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
    whatsappEventName: 'whatsapp_click_turismo',
  },
}
