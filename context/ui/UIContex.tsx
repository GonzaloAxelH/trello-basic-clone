import { createContext } from "react";

// este no es el estado inicial
interface ContextProps {
  sidemenuOpen: boolean;
  openSidemenu: () => void;
  closeSidemenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
