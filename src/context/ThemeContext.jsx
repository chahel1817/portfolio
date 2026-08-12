'use client';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => { },
    isLofi: false,
    muted: false,
    toggleMute: () => { },
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    const [muted, setMuted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('portfolio_theme');
        if (saved === 'lofi') setTheme('lofi');
        const savedMuted = localStorage.getItem('portfolio_muted');
        if (savedMuted === 'true') setMuted(true);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            const next = prev === 'dark' ? 'lofi' : 'dark';
            localStorage.setItem('portfolio_theme', next);
            return next;
        });
    }, []);

    const toggleMute = useCallback(() => {
        setMuted((prev) => {
            const next = !prev;
            localStorage.setItem('portfolio_muted', String(next));
            return next;
        });
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isLofi: theme === 'lofi', muted, toggleMute }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
