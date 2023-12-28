import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search a song of your choice"
        inputProps={{ 'aria-label': 'Search a song of your choice' }}
      />
      <Divider  orientation="vertical"  flexItem/>
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="searchIcon">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}