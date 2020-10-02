---
date: 01-01-2019
period: January-July 2019
title: Master internship - INRIA Grenoble-Alpes
---

3D Sketching in Virtual Reality. Project proposed by the [IMAGINE](https://team.inria.fr/imagine/) team, about using the user's 3D strokes from VR controllers (HTC Vive) in order to compute and render 3D shapes.

![Rendered results of sketching sessions](assets/img/drawing-results.png)

It implies mesh generation techniques based on a least-squares approximation of positions and controller orientations, as well as considerations about the initial intent of the user depicted by his gestures. The algorithm was designed with the help of my internship supervisors, implemented in C++ and then tested and debugged thanks to the [IGL](https://libigl.github.io/) geometry processing library, as well as [Eigen](https://eigen.tuxfamily.org/index.php) for matrices manipulation and operations. Source code can be consulted and downloaded from this [GitHub repository](https://github.com/paulelian-tabarant/3d-meshes-from-curves).
