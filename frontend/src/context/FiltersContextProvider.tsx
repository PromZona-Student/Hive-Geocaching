import React, { ReactNode, createContext, useState } from "react";
import { Filters } from "../model/Filters";

interface FiltersContextType{
    filters: Filters;
    setFilters: (filters: Filters) => void
    resetFilters: () => void
}

interface Props{
    children: ReactNode
}

export const FiltersContext = createContext({} as FiltersContextType);

const initFilters: Filters = {
    limit: 200
};

export const FiltersContextProvider = ( { children }: Props ) => {
    const [filters, setFilters] = useState<Filters>(initFilters);
    const resetFilters = () => {
        setFilters(initFilters);
    };
    return (
        <FiltersContext.Provider value={{filters, setFilters, resetFilters}}>
            {children}
        </FiltersContext.Provider>
    );
};