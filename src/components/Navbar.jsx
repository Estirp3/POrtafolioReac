import React, { useState } from 'react';
import { Menu, X, Globe, Moon, Sun } from 'lucide-react';
import { useTheme, useLang } from '../context/Context';

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

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--color-bg-main)] shadow-md border-b border-[var(--color-card-border)] dark:border-b-2 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
                            Patricio Calderón
                        </span>
                        <span className="hidden sm:block text-muted">|</span>
                        <span className="hidden sm:block text-indigo-500 font-mono">Estirp3</span>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-900 dark:text-slate-200 hover:text-[var(--color-primary)] font-semibold transition-colors text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-white transition-all duration-200 cursor-pointer shadow-sm border border-slate-200 dark:border-slate-600"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button
                            onClick={() => setLang(lang === 'ES' ? 'EN' : 'ES')}
                            className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-white transition-all duration-200 flex items-center gap-2 text-sm font-bold cursor-pointer shadow-sm border border-slate-200 dark:border-slate-600"
                            aria-label="Change language"
                        >
                            <Globe size={16} />
                            {lang}
                        </button>
                    </div>

                    <div className="-mr-2 flex md:hidden gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-white transition-all duration-200 shadow-sm border border-slate-200 dark:border-slate-600"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-900 dark:text-slate-200 hover:bg-[var(--color-card-border)] focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[var(--color-bg-main)] border-b border-[var(--color-card-border)]">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-900 dark:text-slate-200 hover:bg-[var(--color-card-border)] hover:text-[var(--color-primary)] block px-3 py-2 rounded-md text-base font-medium"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setLang(lang === 'ES' ? 'EN' : 'ES');
                                setIsOpen(false);
                            }}
                            className="w-full text-left text-slate-900 dark:text-slate-200 hover:bg-[var(--color-card-border)] block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Cambiar Idioma ({lang})
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
