import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    Grid,
    Avatar,
    Stack,
    Divider,
    Button,
} from '@mui/material';

// 1. Import new icon for the resume button
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';
import { educationData, servicesData } from '../data';

// 2. Create a reusable style object for all cards to ensure consistency
const cardStyle = {
    p: { xs: 2, md: 3 },
    height: '100%',
    border: '1px solid',
    borderColor: 'divider',
    boxShadow: 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 8px 3px rgba(60,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)',
    }
};

export default function AboutHero() {
    return (
        // Adjusted top margin for consistency with other pages
        <Container maxWidth="lg" sx={{ mt: '80px', pb: 4 }}>
            {/* Page Title */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom>About Me</Typography>
                <Box sx={{ width: 100, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: '2px' }} />
            </Box>

            {/* New Main Grid Layout */}
            <Grid container spacing={4}>
                {/* --- LEFT COLUMN (Bio & Education) --- */}
                <Grid item xs={12} md={6}>
                    <Stack spacing={4}>
                        {/* Bio Card */}
                        <Card sx={{ ...cardStyle, p: { xs: 2, md: 4 } }}>
                            <Grid container spacing={4} alignItems="center">
                                <Grid item xs={12} sm={8}>
                                    <Typography variant="h4" component="h2" gutterBottom>Who I Am</Typography>
                                    <Typography variant="body1" color="text.secondary" paragraph>
                                        Computer Science undergraduate with a deep-seated passion for problem-solving.
                                        I leverage hands-on experience in Java, Python, mobile app development, and data science to deliver impactful solutions for real-world challenges.
                                        I have a proven record of building scalable projects and am driven by my interests in machine learning, full-stack development, and open-source advocacy.
                                    </Typography>
                                    <Stack direction="row" spacing={2} mt={3} flexWrap="wrap">
                                        <Button
                                            variant="contained"
                                            startIcon={<DescriptionIcon />}
                                            href="/assets/resume_519.pdf"
                                            target="_blank"
                                        >
                                            View Resume
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Card>

                        {/* Education Card */}
                        <Card sx={cardStyle}>
                            <Stack direction="row" alignItems="center" spacing={2} mb={3}>
                                <Avatar sx={{ bgcolor: 'action.hover', color: 'primary.main' }}><SchoolIcon /></Avatar>
                                <Typography variant="h5" component="h3">Education</Typography>
                            </Stack>
                            <Stack spacing={3} divider={<Divider />}>
                                {educationData.map((edu) => (
                                    <Box key={edu.degree}>
                                        <Stack direction="row" justifyContent="space-between" alignItems="baseline">
                                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{edu.institution}</Typography>
                                            <Typography variant="body2" color="text.secondary">{edu.period}</Typography>
                                        </Stack>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>{edu.major}</Typography>
                                        <Typography variant="body2" color="primary">{edu.degree}</Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Card>
                    </Stack>
                </Grid>

                {/* --- RIGHT COLUMN (Services) --- */}
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        {servicesData.map(service => (
                            <Grid item xs={12} sm={6} key={service.title}>
                                <Card sx={{ ...cardStyle, textAlign: 'center' }}>
                                    <Avatar sx={{ bgcolor: 'action.hover', width: 56, height: 56, mx: 'auto', mb: 2 }}>
                                        {service.icon}
                                    </Avatar>
                                    <Typography variant="h6" component="h4" gutterBottom>{service.title}</Typography>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
