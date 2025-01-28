import React, { useContext, useState } from 'react';
import { Menu } from 'antd';
import CommonContext from '../Context/CommonContext';
import productData from '../Data/Productsdata';


function getItem(label, key, icon, children, type, color) {
    return {
        key,
        children,
        label,
        type,
        color
    };
}

const generateMenuItems = (arrays) => {
    return arrays.map((array, index) => (
        <Menu.SubMenu key={array.label} title={array.label}>
            {array.items.map((item, i) => (
                <Menu.Item key={`${index}-${i}`}>
                    {item}
                </Menu.Item>
            ))}
        </Menu.SubMenu>
    ));
};

const items = generateMenuItems(productData.allVaribles);

const MainMenu = () => {
    const { setfiltervalue, setfilterType } = useContext(CommonContext);

    const handleChange = (event) => {
        setfiltervalue(event.domEvent.target.innerHTML)
        setfilterType(event.keyPath[1])
    };
    return (

        <>
            <div className="lg:block hidden ">
                <Menu
                    onClick={handleChange}
                    mode="inline">
                    {items}
                </Menu>
            </div>
        </>
    );
};
export default MainMenu;