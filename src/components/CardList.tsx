import TodoCard from "./TodoCard";
import "../styles/CardList.scss";

const CardList = () => {
  return (
    <ul className="cardWrapper">
      <TodoCard id={1} title="Pervoe zadanie" createdAt="28.01.2002" />
      <TodoCard id={2} title="Vtoroe zadanie" createdAt="28.05.2002" />
      <TodoCard id={3} title="Tret'e zadanie" createdAt="30.11.2012" />
      <TodoCard
        id={4}
        title="Chetvertoe zadanie"
        createdAt="01.10.2020"
        description="Eto ochen' vazhone zadanie!"
      />
      <TodoCard
        id={5}
        title="Pyatoe zadanie"
        createdAt="11.10.2020"
        description="Eto ochen' ochen' vazhone zadanie!"
        done={true}
        doneAt="20.11.2021"
      />
      <TodoCard id={6} title="Pervoe zadanie" createdAt="28.01.2002" />
      <TodoCard id={7} title="Vtoroe zadanie" createdAt="28.05.2002" />
      <TodoCard id={8} title="Tret'e zadanie" createdAt="30.11.2012" />
      <TodoCard
        id={9}
        title="Chetvertoe zadanie"
        createdAt="01.10.2020"
        description="Eto ochen' vazhone zadanie!"
      />
      <TodoCard
        id={10}
        title="Pyatoe zadanie"
        createdAt="11.10.2020"
        description="Eto ochen' ochen' vazhone zadanie!"
        done={true}
        doneAt="20.11.2021"
      />
    </ul>
  );
};

export default CardList;
