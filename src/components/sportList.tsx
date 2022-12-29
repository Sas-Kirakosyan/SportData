import React from "react";
import Sport from "./sport";
// import { tree } from "../constants/tree";

export default function SportLists({data}: any):JSX.Element {
  return (
    <div>
      {Object.values(data).map((sport: any) => (
        <Sport key={sport.name} name={sport.name} data={sport.children} />
      ))}
    </div>
  );
}
