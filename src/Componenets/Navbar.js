import React,{useState} from 'react';
import { FaAngleDown, FaArrowDown, FaBars, FaTimes, FaUser, FaUserCircle,  } from "react-icons/fa";
import one from './one.svg';

const Navbar = () => {

const [show, setShow] =  useState(false);
const Showdiv =()=>{
    if(show=== true){
        setShow(false);
    }else{
        setShow(true);
    }
}

  return (
    <div>
        <div>
            <div className='main-container-navbar'>
             <div className='logo-name-div'>
              <h1><span>Up</span>Lead</h1>
             </div>
             <div className={show=== true ? "main-two-section-bar active" : "main-two-section-bar"}>
                <div className='main-one-container-bar'>
                  <ul>
                    <li><p className='p-tag-main-container'>Products <FaAngleDown/></p><div className='over-table-div'>
                      <div>
                        <ul>
                          <li>
                            <div className='img-p-tag-container'>
                              <img src={one} alt="hello"/>
                              <p>Prospector</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div></li>
                    <li>Pricing</li>
                    <li>Our Data</li>
                    <li>Reviews</li>
                    <li>About Us</li>
                  </ul>
                </div>
                <div className='main-two-container-bar'>
                  <ul>
                    <li><p className='p-tag-main-container'><FaUser/> &nbsp;&nbsp;Login</p></li>
                    <li><button className='book-button-navbar'>Book A Demo</button></li>
                    <li><button className='start-button-navbar'>Start Free Trial</button></li>
                  </ul>
                </div>
             </div>
             <div onClick={Showdiv} className="fa-bars-icon">
                {
                    show === true ? (<FaTimes/>) : (<FaBars/>)
                }
             </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;