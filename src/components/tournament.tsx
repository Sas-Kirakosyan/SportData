import React, { useState } from "react";
import Game from "./game";
import ExpandIcon from "./expandIcon";
import { takeId } from "utils/helpers";

type TournamentProps = {
  name: string;
  data: any;
};

export default function Tournament({
  name = "tournament",
  data,
}: TournamentProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<IsOpen>({});

  const handleClick = () => {
    setIsOpen({
      ...isOpen,
      [takeId(data)]: !isOpen[takeId(data)],
    });
  };

  return (
    <h4 style={{ color: "red", marginLeft: "5%" }}>
      <div>
        <ExpandIcon _onClick={handleClick} isOpen={isOpen[takeId(data)]} />
        Tournament: {name}
      </div>
      {isOpen[takeId(data)] &&
        data.map((el: { name: string; data: any }) => (
          <Game key={el.name} data={el} />
        ))}
    </h4>
  );
}
