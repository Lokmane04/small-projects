import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "lil-gui";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

/**
 * Base
 */
// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("/matcaps/2.png");

//fonts

const fontLoader = new FontLoader();

fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
  const textureGeometry = new TextGeometry("Hello Three.js", {
    font,
    size: 0.5,
    curveSegments: 5,
    height: 0.2,
    bevelEnabled: true,
    bevelOffset: 0,
    bevelSegments: 4,
    bevelSize: 0.02,
    bevelThickness: 0.03,
  });
  // textureGeometry.computeBoundingBox();
  // textureGeometry.translate(
  //   -(textureGeometry.boundingBox.max.x - 0.02) * 0.5,
  //   -(textureGeometry.boundingBox.max.y - 0.02) * 0.5,
  //   -(textureGeometry.boundingBox.max.z - 0.03) * 0.5
  // );
  textureGeometry.center();
  // const textMaterial = new THREE.MeshMatcapMaterial({ matcap: matcapTexture });
  const normalMaterial = new THREE.MeshNormalMaterial();
  const text = new THREE.Mesh(textureGeometry, normalMaterial);
  scene.add(text);

  const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
  for (let i = 0; i < 800; i++) {
    const donut = new THREE.Mesh(donutGeometry, normalMaterial);
    donut.position.x = (Math.random() - 0.5) * 30;
    donut.position.y = (Math.random() - 0.5) * 30;
    donut.position.z = (Math.random() - 0.5) * 30;

    donut.rotation.x = Math.random() * Math.PI;
    donut.rotation.y = Math.random() * Math.PI;

    const scale = Math.random();
    donut.scale.set(scale, scale, scale);
    scene.add(donut);
  }
});
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 2;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
