import { VerticalConfig } from '@/lib/types'

interface FooterProps {
  config: VerticalConfig
}

export function Footer({ config }: FooterProps) {
  const { footer, marca } = config

  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: 'var(--navy-900)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <p
          className="font-jakarta font-bold text-lg text-white"
        >
          {marca.nombre}
        </p>

        <p
          className="font-sans text-xs"
          style={{ color: 'rgba(255,255,255,0.5)' }}
        >
          {footer.razonSocial} · {footer.rut}
        </p>

        <p
          className="font-sans text-xs max-w-xl mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.35)' }}
        >
          {footer.descripcionLegal}
        </p>

        {footer.email && (
          <a
            href={`mailto:${footer.email}`}
            className="inline-block font-sans text-xs transition-colors"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = '#ffffff')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)')
            }
          >
            {footer.email}
          </a>
        )}

        <p
          className="font-sans text-xs pt-4"
          style={{ color: 'rgba(255,255,255,0.2)' }}
        >
          © {new Date().getFullYear()} {marca.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
