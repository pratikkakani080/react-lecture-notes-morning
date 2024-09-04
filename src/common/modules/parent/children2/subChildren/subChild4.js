import React, { useEffect, useState } from "react";
import { getStoredData } from "../../../../utils/storage";

function SubChild4(props) {

  return (
    <div>
      SubChild4
      <br />
      {props.value}
    </div>
  );
}

export default SubChild4;
