import React, { useContext, useState } from 'react';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import FilterContext from '../Context/FilterContext';

function getItem(label, key, icon, children, type, color) {
    return {
        key,
        children,
        label,
        type,
        color
    };
}
const items = [
    getItem('Collection', 'sub1', <MailOutlined />, [
        getItem('Bed Room', '1'),
        getItem('Garden', '2'),
        getItem('Hall', '3'),
    ]),
    {
        type: 'divider',
    },
    getItem('color', 'sub2', <AppstoreOutlined />, [
        getItem('White', '4'),
        getItem('Pink', '5'),
        getItem('Grey', '6'),
        getItem('Yellow', '7'),
    ]),
    {
        type: 'divider',
    },
    getItem('Categoery', 'sub3', <SettingOutlined />, [
        getItem('Home', '8'),
        getItem('Entrance', '9'),
    ]), {
        type: 'divider',
    },
];
const MainMenu = () => {
    const { filter, setFilter } = useContext(FilterContext);
    const handleChange = (event) => {
        setFilter(event.domEvent.target.innerHTML);
    };
    return (

        <>
            <div className="lg:block hidden ">
                <Menu
                    onClick={handleChange}
                    value={filter}
                    style={{
                        width: 256,
                    }}
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={items}
                />
            </div>
        </>
    );
};
export default MainMenu;