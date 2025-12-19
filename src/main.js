import './style.css'
import { ThreeScene } from './three-scene'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

// Initialize Three.js
new ThreeScene();

// Hero Animations
window.addEventListener('load', () => {
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.5 } });

  tl.from('[data-gsap="hero-title"]', {
    y: 100,
    opacity: 0,
    stagger: 0.2
  })
    .from('[data-gsap="hero-sub"]', {
      y: 50,
      opacity: 0
    }, "-=1")
    .from('[data-gsap="hero-btns"]', {
      scale: 0.8,
      opacity: 0
    }, "-=0.8")
    .from('nav', {
      y: -100,
      opacity: 0
    }, "-=1.2");
});

// Services Animation
gsap.from('#services .glass', {
  scrollTrigger: {
    trigger: '#services',
    start: 'top 80%',
  },
  y: 100,
  opacity: 0,
  stagger: 0.2,
  duration: 1,
  ease: 'power3.out'
});
