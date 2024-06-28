
// import { useState } from 'react'
import './App.css'
// import { Cart } from './pages/Cart';
import ChatBot from './Pages/ChatBot';
// import BecomeSalesRep from './pages/BecomeSalesRep';
// import BecomeLogisticsProvider from './pages/BecomeLogisticsProvider';
// import BecomeVendorHub from './pages/BecomeVendorHub';


import { Route, Routes } from "react-router-dom";

import Account from "./Pages/Account";

import Home from "./Pages/Home";
import WishList from "./Pages/WishList";

import WomenPage from "./Pages/WomenPage";





 

function App() {
  return (

    <div className="bg-white h-full ">
      {/*
      <div>
        <BecomeVendorHub />
      </div>
       */}

      {/* 
      <div>
        <BecomeLogisticsProvider />
      </div>
      */}
      {/*
      <div>
        <BecomeSalesRep />
      </div>
       */}
    

      
      <div>
        <ChatBot />
      </div>
      
      {/*
      <div>
        <Cart />
      </div>
      */}
    
     
     <Routes>
     
      <Route path="/account/*" element={<Account/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/wishlist" element={<WishList/>}/>
      <Route path="/women" element={<WomenPage/>}/>
      

     

     </Routes>
      
      
    </div>

    

  )
};
export default App
