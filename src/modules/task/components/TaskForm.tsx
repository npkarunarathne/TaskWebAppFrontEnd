import React, { useEffect, useState } from 'react';
import { useTask } from '../context/TaskContext';
import { Drawer,Box, Button, TextField, Typography  } from '@mui/material';
import { useSaveTaskMutation } from '../../../store/api/task/taskApiSlice';

interface FormValues {
    name: string;
    description: string;
    attachmentUrl: string;
  }

const TaskForm: React.FC = () => {
    const {showForm,setShowForm}=useTask()
    const [saveTask,{isLoading,isSuccess}]=useSaveTaskMutation()
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        description: '',
        attachmentUrl: '',
      });

      useEffect(()=>{
        if(isSuccess){
            setShowForm(false)
        }
      },[isSuccess])
  

      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formValues);
        saveTask(formValues);
      };

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
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '80%', margin: 'auto', mt: 5 }}>
      <Typography variant="h5" align="center" gutterBottom>
       Add Task
      </Typography>
      <TextField
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Description"
        name="description"
        value={formValues.description}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Attachment URL"
        name="attachmentUrl"
        value={formValues.attachmentUrl}
        onChange={handleInputChange}
        variant="outlined"
        fullWidth
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
    </Box>

         </Drawer>
    </>
  );
};

export default TaskForm;
