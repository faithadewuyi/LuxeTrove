

import './App.css'
// import ChatBot from './Pages/ChatBot';
import { Route, Routes } from "react-router-dom";

import Account from "./Pages/Profile Section/Account";

import Home from "./Pages/Home";
import WishList from "./Pages/Profile Section/WishList";

import WomenPage from "./Pages/WomenPage";
import Details from './Components/PRODUCT PAGE/Details';
import CartTab from './Components/PRODUCT PAGE/CartTab';


 

function App() {
  return (

    <div className="bg-white h-full ">
          
      <div>
        {/* <ChatBot /> */}
      </div>
      
          
     <Routes>
      <Route path="/account/*" element={<Account/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/women" element={<WomenPage/>}/>
      <Route path="/cartpage" element={<CartTab/>}/>
      <Route path="/women/:slug" element={<Details/>}/>
     
      

     

     </Routes>
      
      
    </div>

    

  );
}
export default App
