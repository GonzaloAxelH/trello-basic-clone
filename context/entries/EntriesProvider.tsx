import { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { Entry } from "../../interfaces";
import { entriesReducer, EntriesContext } from "./";
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, animi.",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, animi.",
      createdAt: Date.now(),
      status: "in-progress",
    },
    {
      _id: uuidv4(),
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, animi.",
      createdAt: Date.now(),
      status: "finish",
    },
  ],
};

interface Props {
  children: React.ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: "pending",
    };
    dispatch({ type: "[Entry] - Add Entry", payload: newEntry });
  };
  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] - Update Entry", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        entries: state.entries,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
