import React,{useState} from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
export default function navbar() {
 const [open,setOpen] = useState(false);


  return (
    <nav className='nav-container'>
        <h1 className='logo'>Burguer Heaven</h1>
        <div className="openMenu " onClick={()=>setOpen(true)}><ion-icon name="menu-outline" ></ion-icon></div>
        <ul className={open? 'mainMenu active' : 'mainMenu'}>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li className='order'><a href="#order">Order Online</a></li>
            <div className='closeMenu' onClick={()=>setOpen(false)}><ion-icon name="close-outline"></ion-icon></div>
        </ul>
    </nav>
  )
}
