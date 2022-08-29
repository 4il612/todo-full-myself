import TodoCard from "../components/TodoCard";

const CardTest = () => {
  return (
    <>
      <TodoCard title="keke" createdAt="28.02.2002" />
      <TodoCard
        title="Second card"
        description="Eto ochenochen vazhnoochen vazhnoochen vazhno vazhno sdelat'"
        createdAt="28.02.2002"
        done={true}
        doneAt="28.03.2002"
      />
      <TodoCard title="keke" createdAt="28.02.2002" />
      <TodoCard title="keke" createdAt="28.02.2002" />
    </>
  );
};

export default CardTest;
