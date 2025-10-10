import React, { createContext, useCallback, useContext, useMemo, useState } from "react";

type SideNavContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const Ctx = createContext<SideNavContextValue | null>(null);

export const SideNavProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(v => !v), []);
  const value = useMemo(() => ({ isOpen, open, close, toggle }), [isOpen, open, close, toggle]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export function useSideNav() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSideNav must be used within a SideNavProvider");
  return ctx;
}
