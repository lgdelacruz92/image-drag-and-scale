# image-drag-and-scale

> This is a library that allows you to drag and scale an image within a div element

[![NPM](https://img.shields.io/npm/v/image-drag-and-scale.svg)](https://www.npmjs.com/package/image-drag-and-scale) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![](https://media.giphy.com/media/YmiC7E6aX3xZu5pIZN/giphy.gif)](https://media.giphy.com/media/YmiC7E6aX3xZu5pIZN/giphy.gif)

## Install

```bash
npm install --save image-drag-and-scale
```

## Usage

```jsx
import React from "react";
import Image from "image-drag-and-scale";
import "./styles.css";

function App() {
  const imageData = {
    x: 400,
    y: 200,
    translateX: 0,
    translateY: 0,
    scaledWidth: 100,
    scaledHeight: 100,
    width: 100,
    height: 100,
    src: "https://source.unsplash.com/random/1000x1000",
    alt: "random",
    id: "124",
    index: 2
  };
  return (
    <div className="App">
      <div ref={containerRef} className="container">
        <Image data={imageData} containerRef={containerRef} />
      </div>
    </div>
  );
}
```

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
