import React, { useState } from "react";
import Code from "./Code";
const Generator = () => {
  // COLOR PALETTE
  const colors = [
    "green",
    "red",
    "blue",
    "yellow",
    "orange",
    "pink",
    "grey",
    "brown",
  ];

  // STATES
  const btn = document.getElementById("btn");
  const [lable, setLable] = useState("Demo");
  const [bgColor, setBgColor] = useState("green");
  const [color, setColor] = useState("green");
  const [btnPadding, setbtnPadding] = useState("1");
  const [btnBorder, setBtnBorder] = useState("1");
  const [btnRadius, setBtnRadius] = useState("1");
  const [slider, setSlider] = useState("16");
  const [generate, setGenerate] = useState(false);

  // HANDLERS
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
  const handleSlider = (e) => setSlider(e.target.value);
  const modifySlider = () => (btn.style.fontSize = `${slider}px`);
  const modifyBorder = () =>
    (btn.style.border = `${btnBorder}rem solid ${color}`);
  const handleGenerate = () => setGenerate(!generate);

  // RENDER
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

        {/* MODIFY SLIDER */}
        <div className="slider-container">
          <label htmlFor="slider">font size </label>
          <span> {slider} px</span>
          <input
            className="slider"
            onChange={handleSlider}
            onClick={modifySlider}
            type="range"
            id="slider"
            min="16"
            max="30"
            value={slider}
          />
        </div>

        {/* MODIFY BG COLOR */}
        <div className="modify-bg-color">
          <label htmlFor="bg-color">background colour </label>

          <select onChange={handleBgColor} value={bgColor}>
            {colors.map((color) => {
              return (
                <option key={color + "1"} value={color}>
                  {color}
                </option>
              );
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
              return (
                <option key={color + "2"} value={color}>
                  {color}
                </option>
              );
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
                placeholder="i.e. 1"
                onChange={handleBorder}
                onFocus={(e) => (e.target.value = "")}
              />
              <button onClick={modifyBorder} type="button">
                MODIFY
              </button>
            </div>

            {/*  GENERATE CSS CODE */}
            <div>
              <button onClick={handleGenerate}>GENERATE CSS CODE</button>
              <div>
                {generate ? (
                  <Code
                    fontSize={slider}
                    backgroundColor={bgColor}
                    color={color}
                    padding={btnPadding}
                    radius={btnRadius}
                    border={btnBorder}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generator;
