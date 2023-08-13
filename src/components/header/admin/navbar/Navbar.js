import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <section>
            <ul className='admin-link'>
                <li>
                    <NavLink style={{textDecoration:'none', color:'white'}} to='/admin/addproduct'>Add Products</NavLink>
                </li>
                <li>
                    <NavLink style={{textDecoration:'none', color:'white'}} to='/admin/viewproduct'>View Products</NavLink>
                </li>
                
                
                </ul>
       </section>
    </div>
  )
}

export default Navbar