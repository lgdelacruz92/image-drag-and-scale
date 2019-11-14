import React from "react";
import Image from "image-drag-and-scale";

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

  const containerRef = React.useRef();

  return (
    <div className="App">
      <div
        ref={containerRef}
        className="container"
        style={{
          position: "relative",
          width: 1024,
          height: 600,
          border: "2px solid red"
        }}
      >
        <div style={{ fontSize: 50 }}>Hello</div>
        <Image data={imageData} containerRef={containerRef} />
      </div>
    </div>
  );
};

export default App;
