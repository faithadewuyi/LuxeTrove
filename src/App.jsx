
import { Route, Routes } from "react-router-dom";

import Account from "./Pages/Account";

import Home from "./Pages/Home";




 

function App() {
  return (
    

    <div className="bg-white h-full ">
    
       
     <Routes>
     
      <Route path="/account/*" element={<Account/>}/>
      <Route path="/" element={<Home/>}/>
     

     </Routes>
      
      
    </div>

    
  )
}

export default App
