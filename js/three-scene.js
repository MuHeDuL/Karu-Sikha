/**
 * Karu Shikha Youth Development Society - 3D Interactive Logo & Particle Simulation
 * কারু শিখা যুব উন্নয়ন সোসাইটি - ফরিদপুর, বাংলাদেশ
 * 
 * Features:
 * - 5,500+ luminous particles forming the OFFICIAL 3D KARU SHIKHA LOGO
 *   (Sampled directly from the official logo with distinct 3D depth layers:
 *    - Blue "কারু" contour & backdrop
 *    - Orange "শিখা" contour & backdrop
 *    - Elevated glowing white calligraphy strokes
 *    - Vibrant red, emerald, yellow decorative dot accents)
 * - Real-time cursor deflection & elastic magnetic spring physics
 * - Smooth morphing between:
 *   1. 'logo': 🏷️ কারু শিখা ৩ডি অফিসিয়াল লোগো (Signature 3D Logo)
 *   2. 'shikha': 🔥 প্রদীপ্ত শিখা (The Eternal Flame of Karu Shikha)
 *   3. 'hands': 🤲 ঐক্যের হাত (Helping Hands & Solidarity)
 *   4. 'heart': 💖 মানবিকতা ও রক্তদান (Heart of Compassion)
 */

class KaruShikhaHero3D {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.particleCount = (window.KARU_SHIKHA_LOGO_DATA && window.KARU_SHIKHA_LOGO_DATA.count) || 5500;
        this.currentShape = 'logo'; // Starts proudly with the official 3D Karu Shikha Logo!
        this.morphProgress = 1.0;
        this.morphSpeed = 0.045;
        
        // Mouse & Touch interaction state (Instant zero-delay mobile response)
        this.mouse = new THREE.Vector2(-999, -999);
        this.targetMouse = new THREE.Vector2(-999, -999);
        this.isTouchActive = false;
        this.touchReleaseTime = 0;
        this.raycaster = new THREE.Raycaster();
        this.plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);

        // Mobile Device Orientation / Gyroscope Tilt Detection
        this.tilt = new THREE.Vector2(0, 0);
        this.targetTilt = new THREE.Vector2(0, 0);
        this.isTiltActive = false;

        this.init();
        this.createShapes();
        this.createParticles();
        this.setupEvents();
        this.animate();
    }

    init() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x060d19, 0.022);

        const width = this.container.clientWidth || window.innerWidth;
        const height = this.container.clientHeight || window.innerHeight;
        const aspect = width / height;

        this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        const zForHeight = 28.5;
        const zForWidth = 20.0 / Math.max(0.44, aspect);
        this.camera.position.set(0, 0, Math.max(zForHeight, zForWidth));

        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance',
            precision: 'mediump'
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(isIOS ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2));
        this.container.appendChild(this.renderer.domElement);
    }

    createTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');

        // Radial glowing aura
        const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(0.2, 'rgba(255, 255, 255, 0.95)');
        grad.addColorStop(0.5, 'rgba(56, 189, 248, 0.45)');
        grad.addColorStop(0.8, 'rgba(249, 115, 22, 0.15)');
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 64, 64);

        return new THREE.CanvasTexture(canvas);
    }

    createShapes() {
        const count = this.particleCount;
        this.shapes = {
            logo: new Float32Array(count * 3),
            shikha: new Float32Array(count * 3),
            hands: new Float32Array(count * 3),
            heart: new Float32Array(count * 3)
        };
        this.colors = {
            logo: new Float32Array(count * 3),
            shikha: new Float32Array(count * 3),
            hands: new Float32Array(count * 3),
            heart: new Float32Array(count * 3)
        };

        // 1. OFFICIAL KARU SHIKHA 3D LOGO SHAPE
        if (window.KARU_SHIKHA_LOGO_DATA) {
            const logoPos = window.KARU_SHIKHA_LOGO_DATA.positions;
            const logoCol = window.KARU_SHIKHA_LOGO_DATA.colors;
            for (let i = 0; i < count * 3; i++) {
                this.shapes.logo[i] = logoPos[i] || 0;
                this.colors.logo[i] = logoCol[i] !== undefined ? logoCol[i] : 1.0;
            }
        }

        // 2. SHIKHA - THE TORCH & FLAME OF KARU SHIKHA (কারু শিখা)
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const u = Math.random();
            const y = -7.5 + u * 16.5;

            let radius;
            if (u < 0.15) {
                radius = (0.8 + (u / 0.15) * 1.6) * (0.85 + Math.random() * 0.3);
            } else {
                const flameNorm = (u - 0.15) / 0.85;
                radius = 3.9 * Math.sin(flameNorm * Math.PI) * Math.pow(1 - flameNorm, 0.35);
                radius *= (0.35 + 0.65 * Math.sqrt(Math.random()));
            }

            const theta = Math.random() * Math.PI * 2;
            const twist = u * Math.PI * 1.8;
            const x = radius * Math.cos(theta + twist) + Math.sin(u * 7) * 0.45;
            const z = radius * Math.sin(theta + twist) * 0.85;

            this.shapes.shikha[i3] = x;
            this.shapes.shikha[i3 + 1] = y;
            this.shapes.shikha[i3 + 2] = z;

            // Flame: Blue base to blazing golden amber & white-hot tip
            if (u < 0.25) {
                this.colors.shikha[i3] = 0.05;
                this.colors.shikha[i3 + 1] = 0.65;
                this.colors.shikha[i3 + 2] = 0.98; // Karu Cyan-Blue base
            } else if (u < 0.8) {
                this.colors.shikha[i3] = 0.98;
                this.colors.shikha[i3 + 1] = 0.65 + (1 - u) * 0.25;
                this.colors.shikha[i3 + 2] = 0.15; // Shikha Vibrant Amber-Orange
            } else {
                this.colors.shikha[i3] = 1.0;
                this.colors.shikha[i3 + 1] = 0.95;
                this.colors.shikha[i3 + 2] = 0.85; // White-hot spark
            }
        }

        // 3. HELPING HANDS / WINGS OF SOLIDARITY (একতা ও সহযোগিতার হাত)
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const side = i % 2 === 0 ? 1 : -1;
            const u = Math.random();
            const v = (Math.random() - 0.5) * 2;

            const curve = Math.sin(u * Math.PI * 0.7);
            const x = side * (1.6 + u * 11.2 + Math.pow(u, 2) * 2.4);
            const y = -7.2 + u * 11.8 - Math.pow(u, 1.8) * 3.4 + v * (1.0 + u * 1.5);
            const z = Math.cos(u * Math.PI * 0.8) * 4.4 + v * 2.8;

            if (i % 7 === 0) {
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);
                const rad = Math.random() * 3.0;
                this.shapes.hands[i3] = rad * Math.sin(phi) * Math.cos(theta);
                this.shapes.hands[i3 + 1] = 0.6 + rad * Math.sin(phi) * Math.sin(theta);
                this.shapes.hands[i3 + 2] = rad * Math.cos(phi);

                this.colors.hands[i3] = 1.0;
                this.colors.hands[i3 + 1] = 0.85;
                this.colors.hands[i3 + 2] = 0.3;
            } else {
                this.shapes.hands[i3] = x * 0.75;
                this.shapes.hands[i3 + 1] = y * 0.75;
                this.shapes.hands[i3 + 2] = z * 0.75;

                // Dual Blue & Orange Hands matching Logo
                if (side === 1) {
                    this.colors.hands[i3] = 0.05 + 0.1 * u;
                    this.colors.hands[i3 + 1] = 0.55 + 0.3 * u;
                    this.colors.hands[i3 + 2] = 0.95;
                } else {
                    this.colors.hands[i3] = 0.98;
                    this.colors.hands[i3 + 1] = 0.5 + 0.3 * u;
                    this.colors.hands[i3 + 2] = 0.12;
                }
            }
        }

        // 4. HEART OF COMPASSION & BLOOD DONATION (মানবিকতা ও রক্তদান নেটওয়ার্ক)
        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const t = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.2;
            const r = Math.pow(Math.random(), 0.6);
            
            const x = 16 * Math.pow(Math.sin(t), 3);
            const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
            const z = (Math.random() - 0.5) * 9 * (1.1 - Math.abs(x) / 18);

            const scale = 0.52 * (0.8 + 0.25 * r);
            this.shapes.heart[i3] = x * scale;
            this.shapes.heart[i3 + 1] = y * scale + 1.2;
            this.shapes.heart[i3 + 2] = z * scale;

            const heat = (y + 16) / 32;
            this.colors.heart[i3] = THREE.MathUtils.lerp(0.98, 1.0, heat);
            this.colors.heart[i3 + 1] = THREE.MathUtils.lerp(0.2, 0.55, heat);
            this.colors.heart[i3 + 2] = THREE.MathUtils.lerp(0.35, 0.15, heat);
        }
    }

    createParticles() {
        this.geometry = new THREE.BufferGeometry();

        this.positions = new Float32Array(this.particleCount * 3);
        this.targetPositions = new Float32Array(this.particleCount * 3);
        this.sourcePositions = new Float32Array(this.particleCount * 3);
        
        this.currentColors = new Float32Array(this.particleCount * 3);
        this.targetColors = new Float32Array(this.particleCount * 3);
        this.sourceColors = new Float32Array(this.particleCount * 3);

        // Start with the 3D Karu Shikha Logo
        for (let i = 0; i < this.particleCount * 3; i++) {
            this.positions[i] = this.shapes.logo[i];
            this.targetPositions[i] = this.shapes.logo[i];
            this.sourcePositions[i] = this.shapes.logo[i];

            this.currentColors[i] = this.colors.logo[i];
            this.targetColors[i] = this.colors.logo[i];
            this.sourceColors[i] = this.colors.logo[i];
        }

        this.velocities = new Float32Array(this.particleCount * 3);

        this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
        this.geometry.setAttribute('color', new THREE.BufferAttribute(this.currentColors, 3));

        this.material = new THREE.PointsMaterial({
            size: 0.45,
            map: this.createTexture(),
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
            opacity: 0.95
        });

        this.points = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.points);

        this.createAmbientSparkles();
    }

    createAmbientSparkles() {
        const dustCount = 800;
        const dustGeom = new THREE.BufferGeometry();
        const dustPos = new Float32Array(dustCount * 3);
        const dustColors = new Float32Array(dustCount * 3);

        for (let i = 0; i < dustCount; i++) {
            dustPos[i * 3] = (Math.random() - 0.5) * 55;
            dustPos[i * 3 + 1] = (Math.random() - 0.5) * 45;
            dustPos[i * 3 + 2] = (Math.random() - 0.5) * 35;

            // Half blue, half orange/amber
            if (i % 2 === 0) {
                dustColors[i * 3] = 0.02;
                dustColors[i * 3 + 1] = 0.65;
                dustColors[i * 3 + 2] = 0.98;
            } else {
                dustColors[i * 3] = 0.98;
                dustColors[i * 3 + 1] = 0.6;
                dustColors[i * 3 + 2] = 0.1;
            }
        }

        dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
        dustGeom.setAttribute('color', new THREE.BufferAttribute(dustColors, 3));

        const dustMat = new THREE.PointsMaterial({
            size: 0.22,
            map: this.createTexture(),
            vertexColors: true,
            transparent: true,
            opacity: 0.4,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.dust = new THREE.Points(dustGeom, dustMat);
        this.scene.add(this.dust);
    }

    setShape(shapeName) {
        if (!this.shapes[shapeName] || this.currentShape === shapeName) return;

        for (let i = 0; i < this.particleCount * 3; i++) {
            this.sourcePositions[i] = this.positions[i];
            this.targetPositions[i] = this.shapes[shapeName][i];

            this.sourceColors[i] = this.currentColors[i];
            this.targetColors[i] = this.colors[shapeName][i];
        }

        this.currentShape = shapeName;
        this.morphProgress = 0.0;
    }

    endTouch() {
        if (this.isTouchActive) {
            this.isTouchActive = false;
            this.touchReleaseTime = performance.now();
        } else {
            this.targetMouse.set(-999, -999);
        }
    }

    setupEvents() {
        window.addEventListener('resize', () => this.onResize());

        const handlePointer = (clientX, clientY, isStarting = false) => {
            const rect = this.container.getBoundingClientRect();
            if (
                clientX >= rect.left &&
                clientX <= rect.right &&
                clientY >= rect.top &&
                clientY <= rect.bottom
            ) {
                const mouseX = ((clientX - rect.left) / rect.width) * 2 - 1;
                const mouseY = -((clientY - rect.top) / rect.height) * 2 + 1;

                // Instant zero-delay touch initialization (eliminates the 75-frame lerp delay from -999)
                if (isStarting || this.mouse.x < -2 || this.mouse.x > 2) {
                    this.mouse.set(mouseX, mouseY);
                }
                this.targetMouse.set(mouseX, mouseY);
                this.isTouchActive = true;
                this.touchReleaseTime = 0;
            } else {
                this.endTouch();
            }
        };

        // Pointer Events (Unified mouse & touchscreen)
        window.addEventListener('pointerdown', (e) => {
            handlePointer(e.clientX, e.clientY, true);
        }, { passive: true });

        window.addEventListener('pointermove', (e) => {
            handlePointer(e.clientX, e.clientY, false);
        }, { passive: true });

        window.addEventListener('pointerup', () => {
            this.endTouch();
        }, { passive: true });

        window.addEventListener('pointercancel', () => {
            this.endTouch();
        }, { passive: true });

        // Native Touch Events for Mobile & iOS Safari
        window.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length > 0) {
                handlePointer(e.touches[0].clientX, e.touches[0].clientY, true);
            }
        }, { passive: true });

        window.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches.length > 0) {
                handlePointer(e.touches[0].clientX, e.touches[0].clientY, false);
            }
        }, { passive: true });

        window.addEventListener('touchend', () => {
            this.endTouch();
        }, { passive: true });

        window.addEventListener('touchcancel', () => {
            this.endTouch();
        }, { passive: true });

        window.addEventListener('pointerleave', () => {
            this.endTouch();
        });

        // -------------------------------------------------------------
        // Multi-Sensor Mobile Tilt Engine (Orientation + Accelerometer Motion)
        // -------------------------------------------------------------
        let lastSensorEventTime = 0;
        let activeSensorType = 'none';

        const onSensorTilt = (normX, normY, source) => {
            this.targetTilt.x = normX;
            this.targetTilt.y = normY;
            this.isTiltActive = true;
            activeSensorType = source;
            lastSensorEventTime = performance.now();

            if (typeof window.updateTiltUiPill === 'function') {
                window.updateTiltUiPill(true);
            }
        };

        // 1. DeviceOrientationEvent (Standard Gyroscope)
        const handleOrientation = (e) => {
            if (e.gamma === null || e.beta === null || typeof e.gamma === 'undefined' || typeof e.beta === 'undefined') return;

            const gamma = Math.max(-30, Math.min(30, e.gamma || 0));
            const restingBeta = 45;
            const deltaBeta = (e.beta || restingBeta) - restingBeta;
            const beta = Math.max(-28, Math.min(28, deltaBeta));

            const normX = gamma / 24.0;
            const normY = beta / 22.0;

            onSensorTilt(normX, normY, 'orientation');
        };

        // 2. DeviceMotionEvent (Raw Accelerometer with Gravity)
        // High-reliability fallback across 100% of Android & iOS devices without requiring compass calibration
        const handleMotion = (e) => {
            if (activeSensorType === 'orientation' && performance.now() - lastSensorEventTime < 350) return;

            const acc = e.accelerationIncludingGravity;
            if (!acc || acc.x === null || acc.y === null || typeof acc.x === 'undefined') return;

            // Tilting phone right: gravity pulls along -X
            const normX = Math.max(-1, Math.min(1, -acc.x / 4.2));

            // Tilting phone back/forward (standard reading posture has acc.y around 6.8 m/s^2)
            const restingY = 6.8;
            const diffY = acc.y - restingY;
            const normY = Math.max(-1, Math.min(1, diffY / 3.8));

            onSensorTilt(normX, normY, 'motion');
        };

        const attachSensorListeners = () => {
            if (typeof window === 'undefined') return;
            window.addEventListener('deviceorientation', handleOrientation, { passive: true });
            window.addEventListener('deviceorientationabsolute', handleOrientation, { passive: true });
            window.addEventListener('devicemotion', handleMotion, { passive: true });
        };

        // Auto-attach immediately for Android / Chrome / Firefox
        attachSensorListeners();

        // iOS Safari (iOS 13+) permission handler
        this.requestMobileTiltPermission = () => {
            if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
                DeviceOrientationEvent.requestPermission()
                    .then(state => {
                        if (state === 'granted') {
                            attachSensorListeners();
                            if (typeof window.updateTiltUiPill === 'function') window.updateTiltUiPill(true);
                        } else {
                            if (typeof window.updateTiltUiPill === 'function') window.updateTiltUiPill(false);
                        }
                    })
                    .catch(() => {
                        if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
                            DeviceMotionEvent.requestPermission()
                                .then(mState => {
                                    if (mState === 'granted') {
                                        attachSensorListeners();
                                        if (typeof window.updateTiltUiPill === 'function') window.updateTiltUiPill(true);
                                    }
                                })
                                .catch(() => {});
                        }
                    });
            } else {
                attachSensorListeners();
                if (typeof window.updateTiltUiPill === 'function') window.updateTiltUiPill(true);
            }
        };

        window.requestMobile3DTiltPermission = () => this.requestMobileTiltPermission();
    }

    onResize() {
        const width = this.container.clientWidth || window.innerWidth;
        const height = this.container.clientHeight || window.innerHeight;
        if (width === 0 || height === 0) return;

        const aspect = width / height;
        this.camera.aspect = aspect;
        const zForHeight = 28.5;
        const zForWidth = 20.0 / Math.max(0.44, aspect);
        this.camera.position.z = Math.max(zForHeight, zForWidth);
        this.camera.updateProjectionMatrix();

        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(isIOS ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2));
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const time = performance.now() * 0.001;

        // Snappy responsive tracking when finger is dragging, smooth gentle recovery on release
        const lerpSpeed = this.isTouchActive ? 0.22 : 0.08;
        if (this.targetMouse.x > -2 && this.targetMouse.x < 2) {
            this.mouse.lerp(this.targetMouse, lerpSpeed);
        } else if (this.touchReleaseTime === 0) {
            this.mouse.lerp(this.targetMouse, 0.08);
        }

        // Smooth decaying release force for elastic snap back
        let currentTouchMultiplier = 0.0;
        if (this.isTouchActive) {
            currentTouchMultiplier = 1.0;
        } else if (this.touchReleaseTime > 0) {
            const elapsed = (performance.now() - this.touchReleaseTime) * 0.001;
            if (elapsed < 0.45) {
                currentTouchMultiplier = Math.max(0, 1.0 - elapsed / 0.45);
            } else {
                currentTouchMultiplier = 0.0;
                this.touchReleaseTime = 0;
                this.targetMouse.set(-999, -999);
                this.mouse.set(-999, -999);
            }
        }

        let worldMouse = new THREE.Vector3(-999, -999, 0);
        const hasValidMouse = (this.mouse.x > -2 && this.mouse.x < 2);
        if (hasValidMouse && (this.isTouchActive || currentTouchMultiplier > 0.01)) {
            this.raycaster.setFromCamera(this.mouse, this.camera);
            this.raycaster.ray.intersectPlane(this.plane, worldMouse);
        }

        if (this.morphProgress < 1.0) {
            this.morphProgress += this.morphSpeed;
            if (this.morphProgress > 1.0) this.morphProgress = 1.0;
        }

        const t = this.morphProgress;
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const posAttr = this.geometry.attributes.position;
        const colAttr = this.geometry.attributes.color;

        // Enhanced mobile touch radius & force for satisfying, lush interaction on narrow screens
        const isMobile = window.innerWidth < 768;
        const mouseRadius = isMobile ? 7.6 : 5.0;
        const mouseRadiusSq = mouseRadius * mouseRadius;
        const baseMouseForce = isMobile ? 0.85 : 0.60;
        const mouseForce = baseMouseForce * (this.isTouchActive ? 1.0 : currentTouchMultiplier);
        const springDamping = 0.88;
        const returnSpeed = 0.08;

        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;

            let targetX = THREE.MathUtils.lerp(this.sourcePositions[i3], this.targetPositions[i3], ease);
            let targetY = THREE.MathUtils.lerp(this.sourcePositions[i3 + 1], this.targetPositions[i3 + 1], ease);
            let targetZ = THREE.MathUtils.lerp(this.sourcePositions[i3 + 2], this.targetPositions[i3 + 2], ease);

            this.currentColors[i3] = THREE.MathUtils.lerp(this.sourceColors[i3], this.targetColors[i3], ease);
            this.currentColors[i3 + 1] = THREE.MathUtils.lerp(this.sourceColors[i3 + 1], this.targetColors[i3 + 1], ease);
            this.currentColors[i3 + 2] = THREE.MathUtils.lerp(this.sourceColors[i3 + 2], this.targetColors[i3 + 2], ease);

            // Shape-specific organic dynamic animation (Continuous 3D movement & breathing)
            if (this.currentShape === 'logo') {
                const floatMotion = Math.sin(time * 1.8 + targetY * 0.25) * 0.18;
                targetY += floatMotion;
                targetZ += Math.cos(time * 1.4 + targetX * 0.25) * 0.14;
            } else if (this.currentShape === 'shikha') {
                const flicker = Math.sin(time * 5.0 + targetY * 1.2 + i * 0.05) * 0.16;
                const wind = Math.cos(time * 2.2 + targetY * 0.8) * 0.14 * (targetY + 8) / 16;
                targetX += wind;
                targetY += Math.abs(flicker);
                targetZ += flicker * 0.5;
            } else {
                const breathe = Math.sin(time * 1.8 + targetY * 0.3) * 0.16;
                targetX += (targetX * 0.02) * breathe;
                targetY += (targetY * 0.02) * breathe;
            }

            let px = this.positions[i3];
            let py = this.positions[i3 + 1];
            let pz = this.positions[i3 + 2];

            const dx = px - worldMouse.x;
            const dy = py - worldMouse.y;
            const dz = pz - worldMouse.z;
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < mouseRadiusSq && distSq > 0.001 && mouseForce > 0.01) {
                const dist = Math.sqrt(distSq);
                const force = (1 - dist / mouseRadius) * mouseForce;
                this.velocities[i3] += (dx / dist) * force;
                this.velocities[i3 + 1] += (dy / dist) * force;
                this.velocities[i3 + 2] += (dz / dist) * force + (Math.random() - 0.5) * 0.1;
            }

            this.velocities[i3] += (targetX - px) * returnSpeed;
            this.velocities[i3 + 1] += (targetY - py) * returnSpeed;
            this.velocities[i3 + 2] += (targetZ - pz) * returnSpeed;

            this.velocities[i3] *= springDamping;
            this.velocities[i3 + 1] *= springDamping;
            this.velocities[i3 + 2] *= springDamping;

            this.positions[i3] += this.velocities[i3];
            this.positions[i3 + 1] += this.velocities[i3 + 1];
            this.positions[i3 + 2] += this.velocities[i3 + 2];
        }

        posAttr.needsUpdate = true;
        colAttr.needsUpdate = true;

        // Smoothly interpolate device tilt from mobile sensors
        if (this.isTiltActive) {
            this.tilt.lerp(this.targetTilt, 0.12);
        }

        // Active interaction calculation: Touch/Mouse + Mobile Gyro Tilt
        let activeInteractX = 0;
        let activeInteractY = 0;
        let hasActiveInteraction = false;

        if (hasValidMouse && this.isTouchActive) {
            // Direct finger touch has immediate priority
            activeInteractX = this.mouse.x;
            activeInteractY = this.mouse.y;
            hasActiveInteraction = true;
        } else if (this.isTiltActive && (Math.abs(this.tilt.x) > 0.005 || Math.abs(this.tilt.y) > 0.005)) {
            // Phone tilt gives smooth, continuous 3D gyro perspective
            activeInteractX = this.tilt.x;
            activeInteractY = this.tilt.y;
            hasActiveInteraction = true;
        } else if (hasValidMouse) {
            activeInteractX = this.mouse.x;
            activeInteractY = this.mouse.y;
            hasActiveInteraction = true;
        }

        if (this.currentShape === 'logo') {
            // Visibly responsive 3D floating & tilt reacting to phone tilt, touch or ambient wave
            const isTilted = this.isTiltActive && !this.isTouchActive && (Math.abs(this.tilt.x) > 0.04 || Math.abs(this.tilt.y) > 0.04);
            const ambientFactor = isTilted ? 0.2 : 1.0;
            let targetRotY = Math.sin(time * 0.75) * 0.12 * ambientFactor;
            let targetRotX = Math.cos(time * 0.55) * 0.07 * ambientFactor;

            if (hasActiveInteraction) {
                targetRotY += activeInteractX * 0.72; // Up to ~42 degrees visible rotation
                targetRotX -= activeInteractY * 0.52; // Up to ~30 degrees visible pitch
            }

            this.points.rotation.y += (targetRotY - this.points.rotation.y) * 0.12;
            this.points.rotation.x += (targetRotX - this.points.rotation.x) * 0.12;
            this.points.position.y = Math.sin(time * 1.2) * 0.28;

            // Z roll rotation for ultra-tactile physical feel
            let targetRotZ = hasActiveInteraction ? -activeInteractX * 0.22 : 0;
            this.points.rotation.z += (targetRotZ - this.points.rotation.z) * 0.10;
        } else if (this.currentShape === 'shikha') {
            let targetRotY = Math.sin(time * 0.4) * 0.15;
            let targetRotX = Math.cos(time * 0.3) * 0.06;
            if (hasActiveInteraction) {
                targetRotY += activeInteractX * 0.40;
                targetRotX -= activeInteractY * 0.28;
            }
            this.points.rotation.y += (targetRotY - this.points.rotation.y) * 0.10;
            this.points.rotation.x += (targetRotX - this.points.rotation.x) * 0.10;
            this.points.position.y = 0;
        } else if (this.currentShape === 'hands') {
            let targetRotY = Math.sin(time * 0.3) * 0.15;
            let targetRotX = Math.sin(time * 0.2) * 0.08;
            if (hasActiveInteraction) {
                targetRotY += activeInteractX * 0.40;
                targetRotX -= activeInteractY * 0.28;
            }
            this.points.rotation.y += (targetRotY - this.points.rotation.y) * 0.10;
            this.points.rotation.x += (targetRotX - this.points.rotation.x) * 0.10;
            this.points.position.y = 0;
        } else {
            let targetRotY = Math.sin(time * 0.4) * 0.18;
            let targetRotX = Math.cos(time * 0.3) * 0.08;
            if (hasActiveInteraction) {
                targetRotY += activeInteractX * 0.45;
                targetRotX -= activeInteractY * 0.32;
            }
            this.points.rotation.y += (targetRotY - this.points.rotation.y) * 0.10;
            this.points.rotation.x += (targetRotX - this.points.rotation.x) * 0.10;
            this.points.position.y = 0;
        }

        let targetCamX = 0;
        let targetCamY = 0;
        if (hasActiveInteraction) {
            targetCamX = activeInteractX * 5.5;
            targetCamY = activeInteractY * 3.8;
        }
        this.camera.position.x += (targetCamX - this.camera.position.x) * 0.08;
        this.camera.position.y += (targetCamY - this.camera.position.y) * 0.08;
        this.camera.lookAt(0, 0, 0);

        if (this.dust) {
            this.dust.rotation.y = time * 0.02 + (hasActiveInteraction ? activeInteractX * 0.35 : 0);
            this.dust.rotation.x = time * 0.015 - (hasActiveInteraction ? activeInteractY * 0.25 : 0);
        }

        this.renderer.render(this.scene, this.camera);
    }
}

window.initInteractiveHero3D = function(containerId) {
    try {
        return new KaruShikhaHero3D(containerId);
    } catch (err) {
        console.warn("KaruShikhaHero3D initialization safely intercepted:", err);
        return null;
    }
};
