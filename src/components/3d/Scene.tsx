'use client';

// Import React
import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// Import Three.js
import * as THREE from 'three';
// Import maath
import * as random from 'maath/random/dist/maath-random.esm';
//Import Context
import { useScene } from '@/context/SceneContext';
// Import composants
import SparseShootingStars from './SparseShootingStar';

// Layout de la scène 3D
function StarField({ status }: { status: string }) {
    const ref = useRef<THREE.Points>(null!);
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 }));

    useFrame((state, delta) => {
        if (!ref.current) return;

        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;

        const isWarping = status === 'warping';
        const targetScaleZ = isWarping ? 60 : 1;

        ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, targetScaleZ, 0.05);

        if (isWarping) {
            ref.current.rotation.z += 0.1;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
}

export default function Scene() {
    const { status } = useScene();
    return (
        <div className="fixed inset-0 z-[-1] bg-black overflow-hidden">
            {/* NOISE OVERLAY (Coincé en arrière-plan) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />

            <Canvas camera={{ position: [0, 0, 1.5] }}>
                <color attach="background" args={['#000000']} />
                <StarField status={status} />
                {status === 'arrived' && <SparseShootingStars />}
            </Canvas>
        </div>
    )
}