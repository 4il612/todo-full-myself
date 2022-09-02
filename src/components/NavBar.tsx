import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <AppBar className="app-bar" position="static">
      <Typography className="bar-typography" variant="h6">
        ToDo
      </Typography>
    </AppBar>
  );
};
export default NavBar;
