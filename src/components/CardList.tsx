import TodoCard from "./TodoCard";
import "../styles/CardList.scss";

const CardList = () => {
  return (
    <ul className="cardWrapper">
      <TodoCard title="Pervoe zadanie" createdAt="28.01.2002" />
      <TodoCard title="Vtoroe zadanie" createdAt="28.05.2002" />
      <TodoCard title="Tret'e zadanie" createdAt="30.11.2012" />
      <TodoCard
        title="Chetvertoe zadanie"
        createdAt="01.10.2020"
        description="Eto ochen' vazhone zadanie!"
      />
      <TodoCard
        title="Pyatoe zadanie"
        createdAt="11.10.2020"
        description="Eto ochen' ochen' vazhone zadanie!"
        done={true}
        doneAt="20.11.2021"
      />
      <TodoCard title="Pervoe zadanie" createdAt="28.01.2002" />
      <TodoCard title="Vtoroe zadanie" createdAt="28.05.2002" />
      <TodoCard title="Tret'e zadanie" createdAt="30.11.2012" />
      <TodoCard
        title="Chetvertoe zadanie"
        createdAt="01.10.2020"
        description="Eto ochen' vazhone zadanie!"
      />
      <TodoCard
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
