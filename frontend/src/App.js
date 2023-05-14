import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Home/Footer/Footer';
import NavigationBar from './Components/Home/NavigationBar/Navbar';
import SearchRental from './Pages/SearchRental';
import Home from './Pages/Home';
import  Contact  from './Pages/Contact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './Components/ScrollToTop';
import { Provider } from 'react-redux';
import Store from './redux/store';

import { useEffect } from 'react';
import AdminPage from './Components/AdminPage/AdminPage';
// import { RentalCardInfo } from './Components/Search Rentals/RentalCardInfo';

function App() {
  useEffect(()=>{
    toast.success("Welcome to my site !");
  },[])
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <div className="App">
          <ToastContainer/>
            <ScrollToTop />
            <NavigationBar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/SearchRentals' element={<SearchRental/>}/>
              <Route path='/Contact' element={<Contact/>}/>
              <Route path='/AdminPage' element={<AdminPage/>}/>
              {/* <Route path='/RentalCardInfo/:name' element={<RentalCardInfo/>}/> */}
            </Routes>
          <Footer/>
        </div>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
