/* eslint-disable no-plusplus */
import * as THREE from "three";
import { Geometry, Points, PointsMaterial } from "three";
import { MutableRefObject } from "react";

class RENDERER {
    scene: THREE.Scene;

    camera: THREE.PerspectiveCamera;

    renderer: THREE.WebGLRenderer;

    material: PointsMaterial;

    particleGeometry: Geometry;

    particleCloud: any;

    objects: THREE.Mesh[];

    theta: number;

    thetaDelta: number;

    WIDTH: number;

    HEIGHT: number;

    MOVEMENT: number;

    SEPARATION: number;

    ref: MutableRefObject<null | HTMLElement>;

    requestId: number | undefined;

    constructor(ref: MutableRefObject<null | HTMLElement>) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.material = new PointsMaterial({ color: 0xf7f7f7 });
        this.particleGeometry = new Geometry();
        this.particleCloud = null;
        this.objects = [];
        this.theta = 0;
        this.thetaDelta = 0.005;
        this.WIDTH = 17;
        this.HEIGHT = 30;
        this.MOVEMENT = 3.8;
        this.SEPARATION = 6;
        this.ref = ref;
        this.requestId = undefined;

        // Resize screen
        window.addEventListener("resize", () => {
            if (this.ref.current) {
                this.renderer.setSize(
                    window.innerWidth,
                    this.ref.current.clientHeight
                );
                this.camera.aspect = window.innerWidth / window.innerHeight;
            }

            this.camera.updateProjectionMatrix();
        });

        this.initialize();
        this.addParticleGeometry();
        this.render();
    }

    render = () => {
        // https://stackoverflow.com/questions/43845399/how-to-make-an-animated-wave-in-threejs
        this.requestId = undefined;
        let index = 0;
        const time = Date.now() * 0.00005;
        const h = ((360 * (1.0 + time)) % 360) / 360;
        this.material.color.setHSL(h, 0.5, 0.5);

        this.theta += this.thetaDelta;

        if (this.particleCloud) {
            for (let x = 0; x < this.WIDTH; x++) {
                for (let z = 0; z < this.HEIGHT; z++) {
                    this.particleCloud.geometry.vertices[index].y =
                        (Math.cos((x / this.WIDTH) * Math.PI * 8 + this.theta) +
                            Math.sin(
                                (z / this.HEIGHT) * Math.PI * 8 + this.theta
                            )) *
                        this.MOVEMENT;
                    index++;
                }
            }
            this.particleCloud.geometry.verticesNeedUpdate = true;
        }

        this.renderer.render(this.scene, this.camera);
        this.start();
    };

    start = () => {
        if (!this.requestId) {
            this.requestId = window.requestAnimationFrame(this.render);
        }
    };

    stop = () => {
        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = undefined;
        }
    };

    unmount = () => {
        this.material.dispose();
        this.particleGeometry.dispose();
        if (this.ref.current !== null)
            this.ref.current.removeChild(this.renderer.domElement);
    };

    initialize = () => {
        this.camera.position.set(0, 0, this.SEPARATION * 19);

        // Insert scene to DOM
        if (this.ref.current !== null) {
            this.renderer.setSize(
                window.innerWidth,
                this.ref.current.clientHeight
            );
            this.renderer.shadowMap.enabled = true;

            this.ref.current.appendChild(this.renderer.domElement);
        }
    };

    addParticleGeometry = () => {
        for (let x = 0; x < this.WIDTH; x++) {
            for (let z = 0; z < this.HEIGHT; z++) {
                const vert = new THREE.Vector3();
                vert.x =
                    x * this.SEPARATION - (this.WIDTH * this.SEPARATION) / 2;
                vert.y =
                    Math.cos(x / this.WIDTH) * Math.PI * 6 +
                    Math.sin((z / this.HEIGHT) * Math.PI * 6);
                vert.z =
                    z * this.SEPARATION - (this.HEIGHT * this.SEPARATION) / 2;
                this.particleGeometry.vertices.push(vert);
            }
        }
        this.particleCloud = new Points(this.particleGeometry, this.material);
        this.scene.add(this.particleCloud);
    };
}

export default RENDERER;
