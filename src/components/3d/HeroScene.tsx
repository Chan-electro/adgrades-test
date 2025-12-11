'use client';

import { Canvas } from '@react-three/fiber';
import { Float, Environment, PerspectiveCamera, ContactShadows, Text, RoundedBox } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

function UICard({ position, rotation, scale = 1, children }: { position: [number, number, number], rotation: [number, number, number], scale?: number, children?: React.ReactNode }) {
    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <group position={position} rotation={rotation as [number, number, number]} scale={scale}>
                <RoundedBox args={[3.2, 4, 0.2]} radius={0.1} smoothness={4}>
                    <meshStandardMaterial color="#ffffff" roughness={0.5} metalness={0.1} />
                </RoundedBox>
                {/* Content Layer */}
                <group position={[0, 0, 0.11]}>
                    {children}
                </group>
            </group>
        </Float>
    );
}

function SmallBadge({ position, color, text }: { position: [number, number, number], color: string, text: string }) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.1, 0.1]}>
            <group position={position}>
                <RoundedBox args={[2, 0.6, 0.1]} radius={0.3} smoothness={4}>
                    <meshStandardMaterial color="#ffffff" />
                </RoundedBox>
                <Text position={[-0.6, 0, 0.06]} fontSize={0.15} color="#000000" anchorX="left" anchorY="middle" font="/fonts/Inter-Bold.ttf">
                    {text}
                </Text>
                <RoundedBox position={[-0.75, 0, 0.06]} args={[0.2, 0.2, 0.01]} radius={0.1}>
                    <meshBasicMaterial color={color} />
                </RoundedBox>
            </group>
        </Float>
    )
}

function FloatingComposition() {
    return (
        <group position={[2, 0, 0]}>
            {/* Background Gradient Sphere - Subtle */}
            <mesh position={[0, 0, -5]} scale={10}>
                <sphereGeometry />
                <meshBasicMaterial color="#f8fafc" opacity={0.5} transparent />
            </mesh>

            {/* Main Card */}
            <UICard position={[0, 0, 0]} rotation={[0, -0.2, 0]}>
                {/* Mock UI Content inside card */}
                <RoundedBox position={[0, 0.8, 0]} args={[1, 1, 0.05]} radius={0.2} smoothness={4}>
                    <meshStandardMaterial color="#000000" />
                </RoundedBox>
                {/* Text AF Logo */}
                <Text position={[0, 0.8, 0.04]} fontSize={0.4} color="#ffffff" font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff">
                    AG
                </Text>

                {/* Lines */}
                <RoundedBox position={[0, -0.5, 0]} args={[2.5, 0.1, 0.01]} radius={0.05}>
                    <meshBasicMaterial color="#f1f5f9" />
                </RoundedBox>
                <RoundedBox position={[0, -0.8, 0]} args={[2.5, 0.1, 0.01]} radius={0.05}>
                    <meshBasicMaterial color="#f1f5f9" />
                </RoundedBox>

                {/* Circles */}
                <group position={[-0.8, -1.3, 0]}>
                    <mesh>
                        <circleGeometry args={[0.15, 32]} />
                        <meshBasicMaterial color="#fff1f2" />
                    </mesh>
                    <mesh position={[0.4, 0, 0]}>
                        <circleGeometry args={[0.15, 32]} />
                        <meshBasicMaterial color="#fff7ed" />
                    </mesh>
                    <mesh position={[0.8, 0, 0]}>
                        <circleGeometry args={[0.15, 32]} />
                        <meshBasicMaterial color="#ecfdf5" />
                    </mesh>
                </group>
            </UICard>

            {/* Satellite Badges */}
            <SmallBadge position={[2, 1.5, 1]} color="#4ade80" text="12 Ad Variants" />
            <SmallBadge position={[-2, -1.5, 0.5]} color="#f472b6" text="Voice Analysis" />
        </group>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
            <Canvas dpr={[1, 2]} shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
                <ambientLight intensity={1.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" castShadow />
                <pointLight position={[-10, 0, 5]} intensity={0.5} color="#e2e8f0" />

                <Suspense fallback={null}>
                    <FloatingComposition />
                    <Environment preset="city" />
                    <ContactShadows position={[2, -3.5, 0]} opacity={0.2} scale={15} blur={2.5} far={4} color="#000000" />
                </Suspense>
            </Canvas>
        </div>
    );
}
