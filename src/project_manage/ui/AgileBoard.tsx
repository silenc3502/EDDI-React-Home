import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

interface AgileBoardColumn {
    id: number;
    title: string;
    status: string;
    domain: string;
    successCriteria: string;
    todoList: string[];
    review: string;
    issue: string;
    codeFileList: string[];
}

interface AgileBoardProps {
    columns: AgileBoardColumn[];
}

const AgileBoard: React.FC<AgileBoardProps> = ({ columns }) => {
    return (
        <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column', padding: 2, borderRight: '1px solid #ddd' }}>
            <Typography variant="h5" gutterBottom>
                애자일 보드
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                {columns.map((column) => (
                    <Paper key={column.id} sx={{ flex: 1, padding: 2 }}>
                        <Typography variant="h6" gutterBottom>{column.title} ({column.status})</Typography>
                        <Typography variant="subtitle1">Domain: {column.domain}</Typography>
                        <Typography variant="subtitle2">Success Criteria:</Typography>
                        <Typography>{column.successCriteria}</Typography>
                        <Typography variant="subtitle2">To-Do List:</Typography>
                        <List>
                            {column.todoList.map((todo, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={todo} />
                                </ListItem>
                            ))}
                        </List>
                        <Typography variant="subtitle2">Review:</Typography>
                        <Typography>{column.review}</Typography>
                        <Typography variant="subtitle2">Issues:</Typography>
                        <Typography>{column.issue}</Typography>
                        <Typography variant="subtitle2">Code Files:</Typography>
                        <List>
                            {column.codeFileList.map((file, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={file} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                ))}
            </Box>
        </Box>
    );
};

export default AgileBoard;
