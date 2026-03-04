---
title: "Generative Art and Animation"
description: What happens when you apply an animator's instincts — timing, rhythm, visual weight — to systems built from code? A look at creative coding through the lens of motion work.
date: "3 December, 2025"
tools:
  - p5.js
  - JavaScript
  - After Effects
tags:
  - generative art
  - creative coding
  - p5.js
  - animation
thumbnail: ""
images:
  - src: ""
    alt: A generative sketch showing flowing particle trails built in p5.js
  - src: ""
    alt: A grid of color-shifting rectangles animated with noise functions
---

Generative art is what happens when you write rules and let the output surprise you. For animators it clicks fast — `setup()` runs once, `draw()` runs every frame. You've thought in frames your whole career.

## Start here

```js
function setup() {
  createCanvas(800, 800);
  background(10);
}

function draw() {
  fill(random(255), 150, 200, 80);
  noStroke();
  ellipse(random(width), random(height), random(5, 30));
}
```

Random semi-transparent circles, every frame. Not much — but it's a live, running visual system in ten lines.

## random() vs noise()

`random()` jumps around chaotically. `noise()` flows smoothly — more organic, more interesting:

```js
let t = 0;

function draw() {
  let x = noise(t) * width;
  let y = noise(t + 100) * height;
  ellipse(x, y, 8);
  t += 0.005;
}
```

Pass different offsets for X and Y and you get wandering motion with no keyframes. This is Perlin noise — the function behind most natural-looking generative movement.

## Particle systems

A classic: a bunch of points that each move independently.

```js
let particles = [];

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 200; i++) {
    particles.push({ x: random(width), y: random(height), t: random(1000) });
  }
}

function draw() {
  background(10, 20); // low alpha = trails
  for (let p of particles) {
    p.x += noise(p.t) * 4 - 2;
    p.y += noise(p.t + 500) * 4 - 2;
    point(p.x, p.y);
    p.t += 0.005;
  }
}
```

## Bringing it back to video

p5.js sketches can be recorded frame-by-frame and imported into After Effects as image sequences. Complex organic backgrounds, particle passes, texture layers — all faster to generate in code than to animate by hand.
