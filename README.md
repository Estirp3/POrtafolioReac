# 👨‍💻 Portfolio Professional - Fullstack & DevOps

Un portafolio moderno, interactivo y altamente optimizado construido con las últimas tecnologías web. Diseñado para mostrar experiencia en desarrollo Fullstack, arquitectura de software y DevOps utilizando una interfaz tipo "Bento Grid".

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Características Principales

Este proyecto no es solo una landing page estática; incluye funcionalidades avanzadas y una arquitectura limpia:

- **🎨 Sistema de Temas Dinámico**:
  - Soporte completo para **Modo Oscuro (Dark)** y **Modo Claro (Light)**.
  - Implementación mediante variables CSS nativas y React Context.
  - Persistencia de preferencias (estado inicial).
  - Transiciones suaves de color (`duration-500`).

- **🌍 Internacionalización (i18n)**:
  - Soporte bilingüe: **Español (ES)** e **Inglés (EN)**.
  - Cambio de idioma instantáneo a través de `LangContext`.
  - Diccionario de traducciones centralizado para fácil mantenimiento.

- **🍱 Diseño Bento Grid**:
  - Layout moderno basado en grillas CSS (Grid).
  - Cards responsivas que se adaptan de móvil a escritorio.
  - Optimización del espacio para mostrar información jerarquizada.

- **⚡ Performance & UX**:
  - Construido sobre **Vite** para tiempos de carga instantáneos.
  - Animaciones sutiles y efectos de glassmorphism.
  - Fondo dinámico con efectos de "ruido" y gradientes animados.
  - Navegación fluida entre secciones.

## 🛠️ Stack Tecnológico

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Estilos**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Linter**: ESLint

## 📂 Estructura del Proyecto

La arquitectura está modularizada para facilitar la escalabilidad:

```
src/
├── components/       # Componentes de UI (Secciones del portafolio)
│   ├── Hero.jsx      # Sección principal de presentación
│   ├── About.jsx     # Sobre mí
│   ├── Experience.jsx# Timeline de experiencia laboral
│   ├── Projects.jsx  # Galería de proyectos destacados
│   ├── Stack.jsx     # Grid de tecnologías
│   ├── Navbar.jsx    # Navegación y controles de Tema/Idioma
│   └── ...           # Otros componentes (Contact, Footer, etc.)
├── context/
│   └── Context.jsx   # Lógica global de Estado (Theme & Language)
├── App.jsx           # Layout principal y composición de Providers
├── main.jsx          # Punto de entrada de la aplicación
└── index.css         # Configuración de Tailwind y Variables CSS
```

## 🚀 Instalación y Uso

Sigue estos pasos para correr el proyecto localmente:

1.  **Clonar el repositorio**:
    ```bash
    git clone <tu-repositorio-url>
    cd POrtafolioReac
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Correr servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

4.  **Construir para producción**:
    ```bash
    npm run build
    ```

## 📝 Historial de Cambios Recientes

### Refactorización de Arquitectura (Context API)
- Se movieron los proveedores de contexto (`ThemeProvider`, `LangProvider`) desde `main.jsx` hacia `App.jsx`.
- **Motivo**: Mejorar la encapsulación y permitir que `App` controle el estado global de manera más directa, facilitando pruebas y el manejo de estilos globales que dependen del tema desde el componente raíz.

### Mejoras de UI/UX
- Implementación de **Tailwind CSS v4** para un styling más eficiente.
- Ajuste de contrastes en la Navbar para asegurar legibilidad en ambos temas.
- Añadidos efectos de fondo (background noise & glowing orbs) para dar profundidad visual.

---
Hecho con ❤️ por [Tu Nombre]
