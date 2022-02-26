import { Box, Button, Grid, TypeAction } from "@mui/material";
import React, { useReducer, useRef, useState } from "react";
import Field from "./Field";

type todo = {
  id: number;
  text: string;
};

type actionType =
  | { type: "ADD"; text: string }
  | { type: "REMOVE"; id: number };

const Mail = () => {
  const titleRef = useRef<HTMLInputElement>(null!);

  function reducer(state: todo[], action: actionType) {
    switch (action.type) {
      case "ADD":
        return [
          ...state,
          {
            id: state.length,
            text: action.text,
          },
        ];

      case "REMOVE":
        return state.filter((x) => x.id !== action.id);
    }
  }

  const add = () => {
    dispatch({ type: "ADD", text: titleRef.current.value });
    console.log(state);
    titleRef.current.value = "";
  };

  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <input ref={titleRef} type="text" placeholder="title" /> <br />
            <Button onClick={add} variant="contained" color="success">
              {" "}
              save{" "}
            </Button>
          </Grid>
          <Grid item xs={8}>
            <div id="ProductSection">
              {state.map((x) => (
                <div key={x.id}>
                  {" "}
                  <div>
                    <p>{x.text}</p>{" "}
                    <button
                      onClick={() => dispatch({ type: "REMOVE", id: x.id })}
                    >
                      {" "}
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Mail;
