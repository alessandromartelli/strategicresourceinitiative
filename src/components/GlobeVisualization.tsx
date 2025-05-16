import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';

interface Hotspot {
  lat: number;
  lng: number;
  intensity: number;
  name: string;
}

interface SatellitePath {
  points: { lat: number; lng: number }[];
  progress: number;
  speed: number;
}

const hotspots: Hotspot[] = [
  { lat: -23.5505, lng: -46.6333, intensity: 0.8, name: 'São Paulo Mining Operation' },
  { lat: 37.7749, lng: -122.4194, intensity: 0.5, name: 'San Francisco Infrastructure' },
  { lat: 28.6139, lng: 77.2090, intensity: 0.7, name: 'Delhi Rail Network' },
  { lat: -33.8688, lng: 151.2093, intensity: 0.6, name: 'Sydney Harbor Bridge' },
  { lat: 35.6762, lng: 139.6503, intensity: 0.9, name: 'Tokyo Transport Hub' },
  { lat: 55.7558, lng: 37.6173, intensity: 0.4, name: 'Moscow Dam Project' },
  { lat: -1.2921, lng: 36.8219, intensity: 0.8, name: 'Nairobi Highway Project' },
];

const satellitePaths: SatellitePath[] = [
  {
    points: [
      { lat: 0, lng: -180 },
      { lat: 20, lng: -120 },
      { lat: 40, lng: -60 },
      { lat: 50, lng: 0 },
      { lat: 40, lng: 60 },
      { lat: 20, lng: 120 },
      { lat: 0, lng: 180 },
    ],
    progress: 0,
    speed: 0.003,
  },
  {
    points: [
      { lat: -30, lng: -160 },
      { lat: -40, lng: -80 },
      { lat: -30, lng: 0 },
      { lat: -40, lng: 80 },
      { lat: -30, lng: 160 },
    ],
    progress: 0.5,
    speed: 0.002,
  },
];

interface GlobeVisualizationProps {
  className?: string;
}

const GlobeVisualization: React.FC<GlobeVisualizationProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const hotspotGroupRef = useRef<THREE.Group | null>(null);
  const satelliteGroupRef = useRef<THREE.Group | null>(null);
  
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Convert latitude and longitude to 3D position
  const latLngToVector3 = (lat: number, lng: number, radius: number = 1): THREE.Vector3 => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    
    const x = -radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    
    return new THREE.Vector3(x, y, z);
  };
  
  // Initialize the globe
  useEffect(() => {
    if (!containerRef.current || isInitialized) return;
    
    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Create camera
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;
    cameraRef.current = camera;
    
    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Create controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enablePan = false;
    controls.minDistance = 1.5;
    controls.maxDistance = 5;
    controlsRef.current = controls;
    
    // Create globe
    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globeTexture = new THREE.TextureLoader().load('/globe/earth-blue-marble.jpg');
    const bumpTexture = new THREE.TextureLoader().load('/globe/earth-topology.jpg');
    const specularTexture = new THREE.TextureLoader().load('/globe/earth-specular.jpg');
    
    const globeMaterial = new THREE.MeshPhongMaterial({
      map: globeTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.05,
      specularMap: specularTexture,
      specular: new THREE.Color(0x333333),
      shininess: 5,
    });
    
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);
    scene.add(globe);
    globeRef.current = globe;
    
    // Add atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.005, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x9bb0ff,
      transparent: true,
      opacity: 0.2,
      side: THREE.FrontSide,
    });
    
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    
    // Create hotspot group
    const hotspotGroup = new THREE.Group();
    scene.add(hotspotGroup);
    hotspotGroupRef.current = hotspotGroup;
    
    // Create satellite group
    const satelliteGroup = new THREE.Group();
    scene.add(satelliteGroup);
    satelliteGroupRef.current = satelliteGroup;
    
    // Create hotspots
    hotspots.forEach((hotspot) => {
      const position = latLngToVector3(hotspot.lat, hotspot.lng, 1.01);
      
      // Create hotspot marker
      const ringGeometry = new THREE.RingGeometry(0.015, 0.025, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0xf3a83c),
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(position);
      ring.lookAt(0, 0, 0);
      
      // Add animation data
      (ring as any).userData = { hotspot, pulseScale: 1, pulseDirection: 1 };
      
      hotspotGroup.add(ring);
    });
    
    // Create satellite paths
    satellitePaths.forEach((path) => {
      // Create line for path
      const pathPoints = path.points.map(point => latLngToVector3(point.lat, point.lng, 1.05));
      const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
      const pathMaterial = new THREE.LineBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 0.4,
      });
      
      const pathLine = new THREE.Line(pathGeometry, pathMaterial);
      satelliteGroup.add(pathLine);
      
      // Create satellite
      const satelliteGeometry = new THREE.SphereGeometry(0.01, 16, 16);
      const satelliteMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      
      // Add to scene and set initial position
      satelliteGroup.add(satellite);
      (satellite as any).userData = { path, pathPoints };
    });
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      if (cameraRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }
      
      if (rendererRef.current) {
        rendererRef.current.setSize(width, height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle click events for interactivity
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current || !cameraRef.current || !sceneRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      mouse.x = ((event.clientX - rect.left) / containerRef.current.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / containerRef.current.clientHeight) * 2 + 1;
      
      raycaster.setFromCamera(mouse, cameraRef.current);
      
      const hotspotIntersects = raycaster.intersectObjects(hotspotGroupRef.current?.children || []);
      
      if (hotspotIntersects.length > 0) {
        const userData = (hotspotIntersects[0].object as any).userData;
        setSelectedHotspot(userData.hotspot);
        
        // Animate camera to look at the hotspot
        if (controlsRef.current && cameraRef.current) {
          const position = latLngToVector3(userData.hotspot.lat, userData.hotspot.lng, 1);
          const distance = 1.5;
          const targetPosition = position.clone().multiplyScalar(distance);
          
          gsap.to(cameraRef.current.position, {
            x: targetPosition.x,
            y: targetPosition.y,
            z: targetPosition.z,
            duration: 1,
            ease: 'power2.inOut',
            onUpdate: () => {
              cameraRef.current?.lookAt(0, 0, 0);
              controlsRef.current?.update();
            },
          });
          
          // Temporarily disable auto-rotation
          controlsRef.current.autoRotate = false;
          setTimeout(() => {
            if (controlsRef.current) controlsRef.current.autoRotate = true;
          }, 5000);
        }
      } else {
        setSelectedHotspot(null);
      }
    };
    
    containerRef.current.addEventListener('click', handleClick);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Update controls
      if (controlsRef.current) {
        controlsRef.current.update();
      }
      
      // Animate hotspots
      if (hotspotGroupRef.current) {
        hotspotGroupRef.current.children.forEach((object) => {
          const userData = (object as any).userData;
          
          // Pulse effect
          userData.pulseScale += 0.03 * userData.pulseDirection;
          if (userData.pulseScale > 1.3) {
            userData.pulseDirection = -1;
          } else if (userData.pulseScale < 0.7) {
            userData.pulseDirection = 1;
          }
          
          object.scale.set(userData.pulseScale, userData.pulseScale, 1);
        });
      }
      
      // Animate satellites
      if (satelliteGroupRef.current) {
        const satellites = satelliteGroupRef.current.children.filter(
          (child) => child instanceof THREE.Mesh
        ) as THREE.Mesh[];
        
        satellites.forEach((satellite) => {
          const userData = (satellite as any).userData;
          const { path, pathPoints } = userData;
          
          // Update progress
          path.progress += path.speed;
          if (path.progress > 1) path.progress -= 1;
          
          // Calculate position along the path
          const index = Math.floor(path.progress * (pathPoints.length - 1));
          const nextIndex = (index + 1) % pathPoints.length;
          const subProgress = path.progress * (pathPoints.length - 1) - index;
          
          const currentPos = pathPoints[index];
          const nextPos = pathPoints[nextIndex];
          
          // Interpolate position
          const position = currentPos.clone().lerp(nextPos, subProgress);
          satellite.position.copy(position);
          
          // Add scanning effect
          const scanGeometry = new THREE.RingGeometry(0, 0.1, 32);
          const scanMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0.7,
            side: THREE.DoubleSide,
          });
          
          const scan = new THREE.Mesh(scanGeometry, scanMaterial);
          scan.position.copy(position);
          scan.lookAt(0, 0, 0);
          satelliteGroupRef.current?.add(scan);
          
          // Animate and remove scan effect
          gsap.to(scan.scale, {
            x: 2,
            y: 2,
            z: 1,
            duration: 1,
            ease: 'power1.out',
            onUpdate: () => {
              if (scanMaterial.opacity > 0) {
                scanMaterial.opacity -= 0.02;
              }
            },
            onComplete: () => {
              satelliteGroupRef.current?.remove(scan);
              scan.geometry.dispose();
              scanMaterial.dispose();
            },
          });
        });
      }
      
      // Render scene
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };
    
    animate();
    setIsInitialized(true);
    
    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeEventListener('click', handleClick);
        if (rendererRef.current) {
          containerRef.current.removeChild(rendererRef.current.domElement);
        }
      }
      
      if (globeRef.current) {
        (globeRef.current.geometry as THREE.BufferGeometry).dispose();
        (globeRef.current.material as THREE.Material).dispose();
      }
      
      // Dispose of all materials and geometries
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
      }
      
      rendererRef.current?.dispose();
    };
  }, [isInitialized]);
  
  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      <div ref={containerRef} className="absolute inset-0">
        {/* Globe visualization will be rendered here */}
      </div>
      
      {/* Information overlay for selected hotspot */}
      {selectedHotspot && (
        <div className="absolute bottom-8 left-0 right-0 mx-auto w-full max-w-md p-4 bg-black/60 backdrop-blur text-white rounded-lg animate-fade-in">
          <h3 className="text-xl font-semibold mb-2">{selectedHotspot.name}</h3>
          <div className="flex items-center mb-2">
            <span className="text-sm">Risk Score:</span>
            <div className="ml-2 h-2 bg-gray-700 rounded-full w-32">
              <div
                className="h-2 bg-accent rounded-full"
                style={{ width: `${selectedHotspot.intensity * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-accent font-medium">
              {Math.round(selectedHotspot.intensity * 100)}%
            </span>
          </div>
          <p className="text-sm opacity-80">Click on another hotspot to view details or click the globe to reset.</p>
        </div>
      )}
    </div>
  );
};

export default GlobeVisualization; 