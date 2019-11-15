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
import * as MaterialUI from "@material-ui/core";

const useStyles = MaterialUI.makeStyles(theme => {
  return {
    container: {
      position: "relative",
      width: 500,
      height: 500,
      border: "2px solid red",
      overflow: "hidden",
      transform: "translate(100px, 200px)"
    }
  };
});

const App = props => {
  const imageData = {
    x: 50,
    y: 50,
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

  const classes = useStyles();
  const containerRef = React.useRef();

  return (
    <div className="App">
      <div ref={containerRef} className={classes.container}>
        <Image data={imageData} containerRef={containerRef} />
      </div>
    </div>
  );
};

export default App;
```

# Version Update

## v1.1.3

> Performance for multiple images is much better
> Tested with 40 images inside a container

# beta version v1.1.5

> This version is still being tested

## License

MIT © [lgdelacruz92](https://github.com/lgdelacruz92)
