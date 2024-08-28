import React, { useEffect, useState } from 'react';
import { useTask } from '../context/TaskContext';
import { Drawer, Box, Button, TextField, Typography } from '@mui/material';
import { useSaveTaskMutation } from '../../../store/api/task/taskApiSlice';

interface FormValues {
    name: string;
    description: string;
    attachmentUrl: string;
    file: File | null;
}

const TaskForm: React.FC = () => {
    const { showForm, setShowForm } = useTask();
    const [saveTask, { isLoading, isSuccess }] = useSaveTaskMutation();
    const [formValues, setFormValues] = useState<FormValues>({
        name: '',
        description: '',
        attachmentUrl: '',
        file: null,
    });

    useEffect(() => {
        if (isSuccess) {
            setShowForm(false);
        }
    }, [isSuccess]);

    const onUpload = async (file:any) => {
        const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch(import.meta.env.VITE_BASE_URL + 'Image/UploadImage', {
                    method: 'POST',
                    body: formData,
                });

                const data = await response.json();
                if (response.ok) {
                    const imageUrl = data.filePath;

                    const updatedFormValues = { ...formValues, attachmentUrl: imageUrl };
                    setFormValues(updatedFormValues)
                } else {
                    console.error('Error uploading image:', data);
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === "file" && files) {
            onUpload(files[0])
            setFormValues({
                ...formValues,
                file: files[0],
            });
            
        } else {
            setFormValues({
                ...formValues,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        saveTask(formValues);
    };

    return (
        <>
            <Drawer
                anchor='right'
                open={showForm}
                onClose={() => setShowForm(false)}
                sx={{
                    width: '50%',
                    '& .MuiDrawer-paper': {
                        width: '50%',
                    }
                }}>
                    {JSON.stringify(formValues)}
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
                        type="file"
                        name="file"
                        onChange={handleInputChange}
                        variant="outlined"
                        fullWidth
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
