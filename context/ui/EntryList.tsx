import { List, Paper } from "@mui/material";
import React, { FC, useContext, useMemo } from "react";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../entries";
import EntryCard from "./EntryCard";

interface Props {
  status: EntryStatus;
}

const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const entriesStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflowX: "hidden",
          backgroundColor: "transparent",
          padding: "3px 10px",
        }}
      >
        <List sx={{ opacity: 1 }}>
          {entriesStatus.map((entry) => {
            return <EntryCard key={entry._id} entry={entry} />;
          })}
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
