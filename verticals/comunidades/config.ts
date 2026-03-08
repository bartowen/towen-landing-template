import { VerticalConfig } from '@/lib/types'

const WHATSAPP_URL = `https://wa.me/${process.env.NEXT_PUBLIC_TOMAS_PHONE}?text=Hola%20Tom%C3%A1s%2C%20quiero%20cotizar%20seguros%20para%20mi%20comunidad%20de%20edificios`

export const config: VerticalConfig = {
  vertical: 'comunidades',

  meta: {
    titulo: 'Seguros para Comunidades de Edificios — Towen Seguros',
    descripcion: 'Incendio, RC edificio, ascensores y más. Cotiza con Tomás.',
  },

  marca: {
    nombre: 'Towen Seguros',
    colorPrimario: '#3b82f6',
    colorFondo: '#0a0f1a',
    colorTexto: '#f8f9fa',
  },

  topbar: {
    ctaTexto: 'Cotizar para mi edificio →',
    ctaUrl: WHATSAPP_URL,
  },

  hero: {
    badge: '🏢 Especialistas en comunidades de edificios',
    headline: 'Tu edificio tiene riesgos que el seguro de siempre no cubre.',
    subheadline:
      'Incendio en espacios comunes, RC edificio, ascensores y más. Cotiza en minutos con Tomás.',
    imagenFondo:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    cta: {
      texto: '🟢 Hablar con Tomás — WhatsApp',
      url: WHATSAPP_URL,
      tipo: 'whatsapp',
      subTexto: 'Respuesta inmediata · Sin compromiso',
    },
    trustItems: [
      '✓ Especialistas en seguros para comunidades',
      '✓ Respuesta en menos de 2 horas',
      '✓ Corredor asociado a NICO Corredores de Seguros',
    ],
  },

  stats: { titulo: '', items: [] },
  productos: { titulo: '', items: [] },
  comoFunciona: { titulo: '', pasos: [] },
  testimonios: { titulo: '', items: [] },
  faq: { titulo: '', items: [] },

  ctaFinal: {
    imagenFondo:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    headline: 'Tu comunidad merece estar protegida.',
    subheadline: 'Cotiza hoy con Tomás.',
    cta: { texto: '🟢 Hablar con Tomás', url: WHATSAPP_URL },
  },

  footer: {
    razonSocial: 'Towen SpA',
    rut: 'RUT 77.878.353-3',
    descripcionLegal:
      'Corredor asociado a NICO Corredores de Seguros SpA · RUT 77.303.506-7',
    email: 'contacto@towenseguros.cl',
  },

  tracking: {
    whatsappEventName: 'whatsapp_click_comunidades',
  },
}
