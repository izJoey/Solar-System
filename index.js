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
