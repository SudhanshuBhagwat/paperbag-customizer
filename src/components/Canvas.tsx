"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  Environment,
  OrbitControls,
  Stage,
  useGLTF,
} from "@react-three/drei";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { state } from "@/store";

export const ThreeCanvas = () => {
  const ref = useRef(null);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 70, position: [0, 0, 2.5] }}>
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset="rembrandt"
          intensity={0.5}
          shadows="contact"
          environment="city"
        >
          <Center>
            <Bag />
          </Center>
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} />
    </Canvas>
  );
};

function Bag() {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/bag_01.gltf");

  useFrame((state, delta) => {
    return easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
  });

  return (
    <group dispose={null}>
      <group scale={[1, 1.2, 0.71]}>
        <mesh
          geometry={nodes.bagspCube4.geometry}
          material={materials.lambert1}
        />
        <mesh
          geometry={nodes.bagspolySurface3.geometry}
          position={[0, 3.25, 0.9]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.81, 0.05, 1]}
        >
          <meshStandardMaterial attach="material" color={0x000000} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/bag_01.gltf");
