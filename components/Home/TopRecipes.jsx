import React, { useEffect, useState } from "react";

function TopRecipes() {
    const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("api/foods/")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
//   https://i.ibb.co/hY972mP/banner-top-4.jpg
    return (
        <div>
        
        </div>
    );
}

export default TopRecipes;