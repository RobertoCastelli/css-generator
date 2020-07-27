import React, { useState } from "react";

const Generator = () => {
  const colors = ["green", "red", "blue", "yellow", "orange"];

  const btn = document.getElementById("btn");
  const [lable, setLable] = useState("Demo");
  const [bgColor, setBgColor] = useState("");
  const [color, setColor] = useState("");
  const [btnPadding, setbtnPadding] = useState("");
  const [btnBorder, setBtnBorder] = useState("");
  const [btnRadius, setBtnRadius] = useState("");

  const handleTxt = (e) => setLable(e.target.value);
  const handleBgColor = (e) => setBgColor(e.target.value);
  const modifyBgColor = () => (btn.style.backgroundColor = `${bgColor}`);
  const handleTxtColor = (e) => setColor(e.target.value);
  const modifyTxtColor = () => (btn.style.color = `${color}`);
  const handlePadding = (e) => setbtnPadding(e.target.value);
  const modifyPadding = () => (btn.style.padding = `${btnPadding}rem`);
  const handleBorder = (e) => setBtnBorder(e.target.value);
  const handleRadius = (e) => setBtnRadius(e.target.value);
  const modifyRadius = () => (btn.style.borderRadius = `${btnRadius}rem`);

  const modifyBorder = () =>
    (btn.style.border = `${btnBorder}rem solid ${color}`);

  return (
    <div className="content">
      <fieldset>
        <legend htmlFor="btn">BUTTON PREVIEW</legend>
        <button id="btn">{lable}</button>
      </fieldset>
      <div className="panel">
        <h3>CONTROL PANEL</h3>
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

          <select onChange={handleBgColor} value={bgColor}>
            {colors.map((color) => {
              return <option value={color}>{color}</option>;
            })}
          </select>
          <button onClick={modifyBgColor} type="button">
            MODIFY
          </button>
        </div>

        {/* MODIFY TXT COLOR */}
        <div className="modify-txt-color">
          <label htmlFor="txt-color">text colour </label>
          <select onChange={handleTxtColor} value={color}>
            {colors.map((color) => {
              return <option value={color}>{color}</option>;
            })}
          </select>
          <button onClick={modifyTxtColor} type="button">
            MODIFY
          </button>
        </div>

        {/* MODIFY BTN PADDING */}
        <div className="modify-padding">
          <label htmlFor="btn-padding">padding (rem) </label>
          <input
            value={btnPadding}
            name="btn-height"
            type="number"
            min="0"
            placeholder="i.e. 2"
            onChange={handlePadding}
            onFocus={(e) => (e.target.value = "")}
          />
          <button onClick={modifyPadding} type="button">
            MODIFY
          </button>

          {/* MODIFY BTN RADIUS */}
          <div className="modify-radius">
            <label htmlFor="btn-radius">radius (rem) </label>
            <input
              value={btnRadius}
              name="btn-radius"
              type="number"
              min="0"
              placeholder="i.e. 1"
              onChange={handleRadius}
              onFocus={(e) => (e.target.value = "")}
            />
            <button onClick={modifyRadius} type="button">
              MODIFY
            </button>

            {/* TOGGLE BORDERS */}
            <div className="btn-border">
              <label htmlFor="btn-border">borders (rem) </label>
              <input
                value={btnBorder}
                name="btn-border"
                type="number"
                min="0"
                placeholder="i.e. 11"
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
    </div>
  );
};

export default Generator;
