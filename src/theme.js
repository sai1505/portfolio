import { createTheme } from '@mui/material';
import { googleColors } from './data'; // Import colors

export const getTheme = (mode) => createTheme({
    palette: {
        mode,
        ...(mode === 'light' ? {
            primary: { main: googleColors.blue },
            background: { default: '#F8F9FA', paper: '#ffffff' },
            text: { primary: '#202124', secondary: '#5f6368' },
            divider: '#DFE1E5',
            action: { hover: 'rgba(66, 133, 244, 0.08)' }
        } : {
            primary: { main: googleColors.blue },
            background: { default: '#202124', paper: '#303134' },
            text: { primary: '#E8EAED', secondary: '#9aa0a6' },
            divider: '#5F6368',
            action: { hover: 'rgba(138, 180, 248, 0.08)' }
        }),
    },
    typography: {
        fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
        h1: { fontFamily: '"Poppins", sans-serif', fontWeight: 700, letterSpacing: '-0.5px' },
        h2: { fontFamily: '"Poppins", sans-serif', fontWeight: 700 },
        h3: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
        h4: { fontFamily: '"Poppins", sans-serif', fontWeight: 600 },
        h5: { fontFamily: '"Poppins", sans-serif', fontWeight: 500 },
        h6: { fontFamily: '"Poppins", sans-serif', fontWeight: 500 },
        body1: {
            fontWeight: 500,
        }
    },
    shape: { borderRadius: 28 },
    components: {
        MuiCard: {
            styleOverrides: {
                root: ({ theme }) => ({
                    transition: 'box-shadow 300ms ease, transform 300ms ease',
                    boxShadow: theme.palette.mode === 'light'
                        ? '0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15)'
                        : '0 1px 2px 0 rgba(0,0,0,.3), 0 1px 3px 1px rgba(0,0,0,.15)',
                })
            }
        },
        MuiCardActionArea: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        '.MuiCard-root': {
                            transform: 'translateY(-4px)',
                            boxShadow: mode === 'light'
                                ? '0 4px 8px 3px rgba(60,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)'
                                : '0 4px 8px 3px rgba(0,0,0,.15), 0 1px 2px 0 rgba(0,0,0,.3)',
                        }
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 16,
                    textTransform: 'none',
                    fontWeight: 'bold',
                }
            }
        }
    }
});