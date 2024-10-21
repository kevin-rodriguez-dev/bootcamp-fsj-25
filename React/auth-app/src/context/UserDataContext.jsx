import { createContext, useState } from "react";

// Create a new context
export const UserDataContext = createContext(null);

// Create a new provider
export const UserDataProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return <UserDataContext.Provider value={{ user, setUser }}>{children}</UserDataContext.Provider>;
};
