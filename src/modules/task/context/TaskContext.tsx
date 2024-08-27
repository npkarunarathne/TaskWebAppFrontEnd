import React, { createContext, useContext, useState, ReactNode } from 'react';


interface TaskContextProps {
    showForm: boolean;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
}


const TaskContext = createContext<TaskContextProps | undefined>(undefined);


export const useTask = (): TaskContextProps => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTask must be used within a TaskProvider');
  }
  return context;
};


interface TaskProviderProps {
  children: ReactNode;
}


export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <TaskContext.Provider value={{ showForm, setShowForm }}>
      {children}
    </TaskContext.Provider>
  );
};
