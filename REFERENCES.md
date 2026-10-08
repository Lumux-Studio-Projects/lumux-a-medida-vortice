# Ficha de Investigación de Referencias
## Demo B · Vórtice // Creative & Motion Atelier

- **Referencias Principales Analizadas:**
  1. [Madame Polare (Paris)](https://madamepolare.com/en): Agencia de comunicación integrada en París (Awwwards SOTD). Destacada por su layout tipográfico monumental con fotos y avatares *inline*, navbar en isla flotante, barra de anuncios superior y diseño editorial humano y orgánico sin elementos 3D fríos.
  2. [Extrafazant (Netherlands)](https://www.extrafazant.nl/): Bureau creativo holandés con apilamiento 3D en perspectiva (`data-featured-stack`), cursor magnético reactivo y tipografía display de alto contraste.
  3. [FeedForge](https://feed-forge.integritas.agency/): Agencia de creative performance especializada en carruseles de video reels 9:16 verticales y paquetes comerciales de sprints de 5 días.
- **Fecha de comprobación:** Octubre 2026.

---

### 1. Decisiones de Diseño Adoptadas de Madame Polare

1. **Titular Monumental con Medios Inline (Inline Media Typography):**
   - En lugar de un objeto 3D genérico que añade frialdad robótica, la cabecera entrelaza texto monumental (`WE SHAPE STORIES INTO UNMISSABLE MOTION PEOPLE NEVER SKIP`) con:
     - Foto píldora redondeada de alta costura y dirección de arte.
     - Clúster de avatares reales de directores creativos con insignia numérica `+12`.
     - Botón de acción circular interactivo con micro-rotación en hover.
     - Sello animado giratorio vectorial (`RotatingSealSvg`).
2. **Navbar Isla Flotante + Barra de Anuncios Superior:**
   - Barra superior minimalista tipo ticker con aviso de reservas para Q2/Q3.
   - Menú flotante en cápsula con enlace a "Work" y micro-insignia "New", selector de idioma `EN / ES` y CTA de alto contraste.
3. **Pie de Página Monumental:**
   - Marca `VÓRTICE` en dimensiones arquitectónicas de gran escala.
   - Relojes de zonas horarias en tiempo real para París (CET) y Ciudad de México (CST).
   - Datos de contacto directo y canal de correo sin fricción.

---

### 2. Paletas Cromáticas Implementadas (2 Claros y 1 Negro)

- **Madame Polare Crème (Predeterminado Claro 1):** Fondo blanco hueso / crudo parisino cálido (`#F5F4EF`), tarjetas blanco puro galería (`#FFFFFF`), texto tinta carbón puro ultra-legible (`#111113`) y acento azul cobalto eléctrico parisino (`#0038FF`).
- **Atelier Lumière (Claro 2):** Fondo tiza nórdica pura luz de día (`#FAFAF8`), tarjetas blanco puro (`#FFFFFF`), texto negro absoluto (`#0E0F12`), y acento terracota coral alta costura (`#E85D3F`).
- **Nocturne Velvet Noir (Negro / Dark):** Fondo negro terciopelo mate profundo (`#0C0D10`), tarjetas grafito satinado (`#1C1E26`), texto seda marfil (`#F8F8FA`), y acento oro buttercup eléctrico (`#FFF04D`).

---

### 3. Adaptación Obligatoria para Móvil y Accesibilidad

- **Cursor Oculto en Dispositivos Táctiles:** El cursor personalizado se desactiva de inmediato en pantallas táctiles (`@media (pointer: coarse)`).
- **Control de Texto y Desbordamiento:** Tipografía fluida con `clamp()`, alturas de línea generosas (`1.15` a `1.6`) y flex-wrap responsivo para evitar cortes de texto o desbordamientos horizontales.
- **Respeto a `prefers-reduced-motion`:** Animaciones continuas de marquesinas y sellos se detienen instantáneamente si el usuario tiene activada la reducción de movimiento.
