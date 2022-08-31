import TodoCard from "../components/TodoCard";

const CardTest = () => {
  return (
    <TodoCard
      title="Test"
      doneAt=""
      description="test"
      createdAt="28.01.2002"
      done={false}
      id={1}
    />
  );
};

export default CardTest;
