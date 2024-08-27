import React from 'react';
import { useTask } from '../context/TaskContext';
import { Drawer } from '@mui/material';

const TaskForm: React.FC = () => {
    const {showForm,setShowForm}=useTask()
  
  return (
    <>
        <Drawer 
            anchor='right' 
            open={showForm} 
            onClose={()=>setShowForm(false)} 
            sx={{ 
                width: '50%', 
                '& .MuiDrawer-paper': { 
                width: '50%',  
                } 
         }}>

         </Drawer>
    </>
  );
};

export default TaskForm;
