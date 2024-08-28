import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, LinearProgress, Link, Modal } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useGetTaskFilterDataMutation, useUpdateTaskMutation } from '../../../store/api/task/taskApiSlice';
import { useFilter } from '../context/FilterContext';

interface Task {
  id: string;
  name: string;
  description: string;
  attachmentUrl: string | null;
  status: string;
  createdDate: string;
  updatedDate: string;
  userId: string;
}

interface Column {
  key: keyof Task;
  name: string;
}

const header: Column[] = [
  { key: "name", name: "Name" },
  { key: "description", name: "Description" },
  { key: "attachmentUrl", name: "Attachment" },
  { key: "status", name: "Status" },
];

const isImageFile = (filename: string): boolean => {
  return /\.(jpeg|jpg|gif|png)$/i.test(filename);
};

const TaskTable: React.FC = () => {
  const { filters } = useFilter();
  const [getTaskFilterData, { data: taskData, isLoading, isSuccess }] = useGetTaskFilterDataMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    getTaskFilterData({ ...filters });
  }, [filters, getTaskFilterData]);

  React.useEffect(() => {
    if (isSuccess) {
      console.log(taskData);
    }
  }, [isSuccess, taskData]);

  const handleStatusChange = async (taskId: string, newStatus: string) => {
    try {
      await updateTask({ id: taskId, payload: { status: newStatus } }).unwrap();
      getTaskFilterData({ ...filters });
    } catch (error) {
      console.error("Failed to update task status", error);
    }
  };

  const handleOpenModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
  };

  const renderAttachment = (url: string | null): React.ReactNode => {
    if (!url) return 'No attachment';

    const filename = url.split('/').pop() || '';
    
    if (isImageFile(filename)) {
      return (
        <img 
          src={url} 
          alt="Attachment" 
          style={{ maxWidth: '100px', maxHeight: '100px', cursor: 'pointer' }} 
          onClick={() => handleOpenModal(url)}
        />
      );
    } else {
      return <Link href={url} target="_blank" rel="noopener noreferrer">{filename}</Link>;
    }
  };

  return (
    <Box pt={1}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {header.map((col) => (
                <TableCell key={col.key}>{col.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {taskData && taskData.map((row: Task) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {header.map((col) => (
                  <TableCell key={col.key}>
                    {col.key === 'status' ? (
                      <ToggleButtonGroup
                        value={row.status}
                        exclusive
                        onChange={(event, newStatus: string | null) => newStatus && handleStatusChange(row.id, newStatus)}
                        aria-label="task status"
                      >
                        <ToggleButton value="Todo">Todo</ToggleButton>
                        <ToggleButton value="In Progress">In Progress</ToggleButton>
                        <ToggleButton value="Done">Done</ToggleButton>
                      </ToggleButtonGroup>
                    ) : col.key === 'attachmentUrl' ? (
                      renderAttachment(row[col.key])
                    ) : (
                      row[col.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          {isLoading && <Box sx={{ width: '100%' }}><LinearProgress /></Box>}
        </Table>
      </TableContainer>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          maxWidth: '90%',
          maxHeight: '90%',
          overflow: 'auto',
        }}>
          {selectedImage && <img src={selectedImage} alt="Full size attachment" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
        </Box>
      </Modal>
    </Box>
  );
}

export default TaskTable;