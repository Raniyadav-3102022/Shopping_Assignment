import React, { useState } from 'react';
import { Button, Drawer } from 'antd';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Col, InputNumber, Row, Slider, Space } from 'antd';

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
        getItem('Hall', '2'),
        getItem('Wash Room', '3'),
    ]),
    {
        type: 'divider',
    },
    getItem('Color', 'sub2', <AppstoreOutlined />, [
        getItem('white', '4'),
        getItem('red', '5'),
        getItem('black', '6'),
    ]),
    {
        type: 'divider',
    },
    getItem('Categoery', 'sub3', <SettingOutlined />, [
        getItem('Home', '7'),
        getItem('Garden', '8'),
        getItem('Interior', '9'),
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