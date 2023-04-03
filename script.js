gsap.registerPlugin(ScrollTrigger);
gsap.from(".pizzaLeft", {scrollTrigger:".pizzaLeft", opacity:0, duration:2, delay:1, rotation: 360})
gsap.from(".pizzaLeftTwo", {scrollTrigger:".pizzaLeftTwo", opacity:0, duration:2, delay:1, rotation: 360})
gsap.from(".pizzaOne", {scrollTrigger:".pizzaOne", opacity:0, duration:2, delay:1, rotation: 360})
gsap.from(".pizzaTwo", {scrollTrigger:".pizzaTwo", opacity:0, duration:2, delay:1, rotation: 360})
gsap.from(".oven", {scrollTrigger:".oven", opacity:0, duration:1, delay:2, rotation: -120})
gsap.from(".about", {scrollTrigger:".about", opacity:0, duration:1, delay:2, rotation: 120})
gsap.from(".contacts", {scrollTrigger:".contacts", opacity:0, duration:2, delay:1.5,  ease: "bounce.out", x: -200})
gsap.from(".schedule", {scrollTrigger:".schedule", opacity:0, duration:2, delay:1.5,  ease: "bounce.out", x: 200})