
import { Route, Routes } from "react-router-dom";

import Account from "./Pages/Account";

import Home from "./Pages/Home";
import WishList from "./Pages/WishList";

import WomenPage from "./Pages/WomenPage";





 

function App() {
  return (
    

    <div className="bg-white h-full ">
    
       
     <Routes>
     
      <Route path="/account/*" element={<Account/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/women" element={<WomenPage/>}/>
      

     

     </Routes>
      
      
    </div>

    
  )
}

export default App
