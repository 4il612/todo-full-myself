import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>ToDO</h1>
      <Link to={"/test"}>test</Link>
    </>
  );
};

export default App;
