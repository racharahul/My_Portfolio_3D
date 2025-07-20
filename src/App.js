import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Billboard, Text, TrackballControls } from '@react-three/drei'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom'

// Import page components

import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Home from './pages/Home'

// Import layout component
import Layout from './components/Layout'

// Word component for navigable words
function Word({ children, path, navigate, ...props }) {
  const color = new THREE.Color()
  const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  const over = (e) => setHovered(true)
  const out = () => setHovered(false)

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  // Handle navigation using the passed navigate function
  const handleClick = () => {
    if (path) {
      if (path.startsWith('http://') || path.startsWith('https://')) {
        window.open(path, '_blank');
      } else {
        navigate(path);
      }
    }
  };
  
  // Handle touch events specifically for mobile
  const handleTouch = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setHovered(true); // Set hover state for visual feedback
    handleClick(); // Trigger the click handler
    
    // Reset hover state after a delay
    setTimeout(() => setHovered(false), 300);
  };

  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text bigger as it gets closer to the camera
    const worldPosition = ref.current.getWorldPosition(new THREE.Vector3())
    const distance = worldPosition.distanceTo(camera.position)
    const scale = 1 + (10 / distance) // Adjust this formula as needed

    ref.current.material.color.lerp(color.set(hovered ? '#64ffda' : '#ccd6f6'), 0.1)
    ref.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1)
  })

  return (
    <Billboard {...props}>
      <Text 
        ref={ref} 
        onPointerOver={over} 
        onPointerOut={out} 
        onClick={handleClick}
        onTouchStart={handleTouch} // Add touch event handler
        onTouchEnd={(e) => e.stopPropagation()} // Prevent conflicts with TrackballControls
        {...fontProps} 
        children={children} 
      />
    </Billboard>
  )
}

function Cloud({ count = 8, radius = 20, navigate }) {
  // Define navigation words and their paths
  const navWords = [
    { text: 'Home', path: '/home' },
    { text: 'About', path: '/about' },
    { text: 'Skills', path: '/skills' },
    { text: 'Projects', path: '/projects' },
    { text: 'Contact', path: '/contact' }
  ]

  // Create a distribution of words on a sphere
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()

    // Place navigation words in a more spaced out distribution
    const phiSpan = Math.PI / (navWords.length + 1)
    const thetaSpan = (Math.PI * 2) / navWords.length

    // Position the nav words evenly around the sphere - only one instance of each
    for (let i = 0; i < navWords.length; i++) {
      const phi = phiSpan * (i + 1)
      const theta = thetaSpan * i
      const pos = new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta))
      temp.push([pos, navWords[i].text, navWords[i].path])
    }

    return temp
  }, [radius])

  return words.map(([pos, word, path], index) => (
    <Word key={index} position={pos} path={path} navigate={navigate}>
      {word}
    </Word>
  ))
}

// Wrapper component for the 3D scene
function Scene({ navigate, isMinimized, setIsMinimized }) {
  const handleSceneClick = (e) => {
    // Only handle clicks on the container itself, not on child elements
    if (e.target === e.currentTarget && isMinimized) {
      setIsMinimized(false);
      navigate('/'); // Navigate back to home to see the full 3D view
    }
  };
  
  // Handle touch events specifically for mobile
  const handleSceneTouch = (e) => {
    // Only handle touches on the container itself, not on child elements
    if (e.target === e.currentTarget && isMinimized) {
      e.stopPropagation(); // Prevent event from bubbling
      setIsMinimized(false);
      navigate('/'); // Navigate back to home to see the full 3D view
    }
  };

  // Use useState and useEffect for hover state
  const [isHovered, setIsHovered] = useState(false);
  
  // Get window width for responsive styling
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Define styles based on minimized state, hover state, and window width
  const containerStyle = isMinimized ? {
    position: 'fixed',
    width: windowWidth <= 768 ? '100px' : '150px',
    height: windowWidth <= 768 ? '100px' : '150px',
    bottom: windowWidth <= 768 ? '20px' : '30px',
    right: windowWidth <= 768 ? '20px' : '30px',
    top: 'auto',
    left: 'auto',
    borderRadius: '50%',
    boxShadow: isHovered 
      ? '0 0 20px 8px rgba(100, 255, 218, 0.25)' 
      : '0 0 15px 5px rgba(100, 255, 218, 0.15)',
    background: 'var(--color-navy-light)',
    zIndex: 9999, // Ensure it's on top of everything
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transform: isHovered ? 'scale(1.05)' : 'none',
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)'
  } : {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 10,
    transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',
    pointerEvents: 'auto'
  };

  return (
    <div 
      className="scene-container"
      onClick={handleSceneClick}
      onTouchStart={handleSceneTouch}
      onTouchEnd={(e) => e.stopPropagation()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={containerStyle}
      data-is-minimized={isMinimized ? 'true' : 'false'} // Add data attribute for CSS targeting
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach="fog" args={['#0a192f', 0, 80]} />
        <Suspense fallback={null}>
          <group rotation={[10, 10.5, 10]}>
            <Cloud count={8} radius={20} navigate={navigate} />
          </group>
        </Suspense>
        <TrackballControls 
          // Configure TrackballControls to work better with touch events
          noZoom={false}
          noPan={false}
          dynamicDampingFactor={0.15}
          rotateSpeed={1.5}
          maxDistance={80}
          minDistance={20}
          // Add className for CSS targeting
          className="trackball-controls"
        />
      </Canvas>
    </div>
  );
}

// This component will live inside the Router and can use hooks.
function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMinimized, setIsMinimized] = useState(location.pathname !== '/');

  useEffect(() => {
    setIsMinimized(location.pathname !== '/');
  }, [location.pathname]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      {/* Render the 3D scene */}
      <Scene navigate={navigate} isMinimized={isMinimized} setIsMinimized={setIsMinimized} />

      {/* Only render content for non-root routes */}
      {location.pathname !== '/' && (
        <Routes>
          <Route path="/home" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/skills" element={<Layout><Skills /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      )}
    </div>
  )
}

// Import MobileEnhancer component
import MobileEnhancer from './components/MobileEnhancer';
import './components/MobileEnhancer.css';

// Main App component with routing
export default function App() {
  return (
    <Router>
      <AppContent />
      <MobileEnhancer /> {/* This component only applies enhancements on mobile devices */}
    </Router>
  )
}
