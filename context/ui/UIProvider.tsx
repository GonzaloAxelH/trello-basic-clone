import { FC, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
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
  return (
    <UIContext.Provider
      value={{ sidemenuOpen: state.sidemenuOpen, openSidemenu, closeSidemenu }}
    >
      {children}
    </UIContext.Provider>
  );
};
