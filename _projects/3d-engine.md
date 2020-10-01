---
year: 2017
title: Bases of processing and rendering of 3D scenes 
---

An application window based on the OpenGL C++ library. Takes a 3D mesh as input and loads several lightning, one shadow and one ambient occlusion (using BVH acceleration) models. Lighting is computed from the fragment shader. Also lets the user apply basic filters (laplacian) and subdivision schemes on the current mesh. 

You can try it downloading [this archive](http://mediafire.com/file/8fsoyzpsa77l9iq/IGR202_paul-elian_tabarant.zip). Then go to the root directory, run `make` and `./main models/'your_mesh'.off` from the root folder on Linux.

See my [most beautiful screenshots](assets/pdf/igr202-screenshots.pdf).