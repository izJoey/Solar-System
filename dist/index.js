import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { TrackballControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/TrackballControls.js";

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

  const sceneElements = [];
  function addScene(elem, fn) {
    sceneElements.push({ elem, fn });
  }

  function makeScene(elem) {
    const scene = new THREE.Scene();

    const fov = 45;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 1, 2);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const controls = new TrackballControls(camera, elem);
    controls.noZoom = true;
    controls.noPan = true;

    {
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }

    return { scene, camera, controls };
  }

  const sceneInitFunctionsByName = {
    // SUN
    sun: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load("./media/sun.jpg");
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
    // MERCURY
    mercury: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load(
        "./media/mercury.jpg"
      );
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
    // VENUS
    venus: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load(
        "./media/venus.jpg"
      );
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
    // EARTH
    earth: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load(
        "./media/earth.jpg"
      );
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
    // MARS
    mars: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load("./media/mars.jpg");
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
    // JUPITER
    jupiter: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load(
        "./media/jupiter.jpg"
      );
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
    // SATURN
    saturn: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load(
        "./media/saturn.jpg"
      );
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
    // URANUS
    uranus: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load(
        "./media/uranus.jpg"
      );
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
    // NEPTUNE
    neptune: (elem) => {
      const { scene, camera, controls } = makeScene(elem);
      const radius = 0.7;
      const widthSegments = 32;
      const heightSegments = 32;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const mercuryTexture = new THREE.TextureLoader().load(
        "./media/neptune.jpg"
      );
      const material = new THREE.MeshStandardMaterial({
        map: mercuryTexture,
      });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
        controls.handleResize();
        controls.update();
        renderer.render(scene, camera);
      };
    },
  };

  document.querySelectorAll("[data-diagram]").forEach((elem) => {
    const sceneName = elem.dataset.diagram;
    const sceneInitFunction = sceneInitFunctionsByName[sceneName];
    const sceneRenderFunction = sceneInitFunction(elem);
    addScene(elem, sceneRenderFunction);
  });

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  const clearColor = new THREE.Color("#000");
  function render(time) {
    time *= 0.001;

    resizeRendererToDisplaySize(renderer);

    renderer.setScissorTest(false);
    renderer.setClearColor(clearColor, 0);
    renderer.clear(true, true);
    renderer.setScissorTest(true);

    const transform = `translateY(${window.scrollY}px)`;
    renderer.domElement.style.transform = transform;

    for (const { elem, fn } of sceneElements) {
      // get the viewport relative position opf this element
      const rect = elem.getBoundingClientRect();
      const { left, right, top, bottom, width, height } = rect;

      const isOffscreen =
        bottom < 0 ||
        top > renderer.domElement.clientHeight ||
        right < 0 ||
        left > renderer.domElement.clientWidth;

      if (!isOffscreen) {
        const positiveYUpBottom = renderer.domElement.clientHeight - bottom;
        renderer.setScissor(left, positiveYUpBottom, width, height);
        renderer.setViewport(left, positiveYUpBottom, width, height);

        fn(time, rect);
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();

//Frist
/*let canvas, renderer;

const scenes = [];

init();
animate();

function init() {
  canvas = document.getElementById("c");

  const geometries = [
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.SphereGeometry(0.5, 12, 8),
    new THREE.DodecahedronGeometry(0.5),
    new THREE.CylinderGeometry(0.5, 0.5, 1, 12),
  ];

  const content = document.getElementById("content");
  const venus = document.getElementById("venus")

  for (let i = 0; i < 9; i++) {
    const scene = new THREE.Scene();

    // make a list item
    const element = document.createElement("div");
    element.className = "list-item";

    const sceneElement = document.createElement("div");
    element.appendChild(sceneElement);

    const descriptionElement = document.createElement("div");
    descriptionElement.innerText = "Scene " + (i + 1);
    element.appendChild(descriptionElement);

    // the element that represents the area we want to render the scene
    scene.userData.element = sceneElement;
    content.appendChild(element);

    const camera = new THREE.PerspectiveCamera(50, 1, 1, 10);
    camera.position.z = 2;
    scene.userData.camera = camera;

    const controls = new OrbitControls(
      scene.userData.camera,
      scene.userData.element
    );
    controls.minDistance = 2;
    controls.maxDistance = 5;
    controls.enablePan = false;
    controls.enableZoom = false;
    scene.userData.controls = controls;

    // add one random mesh to each scene
    const geometry = geometries[1];

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(Math.random(), 1, 0.75),
      roughness: 0.5,
      metalness: 0,
      flatShading: true,
    });

    scene.add(new THREE.Mesh(geometry, material));
    

    scene.add(new THREE.HemisphereLight(0xaaaaaa, 0x444444));

    const light = new THREE.DirectionalLight(0xffffff, 0.5);
    light.position.set(1, 1, 1);
    scene.add(light);

    scenes.push(scene);
  }

  renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
  renderer.setClearColor(0xffffff, 1);
  renderer.setPixelRatio(window.devicePixelRatio);
}

function updateSize() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
  }
}

function animate() {
  render();
  requestAnimationFrame(animate);
}

function render() {
  updateSize();

  canvas.style.transform = `translateY(${window.scrollY}px)`;

  renderer.setClearColor(0xffffff);
  renderer.setScissorTest(false);
  renderer.clear();

  renderer.setClearColor(0xe0e0e0);
  renderer.setScissorTest(true);

  scenes.forEach(function (scene) {
    // so something moves
    scene.children[0].rotation.y = Date.now() * 0.001;

    // get the element that is a place holder for where we want to
    // draw the scene
    const element = scene.userData.element;

    // get its position relative to the page's viewport
    const rect = element.getBoundingClientRect();

    // check if it's offscreen. If so skip it
    if (
      rect.bottom < 0 ||
      rect.top > renderer.domElement.clientHeight ||
      rect.right < 0 ||
      rect.left > renderer.domElement.clientWidth
    ) {
      return; // it's off screen
    }

    // set the viewport
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    const left = rect.left;
    const bottom = renderer.domElement.clientHeight - rect.bottom;

    renderer.setViewport(left, bottom, width, height);
    renderer.setScissor(left, bottom, width, height);

    const camera = scene.userData.camera;

    //camera.aspect = width / height; // not changing in this example
    //camera.updateProjectionMatrix();

    //scene.userData.controls.update();

    renderer.render(scene, camera);
  });
}*/
// SECOND
/*const canvas = document.querySelector(".webgl");
const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: canvas.offsetHeight,
  height: canvas.offsetWidth,
};

const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(0, 1, 2);
scene.add(camera);

const renderer = new THREE.WebGL1Renderer({
  canvas: canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enable = true;

// ORBIT CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
*/
