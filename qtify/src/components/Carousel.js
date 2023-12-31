import React,{useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './Card';
import { Navigation,Autoplay} from 'swiper/modules';
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Carousel.css"
export default ({albums}) => {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const swiperRef = useRef();
  return (
    <div style={{position: 'relative'}}>
    <Swiper
    
    modules={[Navigation]}
    navigation={{
      prevEl: navigationPrevRef.current,
      nextEl: navigationNextRef.current,
    }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    slidesPerView={4}
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
        <button className='prev' onClick={() => swiperRef.current?.slidePrev()} ref={navigationPrevRef}>
            <img src='leftNav.png' />
        </button>
        <button className='next' onClick={() => swiperRef.current?.slideNext()} ref={navigationNextRef}>
        <img src='rightNav.png' />
        </button>



    </div>
    
  );
};