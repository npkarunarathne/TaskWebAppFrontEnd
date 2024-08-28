import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, LinearProgress } from '@mui/material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useGetTaskFilterDataMutation, useUpdateTaskMutation } from '../../../store/api/task/taskApiSlice';
import { useFilter } from '../context/FilterContext';

const header = [
  { key: "name", name: "Name" },
  { key: "description", name: "Description" },
  { key: "attachmentUrl", name: "Attachment" },
  { key: "status", name: "Status" },
];

const TaskTable = () => {
  const { filters } = useFilter();
  const [getTaskFilterData, { data: taskData, isLoading, isSuccess }] = useGetTaskFilterDataMutation();
  const [updateTask] = useUpdateTaskMutation();

  React.useEffect(() => {
    getTaskFilterData({ ...filters });
  }, [filters]);

  React.useEffect(() => {
    if (isSuccess) {
      console.log(taskData);
    }
  }, [isSuccess, taskData]);

  const handleStatusChange = async (taskId: string, newStatus: string) => {
    try {
      await updateTask({
        id: taskId,
        payload: { status: newStatus },
      }).unwrap();
      // Refresh the table after the update is successful
      getTaskFilterData({ ...filters });
    } catch (error) {
      console.error("Failed to update task status", error);
    }
  };

  return (
    <Box pt={1}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {header.map((col: any) => (
                <TableCell key={col.key}>{col.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          
          <TableBody>
            {taskData && taskData.map((row: any) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                {header.map((col: any) => (
                  <TableCell key={col.key}>
                    {col.key === 'status' ? (
                      <ToggleButtonGroup
                        value={row.status}
                        exclusive
                        onChange={(event, newStatus) => handleStatusChange(row.id, newStatus)}
                        aria-label="task status"
                      >
                        <ToggleButton value="Todo">Todo</ToggleButton>
                        <ToggleButton value="In Progress">In Progress</ToggleButton>
                        <ToggleButton value="Done">Done</ToggleButton>
                      </ToggleButtonGroup>
                    ) : (
                      row[col.key]
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          {isLoading && 
            <Box sx={{ width: '100%' }}>
              <LinearProgress />
            </Box>}
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TaskTable;
