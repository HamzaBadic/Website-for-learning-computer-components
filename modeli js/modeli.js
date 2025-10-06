import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.135.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.135.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.135.0/examples/jsm/loaders/GLTFLoader.js';


var width = 0.5;
var height = 0.5;

class ThreeModel {
    constructor(path, loader, scene, x, y) {
      this.path = path;
      this.loader = loader;
      this.scene = scene;
      this.x=x;
      this.y=y;
    }
  
    load() {
      this.loader.load(
        this.path,
        (gltf) => {
            this.scene.add(gltf.scene);
            this.scene.scale.set(this.x,this.x,this.x);
            this.scene.position.set(0,this.y,0);
        }
      );
      
    }
  
  }
  
  class ThreeScene {
    constructor(id) {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        40, window.innerWidth  / window.innerHeight, 0.1, 10000
      );
      this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
      this.renderer.setSize(window.innerWidth * width, window.innerHeight * height);
      document.getElementById(id).appendChild(this.renderer.domElement);
  
      
      const ambientLight = new THREE.AmbientLight(0xffffff, 5);
      this.scene.add(ambientLight);
  
      const directionalLight1 = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight1.position.set(10, 10, 10);
      this.scene.add(directionalLight1);
  
      const directionalLight2 = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight2.position.set(-10, -10, -10);
      this.scene.add(directionalLight2);
  
      const pointLight = new THREE.PointLight(0xffffff, 1);
      pointLight.position.set(0, 0, 10);
      this.scene.add(pointLight);
  
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.camera.position.set(0, 0, 5);
      this.controls.update();
    }

  
    add(model) {
      model.scene = this.scene;
      model.load();
    }
  
    render() {
      const animate = () => {
        requestAnimationFrame(animate);
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
      };
      animate();
    }
  }
  
  const scene1 = new ThreeScene('modelk');
  const scene2 = new ThreeScene('modelmp');
  const scene3 = new ThreeScene('modelp');
  const scene4 = new ThreeScene('modelg');
  const scene5 = new ThreeScene('modelr');
  const scene6 = new ThreeScene('modelh');
  const scene7 = new ThreeScene('modeln');
  const scene8 = new ThreeScene('models');

  const loader = new GLTFLoader();

  const modelk = new ThreeModel('../modeli/kuciste/scene.gltf', loader, scene1, 0.4, -0.5);
  const modelmp = new ThreeModel('../modeli/maticna/scene.gltf', loader, scene2, 0.4, 0.2);
  const modelp = new ThreeModel('../modeli/cpu/scene.gltf', loader, scene3, 0.1, 0);
  const modelg = new ThreeModel('../modeli/graficka/scene.gltf', loader, scene4, 0.8, -0.6);
  const modelr = new ThreeModel('../modeli/ram/scene.gltf', loader, scene5, 1, 0);
  const modelh = new ThreeModel('../modeli/coller/scene.gltf', loader, scene6, 0.004, -1.4);
  const modeln = new ThreeModel('../modeli/napajanje/scene.gltf', loader, scene7, 0.8, 0);
  const models = new ThreeModel('../modeli/storage/scene.gltf', loader, scene8, 0.4, 0);

  


const button1 = document.getElementById('btn1');
const button2 = document.getElementById('btn2');
const button3 = document.getElementById('btn3');
const button4 = document.getElementById('btn4');
const button5 = document.getElementById('btn5');
const button6 = document.getElementById('btn6');
const button7 = document.getElementById('btn7');
const button8 = document.getElementById('btn8');

const popupWindow = document.getElementById("popup-window");
const popupClose = document.getElementById("popup-close");

const model1 = document.getElementById("modelk");
const model2 = document.getElementById("modelmp");
const model3 = document.getElementById("modelp");
const model4 = document.getElementById("modelg");
const model5 = document.getElementById("modelr");
const model6 = document.getElementById("modelh");
const model7 = document.getElementById("modeln");
const model8 = document.getElementById("models");

var popupOverlay = document.getElementById("popup-overlay");


button1.onclick=function(){
    model2.style.visibility="hidden";
    model3.style.visibility="hidden";
    model4.style.visibility="hidden";
    model5.style.visibility="hidden";
    model6.style.visibility="hidden";
    model7.style.visibility="hidden";
    model8.style.visibility="hidden";

    popupWindow.style.display = "block";
    model1.style.visibility="visible";

    popupOverlay.classList.remove("hidden");

    document.body.style.overflow= "hidden";

    scene1.add(modelk);
    scene1.render();
}

button2.onclick=function(){
    model1.style.visibility="hidden";
    model3.style.visibility="hidden";
    model4.style.visibility="hidden";
    model5.style.visibility="hidden";
    model6.style.visibility="hidden";
    model7.style.visibility="hidden";
    model8.style.visibility="hidden";


    popupWindow.style.display = "block";
    model2.style.visibility="visible";

    popupOverlay.classList.remove("hidden");

    document.body.style.overflow= "hidden";

    scene2.add(modelmp);
    scene2.render();
}

button3.onclick=function(){
    model1.style.visibility="hidden";
    model2.style.visibility="hidden";
    model4.style.visibility="hidden";
    model5.style.visibility="hidden";
    model6.style.visibility="hidden";
    model7.style.visibility="hidden";
    model8.style.visibility="hidden";

    popupWindow.style.display = "block";
    model3.style.visibility="visible";

    popupOverlay.classList.remove("hidden");

    document.body.style.overflow= "hidden";


    scene3.add(modelp);
    scene3.render();
}

button4.onclick=function(){
    model1.style.visibility="hidden";
    model2.style.visibility="hidden";
    model3.style.visibility="hidden";
    model5.style.visibility="hidden";
    model6.style.visibility="hidden";
    model7.style.visibility="hidden";
    model8.style.visibility="hidden";


    popupWindow.style.display = "block";
    model4.style.visibility="visible";

    popupOverlay.classList.remove("hidden");

    document.body.style.overflow= "hidden";

    scene4.add(modelg);
    scene4.render();
}
button5.onclick=function(){
    model1.style.visibility="hidden";
    model2.style.visibility="hidden";
    model3.style.visibility="hidden";
    model4.style.visibility="hidden";
    model6.style.visibility="hidden";
    model7.style.visibility="hidden";
    model8.style.visibility="hidden";


    popupWindow.style.display = "block";
    model5.style.visibility="visible";

    popupOverlay.classList.remove("hidden");

    document.body.style.overflow= "hidden";

    scene5.add(modelr);
    scene5.render();
}

button6.onclick=function(){
    model1.style.visibility="hidden";
    model2.style.visibility="hidden";
    model3.style.visibility="hidden";
    model4.style.visibility="hidden";
    model5.style.visibility="hidden";
    model7.style.visibility="hidden";
    model8.style.visibility="hidden";


    popupWindow.style.display = "block";
    model6.style.visibility="visible";

    popupOverlay.classList.remove("hidden");

    document.body.style.overflow= "hidden";

    scene6.add(modelh);
    scene6.render();
}

button7.onclick=function(){
    model1.style.visibility="hidden";
    model2.style.visibility="hidden";
    model3.style.visibility="hidden";
    model4.style.visibility="hidden";
    model5.style.visibility="hidden";
    model6.style.visibility="hidden";
    model8.style.visibility="hidden";


    popupWindow.style.display = "block";
    model7.style.visibility="visible";

    popupOverlay.classList.remove("hidden");

    document.body.style.overflow= "hidden";

    scene7.add(modeln);
    scene7.render();
}

button8.onclick=function(){
    model1.style.visibility="hidden";
    model2.style.visibility="hidden";
    model3.style.visibility="hidden";
    model4.style.visibility="hidden";
    model5.style.visibility="hidden";
    model6.style.visibility="hidden";
    model7.style.visibility="hidden";


    popupWindow.style.display = "block";
    model8.style.visibility="visible";

    popupOverlay.classList.remove("hidden");

    document.body.style.overflow= "hidden";

    scene8.add(models);
    scene8.render();
}


popupClose.onclick = function() {
    popupWindow.style.display = "none";
    popupOverlay.classList.add("hidden");
    document.body.style.overflow= "visible";
}