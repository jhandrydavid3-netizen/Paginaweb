import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';
import { Box, Paper, Typography, Avatar, Button, Fade } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonIcon from '@mui/icons-material/Person';
import StarIcon from '@mui/icons-material/Star';

const SavedAvatarView = () => {
    const { id } = useParams();
    const { history } = useOutletContext(); // Expect history from Layout context

    const avatarIndex = parseInt(id, 10);
    const avatarConfig = history && history[avatarIndex];

    if (!avatarConfig) {
        return (
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h5" color="error">Avatar no encontrado</Typography>
                <Button component={Link} to="/" startIcon={<ArrowBackIcon />} sx={{ mt: 2 }}>
                    Volver al Editor
                </Button>
            </Box>
        );
    }

    const renderIcon = (iconName) => {
        switch (iconName) {
            case 'emoji': return <EmojiEmotionsIcon />;
            case 'star': return <StarIcon />;
            case 'person': default: return <PersonIcon />;
        }
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant="subtitle2">Avatar Guardado</Typography>
                <Typography variant="caption">{avatarConfig.timestamp}</Typography>

                <Fade in={true} timeout={800}>
                    <Avatar
                        sx={{
                            width: 80,
                            height: 80,
                            bgcolor: avatarConfig.color,
                            my: 1
                        }}
                        variant={avatarConfig.shape === 'square' ? 'square' : 'circular'}
                    >
                        {renderIcon(avatarConfig.icon)}
                    </Avatar>
                </Fade>

                <Box>
                    <Typography variant="caption" display="block">Color: {avatarConfig.color}</Typography>
                    <Typography variant="caption" display="block">Forma: {avatarConfig.shape}</Typography>
                    <Typography variant="caption" display="block">Icon: {avatarConfig.icon}</Typography>
                </Box>

                <Button component={Link} to="/" variant="text" startIcon={<ArrowBackIcon />} size="small" sx={{ mt: 1, justifyContent: 'flex-start' }}>
                    Volver
                </Button>
            </Box>
        </Box>
    );
};

export default SavedAvatarView;
