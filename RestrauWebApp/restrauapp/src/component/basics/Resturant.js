import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


// this (...) is a spread operator used for converting the object data received from the API into array and then array fetching.
const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    ),
];
const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);

    const filterItem = (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setMenuData(updatedList);
    }
    // console.log(menuData);
    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
                <button className="btn-group__item" onClick={() => filterItem("Breakfast")}>Breakfast</button>
                <button className="btn-group__item" onClick={() => filterItem("Lunch")}>Lunch</button>
                <button className="btn-group__item" onClick={() => filterItem("Dinner")}>Dinner</button>
                <button className="btn-group__item" onClick={() => filterItem("Snacks")}>Snacks</button>
                <button className="btn-group__item" onClick={() => filterItem("Dessert")}>Dessert</button>
                <button className="btn-group__item" onClick={() => setMenuData(Menu)}>All</button>
            </div>
        </nav>
        <MenuCard menuData= {menuData} />
        </>
    );
};

export default Resturant;

 
