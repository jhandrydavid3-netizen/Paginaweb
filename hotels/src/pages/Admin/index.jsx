import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Outlet, useNavigate } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import GroupIcon from '@mui/icons-material/Group';

const drawerWidth = 240;
const navItems = [
    {
        label: "Gestion Hoteles",
        path: "/dashboard/gestionhoteles",
        icon: "manage"
    },
    {
        label: "Registro Hotel",
        path: "/dashboard/registrohotel",
        icon: "Hotelicon"
    },
    {
        label: "Usuarios",
        path: "/dashboard/usuarios",
        icon: "Users",
        options: [
            {
                label: "crear",
                path: "/dashboard/usuario/crear",
            },
            {
                label: "listar",
                path: "/dashboard/usuario/listar",
            }
        ]
    }
];

const handleGetIcon = (icon) => {
    switch (icon) {
        case "Hotelicon":
            return <HotelIcon />;
        case "manage":
            return <ManageSearchIcon />;
        case "Users":
            return <GroupIcon />;
        default:
            return null;
    }
};

function LayoutAdmin(props) {
    const { window } = props;
    const [menuOpen, setMenuOpen] = React.useState(true);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const handleNavItem = (path) => {
        navigate(path);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: menuOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
                    ml: menuOpen ? `${drawerWidth}px` : 0,
                    transition: (theme) => theme.transitions.create(['margin', 'width'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                }}
                component="nav"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon color='warning' />
                    </IconButton>

                    <Box sx={{ flexGrow: 1 }} />

                    <Button sx={{ color: '#fff' }}>
                        cerrar sesión
                    </Button>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="persistent"
                    open={menuOpen}
                    onClose={handleDrawerToggle}
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                >
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h6" sx={{ my: 2 }}>
                            MUI
                        </Typography>
                        <Divider />
                        <List>
                            {navItems.map((item) => (
                                <ListItem key={item.path} disablePadding>
                                    <ListItemButton onClick={() => handleNavItem(item.path)} sx={{ textAlign: "center" }}>
                                        <ListItemIcon>
                                            {handleGetIcon(item.icon)}
                                        </ListItemIcon>
                                        <ListItemText primary={item.label} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: menuOpen ? `calc(100% - ${drawerWidth}px)` : "100%",
                    transition: (theme) => theme.transitions.create('margin', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

LayoutAdmin.propTypes = {
    window: PropTypes.func,
};

export default LayoutAdmin;
