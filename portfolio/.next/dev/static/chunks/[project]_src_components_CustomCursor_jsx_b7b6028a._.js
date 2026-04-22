(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/CustomCursor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CustomCursor
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
function CustomCursor() {
    _s();
    const [pos, setPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [dot, setDot] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    });
    const [hover, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCursor.useEffect": ()=>{
            const move = {
                "CustomCursor.useEffect.move": (e)=>{
                    setPos({
                        x: e.clientX,
                        y: e.clientY
                    });
                    setTimeout({
                        "CustomCursor.useEffect.move": ()=>setDot({
                                x: e.clientX,
                                y: e.clientY
                            })
                    }["CustomCursor.useEffect.move"], 60);
                }
            }["CustomCursor.useEffect.move"];
            const over = {
                "CustomCursor.useEffect.over": (e)=>{
                    if (e.target.closest('a,button,[role="button"]')) setHov(true);
                }
            }["CustomCursor.useEffect.over"];
            const out = {
                "CustomCursor.useEffect.out": (e)=>{
                    if (e.target.closest('a,button,[role="button"]')) setHov(false);
                }
            }["CustomCursor.useEffect.out"];
            window.addEventListener('mousemove', move);
            document.addEventListener('mouseover', over);
            document.addEventListener('mouseout', out);
            return ({
                "CustomCursor.useEffect": ()=>{
                    window.removeEventListener('mousemove', move);
                    document.removeEventListener('mouseover', over);
                    document.removeEventListener('mouseout', out);
                }
            })["CustomCursor.useEffect"];
        }
    }["CustomCursor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                animate: {
                    x: pos.x - (hover ? 20 : 14),
                    y: pos.y - (hover ? 20 : 14),
                    scale: hover ? 1 : 1
                },
                transition: {
                    type: 'spring',
                    stiffness: 220,
                    damping: 20,
                    mass: 0.5
                },
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    zIndex: 9999,
                    width: hover ? 40 : 28,
                    height: hover ? 40 : 28,
                    borderRadius: '50%',
                    border: `1.5px solid ${hover ? 'rgba(245,197,24,0.9)' : 'rgba(245,197,24,0.6)'}`,
                    boxShadow: hover ? '0 0 12px rgba(245,197,24,0.7)' : 'none',
                    transition: 'width 0.2s, height 0.2s, border-color 0.2s, box-shadow 0.2s',
                    mixBlendMode: 'difference'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.jsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(motion.div, {
                animate: {
                    x: dot.x - 3,
                    y: dot.y - 3
                },
                transition: {
                    type: 'spring',
                    stiffness: 600,
                    damping: 30
                },
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    pointerEvents: 'none',
                    zIndex: 9999,
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#f5c518',
                    boxShadow: '0 0 6px rgba(245,197,24,0.8)',
                    opacity: hover ? 0 : 1,
                    transition: 'opacity 0.2s'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/CustomCursor.jsx",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(CustomCursor, "NhfMZRpFhApIrZ5A1NR4glbK+sI=");
_c = CustomCursor;
var _c;
__turbopack_context__.k.register(_c, "CustomCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CustomCursor.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/CustomCursor.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=%5Bproject%5D_src_components_CustomCursor_jsx_b7b6028a._.js.map