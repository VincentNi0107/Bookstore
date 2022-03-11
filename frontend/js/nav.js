const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="./img/dark-logo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="Search new books">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="./img/user.png" alt=""></a>
                <a href="#"><img src="./img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Today's Deals</a></li>
        <li class="link-item"><a href="#" class="link">Registry</a></li>
        <li class="link-item"><a href="#" class="link">Customer Service</a></li>
        <li class="link-item"><a href="#" class="link">Gift Cards</a></li>
        <li class="link-item"><a href="#" class="link">Sell</a></li>
        </ul>
    `;
}

createNav();