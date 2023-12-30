import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import { Navigation} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Carousel.css"
export default ({albums}) => {
    
  return (
    <div>
    <Swiper
    
    modules={[Navigation]}
    slidesPerView={4}
    navigation
    spaceBetween= {2}
    breakpoints= {{
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 50,
      },
    }}
    >
      {albums.map((album)=>{
        return (
            <SwiperSlide key={album.id}>
            <Card image={album.image} title={album.title} follows={album.follows} />
            </SwiperSlide>
        )
      })}
    </Swiper>
    </div>
    
  );
};