import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

interface Commit {
    id: number;
    message: string;
    date: string;
}

interface CommitListSideBarProps {
    commits: Commit[];
}

const CommitListSideBar: React.FC<CommitListSideBarProps> = ({ commits }) => {
    return (
        <Box sx={{ flex: 1, padding: 2 }}>
            <Typography variant="h5" gutterBottom>
                커밋 리스트
            </Typography>
            <Paper sx={{ maxHeight: '80vh', overflowY: 'auto', padding: 2 }}>
                <List>
                    {commits.map((commit) => (
                        <React.Fragment key={commit.id}>
                            <ListItem>
                                <ListItemText
                                    primary={commit.message}
                                    secondary={`Date: ${commit.date}`}
                                />
                            </ListItem>
                            <Divider />
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        </Box>
    );
};

export default CommitListSideBar;
