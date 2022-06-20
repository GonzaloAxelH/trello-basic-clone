import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import React, { FC } from "react";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}

const EntryCard: FC<Props> = ({ entry }) => {
  return (
    <Card sx={{ marginBottom: 1, borderRadius: "6px" }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
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
