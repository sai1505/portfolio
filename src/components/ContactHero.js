import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    Grid,
    Stack,
    Avatar,
    TextField,
    Button,
    Snackbar, // 1. Import Snackbar for popups
    Alert,    // 2. Import Alert for styling the popup
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { contactInfo } from '../data';

import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const cardStyle = {
    p: { xs: 2, md: 4 },
    border: '1px solid',
    borderColor: 'divider',
    boxShadow: 'none',
    height: '100%',
};

export default function ContactHero() {
    const position = [17.7231, 83.3053];
    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

    const customIcon = new Icon({
        iconUrl: markerIconPng,
        shadowUrl: markerShadowPng,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
    });

    // 3. Handle form submission with JavaScript
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Add your access key to the form data
        formData.append("access_key", "3c9ee6eb-5ba7-4e28-b234-7967935b35c0"); // <-- REPLACE WITH YOUR KEY

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setSubmissionStatus('success');
                event.target.reset(); // Clear the form
            } else {
                console.error("Error from Web3Forms:", data.message);
                setSubmissionStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmissionStatus('error');
        }
    };

    const handleCloseSnackbar = () => {
        setSubmissionStatus(null);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: '80px', pb: 4 }}>
            {/* Page Title */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Get In Touch
                </Typography>
                <Box sx={{ width: 100, height: 4, bgcolor: 'primary.main', mx: 'auto', borderRadius: '2px' }} />
                <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '60ch', mx: 'auto', mt: 2 }}>
                    Have a project in mind or want to collaborate? Feel free to reach out to me using the form below.
                </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                {/* Left Column: Contact Form */}
                <Grid item xs={12} md={6}>
                    <Card sx={cardStyle}>
                        <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                            Send Me a Message
                        </Typography>
                        {/* 4. Use the onSubmit handler instead of action/method */}
                        <form onSubmit={handleSubmit}>
                            <Stack spacing={3}>
                                <TextField label="Your Name" name="name" required />
                                <TextField label="Your Email" name="email" type="email" required />
                                <TextField label="Your Message" name="message" multiline rows={5} required />
                                <Button type="submit" variant="contained" startIcon={<SendIcon />} sx={{ p: 1.5 }}>
                                    Send Message
                                </Button>
                            </Stack>
                        </form>
                    </Card>
                </Grid>

                {/* Right Column: Contact Info & Map */}
                <Grid item xs={12} md={6}>
                    <Stack spacing={4}>
                        <Card sx={cardStyle}>
                            <Typography variant="h4" component="h2" sx={{ mb: 3, fontWeight: 'bold' }}>
                                Contact Information
                            </Typography>
                            <Stack spacing={3}>
                                {contactInfo.map(info => (
                                    <Stack key={info.title} direction="row" spacing={2} alignItems="center">
                                        <Avatar sx={{ bgcolor: 'action.hover' }}>{info.icon}</Avatar>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 500 }}>{info.title}</Typography>
                                            <Typography color="text.secondary">{info.text}</Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>
                        </Card>
                        <Card sx={{ ...cardStyle, p: 0, overflow: 'hidden' }}>
                            <Box sx={{ borderRadius: theme => `${theme.shape.borderRadius}px`, overflow: 'hidden', height: 280 }}>
                                <MapContainer center={position} zoom={11} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position} icon={customIcon}>
                                        <Popup>
                                            Visakhapatnam, Andhra Pradesh
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </Box>
                        </Card>
                    </Stack>
                </Grid>
            </Grid>

            {/* 5. Add the Snackbar for success/error popups */}
            <Snackbar
                open={submissionStatus !== null}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={submissionStatus === 'success' ? 'success' : 'error'} sx={{ width: '100%' }}>
                    {submissionStatus === 'success' ? 'Message sent successfully!' : 'An error occurred. Please try again.'}
                </Alert>
            </Snackbar>
        </Container>
    );
}
