"use client";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Orange } from "@/components/scene/Orange";

export default function test() {
  return (
    <div className="w-ful h-screen">
      <Canvas flat>
        <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
        <ambientLight intensity={Math.PI / 2} />
        <group scale={20} position={[0, -10, 0]}>
          <Orange />
        </group>
        <Environment preset="dawn" background backgroundBlurriness={1} />
        <PerspectiveCamera makeDefault position={[80, 20, 80]} />
      </Canvas>
    </div>
  );
}
