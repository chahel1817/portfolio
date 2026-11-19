'use client';
import { useRef, useMemo, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

/**
 * Individual Floating Obsidian Crystal / Prismatic Shard with Physics Impulse
 */
function PrismShard({ initialPos, geometry, edgeGeometry, speed, baseRotSpeed, scale, edgeColor, material, shockwavesRef }) {
    const groupRef = useRef();
    const lineRef = useRef();
    const rotSpeedRef = useRef([...baseRotSpeed]);
    const impulseRef = useRef({ x: 0, y: 0, z: 0 });

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();

        // Check shockwave impulses
        if (shockwavesRef && shockwavesRef.current) {
            shockwavesRef.current.forEach((sw) => {
                if (!sw.active) return;
                const pos = groupRef.current.position;
                const dx = pos.x - sw.x;
                const dy = pos.y - sw.y;
                const dist = Math.hypot(dx, dy);

                // If shockwave passes through this crystal
                if (Math.abs(dist - sw.radius) < 2.2) {
                    const kickAngle = Math.atan2(dy, dx);
                    impulseRef.current.x += Math.cos(kickAngle) * delta * 12;
                    impulseRef.current.y += Math.sin(kickAngle) * delta * 12;
                    rotSpeedRef.current[0] += (Math.random() - 0.5) * 6 * delta;
                    rotSpeedRef.current[1] += (Math.random() - 0.5) * 6 * delta;
                }
            });
        }

        // Apply impulse damping (spring back to base rotation)
        rotSpeedRef.current[0] += (baseRotSpeed[0] - rotSpeedRef.current[0]) * delta * 1.8;
        rotSpeedRef.current[1] += (baseRotSpeed[1] - rotSpeedRef.current[1]) * delta * 1.8;
        rotSpeedRef.current[2] += (baseRotSpeed[2] - rotSpeedRef.current[2]) * delta * 1.8;

        impulseRef.current.x *= 0.92;
        impulseRef.current.y *= 0.92;

        // Apply rotation
        groupRef.current.rotation.x += rotSpeedRef.current[0] * delta;
        groupRef.current.rotation.y += rotSpeedRef.current[1] * delta;
        groupRef.current.rotation.z += rotSpeedRef.current[2] * delta;

        // Gentle floating drift + impulse
        groupRef.current.position.y += Math.sin(t * speed.floatFreq + initialPos[0]) * delta * speed.floatAmp + impulseRef.current.y;
        groupRef.current.position.x += Math.cos(t * speed.floatFreq * 0.7 + initialPos[1]) * delta * (speed.floatAmp * 0.5) + impulseRef.current.x;

        // Loop bounds
        if (groupRef.current.position.y > 28) {
            groupRef.current.position.y = -28;
        } else if (groupRef.current.position.y < -28) {
            groupRef.current.position.y = 28;
        }
    });

    const lineMaterial = useMemo(
        () =>
            new THREE.LineBasicMaterial({
                color: edgeColor,
                transparent: true,
                opacity: 0.65,
                linewidth: 1,
            }),
        [edgeColor]
    );

    return (
        <group ref={groupRef} position={initialPos} scale={scale}>
            {/* Faceted Translucent Obsidian Crystal */}
            <mesh geometry={geometry} material={material} />

            {/* Glowing Prismatic Edge Wireframe */}
            <lineSegments ref={lineRef} geometry={edgeGeometry} material={lineMaterial} />
        </group>
    );
}

/**
 * Dynamic Expanding 3D Shockwave Rings
 */
function ShockwaveVisualizer({ shockwavesRef }) {
    const ringGeo = useMemo(() => new THREE.RingGeometry(0.9, 1.35, 64), []);
    const ringMatCyan = useMemo(
        () =>
            new THREE.MeshBasicMaterial({
                color: '#00f5ff',
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
            }),
        []
    );
    const ringMatGold = useMemo(
        () =>
            new THREE.MeshBasicMaterial({
                color: '#f5c518',
                transparent: true,
                opacity: 0,
                side: THREE.DoubleSide,
                blending: THREE.AdditiveBlending,
            }),
        []
    );

    const meshesRef = useRef([]);

    useFrame((_, delta) => {
        if (!shockwavesRef.current) return;

        shockwavesRef.current.forEach((sw, idx) => {
            const mesh = meshesRef.current[idx];
            if (!mesh) return;

            if (sw.active) {
                sw.radius += sw.speed * delta;
                sw.opacity = Math.max(0, 1 - sw.radius / sw.maxRadius);

                mesh.position.set(sw.x, sw.y, 0.5);
                mesh.scale.set(sw.radius, sw.radius, 1);
                mesh.material.opacity = sw.opacity * 0.7;
                mesh.visible = true;

                if (sw.radius >= sw.maxRadius) {
                    sw.active = false;
                    mesh.visible = false;
                }
            } else {
                mesh.visible = false;
            }
        });
    });

    return (
        <group>
            {[0, 1, 2].map((i) => (
                <mesh
                    key={i}
                    ref={(el) => (meshesRef.current[i] = el)}
                    geometry={ringGeo}
                    material={i % 2 === 0 ? ringMatCyan : ringMatGold}
                    visible={false}
                />
            ))}
        </group>
    );
}

/**
 * Interactive Scene Group with Mouse Spotlight & Ray Repulsion
 */
function ShardField({ isMobile, shockwavesRef }) {
    const groupRef = useRef();
    const cursorLightRef = useRef();
    const { pointer, viewport } = useThree();

    // 1. Sleek Obsidian Glass Physical Material
    const obsidianMaterial = useMemo(
        () =>
            new THREE.MeshPhysicalMaterial({
                color: '#0b0e17',
                emissive: '#040710',
                metalness: 0.18,
                roughness: 0.08,
                transmission: 0.76, // Semi-transparent crystal glass
                ior: 1.55,
                thickness: 2.8,
                iridescence: 0.98, // Chromatic dispersion oil-slick refractions
                iridescenceIOR: 1.35,
                clearcoat: 1.0,
                clearcoatRoughness: 0.04,
                transparent: true,
                opacity: 0.9,
            }),
        []
    );

    // 2. Crystal geometries
    const geometries = useMemo(() => {
        const octa = new THREE.OctahedronGeometry(1.6, 0);
        const cylinder = new THREE.CylinderGeometry(0.45, 1.1, 3.4, 6);
        const ico = new THREE.IcosahedronGeometry(1.4, 0);
        const tetra = new THREE.TetrahedronGeometry(1.5, 0);

        return [
            { geo: octa, edges: new THREE.EdgesGeometry(octa) },
            { geo: cylinder, edges: new THREE.EdgesGeometry(cylinder) },
            { geo: ico, edges: new THREE.EdgesGeometry(ico) },
            { geo: tetra, edges: new THREE.EdgesGeometry(tetra) },
        ];
    }, []);

    // 3. Shard population configuration
    const shardData = useMemo(() => {
        const count = isMobile ? 10 : 22;
        const edgeColors = ['#00f5ff', '#f5c518', '#a855f7', '#38bdf8', '#fbbf24'];

        return Array.from({ length: count }).map((_, i) => {
            const geoItem = geometries[i % geometries.length];
            const size = 0.35 + Math.random() * 0.45;
            return {
                id: i,
                initialPos: [
                    (Math.random() - 0.5) * (isMobile ? 32 : 68),
                    (Math.random() - 0.5) * 44,
                    (Math.random() - 0.5) * 36 - 6,
                ],
                scale: [size, size * (1 + (i % 2) * 0.45), size],
                geometry: geoItem.geo,
                edgeGeometry: geoItem.edges,
                speed: {
                    floatFreq: 0.5 + Math.random() * 0.8,
                    floatAmp: 0.8 + Math.random() * 1.4,
                },
                baseRotSpeed: [
                    (Math.random() - 0.5) * 0.4,
                    (Math.random() - 0.5) * 0.5,
                    (Math.random() - 0.5) * 0.35,
                ],
                edgeColor: edgeColors[i % edgeColors.length],
            };
        });
    }, [geometries, isMobile]);

    // Smooth cursor-driven 3D tilt & cursor spotlight tracking
    useFrame((_, delta) => {
        if (!groupRef.current) return;
        const targetRotY = pointer.x * 0.22;
        const targetRotX = -pointer.y * 0.22;
        groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * delta * 2.8;
        groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * delta * 2.8;

        if (cursorLightRef.current) {
            // Track cursor coordinates in 3D viewport
            const targetX = (pointer.x * viewport.width) / 2;
            const targetY = (pointer.y * viewport.height) / 2;
            cursorLightRef.current.position.x += (targetX - cursorLightRef.current.position.x) * delta * 8;
            cursorLightRef.current.position.y += (targetY - cursorLightRef.current.position.y) * delta * 8;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Interactive Dynamic 3D Cursor Specular Light */}
            <pointLight
                ref={cursorLightRef}
                position={[0, 0, 8]}
                color="#00f5ff"
                intensity={14}
                distance={35}
            />

            {/* Shockwaves */}
            <ShockwaveVisualizer shockwavesRef={shockwavesRef} />

            {/* Shards */}
            {shardData.map((s) => (
                <PrismShard
                    key={s.id}
                    {...s}
                    material={obsidianMaterial}
                    shockwavesRef={shockwavesRef}
                />
            ))}
        </group>
    );
}

export default function ThreeDElement() {
    const { isLofi } = useTheme();
    const reducedMotion = useReducedMotion();
    const [isMobile, setIsMobile] = useState(false);

    // Shockwaves pool for click impulses
    const shockwavesRef = useRef([
        { x: 0, y: 0, radius: 0, maxRadius: 36, speed: 28, opacity: 0, active: false },
        { x: 0, y: 0, radius: 0, maxRadius: 36, speed: 28, opacity: 0, active: false },
        { x: 0, y: 0, radius: 0, maxRadius: 36, speed: 28, opacity: 0, active: false },
    ]);
    const nextSwIdxRef = useRef(0);

    const triggerShockwave = useCallback((clientX, clientY) => {
        // Map 2D window coordinate to approximate Three.js 3D world plane
        const aspect = window.innerWidth / window.innerHeight;
        const normX = (clientX / window.innerWidth) * 2 - 1;
        const normY = -(clientY / window.innerHeight) * 2 + 1;

        const worldX = normX * 18 * aspect;
        const worldY = normY * 18;

        const sw = shockwavesRef.current[nextSwIdxRef.current];
        if (sw) {
            sw.x = worldX;
            sw.y = worldY;
            sw.radius = 0.5;
            sw.opacity = 1;
            sw.active = true;
            nextSwIdxRef.current = (nextSwIdxRef.current + 1) % shockwavesRef.current.length;
        }
    }, []);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile, { passive: true });

        const handleClick = (e) => {
            triggerShockwave(e.clientX, e.clientY);
        };

        window.addEventListener('pointerdown', handleClick, { passive: true });

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('pointerdown', handleClick);
        };
    }, [triggerShockwave]);

    if (isLofi || reducedMotion) return null;

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 1 }}>
            <Canvas camera={{ position: [0, 0, 18], fov: 55 }}>
                <ambientLight intensity={0.4} />

                {/* Spectral Point Lights: Warm Gold, Cool Cyan, and Royal Violet */}
                <pointLight position={[-18, 22, 14]} color="#00f5ff" intensity={18} distance={85} />
                <pointLight position={[20, -20, 12]} color="#f5c518" intensity={22} distance={85} />
                <pointLight position={[0, -10, -14]} color="#a855f7" intensity={14} distance={60} />

                {/* Depth Fog */}
                <fog attach="fog" args={['#07080d', 16, 54]} />

                <ShardField isMobile={isMobile} shockwavesRef={shockwavesRef} />
            </Canvas>
        </div>
    );
}
