import './Sidebar.css'
import { personsImgs } from '../../utils/images.js';
import { navigationLinks } from '../../data/data.js'
import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../../context/SidebarContext.jsx';
// https://www.youtube.com/watch?v=UA8Sxk_mHb8&list=PLMNhwMMnPnGpN5LlLDmzve4eIDDTU7voc&index=1
function Sidebar() {

  const [activeLinkIdx] = useState(2)
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext)

  useEffect(() =>{
    if(isSidebarOpen){
      setSidebarClass("sidebar-change");
    }
    else{
      setSidebarClass("")
    }
  },[isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className='user-info'>
        <div className='info-img img-fit-cover' >
          <img src={personsImgs.person_one} alt="profile image" />
        </div>
        <span className='info-name'>alice-doe</span>
      </div>
      <nav className='navigation'>
        <ul className='nav-list'>
          {
            navigationLinks.map((navigation) => (
              <li className='nav-item' key={navigation.id}>
                <a href='#' className={`nav-link
                ${navigation.id === activeLinkIdx ? 'active' : null}`}>
                  <img src={navigation.image} className='nav-link-icon'
                    alt={navigation.title} />
                  <span className='nav-link-text'>{navigation.title}</span>
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
