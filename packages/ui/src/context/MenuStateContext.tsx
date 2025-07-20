import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MenuStateContextType {
  openMenu: string | null;
  setOpenMenu: (menu: string | null) => void;
}

const MenuStateContext = createContext<MenuStateContextType | undefined>(undefined);

export function MenuStateProvider({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <MenuStateContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuStateContext.Provider>
  );
}

export function useMenuState() {
  const context = useContext(MenuStateContext);
  if (!context) {
    throw new Error('useMenuState must be used within a MenuStateProvider');
  }
  return context;
}