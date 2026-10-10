import React, { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useTheme, useLang } from '../../hooks';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { lang, setLang, t } = useLang();

    const navLinks = [
        { name: t('about'), href: '#about' },
        { name: t('stack'), href: '#stack' },
        { name: t('projects'), href: '#projects' },
        { name: t('exp'), href: '#experience' },
        { name: t('contact'), href: '#contact' },
    ];

    const baseBtn = 'rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-center';
    const desktopIconBtn =
        `${baseBtn} p-2.5 ${theme === 'dark'
            ? 'bg-slate-900 text-indigo-300 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
            : 'bg-white text-indigo-700 border-slate-200 hover:bg-slate-50 shadow-xs'}`;
    const desktopLangBtn =
        `${baseBtn} px-3 py-2 gap-1.5 text-xs font-mono font-bold ${theme === 'dark'
            ? 'bg-slate-900 text-indigo-300 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
            : 'bg-white text-indigo-700 border-slate-200 hover:bg-slate-50 shadow-xs'}`;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 dark:bg-[#07090e]/90 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Brand Logo & Handle */}
                    <a href="#" className="flex items-center gap-2.5 no-underline group">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold font-display shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                            PC
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold font-display leading-tight text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                Patricio Calderón
                            </span>
                            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                                @Estirp3 • Fullstack & AI
                            </span>
                        </div>
                    </a>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-white dark:hover:bg-slate-800 transition-all duration-200 no-underline shadow-xs"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Utility Buttons: Theme & Lang */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className={desktopIconBtn}
                            aria-label="Toggle theme"
                            title="Cambiar tema claro/oscuro"
                        >
                            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                        </button>

                        <button
                            onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
                            className={desktopLangBtn}
                            aria-label="Change language"
                            title="Switch language ES / EN"
                        >
                            <Globe size={14} />
                            <span>{lang}</span>
                        </button>
                    </div>

                    {/* Mobile Hamburger & Theme Toggle */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className={desktopIconBtn}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer"
                            aria-label="Abrir menú"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-5 space-y-2 shadow-2xl animate-slide-up">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 no-underline transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-600 dark:text-slate-400">Idioma:</span>
                        <button
                            onClick={() => {
                                setLang(lang === 'ES' ? 'EN' : 'ES');
                                setIsOpen(false);
                            }}
                            className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-indigo-600 text-white flex items-center gap-1.5 cursor-pointer"
                        >
                            <Globe size={14} />
                            <span>{lang === 'ES' ? 'Cambiar a English' : 'Cambiar a Español'}</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
