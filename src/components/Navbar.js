import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
    Collapse,
    Paper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { googleColors, navLinks } from '../data';

const Logo = () => (
    <Typography variant="h6" component={NavLink} to="/" sx={{ textDecoration: 'none', fontFamily: '"Poppins", sans-serif', fontWeight: 'bold' }}>
        <Box component="span" sx={{ color: googleColors.blue }}>B</Box>
        <Box component="span" sx={{ color: googleColors.red }}>S</Box>
        <Box component="span" sx={{ color: googleColors.yellow }}>V</Box>
        <Box component="span" sx={{ color: googleColors.green }}>R</Box>
    </Typography>
);

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            if (window.scrollY > 20 && mobileOpen) {
                setMobileOpen(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [mobileOpen]);

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    return (
        <Box
            sx={{
                position: 'fixed',
                top: isScrolled ? '8px' : '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 32px)', // Responsive width for mobile
                maxWidth: '960px', // Max width for desktop
                zIndex: 1300,
                transition: 'top 0.3s',
            }}
        >
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    borderRadius: '28px',
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: isScrolled ? 4 : 'none',
                    transition: 'box-shadow 0.3s',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
                    <Logo />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {navLinks.map((link) => (
                            <NavLink to={link.href} key={link.name} end={link.href === '/'}>
                                {({ isActive }) => (
                                    <Button
                                        variant={isActive ? 'contained' : 'text'}
                                        sx={{ fontWeight: 500, mx: 0.5 }}
                                    >
                                        {link.name}
                                    </Button>
                                )}
                            </NavLink>
                        ))}
                    </Box>
                    <IconButton
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            color: 'text.primary'
                        }}
                    >
                        {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Collapse in={mobileOpen} timeout="auto" unmountOnExit>
                <Paper
                    elevation={4}
                    sx={{
                        mt: 1,
                        bgcolor: (theme) => theme.palette.background.paper,
                        borderRadius: '28px',
                        border: '1px solid',
                        borderColor: 'divider',
                    }}
                >
                    <List component="div" disablePadding>
                        {navLinks.map((link) => (
                            <NavLink to={link.href} end={link.href === '/'} key={link.name} style={{ textDecoration: 'none' }}>
                                {({ isActive }) => (
                                    <ListItem disablePadding>
                                        <ListItemButton
                                            onClick={() => setMobileOpen(false)}
                                            sx={{ textAlign: 'center' }}
                                        >
                                            <ListItemText
                                                primary={link.name}
                                                primaryTypographyProps={{
                                                    color: isActive ? 'primary.main' : 'text.primary',
                                                    fontWeight: isActive ? 'bold' : 'normal'
                                                }}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                )}
                            </NavLink>
                        ))}
                    </List>
                </Paper>
            </Collapse>
        </Box>
    );
}
