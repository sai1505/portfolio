import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    Grid,
    Stack,
    Avatar,
    LinearProgress,
} from '@mui/material';
// 1. Import googleColors to use in the progress bar
import { skillsData, certificationsData, googleColors } from '../data';

// Reusable style for the main cards
const cardStyle = {
    p: { xs: 2, md: 4 },
    border: '1px solid',
    borderColor: 'divider',
    boxShadow: 'none',
    height: '100%',
};

const SkillItem = ({ skill }) => {
    // Convert level (1-5) to percentage (20-100)
    const value = skill.level * 20;

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography variant="h6" component="span" sx={{ fontWeight: 500 }}>
                    {skill.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Level {skill.level}/5
                </Typography>
            </Stack>
            {/* 2. Apply custom styles to the LinearProgress component */}
            <LinearProgress
                variant="determinate"
                value={value}
                sx={{
                    height: 8,
                    borderRadius: '4px',
                    bgcolor: 'divider', // Set a neutral background color
                    '& .MuiLinearProgress-bar': {
                        // Apply the Google color gradient to the bar
                        background: `linear-gradient(90deg, ${googleColors.blue}, ${googleColors.red}, ${googleColors.yellow}, ${googleColors.green})`,
                    },
                }}
            />
        </Box>
    );
};

const CertificationItem = ({ cert }) => (
    // This is now a standalone card with the updated hover effect
    <Card sx={{
        p: 2,
        height: '100%',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: 'none',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 4px 8px 3px rgba(60,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)'
        }
    }}>
        <Stack direction="row" spacing={2} alignItems="center">
            <Avatar sx={{ bgcolor: 'action.hover' }}>
                {cert.icon}
            </Avatar>
            <Box>
                <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
                    {cert.title}
                </Typography>
                <Typography variant="body1" color="primary.main" sx={{ fontWeight: 500 }}>
                    {cert.issuer}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {cert.date}
                </Typography>
            </Box>
        </Stack>
    </Card>
);

export default function SkillsHero() {
    return (
        <Container maxWidth="lg" sx={{ mt: '80px', pb: 4 }}>
            {/* Page Title */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    My Skills
                </Typography>
                <Box sx={{ width: 100, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: '2px' }} />
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '60ch', mx: 'auto', mt: 2 }}>
                    I've worked with a variety of technologies and tools. Here are some of my key skills and expertise.
                </Typography>
            </Box>

            {/* Skills Card */}
            <Card sx={{ ...cardStyle, mb: 4 }}>
                <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                    Technical Skills
                </Typography>
                <Stack spacing={3}>
                    {skillsData.map(skill => (
                        <SkillItem key={skill.name} skill={skill} />
                    ))}
                </Stack>
            </Card>

            {/* Certifications Section - No longer in a parent card */}
            <Box sx={{ textAlign: 'center', my: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Certifications
                </Typography>
                <Box sx={{ width: 100, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: '2px' }} />
            </Box>

            <Grid container spacing={2}>
                {certificationsData.map(cert => (
                    <Grid item xs={12} sm={6} md={4} key={cert.title}>
                        <CertificationItem cert={cert} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
