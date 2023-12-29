import React,{useState,useEffect} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import axios from "axios";
import Card from './Card';
export default function Section({type,isCollapse}){
    let [albums,setAlbums]=useState([]);
    let [collapse,setCollapse] = useState(isCollapse);
    useEffect(()=>{
        (async()=>{
            try{
                let response = await axios.get(`https://qtify-backend-labs.crio.do/albums/${type}`);
                let data = response.data;
                if(!collapse) data = data.slice(0,10);
                setAlbums(data);
            }
            catch(err){
                console.log(err);
                setAlbums(null);
            }
        })();
    },[collapse]) 
    return(
        <section style={{backgroundColor:'#121212'}}>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <h3 style={{color:'#fff'}}>{type.substr(0,1).toUpperCase() +type.substr(1) +" Albums"}</h3>    
        <Button onClick={()=>{setCollapse((prev)=>!prev)}} variant="text">{collapse? 'Collapse':'Show all'}</Button>    
        </Box>
        {
            albums && (<Grid container spacing={3}> 
            {albums.map((album)=>{
                return (<Grid item key={album.id}  lg={4} sx={{maxWidth:'160px !important'}}>
                    <Card image={album.image} title={album.title} follows={album.follows} />
                </Grid>)
            })}
             </Grid>)
        }
        </section>
    )    
}