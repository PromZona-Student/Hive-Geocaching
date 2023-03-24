import React, { ReactNode, createContext, useState } from "react";
import { Filters } from "../model/Filters";

interface FiltersContextType{
    filters: Filters;
    initFilters: Filters;
    updateFilters: (filters: Filters) => void
    resetFilters: () => void
}

interface Props{
    children: ReactNode
}

export const FiltersContext = createContext({} as FiltersContextType);

export const initFilters: Filters = {
    cacheTypes: {
        vainRatkaistutMultit: false,
        vainRatkaistutMysteerit: false,
        vainOmiaMerkittyjäSisältäenMultit: false,
        vainOmiaMerkittyjäSisältäenMysteerit: false
    },
    limit: 200,
    customRule: "-",
};

export const FiltersContextProvider = ( { children }: Props ) => {
    const [filters, setFilters] = useState<Filters>(initFilters);
    const resetFilters = () => {
        setFilters(initFilters);
    };
    const updateFilters = (newFilters: Filters) => {
        setFilters(newFilters);
    };
    return (
        <FiltersContext.Provider value={{filters, initFilters, updateFilters, resetFilters}}>
            {children}
        </FiltersContext.Provider>
    );
};