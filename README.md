# React Audio Visualiser

An experiment in connecting React and the Web Audio API. Forked from [@philnash's example](https://github.com/philnash/react-web-audio). Rather than using the microphone as per the original example, this project connects an `<audio>` element to a visualiser.

The current implementation is probably very inefficient; using `canvas` or a [D3 React library](https://github.com/hshoff/vx) would help.

## How to build the app

If you're interested in how to build a visualiser like this in React, check out the blog post [Audio visualisation with the Web Audio API and React](https://www.twilio.com/blog/audio-visualisation-web-audio-api--react).

For more on the canvas and React, check out the post [Techniques for animating on the canvas in React](https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/).

## How to run the app

You need Node.js installed to run the application.

Clone or download the project from GitHub, change into the directory and install the dependencies.

```bash
yarn install
```

Start the application:

```bash
yarn start
```

And open the browser to [http://localhost:3000/](localhost:3000).
