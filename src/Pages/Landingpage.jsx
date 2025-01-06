import Filter from '../Components/Filter'
import Products from '../Components/Products'
function Landingpage() {
    return (
        <>
            <div>
                <div class="grid lg:grid-cols-5 ">
                    <div className='text-dark'>
                        <Filter />
                    </div>
                    <div className='text-dark lg:col-span-4 m-0'>
                        <Products />
                    </div>
                </div>
            </div>

        </>


    )
}

export default Landingpage
