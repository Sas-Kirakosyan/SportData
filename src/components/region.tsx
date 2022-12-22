import React, { useState } from "react";
import Tournament from "./tournament";
import ExpandIcon from "./expandIcon";

function takeId(data: {[key: string]: any[]}): string {
  return Object.keys(data)[0];
}

type RegionProps ={
  name: string;
   data: any;
}

export default function Region({ name = "region", data }: RegionProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<IsOpen>({});


  const handleClick = () => {
    setIsOpen({
      ...isOpen,
      [takeId(data)]: !isOpen[takeId(data)],
    });
  };

  return (
    <h3 style={{ color: "green", marginLeft: "5%" }}>
      <div>
        <ExpandIcon _onClick={handleClick} isOpen={isOpen[takeId(data)]} />
        region: {name}
      </div>
      {isOpen[takeId(data)] &&
        Object.values(data).map((region: any) => (
          <Tournament
            key={region.name}
            name={region.name}
            data={region.children}
          />
        ))}
    </h3>
  );
}
