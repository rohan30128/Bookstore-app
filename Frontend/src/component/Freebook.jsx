import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from './Cards';

export default function Freebook() {
  const [book,setBook] = useState([]);
  useEffect(()=>{
    const getBook = async ()=>{
      try {
        const res = await axios.get("http://localhost:8002/book");
        
        return setBook(res.data);
      } catch (error) {
        console.log("error on axios",error);
      }
    }
    getBook();
  },[]);
    const filterData = book.filter((data)=> data.category === "Free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
       <div> <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, vel laboriosam quisquam eos voluptatum, illum tempore laborum delectus odit enim maiores, deleniti voluptates repellendus aliquid.</p></div>
    
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>{
         return   <Cards item={item} key={item.id} />
        })}
      </Slider>
    </div>
    </div>
    </>
  )
}
