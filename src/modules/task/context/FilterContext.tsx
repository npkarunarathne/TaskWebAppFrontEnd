import React, { createContext, useContext, useState, ReactNode } from 'react';


interface Filters {
    startDate: string | null;
    endDate: string | null;
    status: string| null;
}


interface FilterContextProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}


const FilterContext = createContext<FilterContextProps | undefined>(undefined);


export const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
};


interface FilterProviderProps {
  children: ReactNode;
}


export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    startDate: null,
    endDate: null,
    status: null, 
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
