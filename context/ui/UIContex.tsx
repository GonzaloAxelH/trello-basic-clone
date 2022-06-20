import { createContext } from "react";

// este no es el estado inicial
interface ContextProps {
  sidemenuOpen: boolean;
  openSidemenu: () => void;
  closeSidemenu: () => void;
  isAddingEntry: boolean;
  setIsAddingEntry: (bool: boolean) => void;
  isDragging: boolean;
  endDragging: () => void;
  startDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
