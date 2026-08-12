'use client';
import { useEffect, useRef } from 'react';

const ALERT_TITLE = '🦇 Gotham needs you back...';

/** Flips the browser tab title when the user looks away — a small "come back" hook. */
export default function TabAttention() {
    const originalTitle = useRef(null);

    useEffect(() => {
        originalTitle.current = document.title;
        const onVisibility = () => {
            document.title = document.hidden ? ALERT_TITLE : originalTitle.current;
        };
        document.addEventListener('visibilitychange', onVisibility);
        return () => {
            document.removeEventListener('visibilitychange', onVisibility);
            document.title = originalTitle.current;
        };
    }, []);

    return null;
}
