import { Card, CardContent, Button } from "@mui/material";
import {
  DoneOutline,
  CancelOutlined,
  DeleteForeverOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import "../styles/TodoCard.scss";

interface TodoCardProps {
  id: number;
  title: string;
  done?: boolean;
  description?: string;
  createdAt: string;
  doneAt?: string;
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
  const [doneAtTime, setDoneAtTime] = useState<string | undefined>(doneAt);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout>();

  const onMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 200);
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
    return `${date.getDate()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
  };

  // actions on delete btn click
  const deleteButtonHandler = (id: number) => {
    alert(`${id} card was removed!`);
  };

  return (
    <li className="cardlist-item">
      <Card
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="todocard-item"
        variant="outlined"
      >
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
                  style={{ backgroundColor: "rgb(90, 160, 100)" }}
                  onClick={() => {
                    setIsDone(true);
                    setDoneAtTime(normalizeDate());
                  }}
                  color="success"
                  variant="contained"
                >
                  DONE
                </Button>
              </div>
            )}
          </div>
          <div className="card-createdblock">{createdAt}</div>
          <div className="card-title">
            <strong>{title}</strong>
          </div>
          <div className="card-description">{description}</div>
        </CardContent>
        <div className="card-deletebtn">
          {isHovered && (
            <DeleteForeverOutlined onClick={() => deleteButtonHandler(id)} />
          )}
        </div>
      </Card>
    </li>
  );
};

export default TodoCard;
