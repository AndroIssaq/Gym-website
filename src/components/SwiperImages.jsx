import  { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { createClient } from "contentful";
import './style.css';
const SwiperImages = () => {
    const [data, setData] = useState([]);
    const client = createClient({
      space: "4i5bqb3u6o2i",
      environment: "master", // defaults to 'master' if not set
      accessToken: "4JIa96FCzgsFkumBK_SdLRFjEibOL-DBR7tQtYNJlX8",
    });
  
    const getData = async () => {
      try {
        const response = await client.getEntries({
          content_type: "infinityLoopCard",
        });
        console.log(response);
        setData(response.items);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const images = data[0]?.fields?.img;
  return (
    <>

    <div className='w-full h-[60vh] '>
           <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay:600,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          images?.map((img,index)=>{

            return(
                <>
                <SwiperSlide key={index} className='h-[60vh] p-[10px] bg-transparent'>
                    <div className='w-full h-[60vh] overflow-hidden relative'>
                        <img src={"http:" + img?.fields?.file?.url} alt="" className='w-full h-full object-cover  rounded-md' />
                    </div>
                </SwiperSlide>
                </>
              
            )
          })
        }
      </Swiper>
      </div>
      </>
       
  )
}

export default SwiperImages