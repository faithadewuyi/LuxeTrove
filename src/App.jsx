import { useState } from 'react';
import './App.css';
// pre loader
import Preloader from './frontend/preloader/Preloader';
// header and footer
import Navbar from './frontend/components/navbar/Navbar';
import Footer from './frontend/components/footer/Footer';
// import SignUp from './frontend/pages/signUp/SignUp';
import SignUpPage from './frontend/pages/signUp/SignUpPage';
import SignInPage from './frontend/pages/signUp/SignInPage';
import ForgotPassword from './frontend/pages/signUp/ForgotPassword';
import SignUpSuccessful from './frontend/pages/signUp/SignUpSuccessful';
import ResetPasswordPage from './frontend/pages/signUp/ResetPasswordPage';
import PasswordResetSuccessful from './frontend/pages/signUp/PasswordResetSuccessful';
// import Banner from './frontend/components/banner/Banner';
import Home from './frontend/pages/home/Home';
// blog post
import BlogPge from './frontend/pages/blog/Blog';
// sell with luxe
import SellWithLuxe from './frontend/pages/sell/SellWithLuxe';
import SellerRegistration from './frontend/pages/sell/SellerRegistration';

import { Route, Routes } from 'react-router-dom';

import Account from './Pages/Profile Section/Account';
import WishList from './Pages/Profile Section/WishList';
import WomenPage from './Pages/WomenPage';
import Details from './Components/PRODUCT PAGE/Details';
import CartTab from './Components/PRODUCT PAGE/CartTab';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-white h-full">
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <div className="main-content">
          <Navbar />
          <Home />
          <BlogPge />
          <SellWithLuxe />
          <SellerRegistration />
          <SignUpPage />
          <SignInPage />
          <ForgotPassword />
          <SignUpSuccessful />
          <ResetPasswordPage />
          <PasswordResetSuccessful />
          <div className="container mx-auto mt-10">
            <h1 className="text-4xl font-bold">Welcome to E-Shop</h1>
            <p className="mt-4">Browse our categories and discover our best deals!</p>
          </div>
          <Footer />
        </div>
      )}

      <Routes>
        <Route path="/account/*" element={<Account />} />
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/cartpage" element={<CartTab />} />
        <Route path="/women/:slug" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
