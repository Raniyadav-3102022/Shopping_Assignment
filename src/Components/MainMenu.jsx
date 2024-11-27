import React, { useState } from 'react';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

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
        getItem('Garden', '9'),
    ]), {
        type: 'divider',
    },
];
const MainMenu = ({ onFilterChange }) => {
    const onClick = (e) => {
        console.log('click ', e.domEvent.target.innerHTML);
        onFilterChange(e.domEvent.target.innerHTML)
    };
    const [inputValue, setInputValue] = useState(1);
    const onChange = (newValue, value) => {
        console.log(newValue, value, "newValueslider")
        onFilterChange(newValue)

        setInputValue(newValue);
    };
    const formatter = (value) => `$${value}`;
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (

        <>
            <div className="lg:block hidden ">
                <Menu
                    onClick={onClick}
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