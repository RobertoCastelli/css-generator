import React from "react";

const Code = (props) => {
  return (
    <div>
      <h3>CSS CODE</h3>
      <code>
        <div>font-size: {props.fontSize};</div>
        <div>background-color: {props.backgroundColor};</div>
        <div>color: {props.color};</div>
        <div>padding: {props.padding};</div>
        <div>border-radius: {props.radius};</div>
        <div>
          border: {props.border}rem solid {props.color};
        </div>
      </code>
    </div>
  );
};

export default Code;
