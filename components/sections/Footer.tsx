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
        backgroundColor: 'var(--bg-base)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <p
          className="text-lg font-semibold"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--color-primario)',
          }}
        >
          {marca.nombre}
        </p>
        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          {footer.razonSocial} · {footer.rut}
        </p>
        <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
          {footer.descripcionLegal}
        </p>
        {footer.email && (
          <a
            href={`mailto:${footer.email}`}
            className="text-xs hover:opacity-80 transition-opacity"
            style={{ color: 'var(--color-primario)' }}
          >
            {footer.email}
          </a>
        )}
      </div>
    </footer>
  )
}
