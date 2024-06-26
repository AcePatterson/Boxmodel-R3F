import { useStore } from "../serve/store";
import { DoubleSide } from "three";

export const Sphere = () => {
  const store = useStore();
  return (
    <mesh
      onPointerDown={() => {
        store.setSelectedId(-1);
      }}
    >
      <sphereGeometry args={[10, 100, 100]} />
      <meshStandardMaterial side={DoubleSide} transparent opacity={0} />
    </mesh>
  );
};
