import { Container, Grid } from "@mui/material";
import CardList from "../components/CardList";
import NavBar from "../components/NavBar";
import TodoForm from "../components/TodoForm";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth={false}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={6}>
            <TodoForm />
          </Grid>
          <Grid item xs={10}>
            <CardList />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
