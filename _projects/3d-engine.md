---
date: 01-09-2019
title: Learn OpenGL programming
---

I've been learning about 3D programming with OpenGL since my specialization course in 1st year of master, but really started developing my own application from scratch from september 2019. I was mostly driven by the wonderful resources available on the website [Learn OpenGL](https://learnopengl.com/) by Joey de Vries.

Most of this work is available on this [Github repository](https://github.com/paulelian-tabarant/opengl). I tried to implement different rendering techniques which needed to break and rebuild some parts of the code, so each step is stored in a specific commit in the history.

![Image-based lighting on a Stitch model](assets/img/stitch.jpg)

What I've learned to implement :

- Basic OpenGL application architecture and components (context initialization, storage of geometry with buffers and attribute pointers, texture reading and mapping, objects drawing commands...)
- Shadowing : calculation of an omnidirectional shadow map from a punctual light's position and objects in the 3D scene
- Physics-based rendering of point and directional light reflections
- [Screen-space ambient occlusion](https://en.wikipedia.org/wiki/Screen_space_ambient_occlusion)
- Physics-based rendering using [BRDF](https://en.wikipedia.org/wiki/Bidirectional_reflectance_distribution_function) implementations
- [Image-based lighting](https://en.wikipedia.org/wiki/Image-based_lighting) thanks to 360° panoramic pictures from [this website](http://hdrlabs.com/sibl/archive.html)

![Image-based lighting on a Batman model](assets/img/batman.jpg)
