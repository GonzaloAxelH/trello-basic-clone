import { List, Paper } from "@mui/material";
import React, { FC, useContext, useMemo, DragEvent } from "react";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../entries";
import EntryCard from "./EntryCard";
import { UIContext } from "./UIContex";

interface Props {
  status: EntryStatus;
}

const EntryList: FC<Props> = ({ status }) => {
  const { isDragging, endDragging } = useContext(UIContext);
  const { entries, updateEntry } = useContext(EntriesContext);
  const entriesStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );
  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData("text");
    const entry = entries.find((e) => e._id === id)!;
    entry.status = status;
    updateEntry(entry);
    endDragging();
  };

  const ScrollStyles = {
    "&::-webkit-scrollbar": {
      width: 10,
    },
    "&::-webkit-scrollbar-track": {
      backgroundImage:
        "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
      borderRadius: 2,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#000",
      borderRadius: 2,
    },
  };

  return (
    <div onDragOver={allowDrop} onDrop={onDropEntry}>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          backgroundColor: "transparent",
          overflowY: "auto",
          padding: "3px 10px",
          ScrollStyles,
        }}
      >
        <List sx={{ opacity: isDragging ? 0.5 : 1, transition: "all 0.3s" }}>
          {entriesStatus.map((entry) => {
            return <EntryCard key={entry._id} entry={entry} />;
          })}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
