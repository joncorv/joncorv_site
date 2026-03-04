---
title: After Effects Expressions for Noobs
description: Expressions are the gateway drug for animators learning to code. Here's how to approach them without feeling lost, and the handful you'll use constantly.
date: "28 October, 2025"
tools:
  - After Effects
  - JavaScript
tags:
  - after effects
  - expressions
  - coding
  - tutorial
thumbnail: ""
images:
  - src: ""
    alt: After Effects timeline with an expression applied to a position property
  - src: ""
    alt: The expression editor open in After Effects showing a wiggle expression
---

Alt-click a stopwatch. Type some code. Done — you're writing expressions.

No setup, no IDE, no terminal. The feedback is instant and visual, which makes this the best possible way to start learning code as an animator.

## The four you'll use everywhere

**wiggle** — shake a layer organically
```js
wiggle(3, 20) // 3x per second, 20px max offset
```

**loopOut** — loop your keyframes forever
```js
loopOut("cycle")    // repeats forward
loopOut("pingpong") // reverses each loop
```

**time** — drive anything with the clock
```js
time * 90 // slow spin. crank it up for faster
```

**value** — offset whatever's already keyframed
```js
value + [0, -50] // push the existing position up by 50px
```

## Linking properties

Drag the pickWhip from one property to another and AE writes the expression for you. Useful for tying a layer's opacity to a slider, or locking scale to a null.

```js
thisComp.layer("Control").effect("Opacity")("Slider")
```

You don't need to write that by hand — just read it after the pickWhip generates it, and it'll start making sense.

## Just start

Take any animation you've already built. Add one expression. Break it. Fix it. That's the whole method.
