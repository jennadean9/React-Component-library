import React from "react";
import "./Button.css";

const Button = props => {
  let classList = "";

  let types = ["primary", "danger", "success", "warning", "default"];
  if (types.includes(props.type)) {
    classList += ` button-${props.type}`;
  }
  if (props.large) {
    classList += ` button-large`;
  }
  if (props.outline) {
    classList += ` button-outline`;
  }
  if (props.fade) {
    classList += ` button-fade`;
  }

  return (
    <button class={classList} onClick={props}>
      <img src={props.icon} />
      {props.value}
    </button>
  );
};

export default Button;
