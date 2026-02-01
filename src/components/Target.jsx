import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TARGET_URL = 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf';

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(TARGET_URL);

  useGSAP(() => {
    if (!targetRef.current) return;
    const y0 = targetRef.current.position.y;
    gsap.to(targetRef.current.position, {
      y: y0 + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  if (!scene) return null;

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
