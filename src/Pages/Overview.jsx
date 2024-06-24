



function Overview() {
  return (
  
    <div>
  
<div className="px-auto  shadow-md p-4 pl-6 font-inter ">
           <div className=" mx-auto lg:mx-3 items-center flex ">
          <img
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="random user"
            className="h-20 w-20 rounded-full ml-6"
          />
          
           <h3 className="ml-4 flex-1 "> Sarah Thompson </h3>
        </div>
        <div className="flex gap-5 mx-auto lg:mx-3 mt-6  pl-20  ustify-center">
          <div className=" pl-8">
          <span className="material-symbols-outlined hover:text-btn focus:text-btn pl-4 pt-1">
            favorite
          </span>
          <h3>Wishlist</h3>
          </div>
          <div className=" pl-8">
          <span className="material-symbols-outlined hover:text-btn focus:text-btn pl-8 pt-1">history</span>
          <h3>Recently viewed</h3>
          </div>
          
        </div>
        <div className="mt-6 flex flex-col items-center">
        <div className="w-full">
          <h4 className="text-left">MY ORDERS</h4>
        </div>
        <p className="text-center">You currently have no purchase with LuxeTrove. Place your order now.</p>
        <button className="bg-btn mt-4 w-[169px] h-14 rounded font-inter text-xl">Shop Now</button>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <div className="w-full">
          <h4 className="text-left">MY WALLET</h4>
        </div>
        <p className="text-center">You currently have no purchase with LuxeTrove. Place your order now.</p>
        <button className="bg-btn mt-4 w-[169px] h-14 rounded font-inter text-xl">Upload Funds</button>
      </div>

        </div>
    </div>
  )
}

export default Overview
