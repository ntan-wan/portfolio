import { createContext, useState, useContext } from 'react';

interface Props {
  children: React.ReactNode;
}

const SiteContext = createContext({
  sidebarIsOpen: false,
  toggleSidebar: () => {},
});

export const useSite = () => useContext(SiteContext);

export function SiteProvider({ children }: Props) {
  const [sidebarIsOpen, setSidebarIsopen] = useState(false);
  const toggleSidebar = () => setSidebarIsopen(!sidebarIsOpen);
  const value = {
    sidebarIsOpen,
    toggleSidebar,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}
