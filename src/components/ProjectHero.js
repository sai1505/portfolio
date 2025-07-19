import React, { useState, useMemo } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    InputAdornment,
    Tabs,
    Tab,
    Grid,
    Card,
    CardContent,
    Chip,
    Stack,
    Button,
    Link,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

// Import the project data
import { projectsData } from '../data';

// Define the consistent card style
const cardStyle = {
    width: 340, // Set a fixed width for the card
    height: 420,
    border: '1px solid',
    borderColor: 'divider',
    boxShadow: 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 8px 3px rgba(60,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)',
    },
    // Add flex properties to ensure consistent internal layout
    display: 'flex',
    flexDirection: 'column',
};

const ProjectCard = ({ project }) => (
    // UPDATED: Changed md={4} to md={6} to show 2 cards per row on medium (laptop) screens
    <Grid item xs={12} sm={2} md={3}>
        <Card sx={cardStyle}>
            <Box sx={{ height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: project.bgColor, borderRadius: theme => `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0` }}>
                {project.icon}
            </Box>
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: { xs: 2, md: 3 } }}>
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
                    {project.description}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 2 }}>
                    {project.tags.map(tag => <Chip key={tag} label={tag} size="small" />)}
                </Stack>
                <Stack direction="row" justifyContent="space-between" alignItems="center" mt="auto">
                    <Link href={project.youtube} target="_blank" rel="noopener noreferrer" underline="hover">
                        <Button startIcon={<YouTubeIcon />}>YouTube</Button>
                    </Link>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" underline="hover">
                        <Button startIcon={<GitHubIcon />}>Code</Button>
                    </Link>
                </Stack>
                {project.apk && (
                    <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        href={project.apk}
                        download
                        sx={{ mt: 2 }}
                    >
                        Download APK
                    </Button>
                )}
            </CardContent>
        </Card>
    </Grid>
);

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (event, newValue) => {
        setFilter(newValue);
    };

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const matchesCategory = filter === 'all' || project.category === filter;
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [searchTerm, filter]);

    return (
        <Container maxWidth="lg" sx={{ mt: '80px', pb: 4 }}>
            {/* Page Title */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    My Projects
                </Typography>
                <Box sx={{ width: 100, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: '2px' }} />
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '60ch', mx: 'auto', mt: 2 }}>
                    Here are some of my recent projects. Each project is unique and showcases different skills and technologies.
                </Typography>
            </Box>

            {/* Search and Filter Controls */}
            <Stack spacing={4} sx={{ mb: 6, alignItems: 'center' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Search projects by title or tag..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        sx: { borderRadius: '28px' }
                    }}
                    sx={{ maxWidth: '600px' }}
                />
                <Tabs value={filter} onChange={handleFilterChange} centered>
                    <Tab label="All" value="all" />
                    <Tab label="Web Development" value="web" />
                    <Tab label="Mobile Apps" value="mobile" />
                </Tabs>
            </Stack>

            {/* Projects Grid */}
            <Grid container spacing={4} justifyContent="center">
                {filteredProjects.map(project => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </Grid>

            {filteredProjects.length === 0 && (
                <Typography sx={{ textAlign: 'center', mt: 4 }}>
                    No projects found.
                </Typography>
            )}
        </Container>
    );
}
