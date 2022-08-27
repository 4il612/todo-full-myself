import { Card, CardContent, Button } from "@mui/material";
import { DoneOutline, CancelOutlined } from "@mui/icons-material";

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
  return (
    <Card
      variant="outlined"
      style={{
        display: "inline-block",
        maxWidth: "200px",
        margin: 20,
        verticalAlign: "top",
      }}
    >
      <CardContent>
        <div
          className="todoHead"
          style={{ textAlign: "center", marginBottom: 4 }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {done && (
              <>
                <DoneOutline color="success" />
                at {doneAt}
              </>
            )}
            {!done && (
              <>
                <CancelOutlined color="error" />
                <Button color="success" variant="contained">
                  DONE
                </Button>
              </>
            )}
          </div>
          <div style={{ color: "gray" }}>{createdAt}</div>
        </div>
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
