---
title: nd-landscape-001
author: _authors/tim_pietrusky.md
image: /images/2022-10/2022-10-tim_pietrusky.jpg
image_alt: A generated landscape-like pattern glowing in neon lights
link: https://www.fxhash.xyz/generative/slug/nd-landscape-001
exhibition: 2022-10
tall: false 
---

After reading [Building a Vaporwave scene with Three.js](https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/){:target="_blank"} by [Maxime Heckel](https://twitter.com/MaximeHeckel){:target="_blank"} I was super inspired to generate a pseudo random landscape based on a single plane in ThreeJS.
The mountains and the road in the middle are sculpted out of the plane by using OffscreenCanvas to generate a low resolution grayscale displacement map: A dark color means no change to the plane = small mountains / flat road, where a light color means that the vertices are elevated = high mountains / road.
The colourful grid texture is also generated with OffscreenCanvas: It has the same size as the displacement map, so that the lines match the displaced vertices. Just the resolution is much higher.
The last part is a bloom effect (which is based on a shader) that lets the landscape glow... sometimes even too much.

This is the first generative art piece by NERDDISCO, each iteration is totally unique as it’s generated by using the hash of a block in the tezos blockchain as the seed.