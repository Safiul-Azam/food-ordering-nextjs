import { useEffect, useState } from "react";

function PopularDishes() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('../../pages/api/foods/')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(data)
    return (
        <div>
            Enter
        </div>
    );
}

// export async function getStaticProps(ctx){
//     const res = await fetch('/public/foods.json')
//     const data = await res.json()

//     return {
//         props:{
//             data:data
//         }
//     }
// }

// export default PopularDishes;