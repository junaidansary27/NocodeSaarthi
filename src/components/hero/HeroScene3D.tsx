import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Preload } from '@react-three/drei';
import * as THREE from 'three';

/* ─── Responsive helper ─── */
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return mobile;
}

/* ─── Mouse tracking (shared via ref, no re-renders) ─── */
const mouseRef = { current: { x: 0, y: 0 } };

function useGlobalMouse() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);
}

/* ═══════════════════════════════════════════════════════
   Glass Sphere
   ═══════════════════════════════════════════════════════ */
interface SphereProps {
  position: [number, number, number];
  radius: number;
  speed: number;
  color: string;
}

function GlassSphere({ position, radius, speed, color }: SphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.position.y =
      position[1] + Math.sin(t * speed) * 0.35;
    meshRef.current.position.x =
      position[0] + Math.sin(t * speed * 0.7) * 0.15;
    meshRef.current.rotation.y = t * speed * 0.2;
    meshRef.current.rotation.x = t * speed * 0.15;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

/* ═══════════════════════════════════════════════════════
   Wireframe Ring
   ═══════════════════════════════════════════════════════ */
interface RingProps {
  position: [number, number, number];
  rotationSpeed: [number, number, number];
  radius: number;
  tubeRadius: number;
  color: string;
}

function WireframeRing({ position, rotationSpeed, radius, tubeRadius, color }: RingProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    meshRef.current.rotation.x = t * rotationSpeed[0];
    meshRef.current.rotation.y = t * rotationSpeed[1];
    meshRef.current.rotation.z = t * rotationSpeed[2];
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[radius, tubeRadius, 16, 64]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
    </mesh>
  );
}

/* ═══════════════════════════════════════════════════════
   Particle Field
   ═══════════════════════════════════════════════════════ */
function ParticleField({ count }: { count: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const orangeColor = new THREE.Color('#FF6B35');
    const whiteColor = new THREE.Color('#F7F4EE');
    const blueColor = new THREE.Color('#4488FF');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 16;
      pos[i3 + 1] = (Math.random() - 0.5) * 10;
      pos[i3 + 2] = (Math.random() - 0.5) * 10;

      const r = Math.random();
      const c = r < 0.35 ? orangeColor : r < 0.65 ? whiteColor : blueColor;
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.02;
    pointsRef.current.position.y = Math.sin(t * 0.15) * 0.25;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ═══════════════════════════════════════════════════════
   Camera Rig — parallax + scroll
   ═══════════════════════════════════════════════════════ */
function CameraRig() {
  const { camera } = useThree();
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(() => {
    // Read window scroll directly to avoid React state re-renders
    const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    const scrollProgress = Math.min(scrollY / vh, 1);

    // Mouse parallax
    const mx = mouseRef.current.x * 0.3;
    const my = mouseRef.current.y * 0.2;

    targetLookAt.current.x += (mx - targetLookAt.current.x) * 0.05;
    targetLookAt.current.y += (my - targetLookAt.current.y) * 0.05;

    camera.lookAt(
      targetLookAt.current.x,
      targetLookAt.current.y - scrollProgress * 0.5,
      0
    );

    // Subtle camera Y shift on scroll
    camera.position.y = 0 - scrollProgress * 0.8;
  });

  return null;
}

/* ═══════════════════════════════════════════════════════
   Scene Contents
   ═══════════════════════════════════════════════════════ */
function SceneContents({ isMobile }: { isMobile: boolean }) {
  // Sphere configurations
  const spheres: SphereProps[] = useMemo(() => {
    const all: SphereProps[] = [
      { position: [-3.5, 1.2, -2], radius: 0.7, speed: 0.4, color: '#FF6B35' },
      { position: [3.8, -0.8, -3], radius: 0.55, speed: 0.35, color: '#4488FF' },
      { position: [-1.5, -1.5, -1.5], radius: 0.45, speed: 0.5, color: '#F7F4EE' },
      { position: [2, 1.8, -4], radius: 0.6, speed: 0.3, color: '#FF6B35' },
      { position: [0, -0.5, -2.5], radius: 0.35, speed: 0.45, color: '#4488FF' },
    ];
    return isMobile ? all.slice(0, 3) : all;
  }, [isMobile]);

  // Ring configurations
  const rings: RingProps[] = useMemo(() => {
    const all: RingProps[] = [
      {
        position: [-2.5, 0.5, -3.5],
        rotationSpeed: [0.08, 0.12, 0.04],
        radius: 2,
        tubeRadius: 0.015,
        color: '#FF6B35',
      },
      {
        position: [3, -0.5, -4],
        rotationSpeed: [0.06, 0.08, 0.1],
        radius: 1.8,
        tubeRadius: 0.012,
        color: '#4488FF',
      },
      {
        position: [0.5, 1, -5],
        rotationSpeed: [0.1, 0.05, 0.07],
        radius: 2.5,
        tubeRadius: 0.01,
        color: '#F7F4EE',
      },
    ];
    return isMobile ? [all[0]] : all;
  }, [isMobile]);

  const particleCount = isMobile ? 80 : 200;

  return (
    <>
      <CameraRig />

      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <pointLight
        position={[-4, 3, 2]}
        color="#FF6B35"
        intensity={0.4}
        distance={20}
        decay={2}
      />
      <pointLight
        position={[4, -2, 3]}
        color="#4488FF"
        intensity={0.25}
        distance={20}
        decay={2}
      />

      {/* Glass Spheres */}
      {spheres.map((s, i) => (
        <GlassSphere key={`sphere-${i}`} {...s} />
      ))}

      {/* Wireframe Rings */}
      {rings.map((r, i) => (
        <WireframeRing key={`ring-${i}`} {...r} />
      ))}

      {/* Particles */}
      <ParticleField count={particleCount} />

      <Preload all />
    </>
  );
}

/* ═══════════════════════════════════════════════════════
   Exported Canvas Wrapper
   ═══════════════════════════════════════════════════════ */
export default function HeroScene3D() {
  useGlobalMouse();
  const isMobile = useIsMobile();

  return (
    <div className="hero-canvas-container" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ pointerEvents: 'none' }}
      >
        <SceneContents isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
