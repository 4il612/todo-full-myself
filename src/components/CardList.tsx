import TodoCard from "./TodoCard";
import "../styles/CardList.scss";
import axios from "axios";
import { useEffect, useState } from "react";

type Card = {
  id: number;
  done: boolean;
  doneAt: string;
  title: string;
  description: string;
  createdAt: string;
};

const normalizeRequestDate = (reqDate: string) => {
  return reqDate.slice(0, 10).split("-").reverse().join(".");
};

const CardList = () => {
  const [fetching, setFetching] = useState<boolean>(true);
  const [cards, setCards] = useState<Card[] | null>(null);

  useEffect(() => {
    if (fetching) {
      axios
        .get("http://localhost:5000/api")
        .then((response) => {
          setCards(response.data);
        })
        .catch((e) => alert(e))
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching]);

  return (
    <ul className="cardWrapper">
      {!!cards &&
        cards.map((card) => {
          return (
            <TodoCard
              id={card.id}
              title={card.title}
              done={card.done}
              doneAt={card.doneAt}
              createdAt={normalizeRequestDate(card.createdAt)}
              description={card.description}
            />
          );
        })}
    </ul>
  );
};

export default CardList;
