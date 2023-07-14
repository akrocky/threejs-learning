import * as THREE from 'three';

const canvas= document.querySelector(".webgl");
// !Scenen
const scene = new THREE.Scene();


// ! red cube
const geomatry= new THREE.BoxGeometry(1,1,1);
const material= new THREE.MeshBasicMaterial({color:0xff0000})

const mesh= new THREE.Mesh(geomatry,material);
scene.add(mesh);

// sizes
const sizes ={
    width:800,
    height:600
}

// ! camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/ sizes.height );
camera.position.z=3


scene.add(camera);

// ! renderer
 const renderer= new THREE.WebGLRenderer({
    canvas:canvas
 })
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera);



