import React, { useState } from "react";

const Generator = () => {
  const btn = document.getElementById("btn");
  const [lable, setLable] = useState("Demo");
  const [bgColor, setBgColor] = useState("");
  const [color, setColor] = useState("");

  const handleTxt = (e) => setLable(e.target.value);
  const handleBgColor = (e) => setBgColor(e.target.value);
  const modifyBgColor = () => (btn.style.backgroundColor = `${bgColor}`);
  const handleTxtColor = (e) => setColor(e.target.value);
  const modifyTxtColor = () => (btn.style.color = `${color}`);
  return (
    <div>
      <button id="btn">{lable}</button>
      <div className="content">
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
        </div>
      </div>
    </div>
  );
};

export default Generator;
