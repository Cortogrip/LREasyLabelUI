import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import AppEvent from './app-event/AppEvent'

export default function UsersAppBar({listenerManager}) {

    function handleMenuClick(e){
        console.log('You clicked Menu.');
        listenerManager.fireEvent(new AppEvent("bar:01", "switch menu", null, null));
    }

    function handleHelp(e){
        console.log('You clicked Help.');
        window.open("http://localhost:8087/docs/lr-easy-label-print_en.html", "_self")
        //listenerManager.fireEvent(new AppEvent("bar:02", "logout_requested", null, null));       
    }

    return (
        <Box >
            <AppBar position="static" sx={{ bgcolor: "darkgray" }}>
                <Toolbar>
                    <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenuClick}>
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left'}}>
                    LR Easy Label UI
                    </Typography>
                    <Button color="inherit" onClick={handleHelp} sx={{ textTransform :'capitalize'}} >Aide</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}