import React, { useState, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box, Container } from '@mui/material';

// Import all your components and pages
import { getTheme } from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import AboutHero from './components/AboutHero';
import ProjectHero from './components/ProjectHero';
import SkillsHero from './components/SkillsHero';
import ContactHero from './components/ContactHero';

function App() {
    const [mode, setMode] = useState('light');
    const theme = useMemo(() => getTheme(mode), [mode]);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (savedTheme) setMode(savedTheme);
        else if (prefersDark) setMode('dark');
    }, []);

    const toggleColorMode = () => {
        const newMode = mode === 'light' ? 'dark' : 'light';
        setMode(newMode);
        localStorage.setItem('theme', newMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
                {/* This Box is the main container for the whole app */}
                <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

                    {/* Navbar is outside <Routes>, so it stays on every page */}
                    <Navbar />

                    {/* The fixed theme toggler has been removed from here */}

                    {/* This is the main content area that will change */}
                    <Container component="main" maxWidth="lg" sx={{ mt: '80px', mb: 4, flexGrow: 1 }}>
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path='/about' element={<AboutHero />} />
                            <Route path='/projects' element={<ProjectHero />} />
                            <Route path="/skills" element={<SkillsHero />} />
                            <Route path="/contact" element={<ContactHero />} />
                        </Routes>
                    </Container>

                    {/* Footer now receives the props to handle theme toggling */}
                    <Footer mode={mode} toggleColorMode={toggleColorMode} />

                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
