import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

function ClientSay() {
  const [clientSay, setClientSay] = useState([]);
  useEffect(() => {
    fetch("api/clientSay/")
      .then((res) => res.json())
      .then((data) => setClientSay(data));
  }, []);
  return (
    <div className="py-20 bg-yellow-50">
      <h2 className="text-4xl text-center font-bold">What your client says</h2>

      <div className="container mx-auto grid grid-cols-4 gap-10">
        {clientSay.map((singleSay) => {
          return (
            <div key={singleSay.id}>
              <div className="card border-t-2 bg-base-100 shadow-md hover:shadow-2xl ease-in duration-300">
                <div className="card-body text-center ">
                  <div class="avatar mx-auto">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://i.ibb.co/BNKwgKz/User-Profile.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <h2 className="text-2xl my-2">{singleSay.name}</h2>
                  <p className="text-sm tracking-normal">
                    {singleSay.description}
                  </p>
                  <div className="">
                    {[...Array(parseInt(singleSay.rating))].map((star, i) => {
                      return (
                        <AiOutlineStar
                          key={i}
                          className="text-sm"
                          color={singleSay.rating ? "#FACA51" : "#EFF0F5"}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClientSay;
