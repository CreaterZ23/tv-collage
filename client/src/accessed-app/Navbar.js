import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'

export default function Navbar({ handleLogout }) {

    return (
        <Menu isOpen={false}>
            <nav>
                <Link to='/home'><span className='menu-item' >Home</span></Link>
                <Link to='/addshow'><span className='menu-item' >Add Your Show</span></Link>
                <Link to='/favorites'><span className='menu-item' >Favorite</span></Link>
                <Link to='/'><span className='menu-item' onClick={handleLogout}>Log out</span></Link>
            </nav>
        </Menu>
    )
}