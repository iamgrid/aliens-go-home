# aliens-go-home

Aliens go home from the Auth0 blog article (https://auth0.com/blog/developing-games-with-react-redux-and-svg-part-1/), implemented with the following changes:

- Uses hooks instead of class components and Redux
- Uses requestAnimationFrame instead of a hard 10ms timer
- Uses a simple CSS setProperty call instead of the whole styled-components weirdness
- ...probably some other small perf optimizations that I can't remember right now

**The live version is hosted at https://iamgrid.co.uk/demos/aliens_go_home/.**

Disclaimer: I am aware that this isn't the right way to develop a game for the web, but the project looked fun and I wanted to practice writing hooks in React.

_If you've stumbled on this repo researching game development with React components somehow, please understand that as of 2020 this is not a performant way to go for any game where a consistent framerate matters - React is meant for manipulating DOM elements, not high speed canvas animation. I'd suggest looking into PixiJS or PhaserJS for 2D and three.js for 3D games instead._
