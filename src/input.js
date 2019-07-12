import React from "react";
import uuid from "uuid";
//import console from "console";

export function InputBox({ onEnter }) {
  const [val, setVal] = React.useState("");

  function onType(evt) {
    setVal(evt.target.value);
  }
  function onButtonClick() {
    var obj = {
      name: val,
      id: uuid()
    };
    onEnter(obj);
    setVal("");
  }

  return (
    <div>
      <input value={val} onChange={onType} />
      <button onClick={onButtonClick}>Enter</button>
    </div>
  );
}
