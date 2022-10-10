import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
function ClientSay() {
  const [clientSay, setClientSay] = useState([]);
  useEffect(() => {
    fetch("api/clientSay/")
      .then((res) => res.json())
      .then((data) => setClientSay(data));
  }, []);
  // 
  return (
    <div
      className="py-20 bg-[#F7F2E2]"
      style={{
        backgroundImage: "url(https://i.ibb.co/dPQcNn3/client-Say-banner.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-4xl text-gray-800 text-center font-extrabold mb-10">
        What your client says
      </h2>
      <div className="container mx-auto px-10">
        <Swiper
          spaceBetween={30}
          slidesPerGroup={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}
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
          modules={[Autoplay]}
          className="mySwiper"
        >
          {clientSay.map((singleSay) => (
            <SwiperSlide key={singleSay.id}>
              <div key={singleSay.id}>
                <div className="card bg-white rounded-xl">
                  <div className="card-body space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="indicator">
                          <div className="indicator-item indicator-bottom">
                            <BsFillChatQuoteFill className="text-2xl text-primary -mt-3 -ml-4" />
                          </div>
                          <div className="avatar">
                            <div className="w-16 rounded-full border">
                              <img src={singleSay.img} alt="" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">
                            {singleSay.name}
                          </h3>
                          <h3 className="text-gray-400 text-sm">
                            {singleSay.job}
                          </h3>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(parseInt(singleSay.rating))].map(
                          (star, i) => {
                            return (
                              <AiFillStar
                                key={i}
                                className="text-lg"
                                color={singleSay.rating ? "#FACA51" : "#EFF0F5"}
                              />
                            );
                          }
                        )}
                      </div>
                    </div>
                    <p className="text-base text-gray-500 tracking-normal">
                      &quot;{singleSay.description}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ClientSay;
