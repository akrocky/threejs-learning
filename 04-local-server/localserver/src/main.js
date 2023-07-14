import './style.css'

import * as THREE from 'three';

const canvas= document.querySelector(".webgl");
// !Scenen
const scene = new THREE.Scene();


// ! red cube
const geomatry= new THREE.BoxGeometry(1,1,1);
const material= new THREE.MeshBasicMaterial({color:0xff0000})

// const mesh= new THREE.Mesh(geomatry,material);
// //positionong
// mesh.position.x=0.7
// mesh.position.y= -0.6
// mesh.position.z= -3
// //scale
// mesh.scale.set(2,0.5,0.5)
// // rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.x=Math.PI * 0.25
// mesh.rotation.y=Math.PI * 0.25
// scene.add(mesh);

// !create "group"
const group= new THREE.Group()
group.position.y=1;
group.scale.y=2;
group.rotation.y=1;
scene.add(group)

const cube1= new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xff0000})
)
group.add(cube1)
const cube2= new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xffff00})
)
cube2.position.x=-2
group.add(cube2)

const cube3= new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0xff03})
)
cube3.position.x=2

group.add(cube3)

const axesHelper =new THREE.AxesHelper(2 );
scene.add(axesHelper)

// sizes
const sizes ={
    width:800,
    height:600
}

// ! camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/ sizes.height );

camera.position.z=3


scene.add(camera);
// camera.lookAt(mesh.position)

// ! renderer
 const renderer= new THREE.WebGLRenderer({
    canvas:canvas
 })
renderer.setSize(sizes.width,sizes.height);
renderer.render(scene,camera);




