# Plan de mejora de UI · Banco de Prueba Juan

**Premisa:** conservar la identidad actual (navy `#0e1a2f`, rojo `#e6332a`, superficies "metal cepillado", esquinas `rounded-2xl`) y llevarla de "plantilla" a "taller de precisión". El metal no es decoración: es el concepto. Todo lo que se añada debe sentirse mecanizado, calibrado y sólido.

Estado de partida (2025-11-21): sitio 100 % estático, 0 JS de framework, Lighthouse móvil 96–100. Cualquier mejora debe mantener esos números: animaciones solo con `transform`/`opacity`, CSS primero, JS mínimo y progresivo.

---

## 0. Concepto visual: "Precisión mecanizada"

| Elemento | Hoy | Hacia dónde |
|---|---|---|
| Metal | Degradado plano slate→blanco→gris en cada tarjeta | Sistema de 3 acabados (pulido, cepillado, oscuro) con textura sutil de cepillado y bisel de 1 px que reacciona a la luz |
| Rojo | Botón y degradado de títulos | Rojo como "marca de calibración": líneas finas, indicadores, estados activos. Menos superficie roja, más intención |
| Tipografía | Manrope en todo | Manrope para UI/texto + una display condensada industrial para titulares y cifras (p. ej. Barlow Condensed o Sora en pesos altos) |
| Formas | Rectángulos redondeados homogéneos | Mismo radio, pero con detalles mecánicos: tornillos/remaches en esquinas de tarjetas clave, reglas milimetradas como separadores, marcas de medición en el hero |
| Movimiento | Fade-in genérico al hacer scroll | Movimiento con "peso": entradas cortas, easing firme, micro-feedback metálico (brillo que recorre la superficie, no rebotes) |

---

## 1. Design system (tokens y utilidades)

Centralizar en `src/styles/global.css` (`@theme`) y en `shared/ui`. Un cambio global = un solo lugar.

### 1.1 Tokens de color
```css
--color-primary: #0e1a2f;        /* navy */
--color-primary-900: #0a1322;
--color-primary-700: #16243f;
--color-secondary: #e6332a;      /* rojo marca */
--color-secondary-strong: #df3128; /* AA sobre blanco */
--color-steel-50: #f5f7fa;  --color-steel-100: #e9edf2;  --color-steel-200: #d7dde6;
--color-steel-400: #9aa4b2;  --color-steel-600: #5b6675;  --color-steel-800: #2b3440;
--color-tertiary: #4f4f4f;  /* texto secundario (mantener) */
```

### 1.2 Superficies metálicas (3 acabados)
- `.metal-polished` (tarjetas destacadas): degradado actual + **highlight diagonal** animable + bisel `inset 0 1px 0 rgb(255 255 255 / .8), inset 0 -1px 0 rgb(0 0 0 / .08)`.
- `.metal-brushed` (tarjetas estándar): degradado + textura de cepillado con `repeating-linear-gradient` de 1 px a 2–3 % de opacidad (sin imágenes).
- `.metal-dark` (secciones navy): navy con veta sutil y bisel claro; para Experience, Galería, Blog en home.
- `.metal-badge` ya existe: añadir anillo exterior `ring-1 ring-white/70` y sombra interior para que el medallón se lea como pieza torneada.

### 1.3 Elevación y bordes
- 3 niveles de sombra con tinte navy (no gris neutro): `--shadow-1`, `--shadow-2`, `--shadow-3`.
- Separador "regla milimetrada": `.rule` con marcas cada 8 px vía `repeating-linear-gradient`; úsalo entre secciones en vez de líneas planas.

### 1.4 Tipografía
- Escala fija: 12 / 14 / 16 / 18 / 24 / 32 / 48 / 64 / 96 (`--text-*`).
- Titulares de sección: display condensada, `tracking-tight`, mayúsculas solo en etiquetas (`tracking-[0.3em]`, 12 px), como ya se hizo en el hero.
- Cifras (15 años, pasos 1–5, 404): `font-variant-numeric: tabular-nums` y la fuente display.
- Eliminar `text-shadow` genérico; sustituir por overlays con degradado donde haga falta legibilidad.

### 1.5 Componentes a crear/normalizar en `src/components/ui`
| Componente | Estado | Nota |
|---|---|---|
| `Button.astro` | existe | Añadir tamaños (`sm/md/lg`), estado `loading`, variante `ghost` sobre oscuro, icono a izquierda/derecha |
| `Icon.astro` | existe | OK |
| `Card.astro` | **nuevo** | Props `finish="polished|brushed|dark"`, `rivets` (remaches en esquinas), `interactive` |
| `SectionHeading.astro` | **nuevo** | Etiqueta pequeña + título + regla milimetrada; sustituye los 6 `h2` con clases repetidas |
| `Badge.astro` | **nuevo** | Medallón metálico para iconos (hoy clases sueltas en about/contacto) |
| `Stat.astro` | **nuevo** | Cifra grande + etiqueta, con contador animado (ver §3) |
| `Testimonial.astro` | normalizar | Mover `CustomerCard` aquí con estrellas accesibles |
| `Carousel.astro` | normalizar | Extraer de `Galery.astro`, admitir miniaturas y lightbox |

---

## 2. Mejoras por sección (orden de impacto)

### 2.1 Hero (prioridad máxima)
- **Marcas de medición animadas**: una línea fina roja horizontal con pequeñas marcas que "escanea" el chasis de la foto una sola vez al cargar (1.2 s, `transform: translateY`, se detiene; respeta `prefers-reduced-motion`). Refuerza "banco de prueba = medir".
- Etiqueta superior con indicador pulsante verde "Atención hoy · 8:00–12:00" calculado en build/cliente según `siteConfig.openingHours` (si está cerrado: "Abrimos mañana 8:00").
- Fila de confianza bajo los botones: 3 chips metálicos (15 años · Garantía escrita · Diagnóstico 10–30 min).
- Botón primario con brillo metálico al hover (pseudo-elemento que recorre la superficie, 600 ms, solo `transform`).

### 2.2 Servicios (home y /servicios)
- Tarjeta `Card finish="polished" rivets`: imagen con `clip-path` biselado en la esquina superior derecha, título condensado, lista de 2 síntomas clave, CTA "Ver servicio".
- Hover: la tarjeta se eleva 4 px y el highlight metálico se desplaza (`background-position`), sin `scale` que empuje el layout.
- En `/servicios/[slug]`: timeline vertical del proceso con línea punteada roja y nodos que se "encienden" al entrar en viewport (CSS `animation-timeline: view()`, ya usado).

### 2.3 Experiencia ("15 años")
- Reemplazar la cifra estática por `Stat` con **contador animado** 0→15 al entrar (IntersectionObserver, 900 ms, `requestAnimationFrame`, sin librerías).
- 3 pilares como piezas metálicas con icono en medallón, no texto flotante sobre degradado.
- Fondo navy con veta metálica diagonal muy sutil (`.metal-dark`).

### 2.4 Galería
- Carrusel actual → **grid tipo mosaico** 2×3 en desktop con lightbox nativo (`<dialog>`) y navegación por teclado; en móvil se mantiene scroll-snap.
- Soporte "antes / después": componente `CompareSlider` con `<input type="range">` (sin JS pesado) para los trabajos donde haya ambas fotos. Es el elemento más persuasivo posible para este negocio.
- Pie de foto breve por trabajo (modelo, daño, tiempo de reparación).

### 2.5 Testimonios
- Tarjetas con comillas grandes en rojo, foto/inicial en medallón, estrellas accesibles.
- Auto-rotación suave en móvil (scroll-snap + autoplay pausable), sin JS adicional en desktop.
- Botón "Dejar reseña en Google" junto a "Ver más opiniones".

### 2.6 Blog
- Tarjetas con imagen 16:9, etiqueta de tema (chip metálico), tiempo de lectura y fecha.
- En el artículo: barra de progreso de lectura (CSS `animation-timeline: scroll()`), índice lateral en desktop, bloque "Aplica a tu caso" que enlaza al servicio relacionado por `tags`.

### 2.7 FAQ
- Acordeón ya nativo (`<details>`); añadir animación de apertura con `interpolate-size: allow-keywords` + fallback, icono que gira 45° (ya), y resaltado de la pregunta abierta con regla roja a la izquierda.

### 2.8 Contacto
- Mapa con placeholder estático (imagen) y carga del iframe al interactuar: ahorra ~300 KB en móvil.
- Tarjetas de contacto con el mismo `Card` y acción clara (copiar teléfono con feedback "Copiado").
- Horario "en vivo" (abierto/cerrado ahora) reutilizando la lógica del hero.

### 2.9 Header y navegación
- Header que se compacta al hacer scroll (altura 96→72 px, fondo navy con blur sutil), con sombra que aparece.
- Enlace activo con subrayado rojo animado (`scale-x` desde el centro).
- Menú móvil: entradas escalonadas (stagger 40 ms) y cierre con swipe.

### 2.10 Footer
- Tres columnas con regla milimetrada superior, mini-mapa de sitio completo (servicios y artículos), insignias (garantía, años) y NAP completo para SEO local.

---

## 3. Sistema de movimiento

Reglas:
1. Solo `transform` y `opacity`. Nada que dispare layout.
2. Duraciones: micro 120–200 ms · entrada 300–500 ms · hero 800–1200 ms. Easing firme: `cubic-bezier(.2,.7,.2,1)`; sin rebotes elásticos (no es un juguete, es un taller).
3. Todo bajo `@media (prefers-reduced-motion: no-preference)`.
4. Scroll-driven con `animation-timeline: view()` (ya implantado) para revelados; IntersectionObserver solo para el contador y el timeline.
5. Una sola animación "firma": el **brillo metálico** (`.metal-sheen`) que recorre botones y tarjetas al hover/focus. Reconocible en todo el sitio.

Catálogo:
| Nombre | Dónde | Técnica |
|---|---|---|
| `sheen` | botones, tarjetas al hover | pseudo-elemento con gradiente, `translateX(-120%→120%)` |
| `reveal-up` | secciones al entrar | ya existe (`.scroll-reveal`), reducir a 24 px y 400 ms |
| `stagger` | grids de tarjetas | `animation-delay: calc(var(--i) * 60ms)` con `--i` inline |
| `count-up` | cifra 15 años | rAF 900 ms, `tabular-nums` |
| `scan-line` | hero | una sola pasada, 1.2 s |
| `progress` | artículos | `animation-timeline: scroll()` |
| `underline` | nav activo/hover | `scale-x` 200 ms |

---

## 4. Interactividad útil (no decorativa)

1. **Pre-diagnóstico en 3 preguntas** (`/diagnostico`): "¿Qué le pasa al carro?" → síntomas con checkboxes → resultado: servicio recomendado + mensaje de WhatsApp prellenado con las respuestas. Sin backend; es el mayor salto de conversión posible.
2. **Comparador antes/después** en galería (§2.4).
3. **Estado abierto/cerrado en tiempo real** (hero, contacto, FAB de WhatsApp con tooltip "Respondemos en horario de atención").
4. **Copiar dirección / abrir en Waze o Google Maps** desde contacto.
5. **Lightbox** de galería con teclado y gestos.

---

## 5. Profesionalismo y confianza

- Sección "Cómo trabajamos" en home con los 5 pasos (ya existen en cada servicio) y el lema como compromiso firmado.
- Insignias verificables: años en el sector, garantía por escrito, vehículos atendidos (solo con datos reales del cliente).
- Fotos del equipo y del banco de prueba real, con pies de foto; evitar stock.
- Página "Garantía" corta con términos claros (qué cubre, por cuánto tiempo). Suma para E-E-A-T y para GEO.
- Casos de trabajo (`/trabajos/[slug]`): antes/después, qué estaba fuera de medida, qué se hizo, tiempo. Contenido único que ningún competidor local tiene.

---

## 6. Accesibilidad y calidad (mantener en cada entrega)

- Contraste AA en todo (ya corregido el rojo de botones); revisar texto gris sobre metal claro (`#4f4f4f` sobre `#e9edf2` ≈ 6.9:1, OK).
- Foco visible consistente: anillo rojo de 2 px con offset, mismo en botones, enlaces y tarjetas interactivas.
- Targets táctiles ≥ 44 px (botones del carrusel y FAB ya cumplen).
- Tests: mantener `astro check`, el verificador de enlaces/JSON-LD del build y Lighthouse móvil ≥ 95 como puerta de salida.

---

## 7. Roadmap sugerido

| Sprint | Entrega | Esfuerzo |
|---|---|---|
| 1 | Tokens + `Card`/`SectionHeading`/`Badge` + `sheen` + header compacto + nav activa | 1 día |
| 2 | Hero (scan-line, chips, estado abierto) + Experiencia con contador + Servicios con nuevas tarjetas | 1 día |
| 3 | Galería mosaico + lightbox + comparador antes/después (necesita fotos del cliente) | 1 día |
| 4 | Blog (progreso, índice, chips) + FAQ animada + Contacto (mapa diferido, copiar) | 0.5 día |
| 5 | Pre-diagnóstico `/diagnostico` + página Garantía + casos `/trabajos` | 1–2 días |

**Dependencias del cliente:** fotos antes/después, foto del equipo, texto de garantía, confirmación de cifras (vehículos atendidos).
