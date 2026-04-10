'use client';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Bat({ startPos, speed, flapSpeed, offset, batMaterial }) {
    const groupRef = useRef();
    const leftWingRef = useRef();
    const rightWingRef = useRef();

    // Custom geometry for an authentic, highly-detailed Bat
    const { wingGeometry, bodyGeometry } = useMemo(() => {
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

        return { wingGeometry: wingGeo, bodyGeometry: bodyGeo };
    }, []);

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime() + offset;

        // Majestic, cinematic wing flapping
        const flap = Math.sin(t * flapSpeed);
        if (leftWingRef.current && rightWingRef.current) {
            // Wing pivoting strictly at the shoulder (Y and Z axes)
            leftWingRef.current.rotation.y = flap * 0.6 + 0.2;  // Swing forward
            leftWingRef.current.rotation.z = flap * 0.4;        // Flap up and down

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
    });

    return (
        <group ref={groupRef} position={startPos} scale={[0.18, 0.18, 0.18]}>
            {/* Crystal Body */}
            <mesh geometry={bodyGeometry} material={batMaterial} />

            {/* Left Wing (Anchored exactly at 0,0 shoulder pivot) */}
            <group position={[-0.4, 1.0, 0]} ref={leftWingRef}>
                <mesh position={[0, 0, 0]} geometry={wingGeometry} material={batMaterial} />
            </group>

            {/* Right Wing (Mirrored via Scale X = -1) */}
            <group position={[0.4, 1.0, 0]} ref={rightWingRef}>
                <mesh position={[0, 0, 0]} scale={[-1, 1, 1]} geometry={wingGeometry} material={batMaterial} />
            </group>
        </group>
    );
}

export default function ThreeDElement() {
    // A glowing, ultra high-level Cybernetic Neon material
    const cyberBatMaterial = useMemo(() => new THREE.MeshPhysicalMaterial({
        color: '#f5c518',             // Base neon gold
        emissive: '#00f5ff',          // Glows bright cyan
        emissiveIntensity: 0.9,       // Super bright emission
        metalness: 1.0,
        roughness: 0.1,
        transparent: true,
        opacity: 0.65,
        wireframe: true,              // Gives it an insanely cool "Hologram blueprint" look
        wireframeLinewidth: 2,
    }), []);

    const bats = useMemo(() => {
        return Array.from({ length: 22 }).map((_, i) => ({
            id: i,
            startPos: [
                (Math.random() - 0.5) * 80, // Vast X spread
                (Math.random() - 0.5) * 60 - 20,
                (Math.random() - 0.5) * 80 - 40
            ],
            speed: 0.6 + Math.random() * 1.5,
            flapSpeed: 8 + Math.random() * 6, // Cinematic, deliberate flapping
            offset: Math.random() * 100,
        }));
    }, []);

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', opacity: 1 }}>
            <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[0, -20, 10]} color="#f5c518" intensity={10} distance={100} />
                <pointLight position={[0, 30, -10]} color="#00f5ff" intensity={8} distance={100} />

                {/* Fog ensures they fade away majestically in the distance */}
                <fog attach="fog" args={['#080810', 15, 60]} />

                {bats.map((b) => (
                    <Bat key={b.id} {...b} batMaterial={cyberBatMaterial} />
                ))}
            </Canvas>
        </div>
    );
}
