
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Properties from './pages/properties/Properties';
import Services from './pages/services/Services';
import SingleProperties from './pages/properties/SingleProperties';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from './pages/admin/Admin';
import AdminOnlyRoute from './components/header/adminOnlyRoute/AdminOnlyRoute';
import Fav from './pages/fav/Fav';
import Favorite from './pages/favorite/Favorite';
import Footer from './components/footer/Footer';
import ScrollTo from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <ScrollTo/>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/singleproperties/:id" element={<SingleProperties />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="fav" element={<Fav />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="footer" element={<Footer />} />

          <Route
            path="/admin/*"
            element={
              <AdminOnlyRoute>
                <Admin />
              </AdminOnlyRoute>
            }
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
