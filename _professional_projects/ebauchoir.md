---
date: 01-01-2020
title: L'Ébauchoir
---

Part of a team of two developers, assisting the artist Pauline De Chalendar on [her project](https://www.atelier-arts-sciences.eu/L-Ebauchoir) combining art and technology. She uses PIRVI's 3D drawing tool VAirDraw for this purpose. Our tool allows her to draw basic "ribbon-like" lines and shapes thanks to the algorithm implemented during my internship at the INRIA Grenoble-Alpes (see [Experience](#experience) section) research institute.

I have then embedded the drawing tool inside PIRVI's 3D engine. We've also added some other features like replaying the whole drawing process programmatically, or inserting "camouflage" shapes to hide some 3D objects in specific contexts (observer's position and gaze direction). Other tools are needed for the editing process, like the possibility of splitting a drawing session into different file outputs. It allows Pauline to define different phases when animating the drawing.

Technologies : C++11, OpenGL4, GLSL, Python 2.7
