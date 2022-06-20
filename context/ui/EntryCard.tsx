import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import React, { FC, DragEvent, useContext } from "react";
import { Entry } from "../../interfaces";
import { UIContext } from "./UIContex";

interface Props {
  entry: Entry;
}

const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const onDragStart = (e: DragEvent) => {
    startDragging();
    console.log(e);
    e.dataTransfer.setData("text", entry._id);
  };
  const onDragEnd = () => {
    endDragging();
  };
  return (
    <Card
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      draggable
      sx={{ marginBottom: 1, borderRadius: "6px" }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.status}:{entry.description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2">Hace 90 minutos</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EntryCard;
