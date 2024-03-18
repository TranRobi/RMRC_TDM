//Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
const btn = document.getElementById("click");
//Create a Three.JS Scene
const scene = new THREE.Scene();
//create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
//Instantiate a loader for the .gltf file
const loader = new GLTFLoader();
//Load the file
const modelPaths = [
	"../models//scene1.gltf"
]; // Array to store all model paths
const title = document.getElementById("titleFor3D");
const titleList = [
	"Robot wheel 3D model"
];
let currentPathIndex = 0; // index in the path array of the currently showing model
let currentModel; // stores the model that is currently displaying
loadModel(currentPathIndex);
console.log(modelPaths[0]);
function loadModel(index) {
	if (currentModel) {
		scene.remove(currentModel); //remove the current model
	}
	title.innerHTML = titleList[index];
	loader.load(`${modelPaths[index]}`, function (gltf) {
		currentModel = gltf.scene;
		scene.add(currentModel);
	});
}

function next() {
	if (currentPathIndex < modelPaths.length - 1) {
		currentPathIndex++;
	} else {
		currentPathIndex = 0;
	}
	loadModel(currentPathIndex);
}

btn.addEventListener("click", () => {
	next();
});
//Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({
	alpha: true,
});
renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
//Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);
camera.position.z = 300;
//Add lights to the scene, so we can actually see the 3D model
const topLight = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
scene.add(topLight);

//This adds controls to the camera, so we can rotate / zoom it with the mouse
let controls = new OrbitControls(camera, renderer.domElement);
//Render the scene
function animate() {
	requestAnimationFrame(animate);
	renderer.render(scene, camera);
}
function resizeRender() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth / 3, window.innerHeight / 3);
}
//Add a listener to the window, so we can resize the window and the camera
window.addEventListener("resize", function () {
	resizeRender();
});

//Start the 3D rendering
animate();
