import React from 'react';
import { Box, Container, Divider, IconButton, Stack, Typography } from '@mui/material';

// Import the social media links from your central data file
import { socialLinks } from '../data';

export default function Footer() {
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

                    <Stack direction="row" spacing={1}>
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
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}