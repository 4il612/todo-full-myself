import { Card, CardContent, Button } from "@mui/material";
import { DoneOutline, CancelOutlined } from "@mui/icons-material";
import { useState } from "react";
import "../styles/TodoCard.scss";

interface TodoCardProps {
  title: string;
  done?: boolean;
  description?: string;
  createdAt: string;
  doneAt?: string;
}

const TodoCard = ({
  title,
  done = false,
  description,
  createdAt,
  doneAt,
}: TodoCardProps) => {
  const [isDone, setIsDone] = useState<boolean>(done);
  const [doneAtTime, setDoneAtTime] = useState<string | undefined>(doneAt);

  const normalizeDate = () => {
    const date = new Date();
    return `${date.getDate()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getFullYear()}`;
  };

  return (
    <li style={{ listStyleType: "none" }}>
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
      </Card>
    </li>
  );
};

export default TodoCard;
