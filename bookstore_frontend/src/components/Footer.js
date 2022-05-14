import '../styles/footer.css';
import lightlogo from '../assets/light-logo.png' ;
function Footer(){
    return(
    <footer>
    <div className="footer-content">
      <img src={lightlogo} className="logo" alt=""/>
      <div className="footer-ul-container">
          <ul className="category">
              <li className="category-title">Get to Know Us</li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Investor Relations</a></li>
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Bookstore Devices</a></li>
              <li><a href="#" className="footer-link">Bookstore Science</a></li>
          </ul>
          <ul className="category">
              <li className="category-title">Let Us Help You</li>
              <li><a href="#" className="footer-link">Your Account</a></li>
              <li><a href="#" className="footer-link">Your Orders</a></li>
              <li><a href="#" className="footer-link">Shipping Rates</a></li>
              <li><a href="#" className="footer-link">Returns & Replacements</a></li>
              <li><a href="#" className="footer-link">Manage Your Devices</a></li>
              <li><a href="#" className="footer-link">Bookstore Assistant</a></li>
              <li><a href="#" className="footer-link">Help</a></li>
          </ul>
      </div>
    </div>
    </footer>
    );
}
export default Footer;