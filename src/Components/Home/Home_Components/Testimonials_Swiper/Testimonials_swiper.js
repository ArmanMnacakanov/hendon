import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
                    <div>
                        <div>
                            <h1>Testimonials </h1>
                        </div>
                        <div>
                            <p>
                                “At vero eos et accusamus et iusto odio dignissimos ducimus qui blantum voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupid itate non provident imilique suntinculpa.”
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src='https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/testimonial-img-1.png' />
                        </div>
                        <div>
                            <div>
                                <h3>Darrell Berges </h3>
                            </div>
                            <div>
                                <span>owner</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div>
                            <h1>Testimonials </h1>
                        </div>
                        <div>
                            <p>
                                “At vero eos et accusamus et iusto odio dignissimos ducimus qui blantum voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupid itate non provident imilique suntinculpa.”
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src='https://hendon.qodeinteractive.com/wp-content/uploads/2020/04/testimonial-img-2.png' />
                        </div>
                        <div>
                            <div>
                                <h3>Marlon Sutton </h3>
                            </div>
                            <div>
                                <span>architech</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
      </Swiper>
    </>
  );
}
