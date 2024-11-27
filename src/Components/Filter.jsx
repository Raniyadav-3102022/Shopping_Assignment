import React, { useState } from 'react';
import { Button, Drawer,Slider } from 'antd';
import MainMenu from './MainMenu';



const Filter = ({ onFilterChange }) => {
   
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
                
                <MainMenu onFilterChange={onFilterChange}/>
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
                   
                     <MainMenu onFilterChange={onFilterChange}/>
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