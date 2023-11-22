"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/material';



function Footer() {


  return (
    <AppBar position="static" sx={{ backgroundColor: '#252F3D' }}>
      <Container maxWidth="xl" sx={{p:4}}>
        <Toolbar disableGutters>
          <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={2} justifyContent="space-between" width="100%">
            <Stack spacing={1} direction="row" alignItems="center">

              <Typography noWrap>Copyright (C) 2023 | Clarifionsupport@clarifion.com</Typography>
            </Stack>
            <Box flexGrow={1} width="100%" />
            <Stack spacing={1} direction="row" alignItems="center">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /><path d="M8 11v-4a4 4 0 1 1 8 0v4" /></svg>

              <Typography noWrap>Secure 256-bit SSL encryption.</Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Footer;