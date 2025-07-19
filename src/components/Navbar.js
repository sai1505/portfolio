import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <>
            <AppBar position="fixed" elevation={0} sx={{ top: isScrolled ? '8px' : '16px', left: '50%', transform: 'translateX(-50%)', maxWidth: 'calc(100% - 32px)', width: 'auto', borderRadius: '28px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', boxShadow: isScrolled ? 4 : 'none', transition: 'top 0.3s, box-shadow 0.3s', zIndex: 1300 }}>
                <Toolbar sx={{ justifyContent: 'space-between', px: 3, minWidth: '280px' }}>
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
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { xs: 'flex', md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle} disablePortal>
                <Box sx={{ width: 250, bgcolor: 'background.default' }} role="presentation" onClick={handleDrawerToggle}>
                    <List>
                        {navLinks.map((link) => (
                            <ListItem key={link.name} disablePadding>
                                <ListItemButton component={NavLink} to={link.href} end={link.href === '/'}>
                                    {({ isActive }) => (
                                        <ListItemText
                                            primary={link.name}
                                            sx={{ color: isActive ? 'primary.main' : 'text.primary' }}
                                        />
                                    )}
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </>
    );
}