import { useState } from 'react'
import './App.css'
import { Cart } from './pages/Cart';
import ChatBot from './pages/ChatBot';
import BecomeSalesRep from './pages/BecomeSalesRep';
import BecomeLogisticsProvider from './pages/BecomeLogisticsProvider';
import BecomeVendorHub from './pages/BecomeVendorHub';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
};
export default App
