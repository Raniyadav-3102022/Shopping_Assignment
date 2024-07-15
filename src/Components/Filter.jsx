import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Slider } from 'antd';

function getItem(label, key, icon, children, type, color) {
    return {
        key,
        // icon,
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
const Filter = ({ onFilterChange }) => {
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
                <div className="mx-3 mt-2">
                    <p>Price range</p>
                    <Slider
                        tooltip={{ formatter }}
                        className='w-56 mt-4'
                        label="Price Range"
                        min={100}
                        max={1000}
                        onChange={onChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </div>
            </div>
            <Button className="lg:hidden" onClick={showDrawer}>Filter</Button>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <div >
                    <Menu
                        onClick={onClick}
                        
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        items={items}
                    />
                    <div className="mx-3">
                        <p>Price range</p>
                        <Slider
                            tooltip={{ formatter }}
                            className=' w-56 mt-4'
                            label="Price Range"
                            min={100}
                            max={1000}
                            onChange={onChange}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                    </div>
                </div>
            </Drawer>

        </>
    );
};
export default Filter;