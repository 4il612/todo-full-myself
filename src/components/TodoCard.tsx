import { Card, CardContent, Button } from "@mui/material";
import {
  DoneOutline,
  CancelOutlined,
  CancelRounded,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import "../styles/TodoCard.scss";
import axios from "axios";

interface TodoCardProps {
  id: number;
  title: string;
  done: boolean;
  description?: string;
  createdAt: string;
  doneAt: string;
}

const TodoCard = ({
  id,
  title,
  done = false,
  description,
  createdAt,
  doneAt,
}: TodoCardProps) => {
  const [isDone, setIsDone] = useState<boolean>(done);
  const [doneAtTime, setDoneAtTime] = useState<string>(doneAt);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout>();

  const onMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 500);
    // add ref in TodoCard.scss variable (scss variable must be on 0.5s bigger)
  };

  const onMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      setIsHovered(false);
    }
  };

  const normalizeDate = () => {
    const date = new Date();
    return `${date.getDate().toString().padStart(2, "0")}.${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
  };

  // actions on delete btn click
  const deleteButtonHandler = (cardId: number) => {
    axios
      .delete(`http://localhost:5000/api/${cardId}`)
      .then(() => alert(`ToDo ${cardId} was successfully removed!`))
      .catch((e) => alert(e));
  };

  const doneButtonHandler = (cardId: number) => {
    setIsDone(true);
    //need fix doneAtTime arg in PATCH-request
    setDoneAtTime(normalizeDate());
    const tmp = normalizeDate();

    axios
      .patch(`http://localhost:5000/api/${cardId}`, {
        done: true,
        doneAt: tmp,
        title: title,
        description: description,
      })
      .catch((e) => alert(e));
  };

  return (
    <li className="cardlist-item">
      <Card className="todocard-item" variant="outlined">
        <CardContent>
          <div className="card-head">
            {isDone && (
              <div className="card-done-block" title={"finished at " + doneAt}>
                <DoneOutline color="success" />
                at {doneAtTime}
              </div>
            )}
            {!isDone && (
              <div className="card-head-iconblock">
                <CancelOutlined color="error" />
                <Button
                  style={{ backgroundColor: "rgb(100, 180, 120)" }}
                  onClick={() => {
                    doneButtonHandler(id);
                  }}
                  color="success"
                  variant="contained"
                >
                  DONE
                </Button>
              </div>
            )}
          </div>
          <div
            className="card-body"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <div className="card-createdblock">{createdAt}</div>
            <div className="card-title">
              <strong>{title}</strong>
            </div>
            <div className="card-description">{description}</div>
            <div className="card-deletebtn">
              {isHovered && (
                <CancelRounded onClick={() => deleteButtonHandler(id)} />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </li>
  );
};

export default TodoCard;
