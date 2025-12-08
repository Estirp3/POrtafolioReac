import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-slate-500 text-sm relative z-10">
            <p>© {new Date().getFullYear()} Patricio Calderón (Estirp3). Todos los derechos reservados.</p>
            <p className="mt-1">Hecho con React, Tailwind CSS y mucho café ☕</p>
        </footer>
    );
};

export default Footer;
