import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import CommitListSideBar from "../ui/CommitListSideBar";
import AgileBoard from "../ui/AgileBoard";

// 칸반 보드용 데이터 구조
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

// 칸반 보드용 데이터
const agileBoardColumns: AgileBoardColumn[] = [
    {
        id: 1,
        title: 'Implement User Login',
        status: 'To Do',
        domain: 'Account',
        successCriteria: 'User can login with correct credentials',
        todoList: ['Create login form', 'Validate input', 'Integrate API'],
        review: 'Review security practices',
        issue: 'OAuth integration pending',
        codeFileList: ['LoginForm.tsx', 'authAPI.ts'],
    },
    {
        id: 2,
        title: 'Refactor Agile Board UI',
        status: 'In Progress',
        domain: 'Board',
        successCriteria: 'Improve UI performance and user experience',
        todoList: ['Refactor components', 'Optimize rendering'],
        review: 'Pending design review',
        issue: 'UI freeze in high load',
        codeFileList: ['AgileBoard.tsx', 'BoardStyles.ts'],
    },
    {
        id: 3,
        title: 'Marketing Campaign Setup',
        status: 'Done',
        domain: 'Marketing',
        successCriteria: 'Campaign successfully launched',
        todoList: ['Prepare marketing material', 'Set up email campaign'],
        review: 'Reviewed and approved by the marketing team',
        issue: 'None',
        codeFileList: ['CampaignSetup.tsx', 'EmailTemplate.ts'],
    },
];

// 커밋 리스트용 더미 데이터
const dummyCommits = [
    { id: 1, message: 'Fix bug in user authentication', date: '2024-09-18' },
    { id: 2, message: 'Implement project management UI', date: '2024-09-17' },
    { id: 3, message: 'Refactor API structure', date: '2024-09-16' },
];

const ProjectManageListPage: React.FC = () => {
    const [commits, setCommits] = useState(dummyCommits);

    useEffect(() => {
    }, []);

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            {/* AgileBoard에서 수정된 데이터 구조를 넘김 */}
            <AgileBoard columns={agileBoardColumns} />
            <CommitListSideBar commits={commits} />
        </Box>
    );
};

export default ProjectManageListPage;
