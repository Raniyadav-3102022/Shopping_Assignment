import React, { useContext, useState } from 'react';
import { Button, Drawer, Slider } from 'antd';
import MainMenu from './MainMenu';
import sliderRangeContext from '../Context/sliderRangeContext';



const Filter = () => {

    const { Rangedata, setRangedata } = useContext(sliderRangeContext);

    const handleChange = (value) => {
        console.log(value, "newValueslider");
        setRangedata(value);
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
                        value={Rangedata}
                    />

                    {/* <Slider
                        range
                        min={100}
                        max={1000}
                        value={Rangedata}
                        onChange={handleChange}
                    />
                    <div>Selected Range:  {Rangedata}</div> */}
                    {/* <div>Selected Range: {Rangedata[0]} - {Rangedata[1]}</div> */}
                </div>
            </div>
            <Button className="lg:hidden" onClick={showDrawer}>Filter</Button>
            <Drawer title="Basic Drawer" onClose={onClose} open={open}>
                <div >

                    <MainMenu />
                    <div className="mx-3">
                        <p>Price range</p>
                        {/* <Slider
                        range
                        min={100}
                        max={1000}
                        value={Rangedata}
                        onChange={handleChange}
                    />
                    <div>Selected Range: {Rangedata[0]} - {Rangedata[1]}</div> */}

                    </div>
                </div>
            </Drawer>

        </>
    );
};
export default Filter;