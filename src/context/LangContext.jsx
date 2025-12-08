import React, { createContext, useState } from 'react';
import { labels } from '../utils/translations';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('ES');

    const t = (key) => labels[lang][key] || key;

    return (
        <LangContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LangContext.Provider>
    );
};
