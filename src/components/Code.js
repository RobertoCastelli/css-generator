import React from "react";

const Code = (props) => {
  return (
    <div>
      <pre>
        <code>
          <div>button &#123;</div>
          <div> font-size: {props.fontSize};</div>
          <div> background-color: {props.backgroundColor};</div>
          <div> color: {props.color};</div>
          <div> padding: {props.padding}rem;</div>
          <div> border-radius: {props.radius}rem;</div>
          <div>
            {" "}
            border: {props.border}rem solid {props.color};
          </div>
          <div>&#125;</div>
        </code>
      </pre>
    </div>
  );
};

export default Code;
