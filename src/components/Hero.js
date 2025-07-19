import React from 'react';
import {
    Grid,
    Card,
    CardActionArea,
    Typography,
    Avatar,
    useTheme,
    Box,
    Stack,
    Button
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import CodeOffIcon from '@mui/icons-material/CodeOff';

// Import all required data from your central data file
import { quickLinks, googleColors } from '../data';

// This is the MultiColorText component we defined earlier
const MultiColorText = ({ text, sx }) => {
    const colors = [googleColors.blue, googleColors.red, googleColors.yellow, googleColors.blue, googleColors.green, googleColors.red];
    return (
        <Typography component="span" sx={sx}>
            {text.split('').map((char, index) => (
                <Box component="span" key={index} sx={{ color: colors[index % colors.length] }}>
                    {char}
                </Box>
            ))}
        </Typography>
    );
};


export default function Hero() {
    // The useTheme() hook must be called inside the component, before the return statement.
    const theme = useTheme();

    // A component must return a single parent element. We use a React Fragment (<>) to wrap everything.
    return (
        <>
            {/* === HERO SECTION START === */}
            <Box
                sx={{
                    minHeight: 'calc(80vh - 120px)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
                <Box sx={{ maxWidth: 'md', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <MultiColorText text="Hello," sx={{ fontSize: { xs: '3rem', md: '4.5rem' }, fontWeight: 'bold', fontFamily: '"Poppins", sans-serif' }} />
                    <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2rem', md: '3.5rem' }, fontWeight: 'bold', fontFamily: '"Poppins", sans-serif' }}>
                        I'm <Box component="span" sx={{ color: 'primary.main' }}>Bonamukkala Saivenkata Reddy</Box>
                    </Typography>
                    <Typography variant="h5" color="text.secondary" gutterBottom sx={{ my: 2 }}>
                        Problem Solver
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '600px', mb: 4 }}>
                        I build effective, responsive mobile apps to solve any real-world problem, using whatever technology is best for the job.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                        <Button variant="contained" size="large" startIcon={<EmailIcon />} href="/contact">
                            Get in Touch
                        </Button>
                        <Button variant="outlined" size="large" startIcon={<CodeOffIcon />} href="/projects">
                            View My Work
                        </Button>
                    </Stack>
                </Box>
            </Box>

            {/* === QUICK LINKS SECTION START === */}
            <Grid container spacing={3} sx={{ mt: 8, mb: 4, width: '100%', justifyContent: 'center' }}>
                {quickLinks.map(link => (
                    <Grid item key={link.title} sx={{ width: 150 }}>
                        <CardActionArea href={link.href} sx={{ borderRadius: theme.shape.borderRadius, height: '100%' }}>
                            {/* Add elevation={0} here to remove the shadow */}
                            <Card
                                sx={{
                                    // Your existing layout styles
                                    textAlign: 'center',
                                    p: 2,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid',
                                    borderColor: 'divider',

                                    // --- UPDATES ---

                                    // 1. Set the default shadow to none
                                    boxShadow: 'none',

                                    // 2. Add a smooth transition for the hover effect
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',

                                    // 3. Define the hover effect
                                    '&:hover': {
                                        transform: 'translateY(-4px)', // Lift the card up slightly
                                        boxShadow: '0 4px 8px 3px rgba(60,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)', // Make the shadow appear on hover
                                    }
                                }}
                            >
                                <Avatar sx={{ bgcolor: 'action.hover', width: 56, height: 56, mx: 'auto', mb: 1.5 }}>
                                    {link.icon}
                                </Avatar>
                                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{link.title}</Typography>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}