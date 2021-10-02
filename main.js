console.log('Hello!');
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const light = new THREE.AmbientLight(new THREE.Color().setColorName('white'));
light.position.set( 0, 1, 1 ).normalize();
light.intensity = 3;
scene.add(light);

const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const texture = new THREE.TextureLoader().load(require('./textures/diamond_ore.png'));
texture.magFilter = THREE.NearestFilter;
const bumpScale = 1;
const diffuseColor = new THREE.Color().setHex('0x313e47');
const specularColor = new THREE.Color().setHex('0x12aeef');
const specularShininess = 0.3;

const material = new THREE.MeshPhongMaterial({
    map: texture,
    // bumpMap: texture,
	bumpScale: bumpScale,
	color: diffuseColor,
	specular: specularColor,
	reflectivity: 0.4,
	shininess: specularShininess,
	envMap: null
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();