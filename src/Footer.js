import './css/styles.css'
import logo from './../src/images/logo.svg'

const Footer = () => {
    return ( <div className="footer">
    
    
  <div className="left">
    <div className="logo">
    <img src={logo} alt="ok"/>      
    </div>
    <div className="nav">
      <li>About</li>
      <li>Careers</li>
      <li>Events</li>
      <li>Products</li>
      <li>Support</li>
    </div>
  </div>

  <div className="right">
    <div className="social">
        <li><i class="im im-facebook"></i></li>
        <li><i class="im im-twitter"></i></li>
        <li><i class="im im-pinterest"></i></li>
        <li><i class="im im-instagram"></i></li>
    </div>
    <p>© 2021 Loopstudios. All rights reserved.</p>
  </div>
    </div> );
}
 
export default Footer;