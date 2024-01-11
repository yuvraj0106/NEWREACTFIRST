// Navbar.js
import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='main'>
      <nav className='navbar'>

        <div className='navbar-brand'>
           <div className='hhh'>
        <h3 className='o'>O</h3><h3 className='l'>L</h3><h3 className='x'>X</h3>
        </div>
          <input   type="text" placeholder='search' className='sr' />

          <input type="text" placeholder='Finds Laptop, Mobiles and more ..' className='find' />
          <li><button class="fa-solid fa-magnifying-glass">
          </button></li>
          <a href="">
          <i class="fa-solid fa-magnifying-glass"></i>      
              </a>

        </div>


        <ul className='navbar-list'>
        <div className='end'>
          <select  id="select">
            <option value="">ENGLISH</option>
            <option value="">MARATHI</option>
            <option value="">HINDI</option>
          </select>
         
         <li className='navbar-item'><h5>Login</h5></li>
          <button className='navbar-itemm'>SELL</button>
  </div>       
        </ul>

      </nav>
      <div className='adver'>
        <img src="https://tpc.googlesyndication.com/simgad/14998257257012309049?sqp=4sqPyQQ7QjkqNxABHQAA
        tEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qmia4lnN5bk0PxE2GWkj2edY77yUA" alt="" />
      </div>
    </div>

  );
};

export default Navbar;
