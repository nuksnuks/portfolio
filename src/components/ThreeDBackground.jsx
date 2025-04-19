import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Model } from './Model'

// Responsive hook for screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

// Helper function for random numbers
const random = (min, max) => Math.random() * (max - min) + min;

// Helper function for random positions
function randomPosition(range = 4) {
  return [
    (Math.random() - 0.5) * 2 * range,
    (Math.random() - 0.5) * 2 * range,
    (Math.random() - 0.5) * 2 * range,
  ];
}

// Use Vite's base URL for assets
const base = import.meta.env.BASE_URL;

// List of model base URLs
const baseModels = [
  { url: `${base}models/cube.gltf` },
  { url: `${base}models/cone.gltf` },
  { url: `${base}models/capsule.gltf` },
  { url: `${base}models/diamond.gltf` },
  { url: `${base}models/sphere.gltf` },
  { url: `${base}models/torus.gltf` },
  { url: `${base}models/tube.gltf` },
  { url: `${base}models/teapot.gltf` },
  { url: `${base}models/honeycomb.gltf` },
  { url: `${base}models/pyramid.gltf` },
  { url: `${base}models/beam.gltf` },
  { url: `${base}models/star.gltf` },
  { url: `${base}models/spoon.gltf` },
];

// Generate exactly two instances per model with different positions
const modelConfigurations = baseModels.flatMap((model, idx) => [
  {
    id: `${model.url}-0`,
    url: model.url,
    position: randomPosition(4),
    animation: {
      speed: 0.03 + Math.random() * 0.02,
      floatHeight: 0.2 + Math.random() * 0.1,
      radius: 0.5 + Math.random() * 0.2,
      offset: Math.random() * Math.PI * 2,
    },
  },  
]);

const Scene = ({ isMobile }) => {
  const [initialPositions, setInitialPositions] = useState({});
  // Reduce model count on mobile for performance
  const displayedModels = isMobile ? modelConfigurations.slice(0, 9) : modelConfigurations;
  const models = displayedModels.map(config => ({
    ...config,
    ref: useRef(),
    // Store initial random values for each model
    randomValues: {
      floatHeight: random(0.1, 0.3),
      radius: random(0.01, 4.0),
      speed: random(0.01, 0.1),
      offset: random(0, Math.PI * 2)
    }
  }));

  // Store initial positions in state
  useEffect(() => {
    const positions = {};
    models.forEach((model) => {
      if (model.ref.current) {
        positions[model.id] = {
          x: model.position[0],
          y: model.position[1],
          z: model.position[2]
        };
      }
    });
    setInitialPositions(positions);
  }, []);

  useFrame((state, delta) => {
      const time = state.clock.getElapsedTime();
      models.forEach((model, index) => {
          if (model.ref.current && model.animation && model.ref.current.position && model.ref.current.rotation) {
            // Self-rotation with smoother variations
            const rotationSpeed = model.randomValues.speed;
            model.ref.current.rotation.y += delta * (0.1 + rotationSpeed);
            model.ref.current.rotation.x += delta * (0.2 + rotationSpeed);
            model.ref.current.rotation.z += delta * (0.1 + rotationSpeed);

            // Floating animation with smoother height
            const floatHeight = model.randomValues.floatHeight * model.animation.floatHeight;
            const baseY = initialPositions[model.id]?.y || model.position[1] + Math.sin(time * rotationSpeed + model.randomValues.offset) * floatHeight;
            model.ref.current.position.y = baseY;
            
            // Slow circular motion with smoother radius and speed
            const radius = model.randomValues.radius * model.animation.radius;
            const angle = time * rotationSpeed + model.randomValues.offset;
            model.ref.current.position.x = initialPositions[model.id]?.x || model.position[0] + Math.cos(angle) * radius;
            model.ref.current.position.z = initialPositions[model.id]?.z || model.position[2] + Math.sin(angle) * radius;
          }
      });
  });

  return (
      <>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} />
          
          {models.map((model) => (
              <Model
                  key={model.id}
                  url={model.url}
                  ref={model.ref}
                  position={model.position}
                  scale={isMobile ? 0.7 : 1}
              />
          ))}

          <Environment preset="forest" backgroundBlurriness={0.5}/>
          {/* Disable OrbitControls on mobile for better UX */}
          {!isMobile && <OrbitControls enablePan enableZoom enableRotate />}
      </>
  )
}

const ThreeDBackground = () => {
  const isMobile = useIsMobile();
  // Responsive canvas style
  const canvasStyle = isMobile
    ? { width: '100vw', height: '100dvh', position: 'fixed', top: 0, left: 0, zIndex: -1, touchAction: 'none' }
    : { width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 };
  // Responsive camera
  const cameraProps = isMobile
    ? { position: [0, 0, 10], fov: 80 }
    : { position: [0, 0, 8], fov: 75 };
  return (
    <Canvas
      shadows
      camera={cameraProps}
      style={canvasStyle}
      gl={{ antialias: !isMobile, alpha: true}}
    >
      <Scene isMobile={isMobile} />
    </Canvas>
  )
}

export default ThreeDBackground