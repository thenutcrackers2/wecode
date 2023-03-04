import React from "react";
import "./ColorButton.scss";

const ColorButton = (props) => {
  return (
    <div>
      <button
        className={`colorButton ${props.color}`}
        // onClick={() => {
        //   setColor("white");
        // }}
      />
    </div>
  );
};

export default ColorButton;
