import React, { useContext } from 'react'
import './ContentTop.css'
import { SidebarContext } from '../../context/SidebarContext'
import { iconsImgs } from '../../utils/images'

function ContentTop() {

    const { toggleSidebar } = useContext(SidebarContext)
    return (
        <div className='main-content-top'>
            <div className='content-top-left'>
                <button type='button' className='sidebar-toggle' onClick={() => toggleSidebar()}>
                    <img src={iconsImgs.menu} alt='menu icon' />
                </button>
                <h3 className='content-top-tittle'>Home</h3>
            </div>
            <div className='content-top-btns'>
                <button type='button' className='search-btn content-top-btn'>
                    <img src={iconsImgs.search} alt='search icon' />
                </button>
                <button type='button' className='notificatio-btn content-top-btn'>
                    <img src={iconsImgs.bell} alt='bell icon' />
                    <span className='notification-btn-dot'></span>
                </button>
            </div>
        </div>
    )
}

export default ContentTop
