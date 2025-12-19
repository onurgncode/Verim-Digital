'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface DottedSurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export function DottedSurface({ className, children, ...props }: DottedSurfaceProps) {
    const { theme } = useTheme();

    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        particles: THREE.Points;
        animationId: number;
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SEPARATION = 160;
        const AMOUNTX = 50;
        const AMOUNTY = 50;

        // Scene setup
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            55,
            window.innerWidth / window.innerHeight,
            1,
            10000,
        );
        camera.position.set(0, 400, 1000);
        camera.lookAt(0, 0, 0);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        containerRef.current.appendChild(renderer.domElement);

        // Create particles
        const positions = new Float32Array(AMOUNTX * AMOUNTY * 3);
        const colors = new Float32Array(AMOUNTX * AMOUNTY * 3);

        const colorMode = theme === 'dark' ? 1 : 0.1;

        for (let i = 0, ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
                positions[i + 1] = 0; // y
                positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z

                colors[i] = colorMode;
                colors[i + 1] = colorMode;
                colors[i + 2] = colorMode;

                i += 3;
            }
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 5,
            vertexColors: true,
            transparent: true,
            opacity: 1,
            sizeAttenuation: true,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        let time = 0;
        let animationId = 0;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            time += 0.04;

            const positions = geometry.attributes.position.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    // Complex wave calculation
                    positions[i + 1] =
                        Math.sin((ix + time) * 0.3) * 120 +
                        Math.sin((iy + time) * 0.5) * 120 +
                        Math.sin((ix + iy + time) * 0.2) * 60;

                    i += 3;
                }
            }

            geometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            if (!containerRef.current) return;
            const width = window.innerWidth;
            const height = window.innerHeight;

            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);
        animate();

        sceneRef.current = {
            scene,
            camera,
            renderer,
            particles,
            animationId,
        };

        return () => {
            window.removeEventListener('resize', handleResize);
            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);
                sceneRef.current.renderer.dispose();
                sceneRef.current.particles.geometry.dispose();
                (sceneRef.current.particles.material as THREE.Material).dispose();
                if (containerRef.current && sceneRef.current.renderer.domElement) {
                    containerRef.current.removeChild(sceneRef.current.renderer.domElement);
                }
            }
        };
    }, [theme]);

    return (
        <div
            ref={containerRef}
            className={cn('relative w-full h-full min-h-[500px] overflow-hidden bg-transparent z-0', className)}
            {...props}
        >
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
            <style>{`
                canvas {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100% !important;
                    height: 100% !important;
                    z-index: 0;
                    pointer-events: none;
                }
            `}</style>
        </div>
    );
}
