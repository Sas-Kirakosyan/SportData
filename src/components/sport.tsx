import React from "react";
import { useState } from "react";
import { takeId } from "utils/helpers";
import ExpandIcon from "./expandIcon";
import Region from "./region";



type SportProps = {
  name: string;
  data: {[key: string]: SportNode}
}

export default function Sport({ name = "sport", data }: SportProps):JSX.Element {
  const [isOpen, setIsOpen] = useState<IsOpen>({});
  console.log("data", data);

  const handleClick = () => {
    setIsOpen({
      ...isOpen,
      [takeId(data)]: !isOpen[takeId(data)],
    });
  };

  return (
    <div className="row">
      <div>
        <ExpandIcon _onClick={handleClick} isOpen={isOpen[takeId(data)]} />
        sport: {name}
      </div>
      <h3>
        {isOpen[takeId(data)] &&
          Object.values(data).map((region: any) => (
            <Region
              key={region.name}
              name={region.name}
              data={region.children}
            />
          ))}
      </h3>
    </div>
  );
}
