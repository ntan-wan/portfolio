import { createContext, useState, Dispatch, SetStateAction } from "react";

interface Props  {
    children: React.ReactNode;
}
interface SiteInfo {
    siteInfo: {
        sidebarisOpen: boolean;
      };
      setSiteInfo: Dispatch<SetStateAction<{
        sidebarisOpen: boolean;
      }>>;
}

export const SiteContext = createContext<SiteInfo>({});

export function SiteProvider({children} : Props) {
    const [siteInfo, setSiteInfo] = useState({
        sidebarisOpen:false
    })
    const value = {
        siteInfo,
        setSiteInfo
    }

    return (<SiteContext.Provider value={value}>
        {children}
    </SiteContext.Provider>)
}
