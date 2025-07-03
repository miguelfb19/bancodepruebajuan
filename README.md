# Documentación del Proyecto

## 🚀 Descripción
Este proyecto es un sitio web moderno construido con Astro, React y TypeScript. El sitio web está diseñado para un taller mecánico/automotriz, incluyendo información sobre servicios, blog, galería de imágenes y formulario de contacto.

## 🛠️ Tecnologías Utilizadas
- **Astro** (v5.10.0) - Framework principal
- **React** (v19.1.0) - Para componentes interactivos
- **TypeScript** - Para tipado estático
- **TailwindCSS** (v4.1.10) - Para estilos
- **Shoelace** - Para componentes de UI
- **Marked** - Para procesamiento de markdown

## 📁 Estructura del Proyecto

### Directorios Principales
```
├── src/                  # Código fuente principal
│   ├── assets/          # Iconos y assets
│   ├── components/      # Componentes reutilizables
│   ├── constants/       # Datos constantes y contenido
│   ├── interfaces/      # Interfaces TypeScript
│   ├── layouts/         # Layouts de páginas
│   ├── pages/          # Páginas del sitio
│   ├── scripts/        # Scripts JavaScript
│   ├── styles/         # Estilos globales
│   └── utils/          # Utilidades
├── public/              # Archivos estáticos
│   ├── images/         # Imágenes del sitio
│   └── robots.txt      # Configuración SEO
```

### Componentes Principales
- `Hero.astro` - Sección principal de la página
- `Services.astro` - Listado de servicios
- `Blog.astro` - Sección de blog
- `FAQ.astro` - Preguntas frecuentes
- `Footer.astro` - Pie de página
- `TopMenu.tsx` - Menú de navegación
- `MobileMenu.tsx` - Menú móvil

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd bancodepruebajuan
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
npm run dev
```

4. **Construir para producción**
```bash
npm run build
```

5. **Previsualizar la build**
```bash
npm run preview
```

## 📝 Scripts Disponibles
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run astro` - Ejecuta comandos de Astro CLI

## 📚 Características Principales
1. **Diseño Responsivo**
   - Adaptable a móviles, tablets y escritorio
   - Menú responsive con versión móvil

2. **Optimización de Imágenes**
   - Uso de formato AVIF para mejor rendimiento
   - Imágenes optimizadas para diferentes dispositivos

3. **SEO**
   - Implementación de sitemap
   - Metadatos optimizados
   - robots.txt configurado
   - Verificación de Google Search Console

4. **Contenido**
   - Blog con artículos en Markdown
   - Sección de servicios
   - Galería de imágenes
   - Formulario de contacto
   - Mapa de ubicación
   - Sección de clientes
   - FAQ

## 🗂️ Organización del Contenido

### Blog
Los artículos del blog se encuentran en `src/constants/articles-content/` en formato Markdown.

### Servicios
La información de los servicios se gestiona en `src/constants/services.ts`

### Contacto
La información de contacto se mantiene en `src/constants/contact-info.ts`

## 🔧 Mantenimiento

### Añadir un Nuevo Artículo al Blog
1. Crear el archivo Markdown en `src/constants/articles-content/`
2. Añadir la imagen correspondiente en `public/images/blog/`
3. Actualizar el listado en `src/constants/articles.ts`

### Añadir un Nuevo Servicio
1. Añadir la información en `src/constants/services.ts`
2. Incluir la imagen correspondiente en `public/images/services/`

## 📱 Optimización para Dispositivos
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 📫 Contacto
Para dudas o sugerencias sobre el proyecto, por favor crear un issue en el repositorio.