import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";

const TalentedChefs = () => {
  const [Chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div className="bg-[#F8F5F0] py-28">
      <div className="container mx-auto px-4 lg:px-0 text-center">
        <h4 className="text-lg text-secondary mb-4 tracking-[5px]">Always Quality</h4>
        <h2 className="lg:text-4xl text-3xl font-bold mb-7 text-black">Our Talented Chefs</h2>
        <Swiper
          // slidesPerView={3}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {Chefs.map((meetTeam) => (
            <SwiperSlide key={meetTeam.id}>
              <div className="group">
                <div className="group text-center relative">
                  <img src={meetTeam.img} alt="Shoes" />
                <p className="bg-secondary w-1/3 text-center font-bold px-10 absolute bottom-0">
                  {meetTeam.role}
                </p>
                </div>
                <div className="bg-white mx-auto text-center py-8 relative">
                  <h2 className="uppercase text-lg font-bold text-black mb-3">
                    {meetTeam.chefName}
                  </h2>
                  <p className="text-[#666] leading-none">
                    {meetTeam.position}
                  </p>

                  <div className="group-hover:top-1 py-8 px-16 group-hover:left-12 top-28 group-hover:duration-500 bg-white absolute duration-500 left-12">
                    <div className="">
                      <ul className="flex leading-none justify-center items-center space-x-4 text-lg text-primary">
                        <a href={meetTeam.instagram} className=" mb-4">
                          <FaInstagram className="" />
                        </a>
                        <a href={meetTeam.twitter} className="mb-4">
                          <FaTwitter className="" />
                        </a>
                        <a href={meetTeam.facebook} className="mb-4">
                          <FaFacebookF className="" />
                        </a>
                        <a href={meetTeam.pinterest} className="mb-4">
                          <FaPinterestP className="" />
                        </a>
                      </ul>
                    </div>
                    <p className="text-[#777] leading-3">{meetTeam.email}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TalentedChefs;
