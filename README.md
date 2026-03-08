# Towen Landing Engine

Un solo repositorio que genera landings de alta conversión para múltiples verticales de Towen Seguros. El código nunca cambia — solo cambia el archivo de configuración de cada vertical.

## Setup

```bash
npm install
cp .env.local.example .env.local
# Editar .env.local con tus variables
npm run dev
```

## Variables de entorno

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
NEXT_PUBLIC_TOMAS_PHONE=56XXXXXXXXX
```

## Verticales disponibles

| Vertical | URL | Estado |
|----------|-----|--------|
| Turismo | `/turismo` | Producción |
| Comunidades | `/comunidades` | Placeholder |

## Agregar una vertical nueva

1. Crear carpeta `verticals/[nombre]/`
2. Copiar `verticals/turismo/config.ts` como base
3. Editar todos los campos con el contenido de la nueva vertical
4. Agregar `{ vertical: 'nombre' }` en `generateStaticParams()` en `app/[vertical]/page.tsx`
5. `git commit + git push` → Vercel redespliega en 2 min
6. (Opcional) Configurar dominio custom en Vercel para esa vertical

Tiempo estimado: 30–45 minutos por vertical nueva.

## Estructura

```
landing-engine/
├── app/
│   ├── layout.tsx          ← GTM en <head>
│   ├── page.tsx            ← redirect a /turismo
│   └── [vertical]/page.tsx ← carga config + renderiza landing
├── components/
│   ├── sections/           ← TopBar, Hero, Stats, Products, etc.
│   ├── ui/                 ← WhatsAppButtonSticky, AnimatedNumber
│   └── LandingPage.tsx     ← recibe config, renderiza todo
├── verticals/
│   ├── turismo/config.ts   ← COMPLETO, producción
│   └── comunidades/config.ts ← placeholder
└── lib/
    ├── types.ts            ← interfaz VerticalConfig
    ├── tracking.ts         ← GTM + Meta Pixel helpers
    └── config-loader.ts    ← importa config según [vertical]
```
