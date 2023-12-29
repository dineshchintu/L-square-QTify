import React from "react";
import { Box } from "@mui/system";
import './HeroImage.css'
export default function HeroImage(){
    return (
        <Box className='hero' >
            <Box className="hero-heading" sx={{textAlign:'center'}}>
            <p  style={{margin:'0px'}}>
            100 Thousand Songs, ad-free
            </p>
            <p style={{margin:'0px'}}>
            Over thousands podcast episodes
            </p>
            </Box>

        </Box>
    )
}