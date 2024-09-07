import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage: React.FC = () => {
    return (
        <Container sx={{ mt: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" gutterBottom>
                    Welcome to EDDI
                </Typography>
                <Typography variant="h5" gutterBottom>
                    The Electronic Design Development Institute
                </Typography>
                <Button variant="contained" color="primary" href="/learn-more">
                    Learn More
                </Button>
            </Box>
        </Container>
    );
};

export default HomePage;
