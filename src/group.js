import './style.css'
import { ThreeScene } from './three-scene'
import gsap from 'gsap'

// Initialize Three.js (Shared background)
new ThreeScene();

// Page Animations
window.addEventListener('load', () => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    tl.from('[data-gsap="page-title"]', {
        y: 80,
        opacity: 0
    })
        .from('[data-gsap="page-sub"]', {
            y: 30,
            opacity: 0
        }, "-=0.8")
        .from('[data-gsap="group-card"]', {
            y: 50,
            opacity: 0,
            stagger: 0.2
        }, "-=0.6")
        .from('nav', {
            y: -100,
            opacity: 0
        }, "-=1");
});
