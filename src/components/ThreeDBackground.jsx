import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Model } from './Model'

// Helper function for random numbers
const random = (min, max) => Math.random() * (max - min) + min;

// Use Vite's base URL for assets
const base = import.meta.env.BASE_URL;

// Pre-calculate random values for each model
const modelConfigurations = [
  {
    url: `${base}models/cube.gltf`,
    position: [1, 3, -2],
    animation: {
      speed: 0.05, // Base speed
      floatHeight: 0.2, // Base float height
      radius: 0.5, // Base radius
      offset: 0 // Base offset
    }
  },
  {
    url: `${base}models/cone.gltf`,
    position: [2, 2, -2],
    animation: {
      speed: 0.03,
      floatHeight: 0.2,
      radius: 0.5,
      offset: 0
    }
  },
  {
    url: `${base}models/capsule.gltf`,
    position: [-2, 1, -1],
    animation: {
      speed: 0.03,
      floatHeight: 0.2,
      radius: 0.5,
      offset: 0
    }
  },
  {
    url: `${base}models/diamond.gltf`,
    position: [2, 0, 0],
    animation: {
      speed: 0.03,
      floatHeight: 0.2,
      radius: 0.5,
      offset: 0
    }
  },
  {
    url: `${base}models/sphere.gltf`,
    position: [-2, -1, 1],
    animation: {
      speed: 0.03,
      floatHeight: 0.2,
      radius: 0.5,
      offset: 0
    }
  },
  {
    url: `${base}models/torus.gltf`,
    position: [3, -2, 2],
    animation: {
      speed: 0.03,
      floatHeight: 0.2,
      radius: 0.5,
      offset: 0
    }
  },
  {
    url: `${base}models/tube.gltf`,
    position: [1, -3, 2],
    animation: {
      speed: 0.03,
      floatHeight: 0.2,
      radius: 0.5,
      offset: 0
    }
  }
];

const Scene = () => {
  const [initialPositions, setInitialPositions] = useState({});
  const models = modelConfigurations.map(config => ({
    ...config,
    ref: useRef(),
    // Store initial random values for each model
    randomValues: {
      floatHeight: random(0.1, 0.3),
      radius: random(0.01, 1.0),
      speed: random(0.01, 0.1),
      offset: random(0, Math.PI * 2)
    }
  }));

  // Store initial positions in state
  useEffect(() => {
    const positions = {};
    models.forEach((model) => {
      if (model.ref.current) {
        positions[model.url] = {
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
            const baseY = initialPositions[model.url]?.y || model.position[1] + Math.sin(time * rotationSpeed + model.randomValues.offset) * floatHeight;
            model.ref.current.position.y = baseY;
            
            // Slow circular motion with smoother radius and speed
            const radius = model.randomValues.radius * model.animation.radius;
            const angle = time * rotationSpeed + model.randomValues.offset;
            model.ref.current.position.x = initialPositions[model.url]?.x || model.position[0] + Math.cos(angle) * radius;
            model.ref.current.position.z = initialPositions[model.url]?.z || model.position[2] + Math.sin(angle) * radius;
          }
      });
  });

  return (
      <>
          <ambientLight intensity={0.1} />
          <pointLight position={[10, 10, 10]} />
          
          {models.map((model, index) => (
              <Model
                  key={index}
                  url={model.url}
                  ref={model.ref}
                  position={model.position}
                  scale={1}
              />
          ))}

          <Environment preset="forest" backgroundBlurriness={0.5}/>
      </>
  )
}

const ThreeDBackground = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: -1 }}
      gl={{ antialias: true, alpha: true}}
    >
      <Scene />
    </Canvas>
  )
}

export default ThreeDBackground