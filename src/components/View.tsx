import React from "react";

import { arr } from "../constants/arr";
import Row from "./Row";

type ViewProps = {
  lists: any[];
};

function View({ lists }: ViewProps): JSX.Element {
  return (
    <div>
      {lists.map((list: any) => (
        <Row data={list} />
      ))}
    </div>
  );
}

export default View;
