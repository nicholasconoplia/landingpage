"use client"

import { useRef, useState, useEffect, useMemo, useCallback } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera, useTexture, useGLTF } from "@react-three/drei"
import * as THREE from "three"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"
import { Html } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"

// Available screenshots
const screenshots = [
  '/images/screenshots/tasks_tab.png',
  '/images/screenshots/spinwheel.png',
  '/images/screenshots/settings_tab.png',
  '/images/screenshots/select_courses.png',
  '/images/screenshots/canvas_tab.png',
  '/images/screenshots/calander_tab.png',
]

// Default screenshot if none provided
const DEFAULT_SCREENSHOT = '/images/app-screenshot.png'

// Custom texture adjustment parameters - modify these to adjust the screenshot
const textureAdjustments = {
  rotation: 180,  // Rotation in degrees (0-360)
  scale: 1.12,    // Overall scale (affects both dimensions equally)
  scaleX: 2,     // Horizontal stretch (1 = normal, >1 = stretch, <1 = compress)
  scaleY: 0.9,   // Vertical stretch
  offsetX: 0.00,  // Horizontal position (0 to 1)
  offsetY: 0.005, // Vertical position (0 to 1)
  flipY: false,  // Flip vertically
}

// Material adjustment parameters
const materialAdjustments = {
  emissiveIntensity: 0,    // Controls the strength of the screen glow (0-1)
  roughness: 0.0,          // Controls the roughness of the surface (0-1)
  metalness: 0.0,          // Controls the metallic look (0-1)
  opacity: 1,              // Controls the opacity (0-1)
  contrast: 0.3,           // Controls the contrast of the texture (1 = normal, >1 = more contrast)
  brightness: 0.5,         // Controls the brightness (1 = normal, >1 = brighter)
}

// iPhone model component
function IPhoneModel({ screenImage = DEFAULT_SCREENSHOT, direction = 0 }: { screenImage?: string; direction?: number }) {
  const group = useRef<THREE.Group>(null)
  const texture = useTexture(screenImage)
  const { scene, nodes, materials } = useGLTF('/models/iphone/scene.gltf')

  // Animation setup
  useEffect(() => {
    if (scene) {
      scene.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          // Target the screen mesh by its material name
          if (node.name === 'YbXWdqEcjbfTKuN_0' || 
              (node.material as THREE.MeshStandardMaterial)?.name === 'GFNYbWjyDVGUwJd') {
            // Create new material for screen with initial animation state
            const newMaterial = new THREE.MeshStandardMaterial({
              map: texture,
              emissive: new THREE.Color(0xffffff),
              emissiveMap: texture,
              emissiveIntensity: materialAdjustments.emissiveIntensity,
              roughness: materialAdjustments.roughness,
              metalness: materialAdjustments.metalness,
              transparent: true,
              opacity: 0,
            })

            // Set initial texture offset based on direction
            texture.offset.x = direction * 0.5
            
            // Animate the texture offset and material opacity
            gsap.to(texture.offset, {
              x: 0,
              duration: 0.5,
              ease: "power2.inOut"
            })
            
            gsap.to(newMaterial, {
              opacity: 1,
              duration: 0.5,
              ease: "power2.inOut"
            })

            // Apply contrast and brightness adjustments
            newMaterial.onBeforeCompile = (shader) => {
              shader.fragmentShader = shader.fragmentShader.replace(
                '#include <map_fragment>',
                `
                #include <map_fragment>
                diffuseColor.rgb = pow(diffuseColor.rgb, vec3(1.0 / ${materialAdjustments.contrast.toFixed(1)}));
                diffuseColor.rgb *= ${materialAdjustments.brightness.toFixed(1)};
                `
              );
            };

            // Apply the material
            node.material = newMaterial
          }
        }
      })
    }
  }, [scene, texture, direction])

  // Optimize texture settings for screen display
  useEffect(() => {
    // Basic texture settings
    texture.flipY = textureAdjustments.flipY
    texture.colorSpace = 'srgb'
    texture.minFilter = THREE.LinearFilter
    texture.magFilter = THREE.LinearFilter
    
    // Enhance contrast through color space
    texture.colorSpace = THREE.SRGBColorSpace

    // Apply custom adjustments
    texture.rotation = (textureAdjustments.rotation * Math.PI) / 180  // Convert degrees to radians
    texture.repeat.set(
      textureAdjustments.scaleX * textureAdjustments.scale, 
      textureAdjustments.scaleY * textureAdjustments.scale
    )
    texture.offset.set(textureAdjustments.offsetX, textureAdjustments.offsetY)
    texture.center.set(0.5, 0.5) // Set rotation center to middle of texture
    
    texture.needsUpdate = true
  }, [texture])

  useEffect(() => {
    if (scene) {
      scene.traverse((node) => {
        if (node instanceof THREE.Mesh) {
          // Target the screen mesh by its material name
          if (node.name === 'YbXWdqEcjbfTKuN_0' || 
              (node.material as THREE.MeshStandardMaterial)?.name === 'GFNYbWjyDVGUwJd') {
            // Create new material for screen
            const newMaterial = new THREE.MeshStandardMaterial({
              map: texture,
              emissive: new THREE.Color(0xffffff),
              emissiveMap: texture,
              emissiveIntensity: materialAdjustments.emissiveIntensity,
              roughness: materialAdjustments.roughness,
              metalness: materialAdjustments.metalness,
              transparent: true,
              opacity: materialAdjustments.opacity,
            })

            // Apply contrast and brightness adjustments
            newMaterial.onBeforeCompile = (shader) => {
              shader.fragmentShader = shader.fragmentShader.replace(
                '#include <map_fragment>',
                `
                #include <map_fragment>
                diffuseColor.rgb = pow(diffuseColor.rgb, vec3(1.0 / ${materialAdjustments.contrast.toFixed(1)}));
                diffuseColor.rgb *= ${materialAdjustments.brightness.toFixed(1)};
                `
              );
            };

            // Apply the material
            node.material = newMaterial
          }
        }
      })
    }
  }, [scene, texture])

  return <primitive ref={group} object={scene} />
}

// Scene setup with camera and lighting
function PhoneScene({ screenImage = DEFAULT_SCREENSHOT, direction = 0 }: { screenImage?: string; direction?: number }) {
  const { viewport, gl, camera } = useThree()
  const isMobile = viewport.width < 768 / 100
  const isSmallMobile = viewport.width < 375 / 100
  const groupRef = useRef<THREE.Group>(null)
  const controlsRef = useRef<any>(null)
  const [enablePanning, setEnablePanning] = useState(false)

  // Adjust scale based on screen size
  const scale = useMemo(() => {
    if (isSmallMobile) return 1.6 // Increased for iPhone SE and smaller devices
    if (isMobile) return 1.8 // Increased for medium-sized phones
    return 2.2 // Increased for larger screens
  }, [isMobile, isSmallMobile])

  // Y-position of the phone: negative moves down, positive moves up
  const yOffset = useMemo(() => {
    if (isSmallMobile) return -0.11  // Moved up from -0.04
    if (isMobile) return -0.11       // Moved up from -0.06
    return 0                        // Moved up from -0.07
  }, [isMobile, isSmallMobile])

  // Convert angles to radians and set up camera position
  const cameraSetup = useMemo(() => {
    const angles = isSmallMobile
      ? { phi: 86.5, theta: -90, radius: 0.5 }    // Adjusted phi for upward tilt
      : isMobile 
        ? { phi: 86.7, theta: -90, radius: 0.48 } // Adjusted phi for upward tilt
        : { phi: 87.8, theta: -112, radius: 0.45 } // Adjusted phi for upward tilt

    // Convert degrees to radians
    const phiRad = (angles.phi * Math.PI) / 180
    const thetaRad = (angles.theta * Math.PI) / 180

    // Convert spherical coordinates to Cartesian
    const x = angles.radius * Math.sin(phiRad) * Math.cos(thetaRad)
    const y = angles.radius * Math.cos(phiRad)
    const z = angles.radius * Math.sin(phiRad) * Math.sin(thetaRad)

    return [x, y, z] as [number, number, number]
  }, [isMobile, isSmallMobile])

  // Reset view function
  const resetView = useCallback(() => {
    if (controlsRef.current && camera) {
      camera.position.set(...cameraSetup)
      controlsRef.current.reset()
    }
  }, [camera, cameraSetup])

  // Make resetView available globally
  useEffect(() => {
    const canvas = document.querySelector('canvas')
    if (canvas) {
      ;(canvas as any).__resetView = resetView
    }
  }, [resetView])

  // Debug camera rotation
  useFrame(() => {
    if (controlsRef.current) {
      const spherical = new THREE.Spherical()
      const target = controlsRef.current.target
      const position = camera.position.clone()
      const direction = position.sub(target)
      spherical.setFromVector3(direction)
      
      console.log('Camera Angles:', {
        phi: Math.round((spherical.phi * 180 / Math.PI) * 100) / 100,
        theta: Math.round((spherical.theta * 180 / Math.PI) * 100) / 100,
        radius: Math.round(spherical.radius * 100) / 100
      })
    }
  })

  // Handle zoom changes to enable/disable panning
  const handleControlsChange = useCallback(() => {
    if (controlsRef.current) {
      const zoomLevel = controlsRef.current.getDistance()
      // Enable panning only when zoomed in closer than 0.3
      setEnablePanning(zoomLevel < 0.3)
    }
  }, [])

  return (
    <>
      <PerspectiveCamera 
        makeDefault 
        position={cameraSetup}
        fov={35}
      />
      
      <ambientLight intensity={0.45} />
      <spotLight 
        position={[0.4, 0.6, 0.4]} 
        angle={0.45} 
        penumbra={1} 
        intensity={1} 
        castShadow
      />
      <spotLight 
        position={[-0.4, 0.6, 0.4]} 
        angle={0.45} 
        penumbra={1} 
        intensity={0.7} 
        castShadow={false}
      />

      <Suspense fallback={<FallbackPhone />}>
        <group 
          ref={groupRef}
          position={[0, yOffset, 0]} 
          scale={scale}
        >
          <IPhoneModel screenImage={screenImage} direction={direction} />
        </group>
      </Suspense>

      <Environment 
        files="/environments/studio_small_08_1k.exr" 
        background={false}
        preset="studio"
      />
      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={enablePanning}
        minPolarAngle={Math.PI / 2 - 0.35}
        maxPolarAngle={Math.PI / 2 + 0.35}
        rotateSpeed={0.25}
        dampingFactor={0.05}
        minDistance={0.15}
        maxDistance={0.8}
        zoomSpeed={0.5}
        panSpeed={0.5}
        enableDamping
        onChange={handleControlsChange}
        keys={{
          LEFT: 'ArrowLeft',
          UP: 'ArrowUp',
          RIGHT: 'ArrowRight',
          BOTTOM: 'ArrowDown'
        }}
      />
    </>
  )
}

// Fallback component if model fails to load
function FallbackPhone() {
  return (
    <mesh>
      <boxGeometry args={[0.2, 0.4, 0.03]} />
      <meshStandardMaterial color="#a855f7" />
    </mesh>
  )
}

// Main component with screenshot navigation
export function ThreeIPhone({ initialScreenImage = DEFAULT_SCREENSHOT }: { initialScreenImage?: string }) {
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Navigation functions
  const previousScreenshot = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setDirection(-1)
    setCurrentScreenshotIndex((prev) => 
      prev === 0 ? screenshots.length - 1 : prev - 1
    )
    setTimeout(() => setIsTransitioning(false), 500) // Match animation duration
  }

  const nextScreenshot = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setDirection(1)
    setCurrentScreenshotIndex((prev) => 
      (prev + 1) % screenshots.length
    )
    setTimeout(() => setIsTransitioning(false), 500) // Match animation duration
  }

  // Preload everything
  useEffect(() => {
    THREE.Cache.clear()
    screenshots.forEach(screenshot => {
      const img = new Image()
      img.src = screenshot
      useTexture.preload(screenshot)
    })
    useGLTF.preload('/models/iphone/scene.gltf')
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-[400px] xs:h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <Canvas className="absolute inset-0" shadows dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PhoneScene screenImage={screenshots[currentScreenshotIndex]} direction={direction} />
        </Suspense>
      </Canvas>

      {/* Side Navigation Buttons - Adjusted for better mobile visibility */}
      <div className="absolute inset-0 z-50 pointer-events-none">
        <div className="absolute top-1/2 left-2 xs:left-4 -translate-y-1/2 pointer-events-auto">
          <motion.button
            onClick={previousScreenshot}
            className="p-2 xs:p-3 hover:scale-110 transition-transform duration-200 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
            title="Previous Screenshot"
            whileTap={{ scale: 0.9 }}
            disabled={isTransitioning}
          >
            <ChevronLeft className="w-4 h-4 xs:w-6 xs:h-6 text-black" />
          </motion.button>
        </div>
        <div className="absolute top-1/2 right-2 xs:right-4 -translate-y-1/2 pointer-events-auto">
          <motion.button
            onClick={nextScreenshot}
            className="p-2 xs:p-3 hover:scale-110 transition-transform duration-200 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
            title="Next Screenshot"
            whileTap={{ scale: 0.9 }}
            disabled={isTransitioning}
          >
            <ChevronRight className="w-4 h-4 xs:w-6 xs:h-6 text-black" />
          </motion.button>
        </div>
      </div>
      
      {/* Bottom Reset View Button - Adjusted for better mobile visibility */}
      <div className="absolute bottom-2 xs:bottom-4 left-1/2 -translate-x-1/2 flex items-center z-50 pointer-events-auto">
        <motion.button
          onClick={() => {
            const canvas = document.querySelector('canvas')
            if (canvas && (canvas as any).__resetView) {
              (canvas as any).__resetView()
            }
          }}
          className="px-3 py-1.5 xs:px-4 xs:py-2 text-xs xs:text-sm text-black bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white/90 transition-colors duration-200"
          title="Reset View"
          whileTap={{ scale: 0.95 }}
        >
          Reset View
        </motion.button>
      </div>
    </div>
  )
}

// Update the loading component to match new heights
export const DynamicThreeIPhone = dynamic(() => Promise.resolve(ThreeIPhone), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] xs:h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
      <div className="w-[180px] h-[360px] xs:w-[200px] xs:h-[400px] sm:w-[240px] sm:h-[480px] rounded-[40px] bg-gradient-to-b from-purple-300 to-purple-400 animate-pulse"></div>
    </div>
  ),
})
