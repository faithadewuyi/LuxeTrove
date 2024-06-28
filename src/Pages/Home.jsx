import NavBar from "../Components/NavBar"


function Home() {
  return (
    <div className="w-full ">
        <NavBar/>
      <div className="w-full bg-hero-image bg-cover bg-center h-[700px] relative">
      <div className="absolute left-16 top-1/3 transform -translate-y-1/2 p-10 bg-opacity-75">
        <h1 className="font-mon font-normal text-white text-6xl">DISCOVER</h1>
           <h2 className="text-lightgray font-bold font-mon  text-6xl ">TIMELESS</h2> 
           <h3 className="font-mon font-normal text-white text-6xl">LUXURY</h3>
        <p className ="text-xl">Unearth Hidden Gems</p>
        <button>Shop Now</button>
      </div>


      </div>
      
    </div>
  )
}

export default Home
