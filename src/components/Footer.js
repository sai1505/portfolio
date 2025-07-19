import React from 'react';
import { Box, Container, Divider, IconButton, Stack, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { socialLinks } from '../data';

// Accept mode and toggleColorMode as props
export default function Footer({ mode, toggleColorMode }) {
    return (
        <Box component="footer" sx={{ p: 3, mt: 'auto' }}>
            <Divider sx={{ mb: 3 }} />
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} BSVR. All rights reserved.
                    </Typography>

                    <Stack direction="row" spacing={1} alignItems="center">
                        {socialLinks.map(link => (
                            <IconButton
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.name}
                                color="inherit"
                            >
                                {link.icon}
                            </IconButton>
                        ))}

                        {/* Add the theme toggler button here */}
                        <IconButton onClick={toggleColorMode} color="inherit">
                            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
