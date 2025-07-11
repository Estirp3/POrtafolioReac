// src/context/ThemeContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Crear el Contexto
export const ThemeContext = createContext();

// 2. Crear el Proveedor del Contexto
export const ThemeProvider = ({ children }) => {
    // Inicializamos el tema. Intentamos obtenerlo de localStorage primero, 
    // si no existe, usamos 'dark' (asumiendo que es el tema por defecto de tu portafolio).
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'dark'
    );

    // 3. Efecto para manejar localStorage y aplicar el tema al body
    useEffect(() => {
        // Guarda el tema actual en localStorage
        localStorage.setItem('theme', theme);

        // Aplica la clase 'dark-mode' o 'light-mode' al <body> del documento.
        // Esto nos permitirá cambiar los estilos CSS globalmente.
        document.body.className = theme === 'dark' ? 'dark-mode' : 'light-mode';

        // Opcionalmente, puedes aplicar el tema directamente al body si tu CSS global depende de estas clases
        // document.documentElement.setAttribute('data-theme', theme);

    }, [theme]); // El efecto se ejecuta cada vez que 'theme' cambia

    // 4. Función para alternar el tema
    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    // 5. Proveer el estado y la función de alternar a los componentes hijos
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook personalizado para un acceso más limpio
export const useTheme = () => useContext(ThemeContext);