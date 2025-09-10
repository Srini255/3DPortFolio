import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  useAnimations,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/Computer/scene.gltf");
  const { animations } = computer;
  const { actions, mixer } = useAnimations(animations, computer.scene);

  useEffect(() => {
    const action = actions[Object.keys(actions)[0]];
    if (action) {
      action.setEffectiveTimeScale(0.5); // 🔥 Half speed (1.0 is normal, 2.0 is double)
      action.play();
    }

    return () => {
      mixer.stopAllAction();
    };
  }, [actions, mixer]);

  return (
    <mesh>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.6 : 1.75}
        position={isMobile ? [-8, -4, -2.2] : [-5, -4.25, -1.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  //Add a listener for changes to the screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // console.log("Initial matches:", mediaQuery.matches);
    //set the initial value of the ismobile state variable
    setIsMobile(mediaQuery.matches);

    //Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop='always'
      shadows
      camera={{ position: [20, 4, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
