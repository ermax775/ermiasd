import { Html } from '@react-three/drei';

/** Renders inside Canvas when 3D content fails - prevents blank hero */
export default function CanvasErrorFallback() {
  return (
    <Html center className="flex flex-col items-center justify-center gap-2 text-white">
      <p className="text-sm opacity-80">Scene could not load.</p>
      <p className="text-xs opacity-60">Check console for details.</p>
    </Html>
  );
}
