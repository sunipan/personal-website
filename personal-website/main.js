import "./style.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { gsap } from "gsap";
const loader = new GLTFLoader();

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 10;
camera.position.y = 20;
const scene = new THREE.Scene();
const ambientLight = new THREE.AmbientLight(0xffffff); // soft white light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);

const lightHelper = new THREE.PointLightHelper(pointLight, 5);
const girdHelper = new THREE.GridHelper(100, 10);
scene.add(girdHelper);
scene.add(lightHelper);
scene.add(pointLight);
scene.add(ambientLight);

loader.load(
  "./models/paper-plane.gltf",
  (gltf) => {
    gltf.scene.scale.set(10, 10, 10);
    gltf.scene.position.set(10, 0, 0);
    scene.add(gltf.scene);
  },
  undefined,
  (error) => {
    console.error(error);
  }
);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  controls.update();
  renderer.render(scene, camera);
}

animate();
