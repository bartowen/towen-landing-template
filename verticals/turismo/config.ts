import { VerticalConfig } from '@/lib/types'

const WHATSAPP_URL = `https://wa.me/${process.env.NEXT_PUBLIC_TOMAS_PHONE}?text=Hola%20Tom%C3%A1s%2C%20soy%20operador%20tur%C3%ADstico%20y%20quiero%20cotizar%20un%20seguro%20para%20mi%20empresa`

export const config: VerticalConfig = {
  vertical: 'turismo',

  meta: {
    titulo: 'Seguros para Empresas de Turismo y Outdoor — Towen Seguros',
    descripcion:
      'Responsabilidad Civil, Accidentes Personales, Vehículos y D&O para operadores turísticos. Cotiza en minutos con Tomás. Sin papeleos.',
  },

  marca: {
    nombre: 'Towen Seguros',
    colorPrimario: '#d4a853',
    colorFondo: '#0a0c0f',
    colorTexto: '#f8f9fa',
  },

  topbar: {
    telefono: '+56 9 XXXX XXXX',
    ctaTexto: 'Cotizar ahora →',
    ctaUrl: WHATSAPP_URL,
  },

  hero: {
    badge: '🛡 Especialistas en turismo de aventura',
    headline:
      'Tu empresa de turismo necesita seguros que entiendan la montaña, el río y la ruta.',
    subheadline:
      'Responsabilidad Civil, D&O, Accidentes Personales y Vehículos diseñados para operadores turísticos. Sin papeleos — cotiza en minutos con Tomás.',
    imagenFondo:
      'https://images.unsplash.com/photo-1469521669194-babb45599def?w=1920&q=80',
    cta: {
      texto: '🟢 Hablar con Tomás — WhatsApp',
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

  stats: {
    titulo:
      'El turismo de aventura tiene riesgos reales. Los números no mienten.',
    items: [
      {
        valor: '$480M',
        descripcion: 'pérdidas por accidentes en turismo Latam (2023)',
      },
      {
        valor: '1 de 3',
        descripcion: 'operadores NO tiene cobertura de RC suficiente',
      },
      {
        valor: '73%',
        descripcion: 'de demandas civiles van contra el operador turístico',
      },
      {
        valor: 'UF 5.000',
        descripcion:
          'monto promedio de demanda por accidente en turismo de aventura',
      },
    ],
    parrafoLegal:
      'En Chile, la Ley 19.496 y el Código Civil establecen responsabilidad objetiva del operador turístico ante accidentes de sus clientes. Sin seguro de Responsabilidad Civil adecuado, un solo incidente puede significar el fin de tu empresa.',
  },

  productos: {
    titulo: 'Los 4 seguros que todo operador turístico necesita',
    items: [
      {
        icono: '🛡',
        nombre: 'Responsabilidad Civil',
        descripcion:
          'Cubre daños a terceros durante tus actividades: trekking, rafting, ski, canopy, cabalgatas. Incluye gastos médicos, daño patrimonial y defensa legal.',
        datosClave: 'Cobertura desde UF 500 hasta UF 10.000 según actividad',
      },
      {
        icono: '🧑‍⚕️',
        nombre: 'Accidentes Personales',
        descripcion:
          'Protege a tus guías, staff y pasajeros ante lesiones. Incluye invalidez, muerte accidental y gastos médicos.',
        datosClave: 'Cobertura por persona desde UF 200',
      },
      {
        icono: '🚐',
        nombre: 'Vehículos Comerciales',
        descripcion:
          'Flotilla de vans, minibuses y vehículos de trabajo con coberturas para uso comercial de transporte de pasajeros.',
        datosClave: 'Todo riesgo o terceros según antigüedad del vehículo',
      },
      {
        icono: '💼',
        nombre: 'D&O / Responsabilidad Directivos',
        descripcion:
          'Protege a dueños y directivos ante demandas por decisiones de gestión. Fundamental si tienes socios, inversionistas o accedes a créditos.',
        datosClave:
          'Especialmente relevante para operadores medianos y grandes',
      },
    ],
  },

  comoFunciona: {
    titulo: 'Cotiza en 3 pasos. Sin formularios eternos.',
    pasos: [
      {
        numero: '01',
        titulo: 'Escríbele a Tomás por WhatsApp',
        descripcion:
          '"Hola, quiero cotizar un seguro para mi empresa de turismo"',
      },
      {
        numero: '02',
        titulo: 'Tomás te hace las preguntas correctas',
        descripcion:
          'En 5–10 minutos recopila todo: actividades, empleados, vehículos, facturación anual.',
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
          'Tomás nos cotizó todo en una sola tarde. Teníamos 3 pólizas distintas y las consolidó en una solución más barata y mejor cubierta.',
        autor: 'Carlos M.',
        empresa: 'Operador Outdoor',
        ciudad: 'Coyhaique',
      },
      {
        texto:
          'Nunca habíamos tenido cobertura de D&O. No sabíamos que la necesitábamos hasta que Tomás nos explicó los riesgos. Hoy dormimos más tranquilos.',
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
          'Depende de tu facturación anual, tipo de actividades y número de personas. Coberturas básicas de RC para operadores pequeños parten desde $80.000/mes. Tomás te da el precio exacto en minutos.',
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
          'La cotización demora 24–48 horas. La emisión de la póliza 3–5 días hábiles.',
      },
      {
        pregunta: '¿Trabajan con empresas pequeñas?',
        respuesta:
          'Sí. Desde guías independientes hasta grandes operadores. El tamaño no importa — el riesgo es el mismo.',
      },
    ],
  },

  ctaFinal: {
    imagenFondo:
      'https://images.unsplash.com/photo-1534488972407-5a4aa1e47d84?w=1920&q=80',
    headline:
      'Un accidente sin seguro puede cerrar tu empresa en semanas. Una conversación con Tomás puede protegerla para siempre.',
    subheadline: 'Más de 50 operadores ya lo hicieron. ¿Cuándo te sumas?',
    cta: {
      texto: '🟢 Hablar con Tomás — Es gratis',
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
