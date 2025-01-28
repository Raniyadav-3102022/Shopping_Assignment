import React, { useContext, useState } from 'react';
import { Button, Drawer, Slider } from 'antd';
import MainMenu from './MainMenu';
import CommonContext from '../Context/CommonContext';



const Filter = () => {

   
    const { setfiltervalue, setfilterType } = useContext(CommonContext);

    const handleChange = (value) => {
        setfiltervalue(value)
        setfilterType("productPrice")
    };
    const formatter = (value) => `${value}`;
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
                <MainMenu />
                <div className="mx-3 mt-2">
                    <p>Price range</p>
                    <Slider
                        min={100}
                        max={1000}
                        onChange={handleChange}
                    />

                </div>
            </div>
            <Button className="lg:hidden" onClick={showDrawer}>Filter</Button>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <div >

                    <MainMenu />
                    <div className="mx-3">
                        <p>Price range</p>
                        <Slider
                            min={100}
                            max={1000}
                            onChange={handleChange}
                        />

                    </div>
                </div>
            </Drawer>

        </>
    );
};
export default Filter;