import React, { useState } from 'react'
import productData from '../Data/Productsdata';
import { Card, Space, Carousel } from 'antd';
import cart from '../assets/Icone/cart-shopping-solid.svg'
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


function ProductDetails() {

    const param = useParams()
    console.log(param, "param")
    const onChange = () => {
        console.log(product.srcOne);
    };
    const [checkedColors, setCheckedColors] = useState([]);


    const handleChange = (color) => {
        if (checkedColors?.includes(color)) {
            // Remove the color if already checked
            setCheckedColors(checkedColors?.filter(c => c !== color));
        } else {
            // Add the color if not checked
            setCheckedColors([...checkedColors, color]);
        }
    };

    const productId = Number(param.id);
    const product = productData?.Products[Number(param.id)];
    console.log(product)
    return (
        <div className='p-5'>
            <div class="grid lg:grid-cols-2 mt-20">
                <div className='flex justify-center'>
                    <Card
                        hoverable
                        className='w-96 border-none '
                    >
                        <Carousel afterChange={onChange} autoplay="true">
                            {Object.values(product.productImg).map((imgSrc, index) => (
                                <div className="carousel">
                                    <img key={index} alt={`Product Image ${index}`} className='relative' src={imgSrc} />
                                </div>
                            ))}
                        </Carousel>
                    </Card>
                </div>
                <div>
                    <p className='mt-2 text-gray-500 font-bold'>{product.Category}</p>
                    <h2 className='font-bold text-3xl'>{product.productName}</h2>

                    <p className='text-gray-500  text-justify mt-5 w-96'>{product.productDescription}</p>
                    <p className='mt-5 font-bold'>Color</p>
                    <Space direction="horizontal">
                        {product.Colors.map((c, index) => (

                            <div style={{ backgroundColor: c }} key={index} className={`flex items-center  w-8 rounded-full p-0.5 border-2 border-gray-200 `}>
                                <input
                                    key={index}
                                    type="checkbox"
                                    className="relative appearance-none w-24 m-0 h-6 border border-none rounded-md checked:bg-none checked:border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75"

                                    checked={checkedColors.includes(c)}
                                    onChange={() => handleChange(c)}
                                />
                                {checkedColors?.includes(c) && (
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={`ml-1 text-green-500 absolute`}
                                        size="sm"
                                    />
                                )}

                            </div>
                        ))}
                    </Space>
                    <p className='mt-2 text-gray-500 font-bold'>Price Per Unit</p>
                    <div className="grid lg:grid-cols-3 ">
                        <h3 className='text-4xl ms-0 p-0 font-bold mt-6'>${product.productPrice}</h3>
                        <div className="mt-5 justify-center">
                            <button className=' bg-gray-900 text-white font-bold p-3 w-36'><Link to={'/buynow'}>Buy now</Link></button>
                        </div>
                        <button className="mt-6 text-center">
                            <img src={cart} className='w-8' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
