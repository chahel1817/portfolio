'use client';
import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => { },
    isLofi: false,
    muted: true,
    toggleMute: () => { },
});

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');
    const [muted, setMuted] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem('portfolio_theme');
        if (saved === 'lofi') setTheme('lofi');
        const savedMuted = localStorage.getItem('portfolio_muted');
        if (savedMuted === 'true') setMuted(true);
    }, []);

    useEffect(() => {
        if (theme === 'lofi') {
            document.documentElement.setAttribute('data-theme', 'light');
            document.documentElement.classList.add('light-mode');
            if (document.body) {
                document.body.style.backgroundColor = '#f8fafc';
                document.body.style.color = '#1e293b';
            }
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.documentElement.classList.remove('light-mode');
            if (document.body) {
                document.body.style.backgroundColor = '#080810';
                document.body.style.color = '#d6deea';
            }
        }
    }, [theme]);

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
