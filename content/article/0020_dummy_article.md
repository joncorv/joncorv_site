---
title: Getting Started with After Effects Expressions
description: Expressions are the gateway drug for animators learning to code. Here's how to approach them without feeling lost, and the handful you'll use constantly.
date: "2025-10-28"
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

Expressions in After Effects are the shortest path from "I'm an animator" to "I'm an animator who codes." They don't require any setup, no IDE, no terminal — just alt-click a stopwatch, and you're writing code directly in your composition. They're small, they're scoped to a single property, and the feedback is instant and visual. For anyone who's ever been intimidated by programming, this is the ideal starting point.

## What an Expression Actually Is

An expression is a small piece of JavaScript that After Effects evaluates every frame to determine the value of a property. Instead of a keyframe saying "position is 540, 960 at 2 seconds," an expression says "position is calculated by this formula at every frame." The result can be static, or it can change dynamically based on time, other layers, or external controls.

## The Core Four

These are the expressions that appear in almost every professional motion graphics project:

### wiggle()
```js
wiggle(frequency, amplitude)
```
Randomly offsets a value over time. `wiggle(3, 20)` on a position property shakes a layer three times per second with a maximum offset of 20 pixels. Essential for organic, handmade-feeling animation.

### loopOut()
```js
loopOut("cycle")
```
Makes your keyframes loop indefinitely. Apply it to any animated property and the animation repeats from the last keyframe back to the first. `"pingpong"` makes it reverse direction on each loop.

### time
```js
time * 360
```
`time` is a built-in variable that holds the current time in seconds. Multiplying it by a rotation value creates a constantly spinning layer. Simple and powerful.

### value
```js
value + [0, -50]
```
`value` refers to whatever the property's current value is, including any keyframed value. This lets you offset or modify the existing animation without replacing it.

## Connecting Properties with pickWhip

The pickWhip is a UI tool that writes an expression for you — drag it from one property to another and After Effects generates the reference path automatically. This is how you link a text layer's opacity to a slider control, or connect a shape's scale to a null object. You don't need to know the path syntax; just use the pickWhip and read what it generates.

## A Practical Starting Project

Take any animation you've already built and add one expression to it. A wiggle on the camera position, a loopOut on a repeating shape, a time-based rotation on a background element. Don't try to learn everything at once — expressions reward experimentation, and the best way to learn them is to break something and figure out why.
