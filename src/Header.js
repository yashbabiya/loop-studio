import {useEffect} from 'react'
import './css/styles.css'
import logo from './../src/images/logo.svg'
import burg from '././images/icon-hamburger.svg'
import close from '././images/icon-close.svg'
const Header = () => {
    
    function menu(){
        document.querySelector(".nav").style.display = "none";
        document.querySelector("#y").style.display = "block";
        document.querySelector("#x").style.display = "none";


    }
    function menuc(){
        document.querySelector(".nav").style.display = "flex";
        document.querySelector("#x").style.display = "block";
        document.querySelector("#y").style.display = "none";

    }
    return (
    <div className="header">
        <img src={logo} alt="ok"/>    
    <div className="nav">
        <li>About</li>
        <li>Careers</li>
        <li>Events</li>
        <li>Products</li>
        <li>Support</li>
    </div>
    <div className="burger" >
        <img src={burg} id="y" onClick={menuc} alt=""/>
        <img src={close} id="x" onClick={menu} alt=""/>

    </div>
    </div> 
    );
}
 
export default Header;