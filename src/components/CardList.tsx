import TodoCard from "./TodoCard";
import "../styles/CardList.scss";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Masonry } from "@mui/lab";
import { Context } from "..";
import { observer } from "mobx-react-lite";

type Card = {
  id: number;
  done: boolean;
  doneAt: string;
  title: string;
  description: string;
  createdAt: string;
};

const normalizeRequestDate = (reqDate: string) => {
  return reqDate !== null
    ? reqDate.slice(0, 10).split("-").reverse().join(".")
    : "";
};

const CardList = observer(() => {
  const [fetching, setFetching] = useState<boolean>(true);
  //const [cards, setCards] = useState<Card[] | null>(null);

  const { cards } = useContext(Context);

  useEffect(() => {
    if (fetching) {
      axios
        .get("http://localhost:5000/api")
        .then((response) => {
          cards.setCards(response.data);
        })
        .catch((e) => alert(e))
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching]);

  return (
    <ul>
      <Masonry columns={4} spacing={1}>
        {!!cards &&
          cards.cards.map((card) => {
            return (
              <TodoCard
                key={card.id}
                id={card.id}
                title={card.title}
                done={card.done}
                doneAt={card.doneAt}
                createdAt={normalizeRequestDate(card.createdAt)}
                description={card.description}
              />
            );
          })}
      </Masonry>
    </ul>
  );
});

export default CardList;
