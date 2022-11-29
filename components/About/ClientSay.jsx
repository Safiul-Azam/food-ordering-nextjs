import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsChatQuoteFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
function ClientSay() {
  const [clientSay, setClientSay] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/reviews")
      .then((res) => res.json())
      .then((data) => setClientSay(data));
  }, []);
  return (
    <div
      className="text-center static text-white"
      style={{
        background: `linear-gradient(rgb(0,0,0,0.6),rgb(0,0,0,0.6)),url(https://i.ibb.co/8bZ50m9/bg3-h4.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-10 py-20">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          loopFillGroupWithBlank={true}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper"
        >
          {clientSay.map((singleSay) => (
            <SwiperSlide key={singleSay._id}>
              <div className="card-body mb-6 w-3/4 mx-auto">
                <div className="flex justify-center items-center flex-col space-y-7">
                  <div className="indicator relative">
                    <div className="indicator-item indicator-bottom ">
                      <BsChatQuoteFill className="text-3xl text-primary bottom-4 -left-7 absolute" />
                    </div>
                    <div className="avatar">
                      <div className="w-32 rounded-full">
                        <Image
                          width={120}
                          height={120}
                          className="rounded-full border"
                          src={singleSay.img}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(parseInt(singleSay.rating))].map((star, i) => {
                      return (
                        <AiFillStar
                          key={i}
                          className="text-lg"
                          color={singleSay.rating ? "#FACA51" : "#EFF0F5"}
                        />
                      );
                    })}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    &quot;{singleSay.review}&quot;
                  </h2>
                  <div>
                    <h3 className="text-lg font-bold">{singleSay.client}</h3>
                    <h3 className="">{singleSay.job}</h3>
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
