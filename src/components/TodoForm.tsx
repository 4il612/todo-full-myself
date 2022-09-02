import { Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const acceptButtonHandler = () => {
    axios
      .post("http://localhost:5000/api", {
        done: false,
        doneAt: "",
        title: title,
        description: description,
      })
      .then(() => alert("GOOD"))
      .catch((e) => alert(e));
  };

  return (
    <div
      style={{
        border: "15px solid #2E7D32",
        display: "inline-block",
        padding: 24,
      }}
    >
      <Grid container spacing={2} columns={1} style={{ width: 400 }}>
        <Grid item>
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            fullWidth
            id="outlined-basic"
            label="To do"
            variant="outlined"
            color="success"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            multiline
            minRows={3}
            fullWidth
            id="outlined-basic"
            label="Description (optional)"
            variant="outlined"
            color="success"
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={acceptButtonHandler}
            fullWidth
            variant="outlined"
            color="success"
          >
            ACCEPT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoForm;
