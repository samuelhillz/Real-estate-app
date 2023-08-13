import React from 'react'
import Navbar from '../../components/header/admin/navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import ViewProducts from '../../components/header/admin/viewProducts/ViewProducts';
import AddProduct from '../../components/header/admin/addProduct/AddProduct';

const Admin = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div><div className="content">
        <Routes>
            <Route path='viewproduct' element={<ViewProducts/>}/>
            <Route path='addproduct' element={<AddProduct/>}/>
        </Routes>
      </div>
    </section>
  );
}

export default Admin