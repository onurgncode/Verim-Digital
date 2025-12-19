import * as THREE from 'three';

export class ThreeScene {
    constructor() {
        this.canvas = document.querySelector('#three-canvas');
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });

        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Create elegant floating spheres
        this.spheres = [];
        const sphereGeometry = new THREE.IcosahedronGeometry(1.5, 4);

        for (let i = 0; i < 8; i++) {
            const material = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                transparent: true,
                opacity: 0.1 + (Math.random() * 0.1),
                roughness: 0.1,
                metalness: 0.8
            });
            const mesh = new THREE.Mesh(sphereGeometry, material);
            mesh.position.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 5
            );
            mesh.scale.setScalar(1 + Math.random() * 2);
            this.scene.add(mesh);
            this.spheres.push({
                mesh,
                speed: 0.001 + Math.random() * 0.002,
                offset: Math.random() * Math.PI * 2
            });
        }

        // Elegant minimal particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 200;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 20;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.02,
            color: 0xffffff,
            transparent: true,
            opacity: 0.4
        });

        this.particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        this.scene.add(this.particlesMesh);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(5, 5, 5);
        this.scene.add(pointLight);

        this.camera.position.z = 8;

        this.mouseX = 0;
        this.mouseY = 0;

        window.addEventListener('mousemove', (e) => {
            this.mouseX = (e.clientX / window.innerWidth) - 0.5;
            this.mouseY = (e.clientY / window.innerHeight) - 0.5;
        });

        window.addEventListener('resize', () => this.onResize());
        this.animate();
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const time = Date.now() * 0.001;

        this.spheres.forEach((s, i) => {
            s.mesh.rotation.y += s.speed;
            s.mesh.rotation.x += s.speed * 0.5;

            s.mesh.position.y += Math.sin(time + s.offset) * 0.002;
            s.mesh.position.x += Math.cos(time + s.offset) * 0.001;
        });

        this.particlesMesh.rotation.y += 0.0005;

        // Mouse interaction
        this.camera.position.x += (this.mouseX * 2 - this.camera.position.x) * 0.05;
        this.camera.position.y += (-this.mouseY * 2 - this.camera.position.y) * 0.05;
        this.camera.lookAt(this.scene.position);

        this.renderer.render(this.scene, this.camera);
    }
}

