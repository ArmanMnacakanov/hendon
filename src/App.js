
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About_Us/About';
import Get_In_Touch from './Components/Get_In_Touch/Get_In_Touch';
import Service from './Components/Services/Service';
import Contact from './Components//Contact_Us/Contact';
import Blog from './Components/Blog/Blog';
import FAQ from './Components/FAQ/FAQ';
import Coming_soon from './Components/Coming_Soon/Coming_Soon'
import NoPage from './Components/404_Error_Page/NoPage'
import Complex_Page from './Components/Home/Home_Components/CHOOSE_AN_APARTMENT/Complex_Page/Complex_Page'

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top when a new location is pushed onto the navigation stack
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};


function App() {
  return (
    <BrowserRouter basename="https://armanmnacakanov.github.io/">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='getintouch' element={<Get_In_Touch />} />
          <Route path='services' element={<Service />} />
          <Route path='contact' element={<Contact />} />
          <Route path='faq' element={<FAQ />} />
          <Route path='comingsoon' element={<Coming_soon />} />
          <Route path='*' element={<NoPage />} />
          <Route path='blog' element={<Blog />} />
          <Route path='Complexpage' element={<Complex_Page />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}



export default App;
