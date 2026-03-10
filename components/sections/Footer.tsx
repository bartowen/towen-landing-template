import { VerticalConfig } from '@/lib/types'
import { isColorDark } from '@/lib/theme'

interface FooterProps {
  config: VerticalConfig
}

export function Footer({ config }: FooterProps) {
  const { footer, marca } = config
  const dark = isColorDark(marca.colorFondo)

  return (
    <footer
      className="py-12 px-6"
      style={{
        backgroundColor: dark ? '#06080a' : '#f8fafc',
        borderTop: '1px solid var(--border-sutil)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <p
          className="font-display text-lg font-semibold"
          style={{ color: 'var(--color-primario)' }}
        >
          {marca.nombre}
        </p>

        <p
          className="font-sans text-sm"
          style={{ color: 'var(--text-secondary)' }}
        >
          {footer.razonSocial} · {footer.rut}
        </p>

        <p
          className="font-sans text-xs max-w-xl mx-auto leading-relaxed"
          style={{ color: 'var(--text-secondary)', opacity: 0.7 }}
        >
          {footer.descripcionLegal}
        </p>

        {footer.email && (
          <a
            href={`mailto:${footer.email}`}
            className="inline-block font-sans text-xs transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-primario)' }}
          >
            {footer.email}
          </a>
        )}

        <p
          className="font-sans text-xs pt-4"
          style={{ color: 'var(--text-secondary)', opacity: 0.38 }}
        >
          © {new Date().getFullYear()} {marca.nombre}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
