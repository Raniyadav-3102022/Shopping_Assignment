import Search from 'antd/es/transfer/search';
import React, { useState } from 'react'
import cart from '../assets/Icone/cart-shopping-solid.svg'
import { Link } from 'react-router-dom'

import { Badge } from 'antd';

function Navbar({ handlesearchFilterChange }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleSearch = (e) => {
        handlesearchFilterChange(e.target.value)
    };
    return (
        <div>
            <nav className="">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-expanded={isMobileMenuOpen}
                                className={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`} aria-controls="mobile-menu" >
                                <span className="absolute -inset-0.5"></span>
                                <span className="sr-only">Open main menu</span>

                                <svg className={`block h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                {/* <svg className={`block h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg> */}
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <button type="button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    aria-expanded={isMobileMenuOpen}
                                    className={`relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`} aria-controls="mobile-menu" >
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>
                                    <svg className={`block h-6 w-6 `} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                            <div className="hidden sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    <Link to="/" className="text-dark-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
                                    <Link to="#" className="text-dark-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Shop</Link>
                                    <Link to="#" className="text-dark-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Magzine</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <Search type='search' className="lg:w-20" onChange={(e) => handleSearch(e)}></Search>
                            <button type="button" className="text-dark relative rounded-full  p-1 ms-2  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">View notifications</span>
                                <Badge className='p-0' count={7}>
                                    <img src={cart} className='w-10' />
                                </Badge>
                            </button>
                            {/* <!-- Profile dropdown --> */}
                            <div className="relative ">
                                <div>
                                    <Link to="/login" className="text-dark rounded-md sm:px-3 sm:py-2 mb-2 text-sm font-medium" aria-current="page">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <Link to="/" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</Link>
                        <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Shop</Link>
                        <Link to="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Magzine</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
