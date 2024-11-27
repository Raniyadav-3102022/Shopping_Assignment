import React, { useState } from 'react'
import Filter from '../Components/Filter'
import Products from '../Components/Products'

function Landingpage({searchdata}) {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
        console.log("filter",filter)
        console.log("Searchdata",searchdata)
    };
    return (
        <div>
            <div class="grid lg:grid-cols-5 ">
                <div className='text-dark'>
                    <Filter onFilterChange={handleFilterChange}/>
                </div>
                <div className='text-dark lg:col-span-4 m-0'>
                    <Products filter={selectedFilter} searchdata={searchdata}/>
                </div>
            </div>
        </div>
    )
}

export default Landingpage
