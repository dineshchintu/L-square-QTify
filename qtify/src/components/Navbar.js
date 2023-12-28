import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Qbutton from './Qbutton';
import SearchBar from './SearchBar';
import BrandLogo from './BrandLogo';

export default function ButtonAppBar() {
  return (
    <Box >
      <AppBar position="static">
        <Toolbar sx={{    display: 'flex',alignItems: 'center',justifyContent:'space-between'}}>
            <BrandLogo />
            <SearchBar />
          <Qbutton content={"Give Feedback"}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}