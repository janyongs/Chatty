import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";

export function Orange() {
  const { nodes, materials } = useGLTF("/glb/orange.glb");
  console.log("노드", nodes);
  return (
    <mesh
      geometry={nodes.Object_2.geometry}
      position={[-0.42, 0.51, -0.62]}
      rotation={[-Math.PI / 2, 0, 1]}
    >
      <MeshWobbleMaterial factor={0.3} map={materials.place_holder.map} />
    </mesh>
  );
}
