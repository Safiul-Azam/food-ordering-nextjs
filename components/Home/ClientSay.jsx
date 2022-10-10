import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";
function ClientSay() {
  const [clientSay, setClientSay] = useState([]);
  useEffect(() => {
    fetch("api/clientSay/")
      .then((res) => res.json())
      .then((data) => setClientSay(data));
  }, []);
  return (
    <div className="py-20 bg-yellow-50">
      <h2 className="text-4xl text-gray-800 text-center font-extrabold mb-10">What your client says</h2>
      <div className="container mx-auto">
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
                <div className="card border bg-white ">
                  <div className="card-body space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="avatar">
                          <div className="w-24 rounded-full border">
                            <img src="https://placeimg.com/192/192/people" />
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
                              <AiOutlineStar
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
