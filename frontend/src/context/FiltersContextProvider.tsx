import { ReactNode, createContext, useState } from "react";
import { Filters } from "../model/Filters";
import { initFilters } from "../model/Filters";

interface FiltersContextType {
    filters: Filters;
    updateFilters: (filters: Filters) => void
}

interface Props {
    children: ReactNode
}

export const FiltersContext = createContext({} as FiltersContextType);

export const FiltersContextProvider = ({ children }: Props) => {
    const [filters, setFilters] = useState<Filters>(initFilters);
    const updateFilters = (newFilters: Filters) => {
        setFilters(newFilters);
    };
    return (
        <FiltersContext.Provider value={{ filters, updateFilters }}>
            {children}
        </FiltersContext.Provider>
    );
};