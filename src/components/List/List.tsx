import React from "react";

type myProps = {
  arr: string[];
  myfunc: (e: string) => void;
};
const List = (props: myProps) => {
  const { arr, myfunc } = props;
  return (
    <div>
      {arr.map((index, user) => (
        <div key={user}>
          {" "}
          <li> {index} </li> <button onClick={() => myfunc(index)}>dkf</button>{" "}
        </div>
      ))}
    </div>
  );
};

export default List;
