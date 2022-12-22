import React from "react";

type ExpandIconProps =  {
  isOpen: boolean;
  _onClick: React.MouseEventHandler<HTMLSpanElement> | undefined
}

export default function ExpandIcon({ isOpen, _onClick }:ExpandIconProps): JSX.Element {
  console.log("isOpen", isOpen);
  return (
    <span
      style={{ cursor: "pointer", fontSize: "28px" }}
      onClick={_onClick}
    >{`${isOpen ? "-" : "+"}`}</span>
  );
}
