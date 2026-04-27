(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const C = '#f5c518';
const CC = '#00f5ff';
const LINKS = [
    {
        href: '#hero',
        label: 'Home'
    },
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#skills',
        label: 'Skills'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#experience',
        label: 'Education'
    },
    {
        href: '#interests',
        label: 'Interests'
    },
    {
        href: '#contact',
        label: 'Contact'
    }
];
function scrollTo(id) {
    document.querySelector(id)?.scrollIntoView({
        behavior: 'smooth'
    });
}
function Navbar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('hero');
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { theme, toggleTheme, isLofi } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const observerOptions = {
                root: null,
                rootMargin: '-40% 0px -40% 0px',
                threshold: 0
            };
            const observerCallback = {
                "Navbar.useEffect.observerCallback": (entries)=>{
                    entries.forEach({
                        "Navbar.useEffect.observerCallback": (entry)=>{
                            if (entry.isIntersecting) {
                                setActive(entry.target.id);
                            }
                        }
                    }["Navbar.useEffect.observerCallback"]);
                }
            }["Navbar.useEffect.observerCallback"];
            const observer = new IntersectionObserver(observerCallback, observerOptions);
            LINKS.forEach({
                "Navbar.useEffect": (link)=>{
                    const el = document.getElementById(link.href.slice(1));
                    if (el) observer.observe(el);
                }
            }["Navbar.useEffect"]);
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>{
                    setScrolled(window.scrollY > 50);
                }
            }["Navbar.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>{
                    observer.disconnect();
                    window.removeEventListener('scroll', onScroll);
                }
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    y: -100,
                    x: '-50%',
                    opacity: 0
                },
                animate: {
                    y: 0,
                    x: '-50%',
                    opacity: 1
                },
                transition: {
                    duration: 0.8,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ],
                    delay: 0.2
                },
                style: {
                    position: 'fixed',
                    top: 24,
                    left: '50%',
                    zIndex: 100,
                    width: 'fit-content',
                    pointerEvents: 'auto'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    style: {
                        padding: '12px 14px',
                        background: 'rgba(13,13,26,0.65)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                    },
                    className: "nav-pill",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingLeft: 4,
                                paddingRight: 6,
                                marginRight: 4,
                                borderRight: '1px solid rgba(255,255,255,0.1)'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 30,
                                    height: 30,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: `1px solid ${C}40`,
                                    boxShadow: `0 0 15px ${C}30`,
                                    background: '#0d0d1a',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/favicon.ico",
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    },
                                    alt: "Logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 104,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        LINKS.map((l)=>{
                            const isActive = active === l.href.slice(1);
                            const isHov = hovered === l.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                suppressHydrationWarning: true,
                                onClick: ()=>scrollTo(l.href),
                                onMouseEnter: ()=>setHovered(l.href),
                                onMouseLeave: ()=>setHovered(null),
                                whileHover: {
                                    scale: 1.05,
                                    y: -1
                                },
                                whileTap: {
                                    scale: 0.96
                                },
                                style: {
                                    background: isActive ? 'rgba(245,197,24,0.12)' : 'transparent',
                                    border: 'none',
                                    borderRadius: '100px',
                                    padding: '10px 24px',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "f-rajdhani",
                                        style: {
                                            fontSize: 14.5,
                                            fontWeight: 700,
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                            color: isActive ? C : isHov ? '#fff' : 'rgba(255,255,255,0.5)',
                                            transition: 'color 0.4s',
                                            display: 'block',
                                            zIndex: 2,
                                            position: 'relative'
                                        },
                                        children: l.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 130,
                                        columnNumber: 33
                                    }, this),
                                    isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        layoutId: "nav-glow",
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            borderRadius: '100px',
                                            border: `1px solid ${C}50`,
                                            boxShadow: `0 0 15px ${C}30`,
                                            background: `linear-gradient(180deg, ${C}05, ${C}10)`,
                                            zIndex: 1
                                        },
                                        transition: {
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 144,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, l.href, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 112,
                                columnNumber: 29
                            }, this);
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderLeft: '1px solid rgba(255,255,255,0.1)',
                                paddingLeft: 8,
                                marginLeft: 4
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                onClick: toggleTheme,
                                whileHover: {
                                    scale: 1.15,
                                    rotate: 15
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                title: isLofi ? 'Switch to Dark Mode' : 'Switch to Lofi Mode',
                                style: {
                                    background: isLofi ? 'rgba(255, 180, 100, 0.15)' : 'rgba(0, 245, 255, 0.08)',
                                    border: isLofi ? '1px solid rgba(255, 180, 100, 0.4)' : '1px solid rgba(0, 245, 255, 0.2)',
                                    borderRadius: '50%',
                                    width: 32,
                                    height: 32,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: isLofi ? '#ffb060' : CC,
                                    transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                                    boxShadow: isLofi ? '0 0 14px rgba(255, 180, 100, 0.35)' : `0 0 10px rgba(0, 245, 255, 0.2)`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                                    mode: "wait",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            scale: 0,
                                            rotate: -90,
                                            opacity: 0
                                        },
                                        animate: {
                                            scale: 1,
                                            rotate: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            scale: 0,
                                            rotate: 90,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.25
                                        },
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: isLofi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiSun, {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 193,
                                            columnNumber: 47
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiMoon, {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 193,
                                            columnNumber: 69
                                        }, this)
                                    }, theme, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 185,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 184,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 164,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 163,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 79,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    y: -50,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                className: "nav-mobile-bar",
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 101,
                    height: 80,
                    padding: '0 24px',
                    display: 'none',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: menu ? 'transparent' : scrolled ? 'rgba(8,8,16,0.85)' : 'transparent',
                    backdropFilter: menu || !scrolled ? 'none' : 'blur(16px)',
                    borderBottom: menu ? 'none' : scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    transition: 'all 0.4s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "f-orbitron",
                        style: {
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    border: `1px solid ${C}40`,
                                    background: '#0d0d1a',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/favicon.ico",
                                    style: {
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain'
                                    },
                                    alt: "Logo"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 223,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C
                                        },
                                        children: "CHAHEL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 226,
                                        columnNumber: 25
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#fff',
                                            marginLeft: 4
                                        },
                                        children: "TANNA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 226,
                                        columnNumber: 66
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 225,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: 10
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                onClick: toggleTheme,
                                whileTap: {
                                    scale: 0.85
                                },
                                title: isLofi ? 'Switch to Dark Mode' : 'Switch to Lofi Mode',
                                style: {
                                    background: isLofi ? 'rgba(255, 180, 100, 0.12)' : 'rgba(0, 245, 255, 0.08)',
                                    border: isLofi ? '1px solid rgba(255, 180, 100, 0.35)' : '1px solid rgba(0, 245, 255, 0.2)',
                                    borderRadius: '50%',
                                    width: 38,
                                    height: 38,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: isLofi ? '#ffb060' : CC,
                                    transition: 'all 0.4s ease',
                                    boxShadow: isLofi ? '0 0 12px rgba(255, 180, 100, 0.3)' : `0 0 10px rgba(0, 245, 255, 0.2)`,
                                    padding: 0
                                },
                                children: isLofi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiSun, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 251,
                                    columnNumber: 35
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiMoon, {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 251,
                                    columnNumber: 57
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 231,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                suppressHydrationWarning: true,
                                onClick: ()=>setMenu(!menu),
                                style: {
                                    background: menu ? 'rgba(245,197,24,0.1)' : 'none',
                                    border: menu ? `1px solid ${C}50` : 'none',
                                    color: C,
                                    cursor: 'pointer',
                                    width: 44,
                                    height: 44,
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    boxShadow: menu ? `0 0 20px ${C}40` : 'none',
                                    padding: 0
                                },
                                children: menu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiX, {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 273,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiMenu, {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 273,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.jsx",
                        lineNumber: 229,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 202,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                children: menu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    initial: {
                        opacity: 0,
                        backdropFilter: 'blur(0px)'
                    },
                    animate: {
                        opacity: 1,
                        backdropFilter: 'blur(24px)'
                    },
                    exit: {
                        opacity: 0,
                        backdropFilter: 'blur(0px)'
                    },
                    style: {
                        position: 'fixed',
                        inset: 0,
                        zIndex: 99,
                        background: 'rgba(6,6,12,0.9)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 32
                    },
                    children: [
                        LINKS.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: i * 0.05
                                },
                                onClick: ()=>{
                                    scrollTo(l.href);
                                    setMenu(false);
                                },
                                style: {
                                    background: 'none',
                                    border: 'none'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "f-orbitron",
                                    style: {
                                        fontSize: 28,
                                        fontWeight: 900,
                                        letterSpacing: '0.05em',
                                        color: active === l.href.slice(1) ? C : '#fff',
                                        textTransform: 'uppercase'
                                    },
                                    children: l.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 299,
                                    columnNumber: 33
                                }, this)
                            }, l.href, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 291,
                                columnNumber: 29
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                            href: "https://drive.google.com/drive/u/0/folders/1ZHoSMw8iKHs5zo_PTQy6CJOM3sffOdJq",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                delay: LINKS.length * 0.05
                            },
                            style: {
                                marginTop: 24,
                                padding: '12px 36px',
                                borderRadius: '100px',
                                background: 'transparent',
                                border: `1px solid ${C}`,
                                color: C,
                                fontFamily: "'Orbitron', sans-serif",
                                fontWeight: 700,
                                fontSize: 13,
                                textDecoration: 'none',
                                letterSpacing: '0.1em'
                            },
                            children: "RESUME"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 306,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 280,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 278,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @media (max-width: 900px) {
                  .nav-pill { display: none !important; }
                  .nav-mobile-bar { display: flex !important; }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 326,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "UY051W58WW/FnaX9Dn1+2XKgs1g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/si'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const C = '#f5c518';
const CC = '#00f5ff';
const DARK = '#080810';
const social = [
    {
        icon: FiGithub,
        href: 'https://github.com/chahel1817',
        label: 'GitHub',
        glow: '0 0 12px rgba(255,255,255,0.6)',
        hColor: '#ffffff'
    },
    {
        icon: FiLinkedin,
        href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/',
        label: 'LinkedIn',
        glow: `0 0 12px rgba(0,245,255,0.7)`,
        hColor: CC
    },
    {
        icon: FiMail,
        href: 'mailto:chahel1817@gmail.com',
        label: 'Email',
        glow: `0 0 12px rgba(245,197,24,0.7)`,
        hColor: C
    },
    {
        icon: FiTwitter,
        href: 'https://x.com/chahel1817',
        label: 'X',
        glow: `0 0 12px rgba(0,245,255,0.7)`,
        hColor: CC
    },
    {
        icon: FiInstagram,
        href: 'https://www.instagram.com//',
        label: 'Instagram',
        glow: `0 0 12px rgba(225,48,108,0.7)`,
        hColor: '#e1306c'
    },
    {
        icon: FiYoutube,
        href: 'https://www.youtube.com/@Chahel-1817',
        label: 'YouTube',
        glow: `0 0 12px rgba(255,0,0,0.7)`,
        hColor: '#ff0000'
    },
    {
        icon: SiLeetcode,
        href: 'https://leetcode.com/u/Chahel/',
        label: 'LeetCode',
        glow: `0 0 12px rgba(245,159,11,0.7)`,
        hColor: '#f59e0b'
    }
];
function FlavorText() {
    _s();
    const { isLofi } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            y: 12
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            delay: 1.8,
            duration: 0.5
        },
        style: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: -35,
            paddingBottom: 20
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "f-rajdhani",
            style: {
                fontSize: 17,
                fontWeight: 600,
                color: isLofi ? '#5a6a7a' : '#cbd5e1',
                letterSpacing: '0.08em',
                fontStyle: 'italic',
                background: isLofi ? 'rgba(255,255,255,0.45)' : 'rgba(13, 13, 26, 0.5)',
                padding: '10px 24px',
                borderRadius: '30px',
                border: isLofi ? '1px solid rgba(245,197,24,0.25)' : '1px solid rgba(0, 245, 255, 0.15)',
                boxShadow: isLofi ? '0 4px 20px rgba(0,0,0,0.08), inset 0 0 10px rgba(255,220,150,0.08)' : '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 0 12px rgba(0, 245, 255, 0.05)',
                backdropFilter: 'blur(8px)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.6s ease'
            },
            children: isLofi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "☀️ Enjoying the sunshine? The code runs smoother in ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#e89020',
                            fontWeight: 700
                        },
                        children: "golden hour."
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.jsx",
                        lineNumber: 54,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    "Don't mind the bats. They're just here to ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: '#00f5ff',
                            textShadow: '0 0 12px rgba(0,245,255,0.7)',
                            fontWeight: 700
                        },
                        children: "hunt down the bugs."
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.jsx",
                        lineNumber: 56,
                        columnNumber: 75
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/components/HeroSection.jsx",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/HeroSection.jsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_s(FlavorText, "AJ2OpCTVeibC4e+3K9cU170M3b8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = FlavorText;
function useTypewriter(text, speed = 55, delay = 600) {
    _s1();
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypewriter.useEffect": ()=>{
            let i = 0;
            const timer = setTimeout({
                "useTypewriter.useEffect.timer": ()=>{
                    const id = setInterval({
                        "useTypewriter.useEffect.timer.id": ()=>{
                            setDisplayed(text.slice(0, i + 1));
                            i++;
                            if (i === text.length) {
                                clearInterval(id);
                                setDone(true);
                            }
                        }
                    }["useTypewriter.useEffect.timer.id"], speed);
                    return ({
                        "useTypewriter.useEffect.timer": ()=>clearInterval(id)
                    })["useTypewriter.useEffect.timer"];
                }
            }["useTypewriter.useEffect.timer"], delay);
            return ({
                "useTypewriter.useEffect": ()=>clearTimeout(timer)
            })["useTypewriter.useEffect"];
        }
    }["useTypewriter.useEffect"], [
        text,
        speed,
        delay
    ]);
    return {
        displayed,
        done
    };
}
_s1(useTypewriter, "v74xTyxwieSyLkksThP7ZSOQ6/U=");
function MouseGlow() {
    _s2();
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -999,
        y: -999
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MouseGlow.useEffect": ()=>{
            const h = {
                "MouseGlow.useEffect.h": (e)=>setPos({
                        x: e.clientX,
                        y: e.clientY
                    })
            }["MouseGlow.useEffect.h"];
            window.addEventListener('mousemove', h);
            return ({
                "MouseGlow.useEffect": ()=>window.removeEventListener('mousemove', h)
            })["MouseGlow.useEffect"];
        }
    }["MouseGlow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background: `
                    radial-gradient(180px circle at ${pos.x}px ${pos.y}px, rgba(245,197,24,0.14), transparent 70%),
                    radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(245,197,24,0.07), transparent 65%)
                `,
            transition: 'background 0.05s'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/HeroSection.jsx",
        lineNumber: 89,
        columnNumber: 9
    }, this);
}
_s2(MouseGlow, "9qxrvOpJdhcaHRoDW17Cr1wn/ok=");
_c1 = MouseGlow;
function Grain() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
            opacity: 0.02,
            mixBlendMode: 'overlay'
        }
    }, void 0, false, {
        fileName: "[project]/src/components/HeroSection.jsx",
        lineNumber: 104,
        columnNumber: 9
    }, this);
}
_c2 = Grain;
const stagger = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.4
        }
    }
};
const item = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 75,
            damping: 17
        }
    }
};
function HeroSection() {
    _s3();
    const controls = useAnimation();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref, {
        once: true
    });
    const { displayed, done } = useTypewriter('> READY TO BUILD', 50, 700);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            if (inView) controls.start('visible');
        }
    }["HeroSection.useEffect"], [
        inView,
        controls
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        style: {
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(160deg, rgba(6,6,8,0.38) 0%, rgba(10,10,20,0.44) 50%, rgba(13,14,34,0.5) 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MouseGlow, {}, void 0, false, {
                fileName: "[project]/src/components/HeroSection.jsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grain, {}, void 0, false, {
                fileName: "[project]/src/components/HeroSection.jsx",
                lineNumber: 135,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                animate: {
                    opacity: [
                        0.7,
                        1,
                        0.7
                    ],
                    scale: [
                        1,
                        1.06,
                        1
                    ]
                },
                transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut'
                },
                style: {
                    position: 'absolute',
                    top: '38%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 640,
                    height: 380,
                    background: 'radial-gradient(circle at center, rgba(255,208,0,0.065), transparent 62%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.jsx",
                lineNumber: 137,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(90deg, rgba(6,6,10,0.32) 0%, transparent 28%, transparent 72%, rgba(6,6,10,0.32) 100%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.jsx",
                lineNumber: 142,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '35%',
                    background: 'linear-gradient(180deg, rgba(6,6,10,0.24) 0%, transparent 100%)',
                    pointerEvents: 'none',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.jsx",
                lineNumber: 143,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    right: '8%',
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, rgba(0,245,255,0.035), transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.jsx",
                lineNumber: 144,
                columnNumber: 13
            }, this),
            [
                10,
                30,
                70,
                90
            ].map((pct, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                    animate: {
                        opacity: [
                            0,
                            0.4,
                            0
                        ]
                    },
                    transition: {
                        duration: 5 + i,
                        repeat: Infinity,
                        delay: i * 0.9
                    },
                    style: {
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        width: 1,
                        left: `${pct}%`,
                        background: 'linear-gradient(180deg, transparent, rgba(245,197,24,0.04), transparent)',
                        pointerEvents: 'none',
                        zIndex: 1
                    }
                }, i, false, {
                    fileName: "[project]/src/components/HeroSection.jsx",
                    lineNumber: 147,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                ref: ref,
                variants: stagger,
                initial: "hidden",
                animate: controls,
                style: {
                    position: 'relative',
                    zIndex: 3,
                    textAlign: 'center',
                    padding: '130px 24px 100px',
                    maxWidth: 940,
                    margin: '0 auto',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        variants: item,
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 16,
                            marginBottom: 32
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 1,
                                    width: 64,
                                    background: 'linear-gradient(90deg, transparent, #f5c518)',
                                    boxShadow: '0 0 6px #f5c518'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 162,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "f-mono",
                                style: {
                                    color: '#f5c518',
                                    fontSize: 11,
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase'
                                },
                                children: [
                                    displayed,
                                    !done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            animation: 'blink 0.9s step-end infinite',
                                            borderRight: '1.5px solid #f5c518',
                                            marginLeft: 2,
                                            paddingRight: 2
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HeroSection.jsx",
                                        lineNumber: 165,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 163,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    height: 1,
                                    width: 64,
                                    background: 'linear-gradient(90deg, #f5c518, transparent)',
                                    boxShadow: '0 0 6px #f5c518'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 167,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSection.jsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        variants: item,
                        style: {
                            marginBottom: 24,
                            position: 'relative'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "f-orbitron",
                            style: {
                                fontWeight: 900,
                                position: 'relative',
                                zIndex: 2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                    initial: {
                                        opacity: 0,
                                        letterSpacing: '0.8em'
                                    },
                                    animate: {
                                        opacity: 1,
                                        letterSpacing: '0.65em'
                                    },
                                    transition: {
                                        duration: 1.2,
                                        delay: 0.8,
                                        ease: 'easeOut'
                                    },
                                    style: {
                                        display: 'block',
                                        color: 'rgba(255,255,255,0.5)',
                                        fontSize: 'clamp(13px,1.8vw,20px)',
                                        fontWeight: 400,
                                        marginBottom: 10,
                                        fontFamily: "'Rajdhani', sans-serif",
                                        letterSpacing: '0.65em'
                                    },
                                    children: "HELLO, I AM"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.jsx",
                                    lineNumber: 172,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                    className: "glitch-title",
                                    "data-text": "CHAHEL TANNA",
                                    children: "CHAHEL TANNA"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.jsx",
                                    lineNumber: 180,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HeroSection.jsx",
                            lineNumber: 171,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.jsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        variants: item,
                        style: {
                            marginBottom: 44
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 16,
                                    flexWrap: 'wrap',
                                    marginBottom: 18
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "f-rajdhani",
                                    style: {
                                        color: CC,
                                        fontSize: 'clamp(15px,2.4vw,22px)',
                                        fontWeight: 700,
                                        letterSpacing: '0.12em',
                                        textShadow: '0 0 14px rgba(0,245,255,0.45)'
                                    },
                                    children: "FULL STACK DEVELOPER"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.jsx",
                                    lineNumber: 186,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 185,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-rajdhani",
                                style: {
                                    color: '#a8b4c7',
                                    fontSize: 18,
                                    lineHeight: 1.78,
                                    maxWidth: 700,
                                    margin: '0 auto'
                                },
                                children: "I build fast, scalable, and user-friendly web applications. From backend APIs to frontend interfaces, I focus on clean architecture and great user experience."
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 190,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSection.jsx",
                        lineNumber: 184,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        variants: item,
                        style: {
                            display: 'flex',
                            gap: 16,
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: 52
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                whileHover: {
                                    y: -4,
                                    boxShadow: '0 0 22px rgba(245,197,24,0.75), 0 8px 24px rgba(0,0,0,0.5)'
                                },
                                whileTap: {
                                    scale: 0.96,
                                    y: 0
                                },
                                onClick: ()=>document.querySelector('#projects')?.scrollIntoView({
                                        behavior: 'smooth'
                                    }),
                                style: {
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    background: C,
                                    color: DARK,
                                    padding: '15px 34px',
                                    borderRadius: 2,
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'box-shadow 0.25s, transform 0.25s'
                                },
                                children: "View My Work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 197,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                href: "https://drive.google.com/drive/u/0/folders/1ZHoSMw8iKHs5zo_PTQy6CJOM3sffOdJq",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: {
                                    y: -4,
                                    boxShadow: '0 0 22px rgba(255,255,255,0.3), 0 8px 24px rgba(0,0,0,0.5)',
                                    background: 'rgba(255,255,255,0.1)'
                                },
                                whileTap: {
                                    scale: 0.96,
                                    y: 0
                                },
                                style: {
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    background: 'transparent',
                                    color: '#fff',
                                    padding: '15px 34px',
                                    borderRadius: 2,
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: "Resume"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 205,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                whileHover: {
                                    y: -4,
                                    boxShadow: '0 0 18px rgba(0,245,255,0.45), 0 8px 24px rgba(0,0,0,0.5)',
                                    background: 'rgba(0,245,255,0.07)'
                                },
                                whileTap: {
                                    scale: 0.96,
                                    y: 0
                                },
                                onClick: ()=>document.querySelector('#contact')?.scrollIntoView({
                                        behavior: 'smooth'
                                    }),
                                style: {
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    background: 'transparent',
                                    color: CC,
                                    padding: '15px 34px',
                                    borderRadius: 2,
                                    border: '1px solid rgba(0,245,255,0.45)',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s'
                                },
                                children: "Contact Me"
                            }, void 0, false, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 215,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HeroSection.jsx",
                        lineNumber: 196,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        variants: item,
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 24,
                            marginBottom: 72
                        },
                        children: social.map(({ icon: Icon, href, label, glow, hColor })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                href: href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": label,
                                whileHover: {
                                    y: -7,
                                    scale: 1.35,
                                    color: hColor,
                                    filter: `drop-shadow(${glow}) drop-shadow(0 0 8px ${hColor}60)`
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                style: {
                                    color: '#9aa8bf',
                                    transition: 'color 0.2s'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HeroSection.jsx",
                                    lineNumber: 237,
                                    columnNumber: 29
                                }, this)
                            }, label, false, {
                                fileName: "[project]/src/components/HeroSection.jsx",
                                lineNumber: 227,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.jsx",
                        lineNumber: 225,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FlavorText, {}, void 0, false, {
                        fileName: "[project]/src/components/HeroSection.jsx",
                        lineNumber: 243,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HeroSection.jsx",
                lineNumber: 154,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @keyframes blink {
                  0%, 100% { opacity: 1; }
                  50% { opacity: 0; }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/HeroSection.jsx",
                lineNumber: 246,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HeroSection.jsx",
        lineNumber: 133,
        columnNumber: 9
    }, this);
}
_s3(HeroSection, "PIlmAiz7pipp6BzjdG3f7lXsQpo=", false, function() {
    return [
        useAnimation,
        useInView,
        useTypewriter
    ];
});
_c3 = HeroSection;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "FlavorText");
__turbopack_context__.k.register(_c1, "MouseGlow");
__turbopack_context__.k.register(_c2, "Grain");
__turbopack_context__.k.register(_c3, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/AboutSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const C = '#f5c518';
const CC = '#00f5ff';
const stats = [
    {
        value: '100%',
        label: 'Data Integrity',
        code: 'ACID',
        color: C
    },
    {
        value: '5',
        label: 'Projects Shipped',
        code: 'PRJ',
        color: CC
    },
    {
        value: '15+',
        label: 'APIs Designed',
        code: 'API',
        color: '#a855f7'
    },
    {
        value: '10+',
        label: 'Technologies Mastered',
        code: 'STK',
        color: '#4ade80'
    }
];
const principles = [
    {
        icon: FiZap,
        color: C,
        title: 'Performance-First',
        desc: 'Optimized backend workflows and efficient data handling for scalable, high-throughput systems.'
    },
    {
        icon: FiCpu,
        color: CC,
        title: 'Data Engineering',
        desc: 'Mastered high-level SQL and currently advancing Python proficiency to architect robust, scalable data systems.'
    },
    {
        icon: FiZap,
        color: '#a855f7',
        title: 'DevOps & Deployment Pipelines',
        desc: 'Designing automated CI/CD workflows, containerized deployments, and scalable infrastructure for reliable, production-grade applications'
    },
    {
        icon: FiCode,
        color: '#4ade80',
        title: 'AI Integration & Automation',
        desc: 'Building intelligent features by integrating AI APIs, automating workflows, and enhancing applications with smart, data-driven capabilities'
    }
];
const signals = [
    {
        icon: FiAward,
        label: 'Deployed on Vercel & Render',
        color: C
    },
    {
        icon: FiCpu,
        label: 'AI-Powered Interview Simulation Platform',
        color: CC
    },
    {
        icon: FiCode,
        label: 'End-to-end MERN apps in production',
        color: '#a855f7'
    }
];
function AboutSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref, {
        once: true,
        margin: '-80px'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        style: {
            position: 'relative',
            padding: '120px 0',
            background: 'rgba(13,13,26,0.46)',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-bg",
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.jsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: -80,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 700,
                    height: 420,
                    background: 'radial-gradient(ellipse, rgba(245,197,24,0.045), transparent 68%)',
                    pointerEvents: 'none',
                    borderRadius: '50%'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/AboutSection.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '0 24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 72
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sec-label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "f-mono",
                                    style: {
                                        color: 'rgba(245,197,24,0.5)',
                                        fontSize: 11,
                                        letterSpacing: '0.28em'
                                    },
                                    children: "01 // PROFILE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/AboutSection.jsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutSection.jsx",
                                lineNumber: 44,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "f-orbitron",
                                style: {
                                    fontSize: 'clamp(32px,5vw,54px)',
                                    fontWeight: 900,
                                    color: '#fff',
                                    lineHeight: 1.1
                                },
                                children: [
                                    "ABOUT ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C,
                                            textShadow: '0 0 20px rgba(245,197,24,0.55)'
                                        },
                                        children: "ME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.jsx",
                                        lineNumber: 48,
                                        columnNumber: 31
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutSection.jsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-rajdhani",
                                style: {
                                    color: 'rgba(220,228,240,0.82)',
                                    fontSize: 17,
                                    marginTop: 10
                                },
                                children: "A practical developer focused on real outcomes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AboutSection.jsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutSection.jsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ref,
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: 40,
                            alignItems: 'stretch'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: -32
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    ease: 'easeOut'
                                },
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            background: 'rgba(13,13,26,0.92)',
                                            border: '1px solid rgba(245,197,24,0.18)',
                                            borderRadius: 10,
                                            padding: 32,
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner-tl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 64,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner-tr"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 64,
                                                columnNumber: 58
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner-bl"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 64,
                                                columnNumber: 87
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "corner-br"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 64,
                                                columnNumber: 116
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 18,
                                                    alignItems: 'center',
                                                    marginBottom: 24,
                                                    paddingBottom: 22,
                                                    borderBottom: '1px solid rgba(255,255,255,0.06)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'relative',
                                                            flexShrink: 0
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 68,
                                                                    height: 68,
                                                                    borderRadius: '50%',
                                                                    overflow: 'hidden',
                                                                    border: `2px solid rgba(245,197,24,0.28)`,
                                                                    background: 'linear-gradient(135deg, #1a1a2e, #0d0d1a)'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/portfolio.jpg",
                                                                    alt: "Chahel Tanna",
                                                                    style: {
                                                                        width: '100%',
                                                                        height: '100%',
                                                                        objectFit: 'cover'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.jsx",
                                                                    lineNumber: 70,
                                                                    columnNumber: 41
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 69,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                animate: {
                                                                    scale: [
                                                                        1,
                                                                        1.3,
                                                                        1
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 2,
                                                                    repeat: Infinity
                                                                },
                                                                style: {
                                                                    position: 'absolute',
                                                                    bottom: 3,
                                                                    right: 3,
                                                                    width: 13,
                                                                    height: 13,
                                                                    borderRadius: '50%',
                                                                    background: '#4ade80',
                                                                    border: '2px solid #0d0d1a',
                                                                    boxShadow: '0 0 8px rgba(74,222,128,0.8)'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 76,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 68,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 6,
                                                                    marginBottom: 4
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "f-mono",
                                                                        style: {
                                                                            color: 'rgba(245,197,24,0.4)',
                                                                            fontSize: 10
                                                                        },
                                                                        children: "ID://"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                                        lineNumber: 84,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "f-orbitron",
                                                                        style: {
                                                                            color: '#ffffff',
                                                                            fontWeight: 700,
                                                                            fontSize: 17
                                                                        },
                                                                        children: "Chahel Tanna"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                                        lineNumber: 85,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 83,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "f-rajdhani",
                                                                style: {
                                                                    color: CC,
                                                                    fontWeight: 700,
                                                                    fontSize: 13,
                                                                    letterSpacing: '0.08em',
                                                                    textTransform: 'uppercase'
                                                                },
                                                                children: "Full Stack Engineer"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 88,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 6,
                                                                    marginTop: 6
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                        animate: {
                                                                            opacity: [
                                                                                1,
                                                                                0.4,
                                                                                1
                                                                            ]
                                                                        },
                                                                        transition: {
                                                                            duration: 2,
                                                                            repeat: Infinity
                                                                        },
                                                                        style: {
                                                                            width: 6,
                                                                            height: 6,
                                                                            borderRadius: '50%',
                                                                            background: '#4ade80',
                                                                            boxShadow: '0 0 6px #4ade80'
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                                        lineNumber: 90,
                                                                        columnNumber: 41
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "f-mono",
                                                                        style: {
                                                                            color: '#4ade80',
                                                                            fontSize: 10
                                                                        },
                                                                        children: "Open to Internships & Engineering Roles"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                                        lineNumber: 93,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 89,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 82,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 67,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 14
                                                },
                                                children: [
                                                    {
                                                        icon: FiMapPin,
                                                        label: 'Base',
                                                        value: 'Ahmedabad, Gujarat, India',
                                                        color: C
                                                    },
                                                    {
                                                        icon: FiMail,
                                                        label: 'Email',
                                                        value: 'chahel1817@gmail.com',
                                                        color: CC
                                                    },
                                                    {
                                                        icon: FiCode,
                                                        label: 'Focus',
                                                        value: 'Full Stack | Data Engineering',
                                                        color: '#a855f7'
                                                    }
                                                ].map(({ icon: Icon, label, value, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 12
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 34,
                                                                    height: 34,
                                                                    borderRadius: 8,
                                                                    background: `${color}10`,
                                                                    border: `1px solid ${color}25`,
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    flexShrink: 0
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                    size: 14,
                                                                    style: {
                                                                        color
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/AboutSection.jsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 45
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 106,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "f-mono",
                                                                        style: {
                                                                            color: '#8b95a5',
                                                                            fontSize: 10,
                                                                            letterSpacing: '0.12em',
                                                                            textTransform: 'uppercase'
                                                                        },
                                                                        children: label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "f-rajdhani",
                                                                        style: {
                                                                            color: '#d1d5db',
                                                                            fontSize: 15,
                                                                            fontWeight: 600
                                                                        },
                                                                        children: value
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 109,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 105,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 99,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AboutSection.jsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(13,13,26,0.7)',
                                            border: '1px solid rgba(255,255,255,0.06)',
                                            borderRadius: 10,
                                            padding: '18px 20px',
                                            marginBottom: 20
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "f-mono",
                                                style: {
                                                    color: '#8b95a5',
                                                    fontSize: 10,
                                                    letterSpacing: '0.2em',
                                                    marginBottom: 14
                                                },
                                                children: "// CREDIBILITY SIGNALS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 120,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 10
                                                },
                                                children: signals.map(({ icon: Icon, label, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                animate: {
                                                                    opacity: [
                                                                        1,
                                                                        0.3,
                                                                        1
                                                                    ]
                                                                },
                                                                transition: {
                                                                    duration: 2.5,
                                                                    repeat: Infinity
                                                                },
                                                                style: {
                                                                    width: 5,
                                                                    height: 5,
                                                                    borderRadius: '50%',
                                                                    background: color,
                                                                    boxShadow: `0 0 5px ${color}`,
                                                                    flexShrink: 0
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 124,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "f-rajdhani",
                                                                style: {
                                                                    color: '#9ca3af',
                                                                    fontSize: 14,
                                                                    fontWeight: 500
                                                                },
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 127,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 121,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AboutSection.jsx",
                                        lineNumber: 119,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: 12,
                                            flex: 1,
                                            alignContent: 'stretch'
                                        },
                                        children: principles.map(({ icon: Icon, color, title, desc })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                whileHover: {
                                                    y: -4,
                                                    borderColor: `${color}30`
                                                },
                                                style: {
                                                    background: 'rgba(13,13,26,0.7)',
                                                    border: '1px solid rgba(255,255,255,0.06)',
                                                    borderRadius: 10,
                                                    padding: 18,
                                                    transition: 'all 0.3s',
                                                    display: 'flex',
                                                    flexDirection: 'column'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 32,
                                                            height: 32,
                                                            borderRadius: 8,
                                                            background: `${color}12`,
                                                            border: `1px solid ${color}22`,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            marginBottom: 10
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 14,
                                                            style: {
                                                                color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AboutSection.jsx",
                                                            lineNumber: 141,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 140,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "f-orbitron",
                                                        style: {
                                                            color: '#e2e8f0',
                                                            fontSize: 10,
                                                            fontWeight: 700,
                                                            marginBottom: 6,
                                                            letterSpacing: '0.04em',
                                                            lineHeight: 1.3
                                                        },
                                                        children: title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 143,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "f-rajdhani",
                                                        style: {
                                                            color: 'rgba(200,210,225,0.7)',
                                                            fontSize: 13,
                                                            lineHeight: 1.6,
                                                            flex: 1
                                                        },
                                                        children: desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 144,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, title, true, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 136,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.jsx",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutSection.jsx",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: 32
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.6,
                                    ease: 'easeOut',
                                    delay: 0.15
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'relative',
                                            background: 'rgba(13,13,26,0.92)',
                                            border: '1px solid rgba(0,245,255,0.14)',
                                            borderRadius: 10,
                                            padding: 36,
                                            marginBottom: 24,
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: 2,
                                                    background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.5), rgba(245,197,24,0.5), transparent)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8,
                                                    marginBottom: 28
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            gap: 6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 10,
                                                                    height: 10,
                                                                    borderRadius: '50%',
                                                                    background: '#ff5f56'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 163,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 10,
                                                                    height: 10,
                                                                    borderRadius: '50%',
                                                                    background: '#ffbd2e'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 164,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: 10,
                                                                    height: 10,
                                                                    borderRadius: '50%',
                                                                    background: '#27c93f'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 165,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 162,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "f-mono",
                                                        style: {
                                                            color: '#8b95a5',
                                                            fontSize: 11,
                                                            marginLeft: 6
                                                        },
                                                        children: "chahel@portfolio:~$ cat about.md"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 167,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "f-orbitron",
                                                style: {
                                                    color: C,
                                                    fontSize: 'clamp(16px,2.2vw,22px)',
                                                    fontWeight: 800,
                                                    lineHeight: 1.4,
                                                    marginBottom: 20,
                                                    textShadow: '0 0 14px rgba(245,197,24,0.3)'
                                                },
                                                children: [
                                                    "I don't just write code —",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 172,
                                                        columnNumber: 58
                                                    }, this),
                                                    "I engineer systems."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 171,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 16,
                                                    marginBottom: 22
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "f-rajdhani",
                                                        style: {
                                                            color: '#9ca3af',
                                                            fontSize: 17,
                                                            lineHeight: 1.85
                                                        },
                                                        children: [
                                                            "I design ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: CC,
                                                                    fontWeight: 700
                                                                },
                                                                children: "modular backend systems"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 178,
                                                                columnNumber: 46
                                                            }, this),
                                                            " and scalable APIs optimized for",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: C,
                                                                    fontWeight: 700
                                                                },
                                                                children: "performance, maintainability, and long-term growth"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 179,
                                                                columnNumber: 37
                                                            }, this),
                                                            " — not just to make things work, but to make them ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                                style: {
                                                                    color: '#e2e8f0',
                                                                    fontStyle: 'normal',
                                                                    fontWeight: 600
                                                                },
                                                                children: "last"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 179,
                                                                columnNumber: 188
                                                            }, this),
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 177,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "f-rajdhani",
                                                        style: {
                                                            color: '#9ca3af',
                                                            fontSize: 17,
                                                            lineHeight: 1.85
                                                        },
                                                        children: [
                                                            "From ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#a855f7',
                                                                    fontWeight: 700
                                                                },
                                                                children: "scalable data pipelines"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 182,
                                                                columnNumber: 42
                                                            }, this),
                                                            " to production-ready REST APIs, every system I build is approached with",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: C,
                                                                    fontWeight: 700
                                                                },
                                                                children: "architectural discipline"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 183,
                                                                columnNumber: 37
                                                            }, this),
                                                            " — because great software isn't built by accident.",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: '#e2e8f0',
                                                                    fontWeight: 700
                                                                },
                                                                children: "It's engineered."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 184,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 181,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 176,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderLeft: `2px solid ${C}`,
                                                    paddingLeft: 16,
                                                    marginBottom: 28
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "f-rajdhani",
                                                    style: {
                                                        color: 'rgba(200,210,225,0.7)',
                                                        fontSize: 15,
                                                        lineHeight: 1.7,
                                                        fontStyle: 'italic'
                                                    },
                                                    children: [
                                                        "Focused on ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: C,
                                                                fontStyle: 'normal',
                                                                fontWeight: 600
                                                            },
                                                            children: "backend architecture"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AboutSection.jsx",
                                                            lineNumber: 191,
                                                            columnNumber: 48
                                                        }, this),
                                                        ",",
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                color: CC,
                                                                fontStyle: 'normal',
                                                                fontWeight: 600
                                                            },
                                                            children: "API design"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/AboutSection.jsx",
                                                            lineNumber: 192,
                                                            columnNumber: 37
                                                        }, this),
                                                        ", and scalable system engineering."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/AboutSection.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 189,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    height: 1,
                                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)',
                                                    marginBottom: 22
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 197,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "f-mono",
                                                        style: {
                                                            color: '#8b95a5',
                                                            fontSize: 10,
                                                            letterSpacing: '0.2em',
                                                            marginBottom: 14
                                                        },
                                                        children: "// CORE STACK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 201,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            gap: 8
                                                        },
                                                        children: [
                                                            'Node.js',
                                                            'Express.js',
                                                            'React',
                                                            'Next.js',
                                                            'Python',
                                                            'MongoDB',
                                                            'MySQL',
                                                            'Redis',
                                                            'OpenAI API',
                                                            'Vercel'
                                                        ].map((tech, i)=>{
                                                            const colors = [
                                                                C,
                                                                CC,
                                                                '#a855f7',
                                                                '#4ade80'
                                                            ];
                                                            const c = colors[i % colors.length];
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                                                whileHover: {
                                                                    scale: 1.08,
                                                                    y: -2
                                                                },
                                                                className: "f-mono",
                                                                style: {
                                                                    fontSize: 11,
                                                                    padding: '5px 12px',
                                                                    borderRadius: 4,
                                                                    background: `${c}0d`,
                                                                    border: `1px solid ${c}25`,
                                                                    color: c,
                                                                    transition: 'all 0.2s'
                                                                },
                                                                children: tech
                                                            }, tech, false, {
                                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                                lineNumber: 207,
                                                                columnNumber: 45
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 202,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 200,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AboutSection.jsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(2, 1fr)',
                                            gap: 14,
                                            marginBottom: 20
                                        },
                                        children: stats.map(({ value, label, code, color }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                initial: {
                                                    opacity: 0,
                                                    y: 20
                                                },
                                                animate: inView ? {
                                                    opacity: 1,
                                                    y: 0
                                                } : {},
                                                transition: {
                                                    delay: 0.3 + i * 0.1
                                                },
                                                whileHover: {
                                                    scale: 1.04,
                                                    y: -3
                                                },
                                                style: {
                                                    background: 'rgba(13,13,26,0.85)',
                                                    border: `1px solid ${color}18`,
                                                    borderRadius: 10,
                                                    padding: '22px 16px',
                                                    textAlign: 'center',
                                                    position: 'relative',
                                                    overflow: 'hidden',
                                                    transition: 'all 0.3s'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            height: 2,
                                                            background: `linear-gradient(90deg, transparent, ${color}90, transparent)`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 227,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "f-mono",
                                                        style: {
                                                            position: 'absolute',
                                                            top: 10,
                                                            right: 12,
                                                            color: `${color}35`,
                                                            fontSize: 10
                                                        },
                                                        children: code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "f-orbitron",
                                                        style: {
                                                            fontSize: 36,
                                                            fontWeight: 900,
                                                            color,
                                                            textShadow: `0 0 16px ${color}55`,
                                                            lineHeight: 1,
                                                            marginBottom: 6
                                                        },
                                                        children: value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "f-rajdhani",
                                                        style: {
                                                            color: 'rgba(200,210,225,0.7)',
                                                            fontSize: 13,
                                                            fontWeight: 500,
                                                            lineHeight: 1.3
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 230,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, code, true, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 220,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AboutSection.jsx",
                                        lineNumber: 218,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 12,
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                                href: "mailto:chahel1817@gmail.com",
                                                whileHover: {
                                                    y: -3,
                                                    boxShadow: '0 0 24px rgba(245,197,24,0.55)'
                                                },
                                                style: {
                                                    flex: 1,
                                                    minWidth: 140,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 8,
                                                    padding: '14px 20px',
                                                    background: C,
                                                    color: '#080810',
                                                    borderRadius: 4,
                                                    fontFamily: "'Orbitron', monospace",
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    letterSpacing: '0.12em',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.25s'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiMail, {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/AboutSection.jsx",
                                                        lineNumber: 241,
                                                        columnNumber: 33
                                                    }, this),
                                                    " HIRE ME"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 237,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                                href: "#projects",
                                                onClick: (e)=>{
                                                    e.preventDefault();
                                                    document.querySelector('#projects')?.scrollIntoView({
                                                        behavior: 'smooth'
                                                    });
                                                },
                                                whileHover: {
                                                    y: -3,
                                                    boxShadow: '0 0 18px rgba(0,245,255,0.3)',
                                                    background: 'rgba(0,245,255,0.06)'
                                                },
                                                style: {
                                                    flex: 1,
                                                    minWidth: 140,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    gap: 8,
                                                    padding: '14px 20px',
                                                    background: 'transparent',
                                                    color: CC,
                                                    border: '1px solid rgba(0,245,255,0.35)',
                                                    borderRadius: 4,
                                                    fontFamily: "'Orbitron', monospace",
                                                    fontSize: 11,
                                                    fontWeight: 700,
                                                    letterSpacing: '0.12em',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.25s'
                                                },
                                                children: "VIEW PROJECTS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/AboutSection.jsx",
                                                lineNumber: 243,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/AboutSection.jsx",
                                        lineNumber: 236,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AboutSection.jsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AboutSection.jsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AboutSection.jsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AboutSection.jsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_s(AboutSection, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        useInView
    ];
});
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SectionDivider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionDivider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const C = '#f5c518';
const CC = '#00f5ff';
function SectionDivider({ variant = 'gold', flip = false }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref, {
        once: true,
        margin: '-50px'
    });
    const colors = {
        gold: {
            primary: C,
            secondary: '#e0a800',
            glow: 'rgba(245,197,24,0.5)',
            bg: 'rgba(245,197,24,0.04)'
        },
        cyan: {
            primary: CC,
            secondary: '#00c4cc',
            glow: 'rgba(0,245,255,0.5)',
            bg: 'rgba(0,245,255,0.04)'
        },
        mixed: {
            primary: C,
            secondary: CC,
            glow: 'rgba(245,197,24,0.35)',
            bg: 'rgba(0,245,255,0.03)'
        }
    };
    const c = colors[variant] || colors.gold;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        style: {
            position: 'relative',
            width: '100%',
            height: 80,
            overflow: 'hidden',
            transform: flip ? 'scaleY(-1)' : 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 1440 80",
                preserveAspectRatio: "none",
                style: {
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    top: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                            id: `divGrad-${variant}-${flip}`,
                            x1: "0%",
                            y1: "0%",
                            x2: "100%",
                            y2: "0%",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "0%",
                                    stopColor: c.primary,
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SectionDivider.jsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "30%",
                                    stopColor: c.primary,
                                    stopOpacity: "0.15"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SectionDivider.jsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "50%",
                                    stopColor: c.secondary,
                                    stopOpacity: "0.2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SectionDivider.jsx",
                                    lineNumber: 53,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "70%",
                                    stopColor: c.primary,
                                    stopOpacity: "0.15"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SectionDivider.jsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                    offset: "100%",
                                    stopColor: c.primary,
                                    stopOpacity: "0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SectionDivider.jsx",
                                    lineNumber: 55,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SectionDivider.jsx",
                            lineNumber: 50,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionDivider.jsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 40 Q180 10, 360 35 Q540 60, 720 40 Q900 20, 1080 45 Q1260 65, 1440 40",
                        fill: "none",
                        stroke: `url(#divGrad-${variant}-${flip})`,
                        strokeWidth: "1.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionDivider.jsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M0 42 Q240 65, 480 38 Q720 15, 960 42 Q1200 65, 1440 38",
                        fill: "none",
                        stroke: `url(#divGrad-${variant}-${flip})`,
                        strokeWidth: "0.8",
                        opacity: "0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionDivider.jsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SectionDivider.jsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: inView ? {
                    opacity: 1,
                    scale: 1
                } : {},
                transition: {
                    duration: 0.6,
                    ease: 'easeOut'
                },
                style: {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) ${flip ? 'scaleY(-1)' : ''}`,
                    width: 8,
                    height: 8,
                    background: c.primary,
                    borderRadius: 1,
                    rotate: '45deg',
                    boxShadow: `0 0 12px ${c.glow}, 0 0 24px ${c.glow}`
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SectionDivider.jsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    scaleX: 0,
                    opacity: 0
                },
                animate: inView ? {
                    scaleX: 1,
                    opacity: 1
                } : {},
                transition: {
                    duration: 1.2,
                    ease: [
                        0.25,
                        0.46,
                        0.45,
                        0.94
                    ],
                    delay: 0.2
                },
                style: {
                    position: 'absolute',
                    left: '20%',
                    right: '20%',
                    top: '50%',
                    height: 1,
                    background: `linear-gradient(90deg, transparent, ${c.primary}40, ${c.secondary}60, ${c.primary}40, transparent)`,
                    boxShadow: `0 0 8px ${c.glow}`,
                    transformOrigin: 'center',
                    transform: flip ? 'scaleY(-1)' : ''
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SectionDivider.jsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    x: 30,
                    opacity: 0
                },
                animate: inView ? {
                    x: 0,
                    opacity: 0.6
                } : {},
                transition: {
                    duration: 0.8,
                    delay: 0.4
                },
                style: {
                    position: 'absolute',
                    left: '15%',
                    top: '50%',
                    transform: `translateY(-50%) ${flip ? 'scaleY(-1)' : ''}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 16,
                            height: 1,
                            background: `linear-gradient(90deg, transparent, ${c.primary}80)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionDivider.jsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 3,
                            height: 3,
                            borderRadius: '50%',
                            background: c.primary,
                            boxShadow: `0 0 6px ${c.glow}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionDivider.jsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SectionDivider.jsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                initial: {
                    x: -30,
                    opacity: 0
                },
                animate: inView ? {
                    x: 0,
                    opacity: 0.6
                } : {},
                transition: {
                    duration: 0.8,
                    delay: 0.4
                },
                style: {
                    position: 'absolute',
                    right: '15%',
                    top: '50%',
                    transform: `translateY(-50%) ${flip ? 'scaleY(-1)' : ''}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 3,
                            height: 3,
                            borderRadius: '50%',
                            background: c.secondary,
                            boxShadow: `0 0 6px rgba(0,245,255,0.5)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionDivider.jsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 16,
                            height: 1,
                            background: `linear-gradient(90deg, ${c.secondary}80, transparent)`
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/SectionDivider.jsx",
                        lineNumber: 145,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SectionDivider.jsx",
                lineNumber: 130,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: '30%',
                    right: '30%',
                    top: '30%',
                    bottom: '30%',
                    background: `radial-gradient(ellipse, ${c.bg}, transparent 70%)`,
                    filter: 'blur(10px)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SectionDivider.jsx",
                lineNumber: 149,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SectionDivider.jsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_s(SectionDivider, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        useInView
    ];
});
_c = SectionDivider;
var _c;
__turbopack_context__.k.register(_c, "SectionDivider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/SkillsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SkillsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/si'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fa'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/vsc'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const C = '#f5c518';
const CC = '#00f5ff';
/* Express.js has no SVG in simple-icons — text badge fallback */ function ExpressIcon({ size = 22, style: s }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: Math.round(size * 0.5),
            fontFamily: "'Orbitron',monospace",
            fontWeight: 900,
            color: s?.color || '#ffffff',
            letterSpacing: '-0.03em',
            lineHeight: 1
        },
        children: "EX"
    }, void 0, false, {
        fileName: "[project]/src/components/SkillsSection.jsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = ExpressIcon;
const CATS = [
    {
        id: 'frontend',
        label: 'Frontend',
        code: '01',
        color: C,
        emoji: '🖥️',
        desc: 'UI frameworks, styling & client-side logic',
        skills: [
            {
                name: 'HTML5',
                icon: SiHtml5,
                color: '#e34f26'
            },
            {
                name: 'CSS3',
                icon: SiCss3,
                color: '#1572b6'
            },
            {
                name: 'JavaScript',
                icon: SiJavascript,
                color: '#f7df1e'
            },
            {
                name: 'TypeScript',
                icon: SiTypescript,
                color: '#3178c6'
            },
            {
                name: 'React',
                icon: SiReact,
                color: '#61dafb'
            },
            {
                name: 'Next.js',
                icon: SiNextdotjs,
                color: '#ffffff'
            },
            {
                name: 'Vite',
                icon: SiVite,
                color: '#646cff'
            }
        ]
    },
    {
        id: 'backend',
        label: 'Backend & APIs',
        code: '02',
        color: '#4ade80',
        emoji: '⚙️',
        desc: 'Core strength — server runtime, databases & system design',
        skills: [
            {
                name: 'Node.js',
                icon: SiNodedotjs,
                color: '#339933'
            },
            {
                name: 'Express.js',
                icon: ExpressIcon,
                color: '#ffffff'
            },
            {
                name: 'Java',
                icon: FaJava,
                color: '#ed8b00'
            },
            {
                name: 'MongoDB',
                icon: SiMongodb,
                color: '#47a248'
            },
            {
                name: 'MySQL',
                icon: SiMysql,
                color: '#4479a1'
            },
            {
                name: 'Redis',
                icon: SiRedis,
                color: '#dc382d'
            },
            {
                name: 'Socket.io',
                icon: SiSocketdotio,
                color: '#00f5ff'
            }
        ],
        patterns: [
            'REST API Design',
            'Middleware Architecture',
            'MVC Pattern',
            'API Error Handling',
            'Rate Limiting',
            'Data Validation',
            'Socket.io Streams',
            'Performance Tuning'
        ]
    },
    {
        id: 'auth',
        label: 'Auth & Integration',
        code: '03',
        color: CC,
        emoji: '🔐',
        desc: 'Security systems, APIs & third-party integrations — your differentiator',
        skills: [
            {
                name: 'JWT',
                icon: SiJsonwebtokens,
                color: '#d63aff'
            },
            {
                name: 'REST APIs',
                icon: SiPostman,
                color: '#ff6c37',
                label: 'REST'
            },
            {
                name: 'Socket.io',
                icon: SiSocketdotio,
                color: '#00f5ff'
            },
            {
                name: 'Postman',
                icon: SiPostman,
                color: '#ff6c37'
            },
            {
                name: 'Nodemailer',
                icon: SiNodedotjs,
                color: '#339933',
                label: 'Nodemailer'
            }
        ],
        patterns: [
            'JWT Auth Flow',
            'Role-Based Access Control',
            'Secure Token Handling',
            'OpenRouter API',
            'Speech-to-Text Integration',
            'Cookie & Session Auth',
            'API Key Management',
            'Webhook Integration'
        ]
    },
    {
        id: 'fundamentals',
        label: 'Core Fundamentals',
        code: '04',
        color: '#94a3b8',
        emoji: '🧩',
        desc: 'Strong CS foundations powering scalable backend systems and efficient algorithmic design.',
        skills: [
            {
                name: 'C++',
                icon: SiCplusplus,
                color: '#00599c'
            },
            {
                name: 'Java',
                icon: FaJava,
                color: '#ed8b00'
            },
            {
                name: 'Python',
                icon: SiPython,
                color: '#3776ab'
            },
            {
                name: 'SQL',
                icon: SiMysql,
                color: '#4479a1',
                label: 'SQL'
            }
        ],
        patternGroups: [
            {
                label: '🧠 Algorithmic Foundations',
                items: [
                    'Data Structures',
                    'Recursion',
                    'Searching & Sorting',
                    'Complexity Analysis',
                    'Problem Solving'
                ]
            },
            {
                label: '🏗️ Design & Architecture',
                items: [
                    'Distributed Systems',
                    'Data Modeling & Schema Theory',
                    'Event-Driven Patterns',
                    'Clean Code Practices'
                ]
            },
            {
                label: '🗄️ Database Foundations',
                items: [
                    'SQL & Relational DBs',
                    'Normalization Concepts',
                    'Indexing & Query Optimization',
                    'DBMS Concepts'
                ]
            }
        ],
        appliedIn: 'Applied in competitive coding, backend API development, and database schema design.',
        credibility: 'Solved 170+ DSA problems across LeetCode and practice platforms.'
    },
    {
        id: 'devops',
        label: 'DevOps & Tools',
        code: '05',
        color: '#a855f7',
        emoji: '🚀',
        desc: 'Deployment, CI/CD, version control & tooling',
        skills: [
            {
                name: 'Git',
                icon: SiGit,
                color: '#f05032'
            },
            {
                name: 'GitHub',
                icon: SiGithub,
                color: '#ffffff'
            },
            {
                name: 'Vercel',
                icon: SiVercel,
                color: '#ffffff'
            },
            {
                name: 'Render',
                icon: SiRender,
                color: '#00979d'
            },
            {
                name: 'Netlify',
                icon: SiNetlify,
                color: '#00c7b7'
            },
            {
                name: 'GH Actions',
                icon: SiGithubactions,
                color: '#2088ff'
            },
            {
                name: 'VS Code',
                icon: VscCode,
                color: '#007acc'
            },
            {
                name: 'npm',
                icon: SiNpm,
                color: '#cb3837'
            }
        ]
    }
];
function SkillCard({ skill, color, delay, inView }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            scale: 0.7,
            y: 20
        },
        animate: inView ? {
            opacity: 1,
            scale: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.4,
            delay,
            type: 'spring',
            stiffness: 160
        },
        onHoverStart: ()=>setHov(true),
        onHoverEnd: ()=>setHov(false),
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            padding: '16px 10px',
            borderRadius: 10,
            background: hov ? `${skill.color}20` : 'rgba(18,18,34,0.9)',
            border: `1px solid ${hov ? `${skill.color}70` : 'rgba(255,255,255,0.2)'}`,
            boxShadow: hov ? `0 0 22px ${skill.color}35, 0 6px 24px rgba(0,0,0,0.5)` : '0 1px 4px rgba(0,0,0,0.3)',
            transform: hov ? 'translateY(-5px)' : 'translateY(0)',
            transition: 'all 0.28s cubic-bezier(0.23,1,0.32,1)',
            minWidth: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: hov ? `${skill.color}18` : 'rgba(10,10,22,0.85)',
                    border: `1px solid ${hov ? `${skill.color}40` : 'rgba(255,255,255,0.16)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.28s',
                    boxShadow: hov ? `0 0 12px ${skill.color}40` : 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(skill.icon, {
                    size: 22,
                    style: {
                        color: hov ? skill.color : '#d4dde9',
                        transition: 'color 0.25s'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/SkillsSection.jsx",
                    lineNumber: 176,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsSection.jsx",
                lineNumber: 168,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "f-mono",
                style: {
                    fontSize: 10,
                    color: hov ? '#f1f5f9' : '#d4dde9',
                    textAlign: 'center',
                    lineHeight: 1.2,
                    transition: 'color 0.25s',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '100%'
                },
                children: skill.label || skill.name
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsSection.jsx",
                lineNumber: 178,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SkillsSection.jsx",
        lineNumber: 151,
        columnNumber: 9
    }, this);
}
_s(SkillCard, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c1 = SkillCard;
function SkillsSection() {
    _s1();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('backend'); // backend is core strength — load first
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref, {
        once: true,
        margin: '-80px'
    });
    const cat = CATS.find((c)=>c.id === active);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "skills",
        style: {
            position: 'relative',
            padding: '120px 0',
            background: 'linear-gradient(180deg, rgba(8,8,16,0.46) 0%, rgba(13,13,26,0.5) 100%)',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scanline",
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsSection.jsx",
                lineNumber: 199,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '40%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    width: 600,
                    height: 400,
                    background: 'radial-gradient(ellipse, rgba(0,245,255,0.04), transparent 70%)',
                    pointerEvents: 'none',
                    borderRadius: '50%'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/SkillsSection.jsx",
                lineNumber: 200,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '0 24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 60
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sec-label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "f-mono",
                                    style: {
                                        color: 'rgba(0,245,255,0.5)',
                                        fontSize: 11,
                                        letterSpacing: '0.28em'
                                    },
                                    children: "02 // ARSENAL"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SkillsSection.jsx",
                                    lineNumber: 207,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 206,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "f-orbitron",
                                style: {
                                    fontSize: 'clamp(32px,5vw,54px)',
                                    fontWeight: 900,
                                    color: '#fff',
                                    lineHeight: 1.1
                                },
                                children: [
                                    "TECH ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: CC,
                                            textShadow: '0 0 20px rgba(0,245,255,0.55)'
                                        },
                                        children: "ARSENAL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 210,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 209,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-rajdhani",
                                style: {
                                    color: '#b6c1d3',
                                    fontSize: 17,
                                    marginTop: 10
                                },
                                children: "Technologies I use to build production-ready products"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 212,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkillsSection.jsx",
                        lineNumber: 205,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 8,
                            flexWrap: 'wrap',
                            marginBottom: 48
                        },
                        children: CATS.map((c)=>{
                            const isOn = active === c.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                onClick: ()=>setActive(c.id),
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.96
                                },
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 6,
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 10,
                                    fontWeight: 700,
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    padding: '10px 16px',
                                    borderRadius: 4,
                                    background: isOn ? c.color : 'transparent',
                                    color: isOn ? '#080810' : '#c4cedd',
                                    border: isOn ? `1px solid ${c.color}` : '1px solid rgba(255,255,255,0.2)',
                                    boxShadow: isOn ? `0 0 20px ${c.color}50` : 'none',
                                    transition: 'all 0.3s',
                                    whiteSpace: 'nowrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: 14
                                        },
                                        children: c.emoji
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 236,
                                        columnNumber: 33
                                    }, this),
                                    c.label,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "f-mono",
                                        style: {
                                            fontSize: 9,
                                            opacity: 0.55
                                        },
                                        children: c.code
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 238,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 220,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillsSection.jsx",
                        lineNumber: 216,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ref,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatePresence, {
                            mode: "wait",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 18
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -18
                                },
                                transition: {
                                    duration: 0.3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            flexWrap: 'wrap',
                                            gap: 12,
                                            marginBottom: 28,
                                            padding: '18px 24px',
                                            background: 'rgba(13,13,26,0.8)',
                                            border: `1px solid ${cat.color}20`,
                                            borderRadius: 8,
                                            position: 'relative',
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: 1,
                                                    background: `linear-gradient(90deg, transparent, ${cat.color}80, transparent)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                lineNumber: 255,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 4,
                                                            height: 28,
                                                            borderRadius: 2,
                                                            background: cat.color,
                                                            boxShadow: `0 0 10px ${cat.color}`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 257,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "f-orbitron",
                                                                style: {
                                                                    color: '#e2e8f0',
                                                                    fontWeight: 700,
                                                                    fontSize: 14
                                                                },
                                                                children: cat.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                                lineNumber: 259,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "f-mono",
                                                                style: {
                                                                    color: '#a8b4c7',
                                                                    fontSize: 10,
                                                                    marginTop: 3
                                                                },
                                                                children: cat.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                                lineNumber: 260,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 258,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                lineNumber: 256,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "f-mono",
                                                        style: {
                                                            color: `${cat.color}80`,
                                                            fontSize: 11
                                                        },
                                                        children: [
                                                            cat.skills.length,
                                                            cat.patterns || cat.patternGroups ? ` techs + ${cat.patternGroups ? cat.patternGroups.reduce((a, g)=>a + g.items.length, 0) : cat.patterns.length} concepts` : ' technologies'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 264,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: '50%',
                                                            background: cat.color,
                                                            boxShadow: `0 0 8px ${cat.color}`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 267,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                lineNumber: 263,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 254,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))',
                                            gap: 12,
                                            marginBottom: cat.patterns || cat.patternGroups ? 28 : 0
                                        },
                                        children: cat.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkillCard, {
                                                skill: skill,
                                                color: cat.color,
                                                delay: i * 0.04,
                                                inView: inView
                                            }, skill.name, false, {
                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                lineNumber: 279,
                                                columnNumber: 37
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 272,
                                        columnNumber: 29
                                    }, this),
                                    cat.patterns && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: 0.2
                                        },
                                        style: {
                                            padding: '20px 24px',
                                            background: `${cat.color}07`,
                                            border: `1px solid ${cat.color}20`,
                                            borderRadius: 8,
                                            position: 'relative',
                                            overflow: 'hidden'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: 1,
                                                    background: `linear-gradient(90deg, transparent, ${cat.color}60, transparent)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                lineNumber: 291,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8,
                                                    marginBottom: 16
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 3,
                                                            height: 14,
                                                            borderRadius: 2,
                                                            background: cat.color,
                                                            boxShadow: `0 0 8px ${cat.color}`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 293,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "f-mono",
                                                        style: {
                                                            color: `${cat.color}90`,
                                                            fontSize: 10,
                                                            letterSpacing: '0.2em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "Patterns & Practices"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 294,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                lineNumber: 292,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: 8
                                                },
                                                children: cat.patterns.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                                        initial: {
                                                            opacity: 0,
                                                            scale: 0.85
                                                        },
                                                        animate: inView ? {
                                                            opacity: 1,
                                                            scale: 1
                                                        } : {},
                                                        transition: {
                                                            delay: 0.25 + i * 0.05
                                                        },
                                                        whileHover: {
                                                            scale: 1.06,
                                                            y: -2,
                                                            color: cat.color,
                                                            borderColor: `${cat.color}70`,
                                                            background: `${cat.color}12`
                                                        },
                                                        className: "f-mono",
                                                        style: {
                                                            fontSize: 11,
                                                            padding: '7px 16px',
                                                            borderRadius: 4,
                                                            border: `1px solid ${cat.color}35`,
                                                            color: '#d4dde9',
                                                            background: 'rgba(8,8,16,0.62)',
                                                            transition: 'all 0.22s',
                                                            cursor: 'default'
                                                        },
                                                        children: p
                                                    }, p, false, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 298,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                lineNumber: 296,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 285,
                                        columnNumber: 33
                                    }, this),
                                    cat.patternGroups && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 12
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: 0.2
                                        },
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 16
                                        },
                                        children: [
                                            cat.patternGroups.map((group, gi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '18px 22px',
                                                        background: 'rgba(13,13,26,0.7)',
                                                        border: '1px solid rgba(148,163,184,0.12)',
                                                        borderRadius: 8,
                                                        position: 'relative',
                                                        overflow: 'hidden'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                right: 0,
                                                                height: 1,
                                                                background: 'linear-gradient(90deg, transparent, rgba(148,163,184,0.35), transparent)'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsSection.jsx",
                                                            lineNumber: 324,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "f-mono",
                                                            style: {
                                                                color: '#94a3b8',
                                                                fontSize: 11,
                                                                marginBottom: 12,
                                                                letterSpacing: '0.06em'
                                                            },
                                                            children: group.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsSection.jsx",
                                                            lineNumber: 325,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: 'flex',
                                                                flexWrap: 'wrap',
                                                                gap: 8
                                                            },
                                                            children: group.items.map((item, ii)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                                                    initial: {
                                                                        opacity: 0,
                                                                        scale: 0.88
                                                                    },
                                                                    animate: inView ? {
                                                                        opacity: 1,
                                                                        scale: 1
                                                                    } : {},
                                                                    transition: {
                                                                        delay: 0.2 + gi * 0.1 + ii * 0.04
                                                                    },
                                                                    whileHover: {
                                                                        scale: 1.05,
                                                                        y: -2,
                                                                        color: '#e2e8f0',
                                                                        borderColor: 'rgba(148,163,184,0.5)',
                                                                        background: 'rgba(148,163,184,0.08)'
                                                                    },
                                                                    className: "f-mono",
                                                                    style: {
                                                                        fontSize: 11,
                                                                        padding: '6px 14px',
                                                                        borderRadius: 4,
                                                                        border: '1px solid rgba(148,163,184,0.28)',
                                                                        color: '#b0bac9',
                                                                        background: 'rgba(8,8,16,0.4)',
                                                                        transition: 'all 0.2s',
                                                                        cursor: 'default'
                                                                    },
                                                                    children: item
                                                                }, item, false, {
                                                                    fileName: "[project]/src/components/SkillsSection.jsx",
                                                                    lineNumber: 328,
                                                                    columnNumber: 53
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SkillsSection.jsx",
                                                            lineNumber: 326,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, group.label, true, {
                                                    fileName: "[project]/src/components/SkillsSection.jsx",
                                                    lineNumber: 323,
                                                    columnNumber: 41
                                                }, this)),
                                            cat.appliedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    gap: 10
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'flex-start',
                                                            gap: 10,
                                                            padding: '14px 20px',
                                                            background: 'rgba(148,163,184,0.04)',
                                                            border: '1px solid rgba(148,163,184,0.1)',
                                                            borderRadius: 6,
                                                            borderLeft: '3px solid rgba(148,163,184,0.4)'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "f-mono",
                                                                style: {
                                                                    color: 'rgba(148,163,184,0.5)',
                                                                    fontSize: 10,
                                                                    flexShrink: 0,
                                                                    marginTop: 1
                                                                },
                                                                children: "⚡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                                lineNumber: 347,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "f-rajdhani",
                                                                style: {
                                                                    color: '#94a3b8',
                                                                    fontSize: 15,
                                                                    lineHeight: 1.6,
                                                                    fontStyle: 'italic'
                                                                },
                                                                children: cat.appliedIn
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                                lineNumber: 348,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 346,
                                                        columnNumber: 45
                                                    }, this),
                                                    cat.credibility && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: 10,
                                                            padding: '11px 18px',
                                                            background: 'rgba(74,222,128,0.04)',
                                                            border: '1px solid rgba(74,222,128,0.18)',
                                                            borderRadius: 6
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    width: 7,
                                                                    height: 7,
                                                                    borderRadius: '50%',
                                                                    background: '#4ade80',
                                                                    boxShadow: '0 0 6px #4ade80',
                                                                    flexShrink: 0
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                                lineNumber: 354,
                                                                columnNumber: 53
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "f-mono",
                                                                style: {
                                                                    color: '#4ade80',
                                                                    fontSize: 11
                                                                },
                                                                children: cat.credibility
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                                lineNumber: 355,
                                                                columnNumber: 53
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                                        lineNumber: 353,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SkillsSection.jsx",
                                                lineNumber: 345,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 316,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, active, true, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 247,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SkillsSection.jsx",
                            lineNumber: 246,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SkillsSection.jsx",
                        lineNumber: 245,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 56,
                            padding: '28px 28px 24px',
                            background: 'rgba(13,13,26,0.6)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            borderRadius: 10,
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 1,
                                    background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.3), rgba(0,245,255,0.3), transparent)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 368,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    marginBottom: 20
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 3,
                                            height: 18,
                                            borderRadius: 2,
                                            background: C
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 370,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "f-orbitron",
                                        style: {
                                            color: C,
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: '0.14em'
                                        },
                                        children: "CURRENTLY EXPANDING"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 371,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 369,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 10
                                },
                                children: [
                                    {
                                        name: 'Machine Learning',
                                        color: C
                                    },
                                    {
                                        name: 'Neural Networks',
                                        color: CC
                                    },
                                    {
                                        name: 'Distributed Systems',
                                        color: '#a855f7'
                                    },
                                    {
                                        name: 'AWS Fundamentals',
                                        color: '#ff9900'
                                    },
                                    {
                                        name: 'CI/CD Pipelines',
                                        color: '#2088ff'
                                    },
                                    {
                                        name: 'AI Workflow Automation',
                                        color: C
                                    }
                                ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.span, {
                                        whileHover: {
                                            scale: 1.08,
                                            y: -3,
                                            borderColor: t.color,
                                            color: t.color,
                                            background: `${t.color}0d`
                                        },
                                        className: "f-mono",
                                        style: {
                                            fontSize: 11,
                                            padding: '8px 18px',
                                            borderRadius: 4,
                                            border: '1px solid rgba(255,255,255,0.18)',
                                            color: '#b0bac9',
                                            transition: 'all 0.25s'
                                        },
                                        children: t.name
                                    }, t.name, false, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 382,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 373,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-rajdhani",
                                style: {
                                    color: '#b6c1d3',
                                    fontSize: 14,
                                    marginTop: 18,
                                    borderLeft: '2px solid rgba(245,197,24,0.35)',
                                    paddingLeft: 12
                                },
                                children: [
                                    "Focused trajectory: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#f5c518'
                                        },
                                        children: "Backend → AI Systems → Neural Engineering."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SkillsSection.jsx",
                                        lineNumber: 392,
                                        columnNumber: 45
                                    }, this),
                                    " Depth over breadth."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SkillsSection.jsx",
                                lineNumber: 391,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SkillsSection.jsx",
                        lineNumber: 367,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SkillsSection.jsx",
                lineNumber: 202,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SkillsSection.jsx",
        lineNumber: 197,
        columnNumber: 9
    }, this);
}
_s1(SkillsSection, "Asoaf7HZd5iboEHLUcro1N5+pq8=", false, function() {
    return [
        useInView
    ];
});
_c2 = SkillsSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ExpressIcon");
__turbopack_context__.k.register(_c1, "SkillCard");
__turbopack_context__.k.register(_c2, "SkillsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProjectsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
/* ─── Project Data ─────────────────────────────────────────────────────────── */ const PROJECTS = [
    {
        id: 'P001',
        title: 'VivaMate',
        sub: 'AI-Powered Mock Interview Platform',
        desc: 'A MERN-stack AI interview simulator with live camera & mic support, speech-to-text answers, and AI-generated questions via OpenRouter. Evaluates responses for clarity, confidence, and technical depth with detailed analytics and downloadable PDF reports.',
        tech: [
            'React 19',
            'Node.js',
            'Express',
            'MongoDB',
            'Socket.io',
            'OpenAI API',
            'Recharts',
            'JWT'
        ],
        image: '/vivamate.jpg',
        github: 'https://github.com/chahel1817/VivaMate',
        live: 'https://vivamate.vercel.app/',
        accentColor: '#a855f7',
        glowColor: 'rgba(168,85,247,0.35)',
        glowColorSoft: 'rgba(168,85,247,0.08)',
        status: 'LIVE',
        statusColor: '#a855f7',
        highlights: [
            'AI Questions',
            'Speech-to-Text',
            'Analytics',
            'PDF Reports'
        ]
    },
    {
        id: 'P002',
        title: 'PriceBuddy',
        sub: 'E-commerce Tracker & Price Monitor',
        desc: 'A full-stack tracker that monitors prices across Amazon and eBay via SerpApi and high-precision parsing with Cheerio. Features include URL canonicalization, automated price refreshes via scheduled cron jobs, and real-time Nodemailer alerts for price drops. The MySQL-backed history provides per-product trend analytics in a premium Next.js dashboard.',
        tech: [
            'Next.js',
            'Node.js',
            'Express',
            'MySQL',
            'SerpApi',
            'Cheerio',
            'Cron',
            'Nodemailer',
            'Tailwind CSS'
        ],
        image: '/pricebuddy.png',
        github: 'https://github.com/chahel1817/PriceBuddy',
        live: 'https://price-buddy-three.vercel.app/',
        accentColor: '#06b6d4',
        glowColor: 'rgba(6,182,212,0.35)',
        glowColorSoft: 'rgba(6,182,212,0.08)',
        status: 'LIVE',
        statusColor: '#06b6d4',
        highlights: [
            'Price Scrapers',
            'Cron Jobs',
            'Email Alerts',
            'Trend History'
        ]
    },
    {
        id: 'P004',
        title: 'MaxRate',
        sub: 'Next-Gen API Rate Limiting & Traffic Analytics',
        desc: 'A high-performance SaaS platform for API protection. Features intelligent rate-limiting, live traffic analytics with 5s polling, and an activity stream. Built with a premium glassmorphism UI and a robust Spring Boot backend.',
        tech: [
            'Next.js 16',
            'React 19',
            'Tailwind CSS 4',
            'Framer Motion',
            'Spring Boot 4',
            'Spring Security',
            'Hibernate/JPA',
            'MySQL 8'
        ],
        image: '/maxrate.png',
        github: 'https://github.com/chahel1817/maxrate',
        live: 'https://maxrate.vercel.app/',
        accentColor: '#f5c518',
        glowColor: 'rgba(245,197,24,0.35)',
        glowColorSoft: 'rgba(245,197,24,0.08)',
        status: 'LIVE',
        statusColor: '#f5c518',
        highlights: [
            'API Guard',
            'Live Charts',
            'SAAS Ready',
            'Traffic Stream'
        ]
    },
    {
        id: 'P003',
        title: 'EduTrack',
        sub: 'Smart Learning & Quiz Platform',
        desc: 'A comprehensive EdTech ecosystem enabling students to take interactive quizzes and earn certificates. Features AI-powered assessment generation from PDF uploads and real-time performance tracking for educators via dynamic dashboards.',
        tech: [
            'React',
            'Node.js',
            'Express',
            'MongoDB',
            'Tailwind CSS',
            'Recharts',
            'JWT',
            'AI API'
        ],
        image: '/edutrack_preview.png',
        github: 'https://github.com/chahel1817/EduTrack',
        live: 'https://edu-track-coral.vercel.app/',
        accentColor: '#06b6d4',
        glowColor: 'rgba(6,182,212,0.35)',
        glowColorSoft: 'rgba(6,182,212,0.08)',
        status: 'LIVE',
        statusColor: '#06b6d4',
        highlights: [
            'AI Quiz Gen',
            'PDF-to-Quiz',
            'Certificates',
            'Live Dashboard'
        ]
    },
    {
        id: 'P005',
        title: 'Kickoff Arena',
        sub: 'Ultimate Football Manager & Squad Builder',
        desc: 'An immersive sports management platform where users build their dream squads and manage tactics. Features dynamic player cards, real-time squad valuation, and tactical lineup configurations with a high-fidelity glassmorphism interface.',
        tech: [
            'Next.js',
            'React',
            'Tailwind CSS',
            'Framer Motion',
            'Lucide Icons'
        ],
        image: '/kickoff.png',
        github: 'https://github.com/chahel1817/kickoff-arena',
        live: 'https://kickoff-arena.vercel.app/',
        accentColor: '#22c55e',
        glowColor: 'rgba(34,197,94,0.35)',
        glowColorSoft: 'rgba(34,197,94,0.08)',
        status: 'LIVE',
        statusColor: '#22c55e',
        highlights: [
            'Squad Builder',
            'Tactical UI',
            'Player Stats',
            'Dream Team'
        ]
    }
];
/* ─── Tech Badge ────────────────────────────────────────────────────────────── */ function TechBadge({ label, accent }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        style: {
            fontSize: 10,
            fontFamily: "'Orbitron', monospace",
            letterSpacing: '0.08em',
            padding: '3px 9px',
            borderRadius: 3,
            background: `${accent}12`,
            border: `1px solid ${accent}30`,
            color: accent,
            whiteSpace: 'nowrap'
        },
        children: label
    }, void 0, false, {
        fileName: "[project]/src/components/ProjectsSection.jsx",
        lineNumber: 93,
        columnNumber: 9
    }, this);
}
_c = TechBadge;
/* ─── Project Card ──────────────────────────────────────────────────────────── */ function ProjectCard({ p, i }) {
    _s();
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
        initial: {
            opacity: 0,
            y: 48
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: '-60px'
        },
        transition: {
            duration: 0.55,
            delay: i * 0.15,
            ease: [
                0.23,
                1,
                0.32,
                1
            ]
        },
        onHoverStart: ()=>setHov(true),
        onHoverEnd: ()=>setHov(false),
        style: {
            position: 'relative',
            borderRadius: 16,
            overflow: 'hidden',
            background: hov ? `linear-gradient(135deg, rgba(13,13,26,0.95) 0%, ${p.glowColorSoft} 100%)` : 'rgba(13,13,26,0.85)',
            backdropFilter: 'blur(24px)',
            border: `1px solid ${hov ? p.accentColor + '55' : 'rgba(255,255,255,0.06)'}`,
            boxShadow: hov ? `0 0 0 1px ${p.accentColor}25, 0 32px 64px rgba(0,0,0,0.6), 0 0 80px ${p.glowColor}, inset 0 1px 0 rgba(255,255,255,0.06)` : `0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)`,
            transform: hov ? 'translateY(-10px) scale(1.01)' : 'translateY(0) scale(1)',
            transition: 'all 0.4s cubic-bezier(0.23,1,0.32,1)',
            display: 'flex',
            flexDirection: 'column'
        },
        children: [
            hov && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 16,
                    background: `radial-gradient(ellipse at 50% 0%, ${p.glowColor} 0%, transparent 65%)`,
                    pointerEvents: 'none',
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 143,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 3,
                    background: hov ? `linear-gradient(90deg, transparent 0%, ${p.accentColor} 40%, ${p.accentColor} 60%, transparent 100%)` : `linear-gradient(90deg, transparent, ${p.accentColor}40, transparent)`,
                    transition: 'all 0.4s',
                    position: 'relative',
                    zIndex: 1
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 151,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    overflow: 'hidden',
                    height: 220,
                    background: `linear-gradient(135deg, #0d0d1a, #140d28)`,
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: p.image,
                        alt: `${p.title} screenshot`,
                        style: {
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center',
                            transform: hov ? 'scale(1.06)' : 'scale(1)',
                            transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)',
                            opacity: 1
                        },
                        onError: (e)=>{
                            e.target.style.display = 'none';
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '55%',
                            background: 'linear-gradient(to top, rgba(13,13,26,0.82) 0%, rgba(13,13,26,0.22) 60%, transparent 100%)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 179,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 100,
                            height: 100,
                            background: `radial-gradient(circle at top right, ${p.glowColor} 0%, transparent 70%)`,
                            pointerEvents: 'none',
                            opacity: hov ? 0.7 : 0.3,
                            transition: 'opacity 0.4s'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 185,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 14,
                            left: 14,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "'Orbitron', monospace",
                                fontSize: 9,
                                fontWeight: 700,
                                letterSpacing: '0.18em',
                                padding: '4px 10px',
                                borderRadius: 20,
                                background: `${p.accentColor}22`,
                                border: `1px solid ${p.accentColor}55`,
                                color: p.accentColor,
                                backdropFilter: 'blur(8px)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 5
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        width: 5,
                                        height: 5,
                                        borderRadius: '50%',
                                        background: p.accentColor,
                                        boxShadow: `0 0 6px ${p.accentColor}`,
                                        animation: 'pulseDot 1.5s ease-in-out infinite'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProjectsSection.jsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this),
                                p.status
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProjectsSection.jsx",
                            lineNumber: 196,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 192,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            top: 14,
                            right: 14,
                            fontFamily: "'Orbitron', monospace",
                            fontSize: 9,
                            color: 'rgba(255,255,255,0.2)',
                            letterSpacing: '0.12em'
                        },
                        children: p.id
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 215,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            bottom: 12,
                            left: 14,
                            right: 14,
                            display: 'flex',
                            gap: 6,
                            flexWrap: 'wrap'
                        },
                        children: p.highlights.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "'Rajdhani', sans-serif",
                                    fontSize: 10,
                                    fontWeight: 600,
                                    letterSpacing: '0.06em',
                                    padding: '2px 8px',
                                    borderRadius: 4,
                                    background: 'rgba(0,0,0,0.6)',
                                    backdropFilter: 'blur(8px)',
                                    border: `1px solid ${p.accentColor}40`,
                                    color: 'rgba(255,255,255,0.75)'
                                },
                                children: h
                            }, h, false, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 229,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 224,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 161,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '22px 24px 24px',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "f-orbitron",
                        style: {
                            color: '#ffffff',
                            fontWeight: 900,
                            fontSize: 17,
                            marginBottom: 5,
                            letterSpacing: '0.04em',
                            textShadow: hov ? `0 0 24px ${p.accentColor}55` : 'none',
                            transition: 'text-shadow 0.4s'
                        },
                        children: p.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 244,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "f-rajdhani",
                        style: {
                            color: p.accentColor,
                            fontSize: 12,
                            fontWeight: 600,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            marginBottom: 14,
                            opacity: 0.85
                        },
                        children: p.sub
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 252,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "f-rajdhani",
                        style: {
                            color: 'rgba(200,200,220,0.6)',
                            fontSize: 13.5,
                            lineHeight: 1.7,
                            marginBottom: 20,
                            flex: 1
                        },
                        children: p.desc
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 261,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 6,
                            marginBottom: 20
                        },
                        children: p.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechBadge, {
                                label: t,
                                accent: p.accentColor
                            }, t, false, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 270,
                                columnNumber: 38
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 1,
                            background: `linear-gradient(90deg, ${p.accentColor}30, transparent)`,
                            marginBottom: 18
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 274,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 12,
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                href: p.live,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: {
                                    scale: 1.04
                                },
                                whileTap: {
                                    scale: 0.97
                                },
                                style: {
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 7,
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 10,
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    padding: '11px 16px',
                                    borderRadius: 8,
                                    background: hov ? `linear-gradient(135deg, ${p.accentColor}CC, ${p.accentColor}88)` : `linear-gradient(135deg, ${p.accentColor}99, ${p.accentColor}55)`,
                                    color: '#fff',
                                    textDecoration: 'none',
                                    boxShadow: hov ? `0 0 24px ${p.glowColor}, 0 4px 12px rgba(0,0,0,0.4)` : 'none',
                                    border: `1px solid ${p.accentColor}60`,
                                    transition: 'all 0.35s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiExternalLink, {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 296,
                                        columnNumber: 25
                                    }, this),
                                    "Live Site"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                href: p.github,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: {
                                    scale: 1.04
                                },
                                whileTap: {
                                    scale: 0.97
                                },
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 7,
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 10,
                                    fontWeight: 700,
                                    letterSpacing: '0.12em',
                                    textTransform: 'uppercase',
                                    padding: '11px 18px',
                                    borderRadius: 8,
                                    background: 'rgba(255,255,255,0.04)',
                                    color: 'rgba(255,255,255,0.6)',
                                    textDecoration: 'none',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    transition: 'all 0.35s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiGithub, {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 314,
                                        columnNumber: 25
                                    }, this),
                                    "Code"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 299,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 277,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 242,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.jsx",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
_s(ProjectCard, "9/uAcqUQPQAY6db9qMgZXXwbOpM=");
_c1 = ProjectCard;
function ProjectsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        style: {
            position: 'relative',
            padding: '130px 0 140px',
            background: 'rgba(13,13,26,0.46)',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes floatOrb {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 332,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'floatOrb 12s ease-in-out infinite',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 349,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '10%',
                    right: '-5%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(40px)',
                    animation: 'floatOrb 15s ease-in-out infinite reverse',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 355,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '55%',
                    left: '45%',
                    width: 350,
                    height: 350,
                    background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(30px)',
                    animation: 'floatOrb 18s ease-in-out infinite',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 361,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
                    backgroundSize: '60px 60px'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 369,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "projects-container",
                style: {
                    maxWidth: 1240,
                    margin: '0 auto',
                    padding: '0 24px',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6
                        },
                        style: {
                            textAlign: 'center',
                            marginBottom: 72
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    marginBottom: 20,
                                    padding: '6px 16px',
                                    borderRadius: 20,
                                    background: 'rgba(245,197,24,0.07)',
                                    border: '1px solid rgba(245,197,24,0.2)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 4,
                                            height: 4,
                                            borderRadius: '50%',
                                            background: '#f5c518',
                                            boxShadow: '0 0 6px rgba(245,197,24,0.8)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 394,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "f-mono",
                                        style: {
                                            color: 'rgba(245,197,24,0.7)',
                                            fontSize: 10,
                                            letterSpacing: '0.24em'
                                        },
                                        children: "05 // PROJECTS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 395,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 4,
                                            height: 4,
                                            borderRadius: '50%',
                                            background: '#f5c518',
                                            boxShadow: '0 0 6px rgba(245,197,24,0.8)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 398,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 389,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "f-orbitron",
                                style: {
                                    fontSize: 'clamp(34px, 5.5vw, 58px)',
                                    fontWeight: 900,
                                    color: '#fff',
                                    lineHeight: 1.1,
                                    marginBottom: 14
                                },
                                children: [
                                    "THINGS I'VE",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#f5c518',
                                            textShadow: '0 0 30px rgba(245,197,24,0.7), 0 0 60px rgba(245,197,24,0.3)'
                                        },
                                        children: "BUILT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 407,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 402,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-rajdhani",
                                style: {
                                    color: 'rgba(220,228,240,0.82)',
                                    fontSize: 16,
                                    maxWidth: 620,
                                    margin: '0 auto',
                                    lineHeight: 1.6
                                },
                                children: "Real-world full-stack applications deployed and live — each one engineered to solve actual problems."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 416,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 12,
                                    marginTop: 28
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 60,
                                            height: 1,
                                            background: 'linear-gradient(to right, transparent, rgba(245,197,24,0.4))'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 425,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 6,
                                            height: 6,
                                            borderRadius: '50%',
                                            background: '#f5c518',
                                            boxShadow: '0 0 10px rgba(245,197,24,0.8)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 426,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 60,
                                            height: 1,
                                            background: 'linear-gradient(to left, transparent, rgba(245,197,24,0.4))'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 427,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 424,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 381,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "projects-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 370px), 1fr))',
                            gap: 28
                        },
                        children: PROJECTS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                p: p,
                                i: i
                            }, p.id, false, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 438,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 432,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            delay: 0.4
                        },
                        style: {
                            textAlign: 'center',
                            marginTop: 72
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-rajdhani",
                                style: {
                                    color: 'rgba(200,200,220,0.35)',
                                    marginBottom: 24,
                                    fontSize: 15
                                },
                                children: "More projects available on GitHub"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 450,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                href: "https://github.com/chahel1817",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                whileHover: {
                                    scale: 1.05,
                                    boxShadow: '0 0 30px rgba(245,197,24,0.35), 0 0 60px rgba(245,197,24,0.1)'
                                },
                                whileTap: {
                                    scale: 0.97
                                },
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    fontFamily: "'Orbitron', monospace",
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    padding: '14px 32px',
                                    borderRadius: 8,
                                    border: '1px solid rgba(245,197,24,0.4)',
                                    color: '#f5c518',
                                    textDecoration: 'none',
                                    background: 'rgba(245,197,24,0.05)',
                                    backdropFilter: 'blur(8px)',
                                    transition: 'all 0.3s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiGithub, {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProjectsSection.jsx",
                                        lineNumber: 472,
                                        columnNumber: 25
                                    }, this),
                                    "View All Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProjectsSection.jsx",
                                lineNumber: 453,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProjectsSection.jsx",
                        lineNumber: 443,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 378,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @media (max-width: 640px) {
                    #projects { padding: 80px 0 100px !important; }
                    .projects-container { padding: 0 16px !important; }
                    .projects-grid { 
                        grid-template-columns: 1fr !important;
                        gap: 20px !important;
                    }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/ProjectsSection.jsx",
                lineNumber: 477,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProjectsSection.jsx",
        lineNumber: 326,
        columnNumber: 9
    }, this);
}
_c2 = ProjectsSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TechBadge");
__turbopack_context__.k.register(_c1, "ProjectCard");
__turbopack_context__.k.register(_c2, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExperienceSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const C = '#f5c518';
const CC = '#00f5ff';
const EDUCATION_DATA = [
    {
        id: 'LATEST',
        degree: 'B.Tech in Computer Science & Engineering',
        institution: 'Rai University × CodingGita',
        period: '2025 – Present',
        color: CC,
        desc: 'Advanced engineering curriculum with intensive focus on full-stack systems and specialized coding workflows.',
        bullets: [
            'Won 3rd Prize in TechHack 2025 State Level Hackathon',
            'Currently building enterprise-grade MERN architectures',
            'Applying system design principles to real-world AI pipelines'
        ],
        cta: {
            label: 'View Hackathon Achievement',
            href: 'https://www.linkedin.com/posts/chahel-tanna-87300a269_techhack2025-hackathon-learning-activity-7382258039925641217-ZjHc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEGs2FcBhvSqKKqUBOhJm9Uun-m2HYhm6VE'
        }
    },
    {
        id: 'DIPLOMA',
        degree: 'Diploma in Computer Engineering',
        institution: 'Marwadi University',
        period: '2022 – 2025',
        color: C,
        grade: 'CGPA: 9.02/10',
        desc: 'Foundational degree covering Core CS concepts, networking, and system software.',
        bullets: [
            'Ranked within the Top 10 Students of the Department',
            'Excellence in Database Management and SQL Optimization',
            'Led multiple group projects for internal university portals'
        ]
    },
    {
        id: 'SCHOOL',
        degree: 'Secondary Schooling (SSC)',
        institution: 'Tata Chem DAV Public School',
        period: 'Until 2022',
        color: '#a855f7',
        desc: 'Completed secondary education with a strong focus on Mathematics and Science fundamentals.',
        bullets: [
            'Consistent academic performance throughout schooling',
            'Active participation in regional science exhibitions',
            'Foundation for future engineering discipline established'
        ]
    }
];
function ExperienceSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref, {
        once: true,
        margin: '-80px'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        style: {
            position: 'relative',
            padding: '140px 0',
            background: 'linear-gradient(180deg, rgba(13,13,26,0.5), rgba(8,8,16,0.45))',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid-bg",
                style: {
                    position: 'absolute',
                    inset: 0
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ExperienceSection.jsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: 500,
                    height: 500,
                    background: 'radial-gradient(circle, rgba(245,197,24,0.03), transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ExperienceSection.jsx",
                lineNumber: 65,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: 400,
                    height: 400,
                    background: 'radial-gradient(circle, rgba(0,245,255,0.035), transparent 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ExperienceSection.jsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "experience-container",
                style: {
                    maxWidth: 1000,
                    margin: '0 auto',
                    padding: '0 24px',
                    position: 'relative',
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 80
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sec-label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "f-mono",
                                    style: {
                                        color: 'rgba(245,197,24,0.5)',
                                        fontSize: 11,
                                        letterSpacing: '0.28em'
                                    },
                                    children: "04 // ACADEMIC GENESIS"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExperienceSection.jsx",
                                    lineNumber: 73,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                lineNumber: 72,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "f-orbitron",
                                style: {
                                    fontSize: 'clamp(32px,5vw,52px)',
                                    fontWeight: 900,
                                    color: '#fff',
                                    lineHeight: 1.1
                                },
                                children: [
                                    "EDUCATION ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C,
                                            textShadow: '0 0 20px rgba(245,197,24,0.5)'
                                        },
                                        children: "HISTORY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                        lineNumber: 76,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-rajdhani",
                                style: {
                                    color: 'rgba(220,228,240,0.82)',
                                    fontSize: 17,
                                    marginTop: 12
                                },
                                children: "Education and growth timeline"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExperienceSection.jsx",
                        lineNumber: 71,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ref,
                        className: "experience-timeline",
                        style: {
                            position: 'relative',
                            paddingLeft: 'min(20px, 4vw)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 20,
                                    bottom: 0,
                                    width: 1,
                                    background: 'linear-gradient(180deg, #f5c518 0%, rgba(245,197,24,0.2) 70%, transparent 100%)',
                                    boxShadow: '0 0 8px rgba(245,197,24,0.2)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 60
                                },
                                children: EDUCATION_DATA.map((edu, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            x: -30
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            x: 0
                                        } : {},
                                        transition: {
                                            duration: 0.6,
                                            delay: i * 0.2,
                                            ease: 'easeOut'
                                        },
                                        className: "experience-item",
                                        style: {
                                            position: 'relative',
                                            paddingLeft: 40
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    left: -8,
                                                    top: 10,
                                                    width: 16,
                                                    height: 16,
                                                    borderRadius: '50%',
                                                    background: 'rgba(13,13,26,0.46)',
                                                    border: `2px solid ${edu.color}`,
                                                    boxShadow: `0 0 10px ${edu.color}80`,
                                                    zIndex: 2
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                className: "experience-card",
                                                whileHover: {
                                                    y: -5,
                                                    boxShadow: `0 10px 30px -10px rgba(0,0,0,0.5), 0 0 20px -5px ${edu.color}20`
                                                },
                                                style: {
                                                    background: 'rgba(13,13,26,0.8)',
                                                    backdropFilter: 'blur(12px)',
                                                    border: `1px solid rgba(255,255,255,0.06)`,
                                                    borderLeft: `3px solid ${edu.color}`,
                                                    borderRadius: '0 12px 12px 0',
                                                    padding: '32px',
                                                    transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexWrap: 'wrap',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'flex-start',
                                                            gap: 16,
                                                            marginBottom: 20
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: 10,
                                                                            marginBottom: 8
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiBookOpen, {
                                                                                style: {
                                                                                    color: edu.color
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                                lineNumber: 134,
                                                                                columnNumber: 49
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "f-mono",
                                                                                style: {
                                                                                    color: edu.color,
                                                                                    fontSize: 11,
                                                                                    letterSpacing: '0.1em'
                                                                                },
                                                                                children: edu.period
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                                lineNumber: 135,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                        className: "f-orbitron",
                                                                        style: {
                                                                            color: '#fff',
                                                                            fontSize: 'clamp(18px, 2.5vw, 22px)',
                                                                            fontWeight: 800,
                                                                            marginBottom: 4
                                                                        },
                                                                        children: edu.degree
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                        lineNumber: 137,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "f-rajdhani",
                                                                        style: {
                                                                            color: '#9ca3af',
                                                                            fontSize: 18,
                                                                            fontWeight: 600
                                                                        },
                                                                        children: edu.institution
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                lineNumber: 132,
                                                                columnNumber: 41
                                                            }, this),
                                                            edu.grade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    padding: '6px 14px',
                                                                    background: `${edu.color}15`,
                                                                    border: `1px solid ${edu.color}30`,
                                                                    borderRadius: 4,
                                                                    color: edu.color,
                                                                    fontFamily: "'Orbitron', monospace",
                                                                    fontSize: 12,
                                                                    fontWeight: 700
                                                                },
                                                                children: edu.grade
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                lineNumber: 141,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                        lineNumber: 131,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "f-rajdhani",
                                                        style: {
                                                            color: 'rgba(200,210,225,0.7)',
                                                            fontSize: 16,
                                                            lineHeight: 1.6,
                                                            marginBottom: 24,
                                                            maxWidth: 700
                                                        },
                                                        children: edu.desc
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                        lineNumber: 156,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: 12
                                                        },
                                                        children: edu.bullets.map((bullet, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'flex-start',
                                                                    gap: 12
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiAward, {
                                                                        style: {
                                                                            color: edu.color,
                                                                            marginTop: 4,
                                                                            flexShrink: 0
                                                                        },
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                        lineNumber: 161,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "f-rajdhani",
                                                                        style: {
                                                                            color: '#9ca3af',
                                                                            fontSize: 15,
                                                                            lineHeight: 1.4
                                                                        },
                                                                        children: bullet
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, j, true, {
                                                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 45
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 37
                                                    }, this),
                                                    edu.cta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                                        href: edu.cta.href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        whileHover: {
                                                            x: 5,
                                                            color: '#fff'
                                                        },
                                                        style: {
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: 8,
                                                            marginTop: 24,
                                                            color: edu.color,
                                                            textDecoration: 'none',
                                                            fontFamily: "'Orbitron', monospace",
                                                            fontSize: 11,
                                                            fontWeight: 700,
                                                            letterSpacing: '0.05em'
                                                        },
                                                        children: [
                                                            edu.cta.label,
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiArrowUpRight, {}, void 0, false, {
                                                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                                                lineNumber: 186,
                                                                columnNumber: 61
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                                        lineNumber: 168,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                                lineNumber: 118,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, edu.id, true, {
                                        fileName: "[project]/src/components/ExperienceSection.jsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperienceSection.jsx",
                                lineNumber: 94,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExperienceSection.jsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 80,
                            textAlign: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "f-mono",
                            style: {
                                color: '#8b95a5',
                                fontSize: 10,
                                letterSpacing: '0.2em'
                            },
                            children: "END OF ACADEMIC TRANSCRIPT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperienceSection.jsx",
                            lineNumber: 197,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExperienceSection.jsx",
                        lineNumber: 196,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExperienceSection.jsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @media (max-width: 640px) {
                    #experience { padding: 80px 0 !important; }
                    .experience-container { padding: 0 16px !important; }
                    .experience-timeline { padding-left: 10px !important; }
                    .experience-item { padding-left: 20px !important; }
                    .experience-card { padding: 20px !important; }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/ExperienceSection.jsx",
                lineNumber: 200,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExperienceSection.jsx",
        lineNumber: 61,
        columnNumber: 9
    }, this);
}
_s(ExperienceSection, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        useInView
    ];
});
_c = ExperienceSection;
var _c;
__turbopack_context__.k.register(_c, "ExperienceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InterestsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InterestsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/gi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const C = '#f5c518';
const CC = '#00f5ff';
const INTERESTS = [
    {
        icon: FiBookOpen,
        title: 'Reading',
        desc: 'Focusing on self-growth and biopics. I enjoy learning from the journeys of successful people and expanding my perspective.',
        color: '#a855f7'
    },
    {
        icon: GiSoccerBall,
        title: 'Football',
        desc: 'Love playing and watching football. The teamwork and strategy involved on the pitch are truly inspiring.',
        color: CC
    },
    {
        icon: GiTennisRacket,
        title: 'Tennis',
        desc: 'A frequent player on the court. It helps me stay agile and sharp, both physically and mentally.',
        color: C
    },
    {
        icon: GiWeightLiftingUp,
        title: 'Fitness & Gym',
        desc: 'Consistent gym-goer. Working out is my daily ritual to maintain discipline and high energy levels.',
        color: '#4ade80'
    },
    {
        icon: FiMusic,
        title: 'Music',
        desc: 'Essential for my workflow. Lofi, Synthwave, and energetic beats keep me in the flow during long coding sessions.',
        color: '#f472b6'
    },
    {
        icon: FiUsers,
        title: 'Cultures & Mindsets',
        desc: 'Fascinated by exploring new cultures and understanding different human perspectives. I love learning how people think and live across the globe.',
        color: '#fb923c'
    }
];
function InterestsSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref, {
        once: true,
        margin: '-100px'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "interests",
        style: {
            position: 'relative',
            padding: '140px 0',
            background: 'linear-gradient(180deg, rgba(8,8,16,0.45), rgba(13,13,26,0.5))',
            overflow: 'hidden'
        },
        className: "jsx-696cbf53583975ad",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    backgroundSize: '40px 40px'
                },
                className: "jsx-696cbf53583975ad" + " " + "grid-bg"
            }, void 0, false, {
                fileName: "[project]/src/components/InterestsSection.jsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '0 24px',
                    position: 'relative',
                    zIndex: 1
                },
                className: "jsx-696cbf53583975ad",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 80
                        },
                        className: "jsx-696cbf53583975ad",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    marginBottom: 20
                                },
                                className: "jsx-696cbf53583975ad" + " " + "sec-label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'rgba(245,197,24,0.5)',
                                        fontSize: 11,
                                        letterSpacing: '0.28em'
                                    },
                                    className: "jsx-696cbf53583975ad" + " " + "f-mono",
                                    children: "05 // BEYOND THE CODE"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/InterestsSection.jsx",
                                    lineNumber: 62,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/InterestsSection.jsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontSize: 'clamp(32px,5vw,52px)',
                                    fontWeight: 900,
                                    color: '#fff',
                                    lineHeight: 1.1
                                },
                                className: "jsx-696cbf53583975ad" + " " + "f-orbitron",
                                children: [
                                    "OFFLINE ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C,
                                            textShadow: '0 0 20px rgba(245,197,24,0.5)'
                                        },
                                        className: "jsx-696cbf53583975ad",
                                        children: "MODE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterestsSection.jsx",
                                        lineNumber: 65,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/InterestsSection.jsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: '#6b7280',
                                    fontSize: 17,
                                    marginTop: 12
                                },
                                className: "jsx-696cbf53583975ad" + " " + "f-rajdhani",
                                children: "What I do when I'm not in front of a terminal"
                            }, void 0, false, {
                                fileName: "[project]/src/components/InterestsSection.jsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/InterestsSection.jsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ref,
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                            gap: 24
                        },
                        className: "jsx-696cbf53583975ad",
                        children: INTERESTS.map((interest, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    y: 0
                                } : {},
                                transition: {
                                    duration: 0.5,
                                    delay: i * 0.1
                                },
                                whileHover: {
                                    y: -8
                                },
                                style: {
                                    background: 'rgba(13,13,26,0.8)',
                                    border: '1px solid rgba(255,255,255,0.06)',
                                    borderRadius: 12,
                                    padding: 32,
                                    transition: 'all 0.3s cubic-bezier(0.23,1,0.32,1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: -40,
                                            right: -40,
                                            width: 120,
                                            height: 120,
                                            background: `radial-gradient(circle, ${interest.color}15 0%, transparent 70%)`,
                                            borderRadius: '50%'
                                        },
                                        className: "jsx-696cbf53583975ad"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterestsSection.jsx",
                                        lineNumber: 89,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 44,
                                            height: 44,
                                            borderRadius: 10,
                                            background: `${interest.color}10`,
                                            border: `1px solid ${interest.color}25`,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginBottom: 20,
                                            color: interest.color
                                        },
                                        className: "jsx-696cbf53583975ad",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(interest.icon, {
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/InterestsSection.jsx",
                                            lineNumber: 102,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterestsSection.jsx",
                                        lineNumber: 95,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: '#fff',
                                            fontSize: 18,
                                            fontWeight: 700,
                                            marginBottom: 12
                                        },
                                        className: "jsx-696cbf53583975ad" + " " + "f-orbitron",
                                        children: interest.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterestsSection.jsx",
                                        lineNumber: 105,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            color: '#9ca3af',
                                            fontSize: 15,
                                            lineHeight: 1.6
                                        },
                                        className: "jsx-696cbf53583975ad" + " " + "f-rajdhani",
                                        children: interest.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterestsSection.jsx",
                                        lineNumber: 106,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            height: 2,
                                            width: '100%',
                                            background: `linear-gradient(90deg, ${interest.color}40, transparent)`
                                        },
                                        className: "jsx-696cbf53583975ad"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/InterestsSection.jsx",
                                        lineNumber: 109,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, interest.title, true, {
                                fileName: "[project]/src/components/InterestsSection.jsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/InterestsSection.jsx",
                        lineNumber: 70,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: 80,
                            textAlign: 'center'
                        },
                        className: "jsx-696cbf53583975ad",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                color: '#4b5563',
                                fontSize: 14,
                                fontStyle: 'italic',
                                letterSpacing: '0.05em'
                            },
                            className: "jsx-696cbf53583975ad" + " " + "f-rajdhani",
                            children: '"Balance is not something you find, it\'s something you create."'
                        }, void 0, false, {
                            fileName: "[project]/src/components/InterestsSection.jsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InterestsSection.jsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InterestsSection.jsx",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "696cbf53583975ad",
                children: ".grid-bg.jsx-696cbf53583975ad{background-image:linear-gradient(#ffffff05 1px,#0000 1px),linear-gradient(90deg,#ffffff05 1px,#0000 1px)}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InterestsSection.jsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_s(InterestsSection, "O7qYEn3iCrBBWRAefWku+E/MdDM=", false, function() {
    return [
        useInView
    ];
});
_c = InterestsSection;
var _c;
__turbopack_context__.k.register(_c, "InterestsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ContactSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const C = '#f5c518';
const CC = '#00f5ff';
const INFO = [
    {
        icon: FiMail,
        label: 'Email',
        value: 'chahel1817@gmail.com',
        href: 'mailto:chahel1817@gmail.com',
        color: C
    },
    {
        icon: FiMapPin,
        label: 'Location',
        value: 'Ahmedabad, Gujarat, India',
        href: null,
        color: CC
    }
];
function Field({ label, name, value, onChange, type = 'text' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "f-mono",
                style: {
                    display: 'block',
                    color: 'rgba(245,197,24,0.65)',
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    marginBottom: 8
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: type,
                name: name,
                value: value,
                onChange: onChange,
                required: true,
                style: {
                    width: '100%',
                    background: 'rgba(8,8,16,0.6)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: 4,
                    padding: '12px 16px',
                    color: '#e2e8f0',
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: 15,
                    outline: 'none',
                    transition: 'border-color 0.2s'
                },
                onFocus: (e)=>{
                    e.target.style.borderColor = 'rgba(245,197,24,0.5)';
                },
                onBlur: (e)=>{
                    e.target.style.borderColor = 'rgba(255,255,255,0.14)';
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.jsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.jsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c = Field;
function TextArea({ label, name, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "f-mono",
                style: {
                    display: 'block',
                    color: 'rgba(245,197,24,0.65)',
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    marginBottom: 8
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.jsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: name,
                value: value,
                onChange: onChange,
                rows: 5,
                required: true,
                style: {
                    width: '100%',
                    background: 'rgba(8,8,16,0.6)',
                    border: '1px solid rgba(255,255,255,0.14)',
                    borderRadius: 4,
                    padding: '12px 16px',
                    color: '#e2e8f0',
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: 15,
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.2s'
                },
                onFocus: (e)=>{
                    e.target.style.borderColor = 'rgba(245,197,24,0.5)';
                },
                onBlur: (e)=>{
                    e.target.style.borderColor = 'rgba(255,255,255,0.14)';
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.jsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.jsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_c1 = TextArea;
function ContactSection() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = useInView(ref, {
        once: true,
        margin: '-80px'
    });
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const handleChange = (e)=>setForm((p)=>({
                ...p,
                [e.target.name]: e.target.value
            }));
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            if (res.ok) {
                setStatus('sent');
                setForm({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                setStatus('idle');
                alert('Failed to send message. Please check your environment variables.');
            }
        } catch (err) {
            console.error(err);
            setStatus('idle');
        }
        setTimeout(()=>setStatus('idle'), 4000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        style: {
            position: 'relative',
            padding: '120px 0',
            background: 'rgba(13,13,26,0.46)',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 1,
                    height: '100%',
                    background: 'linear-gradient(180deg, rgba(245,197,24,0.06), transparent)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.jsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "contact-container",
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '0 24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 64
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sec-label",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "f-mono",
                                    style: {
                                        color: 'rgba(245,197,24,0.65)',
                                        fontSize: 11,
                                        letterSpacing: '0.24em'
                                    },
                                    children: "06 // CONTACT"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ContactSection.jsx",
                                    lineNumber: 76,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.jsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "f-orbitron",
                                style: {
                                    fontSize: 'clamp(32px,5vw,52px)',
                                    fontWeight: 900,
                                    color: '#fff'
                                },
                                children: [
                                    "LET'S ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: C,
                                            textShadow: '0 0 20px rgba(245,197,24,0.6)'
                                        },
                                        children: "WORK TOGETHER"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.jsx",
                                        lineNumber: 79,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.jsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-rajdhani",
                                style: {
                                    color: '#a8b4c7',
                                    fontSize: 18,
                                    marginTop: 12
                                },
                                children: "Share your project details and I'll get back to you."
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.jsx",
                                lineNumber: 81,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactSection.jsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: ref,
                        className: "contact-grid",
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))',
                            gap: 64,
                            alignItems: 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                        initial: {
                                            opacity: 0,
                                            scale: 0.85
                                        },
                                        animate: inView ? {
                                            opacity: 1,
                                            scale: 1
                                        } : {},
                                        transition: {
                                            duration: 0.7
                                        },
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'center',
                                            marginBottom: 40
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: 160,
                                                height: 160,
                                                borderRadius: '50%',
                                                border: '1px solid rgba(245,197,24,0.3)',
                                                display: 'grid',
                                                placeItems: 'center',
                                                background: 'radial-gradient(circle, rgba(245,197,24,0.08), transparent 70%)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "f-orbitron",
                                                style: {
                                                    color: C,
                                                    fontSize: 12,
                                                    letterSpacing: '0.14em'
                                                },
                                                children: "AVAILABLE"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.jsx",
                                                lineNumber: 93,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.jsx",
                                            lineNumber: 92,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.jsx",
                                        lineNumber: 86,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 12,
                                            marginBottom: 40
                                        },
                                        children: INFO.map(({ icon: Icon, label, value, href, color }, i)=>{
                                            const inner = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: -20
                                                },
                                                animate: inView ? {
                                                    opacity: 1,
                                                    x: 0
                                                } : {},
                                                transition: {
                                                    delay: i * 0.1 + 0.3
                                                },
                                                whileHover: {
                                                    x: 5
                                                },
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 16,
                                                    padding: '16px 20px',
                                                    background: 'rgba(13,13,26,0.6)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    borderRadius: 8,
                                                    transition: 'all 0.25s'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: 8,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            background: `${color}12`,
                                                            border: `1px solid ${color}28`
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 17,
                                                            style: {
                                                                color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.jsx",
                                                            lineNumber: 104,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ContactSection.jsx",
                                                        lineNumber: 103,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "f-mono",
                                                                style: {
                                                                    color: '#8b95a8',
                                                                    fontSize: 10,
                                                                    letterSpacing: '0.12em',
                                                                    textTransform: 'uppercase'
                                                                },
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.jsx",
                                                                lineNumber: 107,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "f-rajdhani",
                                                                style: {
                                                                    color: '#d6deea',
                                                                    fontWeight: 600,
                                                                    fontSize: 15
                                                                },
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/ContactSection.jsx",
                                                                lineNumber: 108,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ContactSection.jsx",
                                                        lineNumber: 106,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/components/ContactSection.jsx",
                                                lineNumber: 100,
                                                columnNumber: 37
                                            }, this);
                                            return href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                    textDecoration: 'none'
                                                },
                                                children: inner
                                            }, label, false, {
                                                fileName: "[project]/src/components/ContactSection.jsx",
                                                lineNumber: 112,
                                                columnNumber: 47
                                            }, this) : inner;
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ContactSection.jsx",
                                        lineNumber: 97,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "f-mono",
                                                style: {
                                                    color: '#8b95a8',
                                                    fontSize: 10,
                                                    letterSpacing: '0.2em',
                                                    marginBottom: 14
                                                },
                                                children: "// SOCIAL"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.jsx",
                                                lineNumber: 117,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: 12
                                                },
                                                children: [
                                                    {
                                                        icon: FiGithub,
                                                        href: 'https://github.com/chahel1817',
                                                        h: '#fff'
                                                    },
                                                    {
                                                        icon: FiLinkedin,
                                                        href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/',
                                                        h: CC
                                                    },
                                                    {
                                                        icon: FiTwitter,
                                                        href: 'https://x.com/chahel1817',
                                                        h: '#60a5fa'
                                                    },
                                                    {
                                                        icon: FiInstagram,
                                                        href: 'https://www.instagram.com/chahel_9/',
                                                        h: '#e1306c'
                                                    },
                                                    {
                                                        icon: FiYoutube,
                                                        href: 'https://www.youtube.com/@Chahel-1817',
                                                        h: '#ff0000'
                                                    }
                                                ].map(({ icon: I, href, h }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                                        href: href,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        whileHover: {
                                                            y: -4,
                                                            scale: 1.2,
                                                            color: h
                                                        },
                                                        style: {
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: 8,
                                                            background: 'rgba(8,8,16,0.5)',
                                                            border: '1px solid rgba(255,255,255,0.1)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#9aa8bf',
                                                            transition: 'color 0.2s'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I, {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.jsx",
                                                            lineNumber: 130,
                                                            columnNumber: 41
                                                        }, this)
                                                    }, i, false, {
                                                        fileName: "[project]/src/components/ContactSection.jsx",
                                                        lineNumber: 126,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ContactSection.jsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ContactSection.jsx",
                                        lineNumber: 116,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ContactSection.jsx",
                                lineNumber: 85,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                initial: {
                                    opacity: 0,
                                    x: 28
                                },
                                animate: inView ? {
                                    opacity: 1,
                                    x: 0
                                } : {},
                                transition: {
                                    duration: 0.55,
                                    delay: 0.2
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "contact-card",
                                    style: {
                                        position: 'relative',
                                        background: 'rgba(13,13,26,0.75)',
                                        backdropFilter: 'blur(18px)',
                                        border: '1px solid rgba(245,197,24,0.16)',
                                        borderRadius: 8,
                                        padding: 36
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "corner-tl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.jsx",
                                            lineNumber: 139,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "corner-tr"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.jsx",
                                            lineNumber: 139,
                                            columnNumber: 58
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "corner-bl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.jsx",
                                            lineNumber: 139,
                                            columnNumber: 87
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "corner-br"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ContactSection.jsx",
                                            lineNumber: 139,
                                            columnNumber: 116
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginBottom: 28
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "f-orbitron",
                                                    style: {
                                                        color: C,
                                                        fontWeight: 700,
                                                        fontSize: 13,
                                                        letterSpacing: '0.14em',
                                                        marginBottom: 4
                                                    },
                                                    children: "SEND A MESSAGE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.jsx",
                                                    lineNumber: 141,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "f-rajdhani",
                                                    style: {
                                                        color: '#b6c1d3',
                                                        fontSize: 15
                                                    },
                                                    children: "Fill out the form and I'll reply soon."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.jsx",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            style: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: 20
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-grid",
                                                    style: {
                                                        display: 'grid',
                                                        gridTemplateColumns: '1fr 1fr',
                                                        gap: 16
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                            label: "Name",
                                                            name: "name",
                                                            value: form.name,
                                                            onChange: handleChange,
                                                            type: "text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.jsx",
                                                            lineNumber: 146,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                            label: "Email",
                                                            name: "email",
                                                            value: form.email,
                                                            onChange: handleChange,
                                                            type: "email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ContactSection.jsx",
                                                            lineNumber: 147,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactSection.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArea, {
                                                    label: "Message",
                                                    name: "message",
                                                    value: form.message,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ContactSection.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.button, {
                                                    type: "submit",
                                                    disabled: status !== 'idle',
                                                    whileHover: status === 'idle' ? {
                                                        scale: 1.02,
                                                        boxShadow: '0 0 28px rgba(245,197,24,0.5)'
                                                    } : {},
                                                    whileTap: status === 'idle' ? {
                                                        scale: 0.98
                                                    } : {},
                                                    style: {
                                                        fontFamily: "'Orbitron', monospace",
                                                        fontSize: 12,
                                                        fontWeight: 700,
                                                        letterSpacing: '0.14em',
                                                        textTransform: 'uppercase',
                                                        padding: '16px',
                                                        borderRadius: 3,
                                                        border: 'none',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        gap: 10,
                                                        background: status === 'sent' ? 'rgba(74,222,128,0.15)' : status === 'sending' ? 'rgba(245,197,24,0.15)' : C,
                                                        color: status === 'sent' ? '#4ade80' : status === 'sending' ? 'rgba(245,197,24,0.6)' : '#080810',
                                                        border: status === 'idle' ? 'none' : '1px solid currentColor'
                                                    },
                                                    children: [
                                                        status === 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FiSend, {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactSection.jsx",
                                                                    lineNumber: 162,
                                                                    columnNumber: 61
                                                                }, this),
                                                                " SEND MESSAGE"
                                                            ]
                                                        }, void 0, true),
                                                        status === 'sending' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                                    animate: {
                                                                        rotate: 360
                                                                    },
                                                                    transition: {
                                                                        duration: 1,
                                                                        repeat: Infinity,
                                                                        ease: 'linear'
                                                                    },
                                                                    style: {
                                                                        width: 16,
                                                                        height: 16,
                                                                        border: '2px solid rgba(245,197,24,0.3)',
                                                                        borderTopColor: C,
                                                                        borderRadius: '50%'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ContactSection.jsx",
                                                                    lineNumber: 163,
                                                                    columnNumber: 64
                                                                }, this),
                                                                " SENDING..."
                                                            ]
                                                        }, void 0, true),
                                                        status === 'sent' && 'MESSAGE SENT SUCCESSFULLY'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/ContactSection.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/ContactSection.jsx",
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ContactSection.jsx",
                                    lineNumber: 138,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ContactSection.jsx",
                                lineNumber: 137,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactSection.jsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactSection.jsx",
                lineNumber: 73,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
                @media (max-width: 640px) {
                    #contact { padding: 80px 0 !important; }
                    .contact-container { padding: 0 16px !important; }
                    .contact-grid { 
                        grid-template-columns: 1fr !important;
                        gap: 40px !important;
                    }
                    .form-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .contact-card {
                        padding: 24px !important;
                    }
                }
            `
            }, void 0, false, {
                fileName: "[project]/src/components/ContactSection.jsx",
                lineNumber: 171,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactSection.jsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_s(ContactSection, "/tKUaGMDRlbx9r7NsO2fmfLIyh8=", false, function() {
    return [
        useInView
    ];
});
_c2 = ContactSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Field");
__turbopack_context__.k.register(_c1, "TextArea");
__turbopack_context__.k.register(_c2, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'framer-motion'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/fi'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'react-icons/si'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
;
const C = '#f5c518';
const CC = '#00f5ff';
const NAV = [
    {
        href: '#hero',
        label: 'Home'
    },
    {
        href: '#about',
        label: 'About'
    },
    {
        href: '#skills',
        label: 'Skills'
    },
    {
        href: '#projects',
        label: 'Projects'
    },
    {
        href: '#experience',
        label: 'Experience'
    },
    {
        href: '#contact',
        label: 'Contact'
    }
];
const STATUS = [
    {
        label: 'Server: Online',
        dot: '#4ade80'
    },
    {
        label: 'Systems: Active',
        dot: '#4ade80'
    },
    {
        label: 'Open for Work',
        dot: C
    }
];
function Footer() {
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            position: 'relative',
            background: 'rgba(8,8,16,0.55)',
            borderTop: '1px solid rgba(245,197,24,0.1)',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(245,197,24,0.4), rgba(0,245,255,0.4), transparent)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 1280,
                    margin: '0 auto',
                    padding: '64px 24px 32px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))',
                            gap: 48,
                            marginBottom: 48
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 10,
                                            marginBottom: 16
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "f-orbitron",
                                            style: {
                                                fontSize: 14,
                                                fontWeight: 700
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: C
                                                    },
                                                    children: "CHAHEL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 36,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        color: CC,
                                                        marginLeft: 6
                                                    },
                                                    children: "TANNA"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 35,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "f-rajdhani",
                                        style: {
                                            color: '#a8b4c7',
                                            fontSize: 15,
                                            lineHeight: 1.7,
                                            maxWidth: 280,
                                            marginBottom: 20
                                        },
                                        children: "Full stack developer building reliable and high-performance web applications."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 40,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://chaheltanna.vercel.app/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "f-mono",
                                        style: {
                                            color: '#d6deea',
                                            fontSize: 12,
                                            display: 'inline-block',
                                            marginBottom: 14
                                        },
                                        children: "Portfolio: chaheltanna.vercel.app"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 43,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: 10
                                        },
                                        children: [
                                            {
                                                icon: FiGithub,
                                                href: 'https://github.com/chahel1817',
                                                h: '#fff'
                                            },
                                            {
                                                icon: FiLinkedin,
                                                href: 'https://www.linkedin.com/in/chahel-tanna-87300a269/',
                                                h: CC
                                            },
                                            {
                                                icon: FiTwitter,
                                                href: 'https://x.com/chahel1817',
                                                h: '#60a5fa'
                                            },
                                            {
                                                icon: SiLeetcode,
                                                href: 'https://leetcode.com/u/Chahel/',
                                                h: '#f59e0b'
                                            },
                                            {
                                                icon: FiMail,
                                                href: 'mailto:chahel1817@gmail.com',
                                                h: C
                                            }
                                        ].map(({ icon: I, href, h }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                                href: href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                whileHover: {
                                                    y: -3,
                                                    color: h
                                                },
                                                style: {
                                                    width: 36,
                                                    height: 36,
                                                    borderRadius: 6,
                                                    background: 'rgba(13,13,26,0.8)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#a8b4c7',
                                                    transition: 'color 0.2s'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I, {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 52,
                                                    columnNumber: 37
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 48,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 46,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "f-orbitron",
                                        style: {
                                            color: C,
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: '0.14em',
                                            marginBottom: 20
                                        },
                                        children: "NAVIGATION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 59,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 10
                                        },
                                        children: NAV.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.a, {
                                                href: l.href,
                                                whileHover: {
                                                    x: 5,
                                                    color: C
                                                },
                                                className: "f-rajdhani",
                                                style: {
                                                    color: '#b6c1d3',
                                                    fontSize: 15,
                                                    fontWeight: 500,
                                                    transition: 'color 0.2s'
                                                },
                                                children: l.label
                                            }, l.href, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 62,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 60,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 58,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "f-orbitron",
                                        style: {
                                            color: CC,
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: '0.14em',
                                            marginBottom: 20
                                        },
                                        children: "BUILT WITH"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 74,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 8
                                        },
                                        children: [
                                            'Next.js',
                                            'Framer Motion',
                                            'Tailwind CSS',
                                            'React Icons',
                                            'Vercel'
                                        ].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "f-mono",
                                                style: {
                                                    fontSize: 10,
                                                    padding: '4px 10px',
                                                    borderRadius: 3,
                                                    background: 'rgba(13,13,26,0.8)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    color: '#b6c1d3'
                                                },
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 77,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 75,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 73,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "f-orbitron",
                                        style: {
                                            color: '#b6c1d3',
                                            fontSize: 11,
                                            fontWeight: 700,
                                            letterSpacing: '0.14em',
                                            marginBottom: 20
                                        },
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: 10
                                        },
                                        children: STATUS.map(({ label, dot })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 8
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                                                        animate: {
                                                            opacity: [
                                                                1,
                                                                0.3,
                                                                1
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 2,
                                                            repeat: Infinity
                                                        },
                                                        style: {
                                                            width: 6,
                                                            height: 6,
                                                            borderRadius: '50%',
                                                            background: dot,
                                                            boxShadow: `0 0 6px ${dot}`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 87,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "f-mono",
                                                        style: {
                                                            color: '#b6c1d3',
                                                            fontSize: 11
                                                        },
                                                        children: label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 88,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 86,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 84,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 82,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            paddingTop: 24,
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 12
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-mono",
                                style: {
                                    color: '#94a3b8',
                                    fontSize: 11
                                },
                                children: [
                                    "(c) ",
                                    year,
                                    " Chahel Tanna. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(245,197,24,0.55)'
                                        },
                                        children: "All rights reserved."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 97,
                                        columnNumber: 50
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 96,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "f-mono",
                                style: {
                                    color: '#94a3b8',
                                    fontSize: 11
                                },
                                children: "Built with clarity, speed, and purpose."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Footer.jsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Footer.jsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.jsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GothamBackground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GothamBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/* ───── DARK MODE sub-components ───── */ function GothamSkyline() {
    const blocks = [
        [
            0,
            70,
            90
        ],
        [
            60,
            52,
            140
        ],
        [
            108,
            88,
            110
        ],
        [
            188,
            58,
            160
        ],
        [
            242,
            96,
            120
        ],
        [
            332,
            52,
            170
        ],
        [
            380,
            106,
            128
        ],
        [
            478,
            54,
            176
        ],
        [
            526,
            92,
            122
        ],
        [
            612,
            62,
            150
        ],
        [
            670,
            104,
            132
        ],
        [
            766,
            56,
            176
        ],
        [
            816,
            92,
            140
        ],
        [
            902,
            64,
            160
        ],
        [
            960,
            100,
            128
        ],
        [
            1052,
            56,
            170
        ],
        [
            1104,
            92,
            138
        ],
        [
            1190,
            64,
            162
        ],
        [
            1248,
            98,
            132
        ],
        [
            1338,
            74,
            148
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 1440 260",
        preserveAspectRatio: "none",
        style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: 300,
            opacity: 0.55,
            filter: 'blur(0.6px)'
        },
        children: [
            blocks.map(([x, w, h], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: x,
                    y: 260 - h,
                    width: w,
                    height: h,
                    fill: i % 2 ? '#121827' : '#182033'
                }, i, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "258",
                width: "1440",
                height: "2",
                fill: "#2a3755"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GothamBackground.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = GothamSkyline;
function BatmanRooftopSilhouette() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 420 260",
        preserveAspectRatio: "xMidYMax meet",
        style: {
            position: 'absolute',
            right: '4%',
            bottom: 12,
            width: 'min(28vw, 300px)',
            height: 'auto',
            opacity: 0.58
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "210",
                width: "420",
                height: "50",
                fill: "#0b0f1a"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "30",
                y: "198",
                width: "180",
                height: "12",
                fill: "#121827"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M262 204 C255 184, 252 161, 254 141 C257 112, 274 86, 292 86 C310 86, 327 111, 331 141 C334 163, 331 186, 323 204 Z",
                fill: "#090c14"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M273 110 L282 86 L291 110 Z",
                fill: "#090c14"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M293 110 L302 86 L311 110 Z",
                fill: "#090c14"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M255 156 C283 134, 303 134, 331 156 L321 180 C304 170, 282 170, 265 180 Z",
                fill: "#090c14"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M244 206 C260 172, 334 172, 350 206 L334 210 C323 190, 272 190, 260 210 Z",
                fill: "#090c14"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M94 198 L92 174 L100 174 L102 198 Z",
                fill: "#1d263b"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M132 198 L130 168 L138 168 L140 198 Z",
                fill: "#1d263b"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M170 198 L168 176 L176 176 L178 198 Z",
                fill: "#1d263b"
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GothamBackground.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c1 = BatmanRooftopSilhouette;
function BatSignalClouds({ mouseX }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 30% 20%, rgba(170,185,215,0.2), rgba(45,55,80,0.04) 45%, transparent 70%), radial-gradient(ellipse at 72% 18%, rgba(150,170,205,0.16), rgba(45,55,80,0.03) 48%, transparent 72%)',
                    filter: 'blur(2px)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: `${mouseX - 8}%`,
                    bottom: 42,
                    transform: 'translateX(-50%)',
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: 'rgba(245,197,24,0.8)',
                    boxShadow: '0 0 14px rgba(245,197,24,0.75), 0 0 36px rgba(245,197,24,0.5)',
                    transition: 'left 0.25s ease-out'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 600 900",
                style: {
                    position: 'absolute',
                    left: `${mouseX - 8}%`,
                    bottom: 44,
                    transform: 'translateX(-50%)',
                    width: 520,
                    height: 720,
                    opacity: 0.55,
                    transition: 'left 0.25s ease-out',
                    filter: 'blur(0.3px)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "beamCore",
                                x1: "50%",
                                y1: "100%",
                                x2: "50%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(245,197,24,0.34)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GothamBackground.jsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "45%",
                                        stopColor: "rgba(245,197,24,0.2)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GothamBackground.jsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(245,197,24,0.04)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GothamBackground.jsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GothamBackground.jsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "beamSoft",
                                x1: "50%",
                                y1: "100%",
                                x2: "50%",
                                y2: "0%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "rgba(245,197,24,0.18)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GothamBackground.jsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "55%",
                                        stopColor: "rgba(245,197,24,0.09)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GothamBackground.jsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "rgba(245,197,24,0)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GothamBackground.jsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GothamBackground.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GothamBackground.jsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M300 890 L284 500 L150 0 L450 0 L316 500 Z",
                        fill: "url(#beamSoft)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GothamBackground.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M300 890 L292 540 L215 0 L385 0 L308 540 Z",
                        fill: "url(#beamCore)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GothamBackground.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = BatSignalClouds;
function GothamBackground() {
    _s();
    const { isLofi } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrollY, setScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [mouseX, setMouseX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(52);
    const rain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GothamBackground.useMemo[rain]": ()=>Array.from({
                length: 320
            }).map({
                "GothamBackground.useMemo[rain]": (_, i)=>({
                        id: i,
                        left: i * 4.1 % 100,
                        delay: i * 0.07 % 2.8,
                        duration: 0.42 + i * 0.08 % 0.78,
                        opacity: 0.24 + i * 0.02 % 0.34,
                        height: 15 + i % 18
                    })
            }["GothamBackground.useMemo[rain]"])
    }["GothamBackground.useMemo[rain]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GothamBackground.useEffect": ()=>{
            setMounted(true);
            const onScroll = {
                "GothamBackground.useEffect.onScroll": ()=>setScrollY(window.scrollY || 0)
            }["GothamBackground.useEffect.onScroll"];
            const onMove = {
                "GothamBackground.useEffect.onMove": (e)=>setMouseX(e.clientX / window.innerWidth * 100)
            }["GothamBackground.useEffect.onMove"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            window.addEventListener('mousemove', onMove, {
                passive: true
            });
            return ({
                "GothamBackground.useEffect": ()=>{
                    window.removeEventListener('scroll', onScroll);
                    window.removeEventListener('mousemove', onMove);
                }
            })["GothamBackground.useEffect"];
        }
    }["GothamBackground.useEffect"], []);
    if (!mounted) return null;
    /* ── LOFI PEACEFUL DAY MODE ── */ if (isLofi) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'fixed',
                inset: 0,
                zIndex: 1,
                pointerEvents: 'none',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, #87CEEB 0%, #B0D4F1 18%, #D4E8F7 35%, #E8D5B7 60%, #F0C27F 78%, #E8A87C 100%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: '12%',
                        right: '18%',
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,240,200,1) 0%, rgba(255,210,140,0.85) 30%, rgba(255,180,100,0.4) 55%, transparent 75%)',
                        boxShadow: '0 0 60px rgba(255,200,100,0.5), 0 0 120px rgba(255,180,80,0.3), 0 0 200px rgba(255,160,60,0.15)',
                        animation: 'lofiSunPulse 6s ease-in-out infinite'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        top: '5%',
                        right: '12%',
                        width: 300,
                        height: 300,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255,220,150,0.18), transparent 65%)',
                        filter: 'blur(30px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        background: `
              radial-gradient(ellipse at 80% 15%, rgba(255,200,120,0.12), transparent 50%),
              radial-gradient(ellipse at 20% 30%, rgba(135,206,235,0.1), transparent 45%),
              radial-gradient(ellipse at 50% 90%, rgba(255,180,100,0.08), transparent 50%)
            `
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 181,
                    columnNumber: 9
                }, this),
                [
                    {
                        left: '3%',
                        top: '10%',
                        w: 280,
                        opacity: 0.6,
                        dur: 90
                    },
                    {
                        left: '25%',
                        top: '6%',
                        w: 220,
                        opacity: 0.45,
                        dur: 110
                    },
                    {
                        left: '55%',
                        top: '14%',
                        w: 300,
                        opacity: 0.5,
                        dur: 80
                    },
                    {
                        left: '78%',
                        top: '8%',
                        w: 240,
                        opacity: 0.4,
                        dur: 100
                    },
                    {
                        left: '12%',
                        top: '22%',
                        w: 180,
                        opacity: 0.35,
                        dur: 120
                    },
                    {
                        left: '65%',
                        top: '25%',
                        w: 200,
                        opacity: 0.3,
                        dur: 95
                    }
                ].map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: c.left,
                            top: c.top,
                            width: c.w,
                            height: c.w * 0.3,
                            borderRadius: '50%',
                            background: 'radial-gradient(ellipse, rgba(255,255,255,0.75), rgba(255,255,255,0.3) 50%, transparent 70%)',
                            opacity: c.opacity,
                            filter: 'blur(12px)',
                            animation: `lofiCloudDrift ${c.dur}s ease-in-out infinite`
                        }
                    }, i, false, {
                        fileName: "[project]/src/components/GothamBackground.jsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, this)),
                Array.from({
                    length: 20
                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            left: `${i * 5.1 % 100}%`,
                            top: `${i * 7.3 % 100}%`,
                            width: 2 + i % 3,
                            height: 2 + i % 3,
                            borderRadius: '50%',
                            background: 'rgba(255, 230, 180, 0.7)',
                            boxShadow: '0 0 4px rgba(255, 220, 150, 0.5)',
                            opacity: 0.3 + i * 0.03 % 0.3,
                            animation: `lofiFloat ${4 + i % 4}s ease-in-out ${i * 0.5 % 4}s infinite`
                        }
                    }, `p-${i}`, false, {
                        fileName: "[project]/src/components/GothamBackground.jsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 1440 320",
                    preserveAspectRatio: "none",
                    style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100%',
                        height: 320,
                        transform: `translateY(${scrollY * 0.03}px)`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 320 L0 200 Q180 130, 360 180 Q540 120, 720 160 Q900 100, 1100 150 Q1280 120, 1440 170 L1440 320 Z",
                            fill: "rgba(140, 180, 160, 0.35)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GothamBackground.jsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 320 L0 240 Q200 170, 450 210 Q600 160, 800 200 Q950 155, 1150 195 Q1300 170, 1440 210 L1440 320 Z",
                            fill: "rgba(130, 170, 130, 0.35)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GothamBackground.jsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0 320 L0 270 Q360 250, 720 260 Q1080 245, 1440 270 L1440 320 Z",
                            fill: "rgba(120, 155, 110, 0.3)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/GothamBackground.jsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 239,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(135,206,235,0.06) 0%, rgba(255,255,255,0.04) 50%, rgba(240,192,127,0.08) 100%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    children: `
          @keyframes lofiCloudDrift {
            0% { transform: translateX(0); }
            50% { transform: translateX(25px); }
            100% { transform: translateX(0); }
          }
          @keyframes lofiFloat {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
            50% { transform: translateY(-18px) scale(1.15); opacity: 0.5; }
          }
          @keyframes lofiSunPulse {
            0%, 100% { filter: brightness(1); transform: scale(1); }
            50% { filter: brightness(1.1); transform: scale(1.04); }
          }
        `
                }, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 260,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GothamBackground.jsx",
            lineNumber: 133,
            columnNumber: 7
        }, this);
    }
    /* ── DARK GOTHAM MODE (original) ── */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(6,9,18,0.58), rgba(7,10,22,0.66) 40%, rgba(6,8,18,0.78) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 30% 10%, rgba(190,210,255,0.11), transparent 38%), radial-gradient(circle at 75% 12%, rgba(170,195,245,0.1), transparent 42%)',
                    filter: 'blur(1px)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BatSignalClouds, {
                mouseX: mouseX
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    opacity: 1
                },
                children: rain.map((drop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            position: 'absolute',
                            top: '-12%',
                            left: `${drop.left}%`,
                            width: 1.35,
                            height: drop.height,
                            background: `linear-gradient(180deg, rgba(180,220,255,0), rgba(180,220,255,${drop.opacity}), rgba(180,220,255,0))`,
                            animation: `rainFall ${drop.duration}s linear ${drop.delay}s infinite`
                        }
                    }, drop.id, false, {
                        fileName: "[project]/src/components/GothamBackground.jsx",
                        lineNumber: 292,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    transform: `translateY(${scrollY * 0.035}px)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GothamSkyline, {}, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 308,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    transform: `translateY(${scrollY * 0.07}px)`,
                    opacity: 0.38
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GothamSkyline, {}, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 311,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    transform: `translateY(${scrollY * 0.05}px)`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BatmanRooftopSilhouette, {}, void 0, false, {
                    fileName: "[project]/src/components/GothamBackground.jsx",
                    lineNumber: 317,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 316,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(5,8,18,0.22), rgba(5,8,18,0.36) 58%, rgba(5,8,18,0.48) 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes rainFall {
          from { transform: translateY(-10vh) skewX(-12deg); }
          to { transform: translateY(118vh) skewX(-12deg); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/components/GothamBackground.jsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GothamBackground.jsx",
        lineNumber: 281,
        columnNumber: 5
    }, this);
}
_s(GothamBackground, "3ypTbGMghJ40fCYJWZ54gwWuR+0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c3 = GothamBackground;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GothamSkyline");
__turbopack_context__.k.register(_c1, "BatmanRooftopSilhouette");
__turbopack_context__.k.register(_c2, "BatSignalClouds");
__turbopack_context__.k.register(_c3, "GothamBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HeroSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AboutSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SectionDivider.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SkillsSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProjectsSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ExperienceSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InterestsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InterestsSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ContactSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GothamBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GothamBackground.jsx [app-client] (ecmascript)");
;
;
;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const CustomCursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/CustomCursor.jsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/CustomCursor.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CustomCursor;
const ThreeDElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/ThreeDElement.jsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/ThreeDElement.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = ThreeDElement;
const AchievementModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/components/AchievementModal.jsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/components/AchievementModal.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = AchievementModal;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomCursor, {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GothamBackground$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeDElement, {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AchievementModal, {}, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    zIndex: 3
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "gold"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "cyan",
                        flip: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SkillsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "mixed"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProjectsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "gold",
                        flip: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ExperienceSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "cyan"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InterestsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionDivider$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        variant: "mixed",
                        flip: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ContactSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c3 = Home;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CustomCursor");
__turbopack_context__.k.register(_c1, "ThreeDElement");
__turbopack_context__.k.register(_c2, "AchievementModal");
__turbopack_context__.k.register(_c3, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=%5Bproject%5D_src_44dd712b._.js.map