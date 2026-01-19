'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HyperMeteorMaterial = {
    uniforms: {
        uTime: { value: 0 },
        uColorCore: { value: new THREE.Color(4, 4, 4) },
        uColorMid: { value: new THREE.Color(1, 1, 1) },
        uColorTail: { value: new THREE.Color(0.5, 0.5, 0.5) },
    },
    vertexShader: `
    uniform float uTime;
    varying vec2 vUv;
    void main() {
      vUv = uv;
      vec3 pos = position;
      float wave = sin(pos.y * 2.0 + uTime * 20.0) * 0.02 * (1.0 - vUv.y);
      pos.x += wave;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
    fragmentShader: `
    uniform vec3 uColorCore;
    uniform vec3 uColorMid;
    uniform vec3 uColorTail;
    varying vec2 vUv;

    void main() {
      float alpha = smoothstep(0.0, 0.4, vUv.y);
      vec3 color;
      if (vUv.y > 0.8) {
         color = mix(uColorMid, uColorCore, (vUv.y - 0.8) * 5.0);
      } else {
         color = mix(uColorTail, uColorMid, vUv.y * 1.25);
      }
      float intensity = 1.0 + exp(vUv.y * 2.5) * 0.4;
      gl_FragColor = vec4(color * intensity, alpha * 0.3);
    }
  `,
};

const HyperMeteor = () => {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);
    const glowRef = useRef<THREE.Mesh>(null);
    const [active, setActive] = useState(false);
    const timer = useRef(0);
    const nextSpawnTime = useRef(4);

    const material = useMemo(() => new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uColorCore: { value: new THREE.Color(4, 4, 4) },
            uColorMid: { value: new THREE.Color(1, 1, 1) },
            uColorTail: { value: new THREE.Color(0.5, 0.5, 0.5) },
        },
        vertexShader: HyperMeteorMaterial.vertexShader,
        fragmentShader: HyperMeteorMaterial.fragmentShader,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
    }), []);

    const direction = useRef(new THREE.Vector3());

    useFrame((state, delta) => {
        if (!groupRef.current) return;
        if (active && meshRef.current) {
            (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.elapsedTime;
        }

        if (!active) {
            timer.current += delta;
            if (timer.current > nextSpawnTime.current) {
                setActive(true);
                timer.current = 0;
                nextSpawnTime.current = Math.random() * 7 + 8;

                // Position de départ (Très loin au fond)
                const startX = 20 + Math.random() * 20;
                const startY = 15 + Math.random() * 10;
                const startZ = -80;

                groupRef.current.position.set(startX, startY, startZ);

                // Cible (Proche de nous)
                const endX = -20 - Math.random() * 20;
                const endY = -15 - Math.random() * 10;
                const endZ = 20;

                const startPos = new THREE.Vector3(startX, startY, startZ);
                const endPos = new THREE.Vector3(endX, endY, endZ);
                direction.current.subVectors(endPos, startPos).normalize().multiplyScalar(50);
                const matrix = new THREE.Matrix4().lookAt(startPos, endPos, new THREE.Vector3(0, 1, 0));
                groupRef.current.quaternion.setFromRotationMatrix(matrix);
                groupRef.current.rotateX(-Math.PI / 2);
            }
        } else {
            groupRef.current.position.x += direction.current.x * delta;
            groupRef.current.position.y += direction.current.y * delta;
            groupRef.current.position.z += direction.current.z * delta;
            if (groupRef.current.position.y < -35) setActive(false);
        }
    });

    return (
        <group ref={groupRef} visible={active}>
            <mesh ref={meshRef}>
                <cylinderGeometry args={[0, 0.07, 18, 12]} />
                <primitive object={material} />
            </mesh>
            <mesh ref={glowRef} scale={[2, 1, 2]}>
                <cylinderGeometry args={[0, 0.09, 16, 8]} />
                <meshBasicMaterial color={[1, 1, 1]} transparent opacity={0.03} blending={THREE.AdditiveBlending} depthWrite={false} />
            </mesh>
        </group>
    );
};

export default function SparseShootingStars() {
    return (
        <>
            <HyperMeteor />
        </>
    );
}
