---
title: From Motion Graphics to JavaScript
description: CSS animations and JavaScript give motion designers a new canvas. Here's what the transition actually looks like, and why your existing skills matter more than you'd think.
date: "22 January,2026"
tools:
  - JavaScript
  - CSS
  - GSAP
  - VS Code
tags:
  - javascript
  - web animation
  - GSAP
  - css
  - career
thumbnail: ""
images:
  - src: ""
    alt: A VS Code editor showing a GSAP timeline animation script
  - src: ""
    alt: A browser preview of a smooth text reveal animation built with CSS
---

A lot of the most interesting animation happening right now isn't in video — it's in browsers. Scroll-triggered reveals, type that follows the cursor, interactive data viz. Same goal as motion work, totally different pipeline.

## What carries over

Easing vocabulary is identical. `ease-in-out`, bezier curves — same model as After Effects, different syntax:

```css
.box {
  transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

And GSAP's timeline API maps almost directly to how you already think:

```js
gsap.timeline()
  .from(".headline", { opacity: 0, y: 40, duration: 0.6, ease: "power2.out" })
  .from(".subhead",  { opacity: 0, y: 20, duration: 0.4, ease: "power2.out" }, "-=0.2")
  .from(".body",     { opacity: 0,         duration: 0.3 }, "-=0.1");
```

Tweens, sequencing, overlap offsets — same mental model.

## What's new

**Events** replace the render button. Animation responds to what the user does:

```js
document.querySelector(".btn").addEventListener("mouseenter", () => {
  gsap.to(".btn", { scale: 1.05, duration: 0.2 });
});
```

**ScrollTrigger** is where things get fun:

```js
gsap.from(".panel", {
  scrollTrigger: { trigger: ".panel", start: "top 80%" },
  opacity: 0, y: 60, duration: 0.8
});
```

No render button. Save, switch to browser, refresh. The feedback loop is tight.

## Where to start

Install GSAP, open a blank HTML file, and try to recreate something you've already built in After Effects. The translation work teaches you more than any tutorial.
