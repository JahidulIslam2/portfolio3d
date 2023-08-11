import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {

  const computer = useGLTF("/desktop_pc/scene.gltf");


  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        groundColor="blue"
      />

      <pointLight intensity={20} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3} // Adjust the angle to control the spread of the light
        penumbra={0.5} // Adjust the penumbra to control the softness of the edges
        intensity={2}
        castShadow
        shadow-mapSize-width={1024} // Adjust the shadow map size for better quality
        shadow-mapSize-height={1024}
        shadow-bias={-0.001} // Adjust the shadow bias for better shadow placement
        target={computer.scene}
        decay={1.8}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.4 : 0.7}
        position={isMobile ? [-2, -2.5, -0.20] : [0, -3.25, -1.5]}
        rotation={[-0.02, 0.2, -0.01]}
      />


    </mesh>
  )
}


const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  // xs device responsive
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:500px)')

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return (mediaQuery.removeEventListener('change', handleMediaQueryChange))
  }, [])
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [0, 5, 10], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.5} />
        <pointLight intensity={1} position={[10, 10, 10]} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;
