export interface VerticalConfig {
  vertical: string

  meta: {
    titulo: string
    descripcion: string
    ogImage?: string
  }

  marca: {
    nombre: string
    colorPrimario: string
    colorFondo: string
    colorTexto: string
  }

  topbar: {
    telefono?: string
    ctaTexto: string
    ctaUrl: string
  }

  hero: {
    badge?: string
    headline: string
    subheadline: string
    imagenFondo: string
    cta: {
      texto: string
      url: string
      tipo: 'whatsapp' | 'form' | 'calendly'
      subTexto?: string
    }
    trustItems: string[]
  }

  clientLogos?: {
    titulo: string
    logos: Array<{
      nombre: string
      placeholder?: boolean
      url?: string
    }>
  }

  stats: {
    titulo: string
    items: Array<{
      valor: string
      label: string
      fuente?: string
    }>
    parrafoLegal?: string
  }

  productos: {
    titulo: string
    items: Array<{
      icono: string
      nombre: string
      descripcion: string
      destacado?: boolean
      tag?: string | null
      datosClave?: string
      imagenUrl?: string
    }>
  }

  comoFunciona: {
    titulo: string
    pasos: Array<{
      numero: string
      titulo: string
      descripcion: string
    }>
  }

  testimonios: {
    titulo: string
    items: Array<{
      texto: string
      autor: string
      empresa: string
      ciudad: string
    }>
    logos?: string[]
  }

  faq: {
    titulo: string
    items: Array<{
      pregunta: string
      respuesta: string
    }>
  }

  ctaFinal: {
    imagenFondo: string
    headline: string
    subheadline: string
    cta: { texto: string; url: string }
    microCopy?: string
  }

  footer: {
    razonSocial: string
    rut: string
    descripcionLegal: string
    email?: string
  }

  tracking: {
    gtmId?: string
    metaPixelId?: string
    whatsappEventName: string
  }

  galeria?: {
    titulo: string
    imagenes: string[]
  }
}
