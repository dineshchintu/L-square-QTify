import  React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import Carousel from './Carousel';

function CustomTabPanel(props) {
    
  const {  value, index, genre,songs ,...other} = props;
let filteredSongs;
  if(genre==='all')  filteredSongs= songs;
  else filteredSongs= songs.filter((song)=>song.genre.key===genre); 
  console.log(filteredSongs);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Carousel items={filteredSongs} boolSongs />
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [genres,setGenres] = useState([]);
  const [songs,setSongs] = useState([]); 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(()=>{
(    async()=>{
        try{
            let response = await axios.get(`https://qtify-backend-labs.crio.do/genres`);
            setGenres([{key: 'all',label:'All'},...response.data.data]);
            let response2 = await axios.get(`https://qtify-backend-labs.crio.do/songs`);
            setSongs(response2.data);
        }   
        catch(err){
            console.log(err);
        }     
    })();
  },[])
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          {
            genres.map((genre,index)=>(<Tab sx={{color:'#fff !important',textTransform: 'capitalize'}} key={genre.key} label={genre.label} {...a11yProps(index)} />))
          }
        </Tabs>
      </Box>
      {/* <CustomTabPanel value={value} index={0}>
      <CustomTabPanel value={value} index={1}>
      <CustomTabPanel value={value} index={2}>
      <CustomTabPanel value={value} index={3}>
      <CustomTabPanel value={value} index={4}> */}
        {
            genres.map((genre,index)=>(<CustomTabPanel key={genre.key} songs={songs} value={value} genre={genre.key} index={index}/>))
        }
    </Box>
  );
}
