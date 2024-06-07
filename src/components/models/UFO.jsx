"use client"

import { Suspense, useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import SceneUFO from "../assets/3d/UFO.glb"

const UFO = (props) => {
    const ufoRef = useRef()
    const lastX = useRef(0);
    const rotationSpeed = useRef(0);

    const [isRotating, setIsRotating] = useState(false)
    const { nodes, materials } = useGLTF(SceneUFO)
    const { gl, viewport } = useThree();

    const handlePointerDown = (event) => {
        event.stopPropagation();
        setIsRotating(true);

        const clientX = event.touches ? event.touches[0].clientX : event.clientX;
        lastX.current = clientX;
    };

    const handlePointerUp = (event) => {
        event.stopPropagation();
        setIsRotating(false);
    };

    const handlePointerMove = (event) => {
        event.stopPropagation();
        if (isRotating) {
            const clientX = event.touches ? event.touches[0].clientX : event.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            ufoRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "ArrowRight") {
            if (!isRotating) setIsRotating(true);

            ufoRef.current.rotation.y += 0.03 * Math.PI;
            rotationSpeed.current = 0.007;
        } else if (event.key === "ArrowLeft") {
            if (!isRotating) setIsRotating(true);

            ufoRef.current.rotation.y -= 0.03 * Math.PI;
            rotationSpeed.current = -0.007;
        }
    };

    const handleKeyUp = (event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            setIsRotating(false);
        }
    };

    const handleTouchStart = (e) => {
        e.stopPropagation();
        setIsRotating(true);

        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }

    const handleTouchEnd = (e) => {
        e.stopPropagation();
        setIsRotating(false);
    }

    const handleTouchMove = (e) => {
        e.stopPropagation();

        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;

            ufoRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }

    useEffect(() => {
        const canvas = gl.domElement;
    
        canvas.addEventListener("pointerdown", handlePointerDown, { passive: true });
        canvas.addEventListener("pointerup", handlePointerUp, { passive: true });
        canvas.addEventListener("pointermove", handlePointerMove, { passive: true });
        window.addEventListener("keydown", handleKeyDown, { passive: true });
        window.addEventListener("keyup", handleKeyUp, { passive: true });
        canvas.addEventListener("touchstart", handleTouchStart, { passive: true });
        canvas.addEventListener("touchend", handleTouchEnd, { passive: true });
        canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    
        return () => {

            canvas.removeEventListener("pointerdown", handlePointerDown);
            canvas.removeEventListener("pointerup", handlePointerUp);
            canvas.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
            canvas.removeEventListener("touchstart", handleTouchStart);
            canvas.removeEventListener("touchend", handleTouchEnd);
            canvas.removeEventListener("touchmove", handleTouchMove);
        };
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);
    

    useFrame(() => {
        if (!isRotating) {
            const dampingFactor = 0.01;
            rotationSpeed.current *= dampingFactor;

            if (Math.abs(rotationSpeed.current) < 0.001) {
                rotationSpeed.current = 0;
            }
            ufoRef.current.rotation.y += rotationSpeed.current;
        }
    });

    return (
        <group ref={ufoRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.Body.geometry}
                material={materials['Sci-fi Monochromatic_mat_0_000_0_7.000']}
            />
            <mesh
                geometry={nodes.Round.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.938, 0.175, -1.624]}
                rotation={[0.201, -0.515, 0.1]}
            />
            <mesh
                geometry={nodes.Round_1.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[1.713, 0.175, -0.763]}
                rotation={[0.409, -1.119, 0.372]}
            />
            <mesh
                geometry={nodes.Round_2.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[1.834, 0.175, 0.39]}
                rotation={[2.438, -1.299, 2.457]}
            />
            <mesh
                geometry={nodes.Round_3.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[1.255, 0.175, 1.393]}
                rotation={[2.909, -0.719, 2.986]}
            />
            <mesh
                geometry={nodes.Round_4.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.196, 0.175, 1.865]}
                rotation={[2.966, -0.103, 3.123]}
            />
            <mesh
                geometry={nodes.Round_5.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.938, 0.175, 1.624]}
                rotation={[2.941, 0.515, -3.042]}
            />
            <mesh
                geometry={nodes.Round_6.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-1.713, 0.175, 0.763]}
                rotation={[2.733, 1.119, -2.77]}
            />
            <mesh
                geometry={nodes.Round_7.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-1.834, 0.175, -0.39]}
                rotation={[0.703, 1.299, -0.685]}
            />
            <mesh
                geometry={nodes.Round_8.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-1.255, 0.175, -1.393]}
                rotation={[0.233, 0.719, -0.155]}
            />
            <mesh
                geometry={nodes.Round_9.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.196, 0.175, -1.865]}
                rotation={[0.175, 0.103, -0.018]}
            />
            <mesh
                geometry={nodes.Round_10.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0, 0.575, -1.875]}
                rotation={[-0.175, 0, 0]}
            />
            <mesh
                geometry={nodes.Round_11.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[1.102, 0.575, -1.517]}
                rotation={[-0.215, -0.617, -0.125]}
            />
            <mesh

                geometry={nodes.Round_12.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[1.783, 0.575, -0.579]}
                rotation={[-0.519, -1.213, -0.491]}
            />
            <mesh

                geometry={nodes.Round_13.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[1.783, 0.575, 0.579]}
                rotation={[-2.623, -1.213, -2.651]}
            />
            <mesh

                geometry={nodes.Round_14.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[1.102, 0.575, 1.517]}
                rotation={[-2.927, -0.617, -3.016]}
            />
            <mesh

                geometry={nodes.Round_15.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0, 0.575, 1.875]}
                rotation={[-2.967, 0, Math.PI]}
            />
            <mesh

                geometry={nodes.Round_16.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-1.102, 0.575, 1.517]}
                rotation={[-2.927, 0.617, 3.016]}
            />
            <mesh

                geometry={nodes.Round_17.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-1.783, 0.575, 0.579]}
                rotation={[-2.623, 1.213, 2.651]}
            />
            <mesh

                geometry={nodes.Round_18.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-1.783, 0.575, -0.579]}
                rotation={[-0.519, 1.213, 0.491]}
            />
            <mesh

                geometry={nodes.Round_19.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-1.102, 0.575, -1.517]}
                rotation={[-0.215, 0.617, 0.125]}
            />

            <mesh
                geometry={nodes.FlightDeck.geometry}
                material={materials['Sci-fi Monochromatic_mat_3_000_3_2.000']}
                position={[0, 1, 0]}
            />
            <mesh
                geometry={nodes.FlightDeckDetails.geometry}
                material={materials['Sci-fi Monochromatic_mat_0_000_0_2.000']}
                position={[0, 0.75, 0]}
            />
            <mesh
                geometry={nodes.Bolt.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.75, 0.825, 0]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_1.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.676, 0.825, 0.325]}
                rotation={[0, -Math.PI / 7, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_2.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.468, 0.825, 0.586]}
                rotation={[0, -0.898, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_3.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.167, 0.825, 0.731]}
                rotation={[0, -1.346, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_4.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.167, 0.825, 0.731]}
                rotation={[-Math.PI, -1.346, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_5.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.468, 0.825, 0.586]}
                rotation={[-Math.PI, -0.898, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_6.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.676, 0.825, 0.325]}
                rotation={[-Math.PI, -Math.PI / 7, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_7.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.75, 0.825, 0]}
                rotation={[-Math.PI, 0, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_8.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.676, 0.825, -0.325]}
                rotation={[-Math.PI, Math.PI / 7, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_9.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.468, 0.825, -0.586]}
                rotation={[-Math.PI, 0.898, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_10.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[-0.167, 0.825, -0.731]}
                rotation={[-Math.PI, 1.346, Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_11.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.167, 0.825, -0.731]}
                rotation={[0, 1.346, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_12.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.468, 0.825, -0.586]}
                rotation={[0, 0.898, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Bolt_13.geometry}
                material={materials['Sci-fi Monochromatic_mat_2_000_2_0.250']}
                position={[0.676, 0.825, -0.325]}
                rotation={[0, Math.PI / 7, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.BeamLight.geometry}
                material={materials['Sci-fi Monochromatic_mat_0_000_0_3.000']}
                rotation={[0, 0, Math.PI]}
            />
        </group>
    )
}

const LightPurple = () => {
    return (
      <spotLight
        position={[0, -1, 0]} 
        intensity={1}      
        color="#9b30ff"     
        penumbra={1} z
        castShadow    
      />
    );
  }

const UFOCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      setIsMobile(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

    const ufoScale = isMobile ? [0.15, 0.15, 0.15] : [0.2, 0.2, 0.2];
    const ufoPosition = isMobile ? [0, -0.4, -0.1] : [0, -0.1, 0.1];

    return (
        <div className='absolute bottom-10 h-80'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 5, 10]} intensity={2} />
                    <UFO
                        position={ufoPosition}
                        scale={ufoScale}
                    />
                    <LightPurple />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default UFOCanvas;