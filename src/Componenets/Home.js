import React from 'react';
import { FaAngleDown, FaBars, FaBuilding, FaCheckCircle, FaLinkedin, FaPen, FaSearch, FaStar, FaTimes, FaUser, FaUserPlus } from 'react-icons/fa';
import Navbar from '../Componenets/Navbar';
import one from '../Componenets/one.svg';
import two from '../Componenets/two.svg';
import three from '../Componenets/three.svg';
import four from '../Componenets/four.svg';

const Home = () => {
  return (
    <div style={{overflow:"hidden"}}>
    <Navbar/>
      <div>
       <div className='main-container-two-div-section'>
       <div className='main-half-page-div-one'>
        <div className='main-container-one-section'>
           <button className='prospector-button'>PROSPECTOR</button>
           <h1>Search +108 million contacts with 95% data accuracy</h1>
           <p>Other tools average 50% accuracy. UpLead guarantees 95% precision, or you get your credits back.</p>
           <div className='two-buttons-main-div'>
           <button className='start-button-navbar'>Start Free Trial</button>
           <button className='book-button-navbar'>Learn More</button>
           </div>
        </div>
        </div>
        <div className='main-half-page-div-two'>
           <div className='main-container-two-section'>
             <div className='navbar-main-two-section'>
                <ul>
                  <li>Up</li>
                  <li><FaUser/></li>
                  <li><FaBuilding/></li>
                  <li><FaBuilding/></li>
                  <li><FaBuilding/></li>
                </ul>
             </div>  
             <div>
             <div className='navbar-main-one-section'>
               <FaBars/>
               <p  style={{fontSize:"12px"}}>Contact Search</p>
               <div className='search-bar-div'>
                <FaSearch/>
                <p>Quick Search by Name or URL</p>
               </div>
             </div>
             <div>
              <div className='table-content-main-div'>
                <div className='div-ul-container'>
                  <ul className='table-heading-tr'>
                    <li className='th-text-center-th'><input type="checkbox" /> Contact <FaAngleDown/></li>
                    <li className='th-text-center-th'>COMPANY <FaAngleDown/></li>
                    <li className='th-text-center-th'>TITLE <FaAngleDown/></li>
                    <li className='th-text-center-th'>EMAIL <FaAngleDown/></li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li className='td-text-center-td'>jayasimha302@gmail.com <FaCheckCircle className='#03A6F1'/></li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                </div>
              </div>
             </div>
             </div>
           </div>
           <div className='card-two-section'>
                  <div className='card-two-section-single'>
                    <FaUserPlus color='#11BAD3' size="35" />
                    <p>Real - Time Verification</p>
                  </div>
                  <div className='card-two-section-single'>
                    <FaUserPlus color='#11BAD3' size="35" />
                    <p>Real - Time Verification</p>
                  </div>
                </div>
        </div>
       </div>
       <div className='infra-main-container'>
        <ul>
          <li>
            <div className='icon-and-name-ul-div'>
             <img src={one} alt="hello"/>
             <p>Contracts & Companies</p>
            </div>
          </li>
          <li>
          <div className='icon-and-name-ul-div'>
             <img src={two} alt="hello"/>
             <p>+50 Search Filters</p>
          </div>
          </li>
          <li>
          <div className='icon-and-name-ul-div'>
             <img src={three} alt="hello"/>
             <p>Real-Time Verification</p>
          </div>
          </li>
          <li>
          <div className='icon-and-name-ul-div'>
             <img src={four} alt="hello"/>
             <p>Worldwide Coverage</p>
          </div>
          </li>
        </ul>
       </div>
       <div className='main-container-two-div-section'>
        <div className='main-container-first-div'>
         <div className='main-container-first-content'>
           <div className='card-container-first'>
            <ul>
              <li>
                <div className='card-button-section' style={{borderBottom:"5px solid #11BAD3" , }}>
                  <FaUser color='#11BAD3' size="20" />
                  <div className='bar-bg-color'></div>
                </div>
              </li>
              <li>
                <div className='card-button-section' style={{padding:"15px"}}>
                  <FaUser color='grey' size="20" />
                  <div className='bar-bg-color' style={{backgroundColor:"grey"}}></div>
                </div>
              </li>
              <li>
                <div className='card-button-section' style={{padding:"15px"}}>
                  <FaUser color='grey' size="20" />
                  <div className='bar-bg-color' style={{backgroundColor:"grey"}}></div>
                </div>
              </li>
              
            </ul>
           </div>
           <div className='card-long-checkbox-containers'>
            <ul>
              <li>
                <div className='card-long-container'>
                <div className='checkbox-container'>
                  <input type="checkbox" />
                  <FaStar color='gold' size="20"/>
                  <img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />
                  <p>John Carter</p>
                  <div className='bg-color-grey'></div>
                  </div>
                  <FaCheckCircle color='#11BAD3' size="30"/>
                </div>
              </li>
              <li>
                <div className='card-long-container'>
                <div className='checkbox-container'>
                  <input type="checkbox" />
                  <FaStar color='gold' size="20"/>
                  <img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />
                  <p>John Carter</p>
                  <div className='bg-color-grey'></div>
                  </div>
                  <FaCheckCircle color='#11BAD3' size="30"/>
                </div>
              </li>
              <li>
                <div className='card-long-container'>
                <div className='checkbox-container'>
                  <input type="checkbox" />
                  <FaStar color='gold' size="20"/>
                  <img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />
                  <p>John Carter</p>
                  <div className='bg-color-grey'></div>
                  </div>
                  <FaCheckCircle color='#11BAD3' size="30"/>
                </div>
              </li>
              <li>
                <div className='card-long-container'>
                <div className='checkbox-container'>
                  <input type="checkbox" />
                  <FaStar color='gold' size="20"/>
                  <img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />
                  <p>John Carter</p>
                  <div className='bg-color-grey'></div>
                  </div>
                  <FaCheckCircle color='#11BAD3' size="30"/>
                </div>
              </li>
            </ul>
           </div>
         </div>
        </div>
        <div className='main-container-second-div'>
        <div className='main-container-second-content'>
           <div className='dot-ul-icon-container'>
            <img src={one} alt="hello" />
            <p style={{color:"#11BAD3"}}>ACCURACY GUARANTEE</p>
            <h1>Fewer bounces, higher<br></br> open rate</h1>
            <p>Prospect with the highest accuracy for B2B contacts. If we don’t find the right email for your leads, we don’t charge you.</p>
            <div className='dot-plus-name'>
              <div style={{width:"15px", height:"15px", borderRadius:"20px" , backgroundColor:"#11BAD3"}}></div>
              <p>108M+ contacts</p>
            </div>
            <div className='dot-plus-name'>
              <div style={{width:"15px", height:"15px", borderRadius:"20px" , backgroundColor:"#11BAD3"}}></div>
              <p>108M+ contacts</p>
            </div>
            <div className='dot-plus-name'>
              <div style={{width:"15px", height:"15px", borderRadius:"20px" , backgroundColor:"#11BAD3"}}></div>
              <p>108M+ contacts</p>
            </div>
           </div>
        </div>
        </div>
       </div>
       <div className='three-main-container-section'>
        <div className='three-main-container-one'>
        <div className='dot-ul-icon-container'>
            <img src={one} alt="hello" />
            <p style={{color:"#11BAD3"}}>ACCURACY GUARANTEE</p>
            <h1>Fewer bounces, higher<br></br> open rate</h1>
            <p>Prospect with the highest accuracy for B2B contacts. If we don’t find the right email for your leads, we don’t charge you.</p>
            <div className='dot-plus-name'>
              <div style={{width:"15px", height:"15px", borderRadius:"20px" , backgroundColor:"#11BAD3"}}></div>
              <p>108M+ contacts</p>
            </div>
            <div className='dot-plus-name'>
              <div style={{width:"15px", height:"15px", borderRadius:"20px" , backgroundColor:"#11BAD3"}}></div>
              <p>108M+ contacts</p>
            </div>
            <div className='dot-plus-name'>
              <div style={{width:"15px", height:"15px", borderRadius:"20px" , backgroundColor:"#11BAD3"}}></div>
              <p>108M+ contacts</p>
            </div>
           </div>
        </div>
        <div className='three-main-container-two'>
        <div className='main-container-two-section' style={{height:"400px"}}>
             <div>
             <div className='navbar-main-one-section'>
               <FaBars/>
               <p  style={{fontSize:"12px"}}>Contact Search</p>
               <div className='search-bar-div'>
                <FaSearch/>
                <p>Quick Search by Name or URL</p>
               </div>
             </div>
             <div>
              <div className='table-content-main-div' style={{height:"340px"}}>
                <div className='div-ul-container'>
                  <ul className='table-heading-tr'>
                    <li className='th-text-center-th'><input type="checkbox" /> Contact <FaAngleDown/></li>
                    <li className='th-text-center-th'>COMPANY <FaAngleDown/></li>
                    <li className='th-text-center-th'>TITLE <FaAngleDown/></li>
                    <li className='th-text-center-th'>EMAIL <FaAngleDown/></li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li className='td-text-center-td'>jayasimha302@gmail.com <FaCheckCircle className='#03A6F1'/></li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                  <ul className='tr-tag-main-tr'>
                    <li className='td-text-center-td'><input type="checkbox" /><img className='img-tag-data' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="hello" />John Carter</li>
                    <li className='td-text-center-td'><FaLinkedin color='#03A6F1' />Linkedin</li>
                    <li>Business Development</li>
                    <li>jayasimha302@gmail.com</li>
                  </ul>
                </div>
              </div>
             </div>
             </div>
             <div className='popup-section-container'>
               <p>Search Criteria</p>
               <div>
                <ul>
                  <li>
                    <div className='popup-single-div-colr'>
                    <div className='popup-sub-icons-div'>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                      <div className='popup-sub-icons-div'> <FaPen/>
                      <FaTimes/>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className='popup-single-div-colr'  >
                    <div className='popup-sub-icons-div' style={{color:"grey"}}>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                    </div>
                  </li>
                  <li>
                    <div className='popup-single-div-colr'>
                    <div className='popup-sub-icons-div' style={{color:"grey"}}>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                    </div>
                  </li>
                  <li>
                    <div className='popup-single-div-colr'>
                    <div className='popup-sub-icons-div'>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                    </div>
                  </li>
                  <li>
                    <div className='popup-single-div-colr'>
                    <div className='popup-sub-icons-div' style={{color:"grey"}}>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                    </div>
                  </li>
                  <li>
                    <div className='popup-single-div-colr'>
                    <div className='popup-sub-icons-div' style={{color:"grey"}}>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                    </div>
                  </li>
                  <li>
                    <div className='popup-single-div-colr'>
                    <div className='popup-sub-icons-div'>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                    </div>
                  </li>
                  <li>
                    <div className='popup-single-div-colr'>
                    <div className='popup-sub-icons-div' style={{color:"grey"}}>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                    </div>
                  </li>
                  <li>
                    <div className='popup-single-div-colr'>
                    <div className='popup-sub-icons-div'>
                    <FaBuilding/>
                      <p>Industry</p>
                    </div>
                    </div>
                  </li>
                </ul>
               </div>
             </div>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Home;