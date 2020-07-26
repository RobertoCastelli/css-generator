import React, { useState } from "react";

const Generator = () => {
  const btn = document.getElementById("btn");
  const [lable, setLable] = useState("Demo");
  const [bgColor, setBgColor] = useState("");
  const [color, setColor] = useState("");
  const [btnWidth, setBtnWidth] = useState("");
  const [btnHeight, setBtnHeight] = useState("");
  const [btnBorder, setBtnBorder] = useState("");

  const handleTxt = (e) => setLable(e.target.value);
  const handleBgColor = (e) => setBgColor(e.target.value);
  const modifyBgColor = () => (btn.style.backgroundColor = `${bgColor}`);
  const handleTxtColor = (e) => setColor(e.target.value);
  const modifyTxtColor = () => (btn.style.color = `${color}`);
  const handleWidth = (e) => setBtnWidth(e.target.value);
  const modifyWidth = () => (btn.style.width = `${btnWidth}rem`);
  const handleHeight = (e) => setBtnHeight(e.target.value);
  const modifyHeight = () => (btn.style.height = `${btnHeight}rem`);
  const handleBorder = (e) => setBtnBorder(e.target.value);
  const modifyBorder = () =>
    (btn.style.border = `${btnBorder}rem solid ${color}`);

  return (
    <div>
      <button id="btn">{lable}</button>
      <div className="content">
        {/* MODIFY TEXT */}
        <div className="modify-text">
          <label htmlFor="btn-text">button label </label>
          <input
            name="btn-text"
            type="text"
            placeholder="i.e. demo"
            onChange={handleTxt}
            onFocus={(e) => (e.target.value = "")}
          />
        </div>

        {/* MODIFY BG COLOR */}
        <div className="modify-bg-color">
          <label htmlFor="bg-color">background colour </label>
          <input
            value={bgColor}
            name="bg-color"
            type="text"
            placeholder="i.e. red"
            onChange={handleBgColor}
            onFocus={(e) => (e.target.value = "")}
          />
          <button onClick={modifyBgColor} type="button">
            MODIFY
          </button>
        </div>

        {/* MODIFY TXT COLOR */}
        <div className="modify-txt-color">
          <label htmlFor="txt-color">text colour </label>
          <input
            value={color}
            name="txt-color"
            type="text"
            placeholder="i.e. red"
            onChange={handleTxtColor}
            onFocus={(e) => (e.target.value = "")}
          />
          <button onClick={modifyTxtColor} type="button">
            MODIFY
          </button>
        </div>

        {/* MODIFY BTN WIDTH */}
        <div className="modify-width">
          <label htmlFor="btn-width">width (rem) </label>
          <input
            value={btnWidth}
            name="btn-width"
            type="number"
            min="0"
            placeholder="i.e. 16"
            onChange={handleWidth}
            onFocus={(e) => (e.target.value = "")}
          />
          <button onClick={modifyWidth} type="button">
            MODIFY
          </button>
        </div>

        {/* MODIFY BTN HEIGHT */}
        <div className="modify-Height">
          <label htmlFor="btn-height">hieght (rem) </label>
          <input
            value={btnHeight}
            name="btn-height"
            type="number"
            min="0"
            placeholder="i.e. 16"
            onChange={handleHeight}
            onFocus={(e) => (e.target.value = "")}
          />
          <button onClick={modifyHeight} type="button">
            MODIFY
          </button>

          {/* TOGGLE BORDERS */}
          <div className="btn-border">
            <label htmlFor="btn-border">borders </label>
            <input
              value={btnBorder}
              name="btn-border"
              type="number"
              min="0"
              placeholder="i.e. 16"
              onChange={handleBorder}
              onFocus={(e) => (e.target.value = "")}
            />
            <button onClick={modifyBorder} type="button">
              MODIFY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
