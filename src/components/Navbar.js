import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar position="static" style={{backgroundColor: '#408E91'}}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontSize: '2rem'}}>
          <b>Novatech</b>
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar