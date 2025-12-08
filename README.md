# Portafolio – Fullstack & DevOps

Portafolio moderno para presentar experiencia en backend, frontend y DevOps con un layout tipo bento, soporte de temas claro/oscuro e internacionalización ES/EN.

## Características
- Temas claro/oscuro con transiciones suaves (CSS variables + React Context).
- i18n ES/EN con cambios instantáneos (LangContext).
- Diseño responsive en grid/bento y microinteracciones sutiles.
- Secciones: hero, sobre mí, stack tecnológico, experiencia, proyectos, aprendizajes, hobbies y contacto.
- Iconografía local (sin dependencias externas para tech stack).

## Stack
- React 19 + Vite.
- Tailwind CSS v4.
- Lucide React (iconos).
- ESLint.

## Scripts
```bash
npm install       # instala dependencias
npm run dev       # entorno de desarrollo en http://localhost:5173
npm run build     # build de producción
```

## Estructura
```
src/
  components/      # UI y secciones (Hero, About, Stack, Projects, Contact, etc.)
  context/         # ThemeContext, LangContext
  hooks/           # hooks para consumir contexto
  assets/          # imágenes e iconos locales
  styles/          # estilos globales (Tailwind)
  utils/           # traducciones y utilidades
  App.jsx          # layout principal
  main.jsx         # punto de entrada
```

## Personalización rápida
- Texto: edita `src/utils/translations.js` (ES/EN) y las secciones en `src/components/sections`.
- Iconos tech: `src/assets/iconos`.
- Imagen de perfil: `src/assets/img/prc.png`.
- Favicon: `public/portafolio-pc-logo.svg`.

## Contacto
Si quieres colaborar o sugerir mejoras, abre un issue o contáctame por email/linkedin (ver sección Contact en la app).

## Licencia
MIT.
