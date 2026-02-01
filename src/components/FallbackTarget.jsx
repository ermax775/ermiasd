import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

/** Simple animated ring when external Target model fails – keeps Hero 3D visible */
export default function FallbackTarget(props) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.4;
    if (meshRef.current) meshRef.current.position.y = Math.sin(Date.now() * 0.002) * 0.3;
  });

  return (
    <Float floatIntensity={0.5} speed={1.5}>
      <group ref={groupRef} {...props}>
        <mesh ref={meshRef} rotation={[0, Math.PI / 5, 0]} scale={1.2}>
          <torusGeometry args={[1.2, 0.15, 16, 48]} />
          <meshStandardMaterial color="#c9a227" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
}
