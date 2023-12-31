import React from "react";
import Card from '@mui/material/Card';
import {useTheme} from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
export default function Cardd({image,title,follows,likes,boolSongs}){
    const theme = useTheme();
    return (
        <>
        <Card sx={{ maxWidth: 159,height:210}}>
        <CardMedia
          sx={{ height: 170 }}
          image={image}
          title={title}
        />
        <CardContent sx={{display:'flex',alignItems:'center',p:0}}>
            {boolSongs && <Chip label={`${likes} Likes`} sx={{ m:'4px 8px', backgroundColor:'#121212' ,color:'#fff',fontWeight:400,fontSize:'10px',lineHeight:'15px' }}  />}
            {!boolSongs && <Chip label={`${follows} Follows`} sx={{ m:'4px 8px', backgroundColor:'#121212' ,color:'#fff',fontWeight:400,fontSize:'10px',lineHeight:'15px' }}  />}
            
        </CardContent>
      </Card>
      <p style={{color:'#fff', marginTop:'0px',fontFamily:'Poppins',fontSize:'14px',fontWeight:'400',lineHeight:'21px',letterSpacing:'0px'}}>{title}</p>
      </>
    )
}