import React, { useState } from 'react';
import {
    Box,
    Paper,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select,
    MenuItem,
    ToggleButton,
    ToggleButtonGroup,
    Button,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Grow,
    FormControl,
    InputLabel
} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

const AvatarEditor = ({ onSave }) => {
    const [config, setConfig] = useState({
        color: '#1976d2', // Default Blue
        shape: 'circular',
        icon: 'person'
    });
    const [openDialog, setOpenDialog] = useState(false);

    const handleColorChange = (event) => {
        setConfig({ ...config, color: event.target.value });
    };

    const handleShapeChange = (event) => {
        setConfig({ ...config, shape: event.target.value });
    };

    const handleIconChange = (event, newIcon) => {
        if (newIcon !== null) {
            setConfig({ ...config, icon: newIcon });
        }
    };

    const handleSave = () => {
        if (onSave) {
            onSave(config);
            setOpenDialog(true);
        }
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const renderIcon = () => {
        switch (config.icon) {
            case 'emoji': return <EmojiEmotionsIcon />;
            case 'star': return <StarIcon />;
            case 'person': default: return <PersonIcon />;
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
            <Typography variant="h6">
                Mi Editor
            </Typography>

            {/* Preview Section */}
            <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', bgcolor: '#fafafa' }}>
                <Grow in={true} key={JSON.stringify(config)}>
                    <Avatar
                        sx={{
                            width: 80,
                            height: 80,
                            bgcolor: config.color,
                        }}
                        variant={config.shape === 'square' ? 'square' : 'circular'}
                    >
                        {renderIcon()}
                    </Avatar>
                </Grow>
            </Box>

            {/* Controls Section */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                {/* Color Control */}
                <Box>
                    <Typography variant="caption">Color:</Typography>
                    <RadioGroup row value={config.color} onChange={handleColorChange}>
                        <FormControlLabel value="#1976d2" control={<Radio size="small" />} label="Azul" />
                        <FormControlLabel value="#d32f2f" control={<Radio size="small" />} label="Rojo" />
                        <FormControlLabel value="#388e3c" control={<Radio size="small" />} label="Verde" />
                        <FormControlLabel value="#fbc02d" control={<Radio size="small" />} label="Amarillo" />
                    </RadioGroup>
                </Box>

                {/* Shape Control */}
                <FormControl fullWidth size="small" variant="standard">
                    <InputLabel>Forma</InputLabel>
                    <Select
                        value={config.shape}
                        label="Forma"
                        onChange={handleShapeChange}
                    >
                        <MenuItem value="circular">Redondo</MenuItem>
                        <MenuItem value="square">Cuadrado</MenuItem>
                    </Select>
                </FormControl>

                {/* Icon Control */}
                <Box>
                    <Typography variant="caption">Icono:</Typography>
                    <ToggleButtonGroup
                        value={config.icon}
                        exclusive
                        onChange={handleIconChange}
                        size="small"
                        fullWidth
                    >
                        <ToggleButton value="person">Yo</ToggleButton>
                        <ToggleButton value="emoji">Cara</ToggleButton>
                        <ToggleButton value="star">Sol</ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <Button variant="contained" color="inherit" onClick={handleSave} disableElevation size="small">
                    Guardar
                </Button>
            </Box>

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"¡Éxito!"}
                </DialogTitle>
                <DialogContent>
                    <Typography>
                        Avatar guardado correctamente.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AvatarEditor;
