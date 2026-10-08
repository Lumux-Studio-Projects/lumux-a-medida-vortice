# Demo B · Vórtice Creative Bureau
## Demo de Sitio Web a Medida — Lumux Studio

Aplicación estática independiente desarrollada con **Astro 4 + TypeScript + Three.js + GSAP**. Funciona como demostración comercial navegable del servicio de **Sitios Web a Medida** de Lumux Studio para estudios de diseño, dirección de arte y productoras creativas.

---

## 1. Características Técnicas

- **Framework:** Astro 4 (Static Site Generation / SSG).
- **Tipografía y Tokens:** CSS modular con variables en `src/styles/tokens.css` y `src/styles/global.css`.
- **Selector de Paletas Interactivo:** Componente flotante `ThemeSwitcher.astro` con 3 atmósferas de alto impacto (*Cyber Lima*, *Electric Cobalt*, *Ultraviolet Neón*), persistidas en `localStorage`.
- **Escena 3D WebGL (Three.js):**
  - Componente `HeroThreeScene.astro` con una escultura cinética paramétrica abstracta que responde dinámicamente al puntero.
  - Pausa automática con `IntersectionObserver` cuando el usuario hace scroll hacia abajo para liberar la GPU.
  - Botón accesible para pausar/reanudar el movimiento y soporte para `prefers-reduced-motion`.
  - Gradiente radial y fallback CSS estático para dispositivos de bajo rendimiento.
- **Portafolio con Filtros en Vivo:**
  - Filtrado reactivo en `src/pages/trabajo/index.astro` por categoría (*Identidad & Digital*, *Packaging & Campaña*, *Digital & Plataforma*).
  - Estado vacío accesible si no hay coincidencias.
- **Casos de Estudio en Profundidad:**
  - Rutas dinámicas en `/trabajo/[slug]` (Aurora Audio, Kroma Gin, Hyper Mobility, Sol Studio).
  - Brief, concepto visual, muestra de paleta de color del proyecto, entregables y créditos.

---

## 2. Comandos de Desarrollo y Compilación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local (http://localhost:4321)
npm run dev

# Compilar proyecto estático (directorio dist/)
npm run build

# Previsualizar resultado compilado
npm run preview
```

---

## 3. Mantenimiento de Contenido (JSON)

- **Información del Bureau y Navegación:** `src/data/site.json`
- **Paletas Cromáticas:** `src/data/theme.json`
- **Casos de Portafolio:** Cada caso es un archivo en `src/content/projects/*.json` validado con Zod en `src/content/config.ts`.
