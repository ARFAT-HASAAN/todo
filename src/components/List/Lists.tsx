import React from "react";
import List from "./List";

const Lists = () => {
  const Lists: string[] = ["arfat", "hasan", "fahim", "bakkar", "nishad"];
  const alertfunc = (name: string): void => {
    alert(name);
  };
  return (
    <div>
      <List arr={Lists} myfunc={alertfunc}></List>
    </div>
  );
};

export default Lists;
