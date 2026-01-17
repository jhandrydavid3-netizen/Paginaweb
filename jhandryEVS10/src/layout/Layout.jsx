import React from 'react';
import { Box, Grid, Paper, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

const Layout = ({ history = [] }) => {
    return (
        <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Box component="header" sx={{ px: 2, py: 1 }}>
                <Typography variant="body2" color="textSecondary">Tutor: Wilson Valverde</Typography>
            </Box>

            <Grid container sx={{ flexGrow: 1 }}>
                {/* Sidebar History */}
                <Grid item xs={12} md={2} sx={{ p: 2, bgcolor: '#fff' }}>
                    <Typography variant="caption" fontWeight="bold">Historial</Typography>
                    <List dense>
                        {history.length === 0 ? (
                            <ListItemText primary="vacio" sx={{ px: 2 }} />
                        ) : (
                            history.map((item, index) => (
                                <ListItem key={index} dense disableGutters component={Link} to={`/avatar/${index}`}>
                                    <ListItemText primary={`Avatar ${index + 1}`} secondary={item.timestamp} />
                                </ListItem>
                            ))
                        )}
                        <ListItem dense disableGutters component={Link} to="/">
                            <ListItemText primary="[Nuevo]" />
                        </ListItem>
                    </List>
                </Grid>

                {/* Main Content */}
                <Grid item xs={12} md={10} sx={{ p: 2 }}>
                    <Outlet context={{ history }} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Layout;
