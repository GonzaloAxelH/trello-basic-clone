import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
};

interface Props {
  children: React.ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSidemenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };
  const closeSidemenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };
  const setIsAddingEntry = (bool: boolean) => {
    dispatch({ type: "UI - SetIsAddingEntry", payload: bool });
  };

  const startDragging = () => {
    dispatch({ type: "UI - Start Dragging" });
  };
  const endDragging = () => {
    dispatch({ type: "UI - End Dragging" });
  };
  return (
    <UIContext.Provider
      value={{
        sidemenuOpen: state.sidemenuOpen,
        openSidemenu,
        closeSidemenu,
        isAddingEntry: state.isAddingEntry,
        setIsAddingEntry,
        endDragging,
        startDragging,
        isDragging: state.isDragging,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
