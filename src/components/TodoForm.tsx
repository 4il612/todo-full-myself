import { Grid, TextField, Button } from "@mui/material";
import { useContext, useState } from "react";
import axios from "axios";
import "../styles/TodoForm.scss";
import { Context } from "..";

const TodoForm = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const { cards } = useContext(Context);

  const acceptButtonHandler = () => {
    axios
      .post("http://localhost:5000/api", {
        done: false,
        doneAt: "",
        title: title,
        description: description,
      })
      .then(() => {
        axios
          .get("http://localhost:5000/api")
          .then((response) => cards.setCards(response.data))
          .catch((e: any) => alert(e));
      })
      .catch((e: any) => alert(e));
  };

  return (
    <div className="form-wrapper">
      <Grid container spacing={2} columns={16}>
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
        <Grid item xs={8}>
          <div className="new-todo-label">Add new ToDo</div>
        </Grid>
        <Grid item xs={16}>
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
        <Grid item xs={16}>
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
