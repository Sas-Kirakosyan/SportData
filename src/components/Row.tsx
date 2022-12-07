import React, { memo } from "react";

type RowProps = {
  data: any;
};

function Row({ data }: RowProps): JSX.Element {
  return <div>{data?.sport.name}</div>;
}

export default memo(Row);
