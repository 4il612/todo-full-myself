import { Grid, TextField, Button } from "@mui/material";

const TodoForm = () => {
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
            fullWidth
            id="outlined-basic"
            label="To do"
            variant="outlined"
            color="success"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
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
          <Button fullWidth variant="outlined" color="success">
            ACCEPT
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodoForm;
