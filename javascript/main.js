//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
//Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

//Create a Three.JS Scene
const scene = new THREE.Scene();
const scene2 = new THREE.Scene();
const scene3 = new THREE.Scene();
const scene4 = new THREE.Scene();
const scene5 = new THREE.Scene();
const scene6 = new THREE.Scene();
const scene7 = new THREE.Scene();
//Set the scene background
scene.background = new THREE.Color(0x0000ff);
scene2.background = new THREE.Color(0x0000ff);
scene3.background = new THREE.Color(0x0000ff);
scene4.background = new THREE.Color(0x0000ff);
scene5.background = new THREE.Color(0x0000ff);
scene6.background = new THREE.Color(0x0000ff);
scene7.background = new THREE.Color(0x0000ff);
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const camera2 = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const camera3 = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const camera4 = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const camera5 = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const camera6 = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
const camera7 = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
//OrbitControls allow the camera to move around the scene
let controls;
let controls2;
let controls3;
let controls4;
let controls5;
let controls6;
let controls7;
//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();
//Load the file
loader.load(`../models//scene1.gltf`, function (gltf) {scene.add(gltf.scene);});
loader.load(`../models//scene2.gltf`, function (gltf) {scene2.add(gltf.scene);});
loader.load(`../models//scene3.gltf`, function (gltf) {scene3.add(gltf.scene);});
loader.load(`../models//scene4.gltf`, function (gltf) {scene4.add(gltf.scene);});
loader.load(`../models//scene5.gltf`, function (gltf) {scene5.add(gltf.scene);});
loader.load(`../models//scene6.gltf`, function (gltf) {scene6.add(gltf.scene);});
loader.load(`../models//scene5.gltf`, function (gltf) {scene7.add(gltf.scene);});
//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer();
const renderer2 = new THREE.WebGLRenderer(); 
const renderer3 = new THREE.WebGLRenderer(); 
const renderer4 = new THREE.WebGLRenderer(); 
const renderer5 = new THREE.WebGLRenderer(); 
const renderer6 = new THREE.WebGLRenderer(); 
const renderer7 = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
renderer2.setSize(window.innerWidth / 3, window.innerHeight / 3);
renderer3.setSize(window.innerWidth / 3, window.innerHeight / 3);
renderer4.setSize(window.innerWidth / 3, window.innerHeight / 3);
renderer5.setSize(window.innerWidth / 3, window.innerHeight / 3);
renderer6.setSize(window.innerWidth / 3, window.innerHeight / 3);
renderer7.setSize(window.innerWidth / 3, window.innerHeight / 3);

//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);
document.getElementById("container3D2").appendChild(renderer2.domElement);
document.getElementById("container3D3").appendChild(renderer3.domElement);
document.getElementById("container3D4").appendChild(renderer4.domElement);
document.getElementById("container3D5").appendChild(renderer5.domElement);
document.getElementById("container3D6").appendChild(renderer6.domElement);
document.getElementById("container3D7").appendChild(renderer7.domElement);

//Set how far the camera will be from the 3D model
camera.position.z = 150;
camera2.position.z = 150;
camera3.position.z = 150;
camera4.position.z = 150;
camera5.position.z = 150;
camera6.position.z = 150;
camera7.position.z = 150;

//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.HemisphereLight(0xffffff,0x000000, 2); 
topLight.position.set(500, 500, 500); 
const topLight2 = new THREE.HemisphereLight(0xffffff,0x000000, 2); 
topLight2.position.set(500, 500, 500);
const topLight3 = new THREE.HemisphereLight(0xffffff,0x000000, 2); 
topLight3.position.set(500, 500, 500);
const topLight4 = new THREE.HemisphereLight(0xffffff,0x000000, 2); 
topLight4.position.set(500, 500, 500);
const topLight5 = new THREE.HemisphereLight(0xffffff,0x000000, 2); 
topLight5.position.set(500, 500, 500);
const topLight6 = new THREE.HemisphereLight(0x808080,0x000000, 2); 
topLight6.position.set(500, 500, 500);
const topLight7 = new THREE.HemisphereLight(0xffffff,0x000000, 2); 
topLight7.position.set(500, 500, 500);
scene.add(topLight);
scene2.add(topLight2);
scene3.add(topLight3);
scene4.add(topLight4);
scene5.add(topLight5);
scene6.add(topLight6);
scene7.add(topLight7);

const ambientLight = new THREE.AmbientLight(0x333333, 2);
scene.add(ambientLight);
scene2.add(ambientLight);
scene3.add(ambientLight);
scene4.add(ambientLight);
scene5.add(ambientLight);
scene6.add(ambientLight);
scene7.add(ambientLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);
controls2 = new OrbitControls(camera2, renderer2.domElement);
controls3 = new OrbitControls(camera3, renderer3.domElement);
controls4 = new OrbitControls(camera4, renderer4.domElement);
controls5 = new OrbitControls(camera5, renderer5.domElement);
controls6 = new OrbitControls(camera6, renderer6.domElement);
controls7 = new OrbitControls(camera7, renderer7.domElement);

//Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  renderer2.render(scene2, camera2);
  renderer3.render(scene3, camera3);
  renderer4.render(scene4, camera4);
  renderer5.render(scene5, camera5);
  renderer6.render(scene6, camera6);
  renderer7.render(scene7, camera7);
}
function resizeRender() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);

  camera2.aspect = window.innerWidth / window.innerHeight;
  camera2.updateProjectionMatrix();
  renderer2.setSize(window.innerWidth / 3, window.innerHeight / 3);

  camera3.aspect = window.innerWidth / window.innerHeight;
  camera3.updateProjectionMatrix();
  renderer3.setSize(window.innerWidth / 3, window.innerHeight / 3);

  camera4.aspect = window.innerWidth / window.innerHeight;
  camera4.updateProjectionMatrix();
  renderer4.setSize(window.innerWidth / 3, window.innerHeight / 3);

  camera5.aspect = window.innerWidth / window.innerHeight;
  camera5.updateProjectionMatrix();
  renderer5.setSize(window.innerWidth / 3, window.innerHeight / 3);

  camera6.aspect = window.innerWidth / window.innerHeight;
  camera6.updateProjectionMatrix();
  renderer6.setSize(window.innerWidth / 3, window.innerHeight / 3);

  camera7.aspect = window.innerWidth / window.innerHeight;
  camera7.updateProjectionMatrix();
  renderer7.setSize(window.innerWidth / 3, window.innerHeight / 3);
}
//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
  resizeRender();
});

//Start the 3D rendering
animate();
