const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
      <img src="img/light-logo.png" class="logo" alt="">
      <div class="footer-ul-container">
          <ul class="category">
              <li class="category-title">Get to Know Us</li>
              <li><a href="#" class="footer-link">Careers</a></li>
              <li><a href="#" class="footer-link">Blog</a></li>
              <li><a href="#" class="footer-link">Investor Relations</a></li>
              <li><a href="#" class="footer-link">About Us</a></li>
              <li><a href="#" class="footer-link">Bookstore Devices</a></li>
              <li><a href="#" class="footer-link">Bookstore Science</a></li>
          </ul>
          <ul class="category">
              <li class="category-title">Let Us Help You</li>
              <li><a href="#" class="footer-link">Your Account</a></li>
              <li><a href="#" class="footer-link">Your Orders</a></li>
              <li><a href="#" class="footer-link">Shipping Rates</a></li>
              <li><a href="#" class="footer-link">Returns & Replacements</a></li>
              <li><a href="#" class="footer-link">Manage Your Devices</a></li>
              <li><a href="#" class="footer-link">Bookstore Assistant</a></li>
              <li><a href="#" class="footer-link">Help</a></li>
          </ul>
      </div>
    </div>
    `;
}

createFooter();