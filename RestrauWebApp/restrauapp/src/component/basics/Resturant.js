import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);
    return (
        <>
        <MenuCard menuData= {menuData} />
        </>
    );
};

export default Resturant;

 
