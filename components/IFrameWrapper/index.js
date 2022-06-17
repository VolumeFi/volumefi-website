import React, { useRef, useState } from "react";

const IFrameWrapper = ({ src, className = "" }) => {
  const ref = useRef();
  const [height, setHeight] = useState("0px");

  const onLoad = () => {
    setHeight(ref.current.contentWindow.document.body.scrollHeight + "px");
  };

  return (
    <iframe
      ref={ref}
      onLoad={onLoad}
      src={src}
      width="100%"
      height={height}
      scrolling="no"
      frameBorder="0"
      style={{
        overflow: "auto",
      }}
      className={className}
    ></iframe>
  );
};

export default IFrameWrapper;
