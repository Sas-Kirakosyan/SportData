import React from "react";
import Sport from "./sport";
import { tree } from "../constants/tree";

export default function SportList():JSX.Element {
  return (
    <div>
      {Object.values(tree).map((sport: any) => (
        <Sport key={sport.name} name={sport.name} data={sport.children} />
      ))}
    </div>
  );
}
