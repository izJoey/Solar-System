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
    camera.position.set(0, 0, 2.2);
    camera.lookAt(0, 0, 0);
    scene.add(camera);

    const controls = new TrackballControls(camera, elem);
    controls.noZoom = true;
    controls.noPan = true;

    {
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 0, 4);
      scene.add(light);
    }

    return { scene, camera, controls };
  }

  const sceneInitFunctionsByName = {
    // SUN
    sun: (elem) => {
      // TOP
      const _VS = `
      uniform vec3 viewVector;
      uniform float c;
      uniform float p;
      varying float intensity;
      void main() {
        vec3 vNormal = normalize( normalMatrix * normal );
        vec3 vNormel = normalize( normalMatrix * viewVector );
        intensity = pow( c - dot(vNormal, vNormel), p );

        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }
      `;
      const _FS = `
      uniform vec3 glowColor;
      varying float intensity;
      void main()
      {
        vec3 glow = glowColor * intensity;
        gl_FragColor = vec4( glow, 0.3 );
      }
      `;

      // BOTTOM
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

      // top trying makeing glow
      const glowRadius = 0.78;
      const glowGeometry = new THREE.SphereBufferGeometry(glowRadius, 32, 32);
      const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
          c: { type: "f", value: 0.0001 }, // Adjust for desired falloff
          p: { type: "f", value: 2.0 }, // Adjust for desired glow intensity
          glowColor: { type: "c", value: new THREE.Color(0xdddd00) }, // Set color preference
          viewVector: { type: "v3", value: camera.position },
        },
        vertexShader: _VS,
        fragmentShader: _FS,
        side: THREE.BackSide, // Render only the outer surface for realistic glow
        blending: THREE.AdditiveBlending,
        transparent: true,
      });
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      scene.add(glowMesh);
  
      // bottom trying makeing glow
      return (time, rect) => {
        mesh.rotation.y = time * 0.1;
        glowMesh.scale.set(1.55, 1.55, 1.55); 
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
