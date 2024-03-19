"use client"
import React, { useEffect, useRef } from 'react';
import * as THREE from "three";
import { TextGeometry3D } from 'three/examples/jsm/geometries/TextGeometry3D.js';
import { Font } from 'three/examples/jsm/loaders/F';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';

import Stats from 'three/examples/jsm/libs/stats.module.js';

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let SCREEN_WIDTH = window.innerWidth;
  let SCREEN_HEIGHT = window.innerHeight;
  let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

  let container: HTMLDivElement | null;
  let stats: Stats | undefined;
  let camera: THREE.PerspectiveCamera;
  let scene: THREE.Scene;
  let renderer: THREE.WebGLRenderer;
  let mesh: THREE.Mesh;
  let cameraRig: THREE.Group;
  let cameraPerspective: THREE.PerspectiveCamera;
  let cameraOrtho: THREE.OrthographicCamera;
  let cameraPerspectiveHelper: THREE.CameraHelper;
  let cameraOrthoHelper: THREE.CameraHelper;
  let activeCamera: THREE.Camera;
  let activeHelper: THREE.CameraHelper;
  const frustumSize = 600;

  useEffect(() => {
    container = containerRef.current;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 0.5 * aspect, 1, 10000);
    camera.position.z = 2500;
    cameraPerspective = new THREE.PerspectiveCamera(50, 0.5 * aspect, 150, 1000);
    cameraPerspectiveHelper = new THREE.CameraHelper(cameraPerspective);
    scene.add(cameraPerspectiveHelper);
    cameraOrtho = new THREE.OrthographicCamera(0.5 * frustumSize * aspect / -2, 0.5 * frustumSize * aspect / 2, frustumSize / 2, frustumSize / -2, 150, 1000);
    cameraOrthoHelper = new THREE.CameraHelper(cameraOrtho);
    scene.add(cameraOrthoHelper);
    activeCamera = cameraPerspective;
    activeHelper = cameraPerspectiveHelper;
    cameraOrtho.rotation.y = Math.PI;
    cameraPerspective.rotation.y = Math.PI;
    cameraRig = new THREE.Group();
    cameraRig.add(cameraPerspective);
    cameraRig.add(cameraOrtho);
    scene.add(cameraRig);

    mesh = new THREE.Mesh(
      new THREE.SphereGeometry(100, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    );
    scene.add(mesh);

    const mesh2 = new THREE.Mesh(
      new THREE.SphereGeometry(50, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    );
    mesh2.position.y = 150;
    mesh.add(mesh2);

    const mesh3 = new THREE.Mesh(
      new THREE.SphereGeometry(5, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
    );
    mesh3.position.z = 150;
    cameraRig.add(mesh3);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    for (let i = 0; i < 10000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000));
      vertices.push(THREE.MathUtils.randFloatSpread(2000));
      vertices.push(THREE.MathUtils.randFloatSpread(2000));
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x888888 }));
    scene.add(particles);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    container?.appendChild(renderer.domElement);

    renderer.setScissorTest(true);

    stats = new Stats();
    container?.appendChild(stats.dom);

    window.addEventListener('resize', onWindowResize);
    document.addEventListener('keydown', onKeyDown);

    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  function onKeyDown(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 79: /*O*/
        activeCamera = cameraOrtho;
        activeHelper = cameraOrthoHelper;
        break;

      case 80: /*P*/
        activeCamera = cameraPerspective;
        activeHelper = cameraPerspectiveHelper;
        break;
    }
  }

  function onWindowResize() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;
    aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

    camera.aspect = 0.5 * aspect;
    camera.updateProjectionMatrix();

    cameraPerspective.aspect = 0.5 * aspect;
    cameraPerspective.updateProjectionMatrix();

    cameraOrtho.left = -0.5 * frustumSize * aspect / 2;
    cameraOrtho.right = 0.5 * frustumSize * aspect / 2;
    cameraOrtho.top = frustumSize / 2;
    cameraOrtho.bottom = -frustumSize / 2;
    cameraOrtho.updateProjectionMatrix();
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
    stats?.update();
  }

  function render() {
    const r = Date.now() * 0.0005;

    mesh.position.x = 700 * Math.cos(r);
    mesh.position.z = 700 * Math.sin(r);
    mesh.position.y = 700 * Math.sin(r);

    mesh.children[0].position.x = 70 * Math.cos(2 * r);
    mesh.children[0].position.z = 70 * Math.sin(r);

    if (activeCamera === cameraPerspective) {
      cameraPerspective.fov = 35 + 30 * Math.sin(0.5 * r);
      cameraPerspective.far = mesh.position.length();
      cameraPerspective.updateProjectionMatrix();

      cameraPerspectiveHelper.update();
      cameraPerspectiveHelper.visible = true;

      cameraOrthoHelper.visible = false;
    } else {
      cameraOrtho.far = mesh.position.length();
      cameraOrtho.updateProjectionMatrix();

      cameraOrthoHelper.update();
      cameraOrthoHelper.visible = true;

      cameraPerspectiveHelper.visible = false;
    }

    cameraRig.lookAt(mesh.position);

    activeHelper.visible = false;

    renderer.setClearColor(0x000000, 1);
    renderer.setScissor(0, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
    renderer.setViewport(0, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
    renderer.render(scene, activeCamera);

    activeHelper.visible = true;

    renderer.setClearColor(0x111111, 1);
    renderer.setScissor(SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
    renderer.setViewport(SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
    renderer.render(scene, camera);
  }

  const fontLoader = new FontLoader();
  fontLoader.load('fonts/helvetiker_regular.typeface.json', (font: Font) => {
    const textGeometry = new TextGeometry('WorldWeb Solutions', {
      font: font,
      size: 20,
      height: 5,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.5,
      bevelOffset: 0,
      bevelSegments: 5
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(0, 0, 0); // Set the position of the text
    mesh.add(textMesh); // Add the text as a child of the sphere mesh
  });

  return <div ref={containerRef} />;
};

export default ThreeScene;
