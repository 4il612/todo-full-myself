import { Card, CardContent, Button } from "@mui/material";
import { DoneOutline, CancelOutlined } from "@mui/icons-material";
import { useState } from "react";

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
    <Card
      variant="outlined"
      style={{
        display: "inline-block",
        maxWidth: "200px",
        minWidth: "150px",
        margin: 20,
        verticalAlign: "top",
      }}
    >
      <CardContent>
        <div
          className="todoHead"
          style={{ textAlign: "center", marginBottom: 4 }}
        >
          {isDone && (
            <div
              title={"finished at " + doneAt}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <DoneOutline color="success" />
              at {doneAtTime}
            </div>
          )}
          {!isDone && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
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
        <div style={{ color: "gray", textAlign: "center" }}>{createdAt}</div>
        <div className="todoTitle" style={{ textAlign: "center" }}>
          <strong>{title}</strong>
        </div>
        <div
          style={{
            maxWidth: "fit-content",
            MozHyphens: "auto",
          }}
        >
          {description}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
