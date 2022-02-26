import { Button, TextField } from "@mui/material";
import React from "react";

// type PropsData = {
//   Titelf: string;
//   //  (e: React.ChangeEvent<HTMLInputElement>) => void;
// };
interface props {
  Titelf: string;
}

const Field = () => {
  return (
    <div>
      <form>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <input type="text" />
        <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />

        <Button variant="outlined" size="medium">
          Medium
        </Button>
      </form>
    </div>
  );
};

export default Field;
