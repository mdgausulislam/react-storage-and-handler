import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic1/Cosmetic';

const Cosmetics = () => {

    const [cosmetics,setCosmetics]=useState([]);
    useEffect(()=>{
        fetch('dat.json')
        .then(res=>res.json())
        .then(data=>setCosmetics(data))
    },[])
    // const cosmetics=[
    //     {id:1,name:'Alta',price:100},
    //     {id:2,name:'palis',price:500},
    //     {id:3,name:'balis',price:600},
    //     {id:4,name:'nalish',price:400},
    //     {id:5,name:'salis',price:300},
    //     {id:6,name:'talish',price:500},
    // ]
    return (
        <div>
            <h1>Welcome to my Cosmetics Store</h1>
            {
                cosmetics.map(cosmetic=><Cosmetic
                     key={cosmetic.id}
                     cosmetic={cosmetic}
                     ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;