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
