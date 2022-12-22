import React from "react";

type GameProps = {
  data: any;
}

export default function Game({ data }: GameProps) {
  console.log(data);
  return (
    <div style={{ color: "blue", marginLeft: "5%" }}>
      <span>home: {data.home.name}</span>{" "}
      <span>score: {data.match_info.score}</span>
    </div>
  );
}
