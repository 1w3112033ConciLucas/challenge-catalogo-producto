import React from 'react';
import {
    AppBar, 
    Toolbar, 
    IconButton,
    Typography,
    Box} from '@material-ui/core';
import {
    Apps,
} from '@material-ui/icons'     

    const Navbar = () => {
        return (
            <Box component="nav">
                <AppBar position='static' style={{background: '#FFFFFF', height: '3.5rem'}}>
                    <Toolbar>
                        <IconButton>
                            <Apps />
                        </IconButton>
                        <Typography variant='h6' style={{ color:'#000000' }}>
                            Apps
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        )
    }

    
export default Navbar;