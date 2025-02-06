import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";


// Load Earth Textures
const earthTexture = new TextureLoader().load("https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg");
const earthTexture2 = new TextureLoader().load("");
const earthTexture3 = new TextureLoader().load("");

// Rotating Diamond-like Cube with Inner Boxes & Multiple Earths
const DiamondCube = () => {
  const cubeRef = useRef();
  const smallCube1Ref = useRef();
  const smallCube2Ref = useRef();
  const earthRef = useRef();
  const smallEarth1Ref = useRef();
  const smallEarth2Ref = useRef();
  const smallEarth3Ref = useRef();  // New Earth

  // Ensure useFrame is used properly within Canvas
  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005;
      cubeRef.current.rotation.y += 0.005;
    }
    if (smallCube1Ref.current) {
      smallCube1Ref.current.rotation.x -= 0.0075;
      smallCube1Ref.current.rotation.y -= 0.0075;
    }
    if (smallCube2Ref.current) {
      smallCube2Ref.current.rotation.x += 0.01;
      smallCube2Ref.current.rotation.y += 0.01;
    }
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0025;
    }
    if (smallEarth1Ref.current) {
      smallEarth1Ref.current.rotation.y += 0.005;
    }
    if (smallEarth2Ref.current) {
      smallEarth2Ref.current.rotation.y += 0.005;
    }
    if (smallEarth3Ref.current) {
      smallEarth3Ref.current.rotation.y += 0.005;
    }
  });

  return (
    <group>
      {/* Main Diamond-like Cube */}
      <mesh ref={cubeRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshPhysicalMaterial
          color="#7df9ff"
          transmission={0.9}
          roughness={0.1}
          metalness={0.5}
          ior={2.4}
          thickness={3}
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Small Rotating Box 1 (Inside Main Cube) */}
      <mesh ref={smallCube1Ref} position={[0.5, 0.5, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff00ff" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Small Rotating Box 2 (Inside Main Cube) */}
      <mesh ref={smallCube2Ref} position={[-0.5, -0.5, -0.5]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#ff9900" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Main Earth on the Left Side */}
      <mesh ref={earthRef} position={[-5, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>

      {/* Small Earth 1 */}
      <mesh ref={smallEarth1Ref} position={[4, 3, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>

      {/* Small Earth 2 */}
      <mesh ref={smallEarth2Ref} position={[0, -4, 3]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial map={earthTexture2} />
      </mesh>

      {/* New Small Earth 3 with different texture */}
      <mesh ref={smallEarth3Ref} position={[-4, -3, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial map={earthTexture3} />
      </mesh>

      {/* New Small Earth 3 with different texture */}
      <mesh ref={smallEarth3Ref} position={[-4, -3, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial map={earthTexture3} />
      </mesh>

      {/* New Small Earth 3 with different texture */}
      <mesh ref={smallEarth3Ref} position={[-4, -3, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial map={earthTexture3} />
      </mesh>

      {/* New Small Earth 3 with different texture */}
      <mesh ref={smallEarth3Ref} position={[-4, -3, -2]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial map={earthTexture3} />
      </mesh>

      <Environment preset="dawn" />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#7df9ff" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </group>
  );
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const heroStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#111827",
    color: "white",
    textAlign: "left",
    padding: isMobile ? "0 2rem" : "0 4rem", // Increase padding for larger screens
    flexDirection: isMobile ? "column" : "row",
    paddingTop: isMobile ? "4rem" : "0",
    overflow: "hidden",
  };

  const contentStyle = {
    maxWidth: isMobile ? "100%" : "800px", // Ensure the content doesn't stretch too wide
    marginBottom: isMobile ? "2rem" : "0",
  };

  const canvasStyle = {
    width: isMobile ? "80vw" : "40vw",  // Adjust canvas width for desktop
    height: isMobile ? "80vw" : "40vw", // Adjust canvas height for desktop
  };

  return (
    <section id="hero" style={heroStyle}>
      <div style={contentStyle}>
        <h1 style={{ fontSize: isMobile ? "2.5rem" : "3.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
          Hi, I'm a MERN Stack Developer
        </h1>
        <h2 style={{ fontSize: isMobile ? "1.5rem" : "2.5rem", fontWeight: "600", color: "#60A5FA", marginBottom: "1rem" }}>
          I'm Sujit Kumar
        </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I specialize in building high-performance, full-stack web applications using MongoDB, Express.js, React, and Node.js.
                Passionate about creating responsive and user-friendly interfaces, I bring ideas to life through efficient code and modern web technologies.
           </p>

      </div>

      <div style={canvasStyle}>
        <Canvas camera={{ position: [10, 10, 10], fov: 25 }}>
          <DiamondCube />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
