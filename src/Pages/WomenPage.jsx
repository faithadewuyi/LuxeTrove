
import Product from '../Components/Product'

import WomenCart from '../Components/PRODUCT PAGE/WomenCart'
import NavBar from '../Components/NavBar'

function WomenPage() {
  return (
    <div className="w-full ">
    
      <NavBar/>
      <div className='overflow-x-hidden sm:overflow-x-hiddden'></div>
      <div  className="lg:w-[1200px] max-w-full m-auto p-5 transform transition-transform duration-500 sm:w-full">
        {/* <h1 className='text-3xl my-5'>List Products</h1> */}
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 sm:gap-2'>
        {Product.map((product, key) => 
                <WomenCart key={key} data={product}/>
            )} 
        </div>
    </div>
    </div>
  )
}

export default WomenPage
