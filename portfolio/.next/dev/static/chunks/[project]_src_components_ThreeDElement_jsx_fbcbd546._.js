(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ThreeDElement.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeDElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@react-three/fiber'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'three'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Bat({ startPos, speed, flapSpeed, offset, batMaterial }) {
    _s();
    const groupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const leftWingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const rightWingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    // Custom geometry for an authentic, highly-detailed Bat
    const { wingGeometry, bodyGeometry } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Bat.useMemo": ()=>{
            const shape = new THREE.Shape();
            // Shoulder Joint
            shape.moveTo(0, 0);
            // Upper Arm Bone
            shape.quadraticCurveTo(1.5, 1.8, 3.2, 1.2);
            // Forearm / Outer Tip
            shape.quadraticCurveTo(5.2, 1.8, 6.5, 0);
            // Scalloped Wing Membrane (Outer Drop)
            shape.quadraticCurveTo(5.0, -1.0, 5.5, -3.5);
            // Scalloped Membrane (Finger 1 to 2)
            shape.quadraticCurveTo(3.5, -2.0, 3.0, -4.0);
            // Scalloped Membrane (Finger 2 to Body)
            shape.quadraticCurveTo(1.5, -2.0, 0.5, -4.5);
            // Bottom attachment to body
            shape.lineTo(0, -2.0);
            // Close shape
            shape.lineTo(0, 0);
            const extrudeSettings = {
                depth: 0.15,
                bevelEnabled: true,
                bevelSegments: 3,
                steps: 1,
                bevelSize: 0.08,
                bevelThickness: 0.08
            };
            // Extrude the wing so it has 3D thickness
            const wingGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            // Body is a sharp, diamond-like crystal
            const bodyGeo = new THREE.OctahedronGeometry(1.2, 1);
            bodyGeo.scale(0.8, 2.5, 0.6);
            return {
                wingGeometry: wingGeo,
                bodyGeometry: bodyGeo
            };
        }
    }["Bat.useMemo"], []);
    useFrame({
        "Bat.useFrame": (state, delta)=>{
            const t = state.clock.getElapsedTime() + offset;
            // Majestic, cinematic wing flapping
            const flap = Math.sin(t * flapSpeed);
            if (leftWingRef.current && rightWingRef.current) {
                // Wing pivoting strictly at the shoulder (Y and Z axes)
                leftWingRef.current.rotation.y = flap * 0.6 + 0.2; // Swing forward
                leftWingRef.current.rotation.z = flap * 0.4; // Flap up and down
                rightWingRef.current.rotation.y = -flap * 0.6 - 0.2;
                rightWingRef.current.rotation.z = -flap * 0.4;
            }
            if (groupRef.current) {
                // Smooth flying math into the camera
                groupRef.current.position.y += Math.cos(t * speed * 0.7) * delta * 5 + delta * 3.5;
                groupRef.current.position.x += Math.sin(t * speed) * delta * 6;
                groupRef.current.position.z += delta * 6.5;
                // Dynamic Flight Banking & Pitching
                groupRef.current.rotation.z = Math.sin(t * speed) * 0.4;
                groupRef.current.rotation.x = Math.PI / 2.2 + flap * 0.15; // Body tilts up when flapping down
                // Endless loop respawner
                if (groupRef.current.position.z > 20 || groupRef.current.position.y > 35) {
                    groupRef.current.position.y = -40;
                    groupRef.current.position.z = -50;
                    groupRef.current.position.x = startPos[0];
                }
            }
        }
    }["Bat.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: groupRef,
        position: startPos,
        scale: [
            0.18,
            0.18,
            0.18
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: bodyGeometry,
                material: batMaterial
            }, void 0, false, {
                fileName: "[project]/src/components/ThreeDElement.jsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    -0.4,
                    1.0,
                    0
                ],
                ref: leftWingRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0,
                        0
                    ],
                    geometry: wingGeometry,
                    material: batMaterial
                }, void 0, false, {
                    fileName: "[project]/src/components/ThreeDElement.jsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ThreeDElement.jsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
                position: [
                    0.4,
                    1.0,
                    0
                ],
                ref: rightWingRef,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0,
                        0
                    ],
                    scale: [
                        -1,
                        1,
                        1
                    ],
                    geometry: wingGeometry,
                    material: batMaterial
                }, void 0, false, {
                    fileName: "[project]/src/components/ThreeDElement.jsx",
                    lineNumber: 96,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ThreeDElement.jsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ThreeDElement.jsx",
        lineNumber: 85,
        columnNumber: 9
    }, this);
}
_s(Bat, "9l69lt+dSSmZRsek+3KVs4yfmtY=", false, function() {
    return [
        useFrame
    ];
});
_c = Bat;
function ThreeDElement() {
    _s1();
    const { isLofi } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    // A glowing, ultra high-level Cybernetic Neon material
    const cyberBatMaterial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThreeDElement.useMemo[cyberBatMaterial]": ()=>new THREE.MeshPhysicalMaterial({
                color: '#f5c518',
                emissive: '#00f5ff',
                emissiveIntensity: 0.9,
                metalness: 1.0,
                roughness: 0.1,
                transparent: true,
                opacity: 0.65,
                wireframe: true,
                wireframeLinewidth: 2
            })
    }["ThreeDElement.useMemo[cyberBatMaterial]"], []);
    const bats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ThreeDElement.useMemo[bats]": ()=>{
            return Array.from({
                length: 22
            }).map({
                "ThreeDElement.useMemo[bats]": (_, i)=>({
                        id: i,
                        startPos: [
                            (Math.random() - 0.5) * 80,
                            (Math.random() - 0.5) * 60 - 20,
                            (Math.random() - 0.5) * 80 - 40
                        ],
                        speed: 0.6 + Math.random() * 1.5,
                        flapSpeed: 8 + Math.random() * 6,
                        offset: Math.random() * 100
                    })
            }["ThreeDElement.useMemo[bats]"]);
        }
    }["ThreeDElement.useMemo[bats]"], []);
    if (isLofi) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            opacity: 1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Canvas, {
            camera: {
                position: [
                    0,
                    0,
                    15
                ],
                fov: 60
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: 0.5
                }, void 0, false, {
                    fileName: "[project]/src/components/ThreeDElement.jsx",
                    lineNumber: 137,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0,
                        -20,
                        10
                    ],
                    color: "#f5c518",
                    intensity: 10,
                    distance: 100
                }, void 0, false, {
                    fileName: "[project]/src/components/ThreeDElement.jsx",
                    lineNumber: 138,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: [
                        0,
                        30,
                        -10
                    ],
                    color: "#00f5ff",
                    intensity: 8,
                    distance: 100
                }, void 0, false, {
                    fileName: "[project]/src/components/ThreeDElement.jsx",
                    lineNumber: 139,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fog", {
                    attach: "fog",
                    args: [
                        '#080810',
                        15,
                        60
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/ThreeDElement.jsx",
                    lineNumber: 142,
                    columnNumber: 17
                }, this),
                bats.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bat, {
                        ...b,
                        batMaterial: cyberBatMaterial
                    }, b.id, false, {
                        fileName: "[project]/src/components/ThreeDElement.jsx",
                        lineNumber: 145,
                        columnNumber: 21
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ThreeDElement.jsx",
            lineNumber: 136,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ThreeDElement.jsx",
        lineNumber: 135,
        columnNumber: 9
    }, this);
}
_s1(ThreeDElement, "PuILta/Kv0oWBPzMh99F+kYU3z4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = ThreeDElement;
var _c, _c1;
__turbopack_context__.k.register(_c, "Bat");
__turbopack_context__.k.register(_c1, "ThreeDElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ThreeDElement.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/ThreeDElement.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=%5Bproject%5D_src_components_ThreeDElement_jsx_fbcbd546._.js.map