import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {

	return (

		<header className="page-header">

		    <div className="header-area">

		        <div className="logo">
		            <a href="/"><img src="/img/humber-zon-sm.png" alt=""/></a>

		        </div>

		        <nav className="main-menu">

		            <ul id="navigation" className="main-menu-nav">  

		                <li><a href="/productListing">Shop</a></li>
		                <li><a href="#best-sellers">Best Sellers</a></li>
		                <li className=""><a href="#">Latest</a>
		                    <ul className="submenu">
		                        <li><a href="/">Product list</a></li>
		                        <li><a href="/"> Product Details</a></li>
		                    </ul>
		                </li>                       

		                <li className="categories-first"><a href="/">Computers</a></li>
		                <li className="categories"><a href="/">Electronics</a></li>
		                <li className="categories-last"><a href="/">Books</a></li>

		                <li><a href="/">Sell</a></li>
		                <li><a href="/">Make Purchase</a></li>

		                <li><a href="#">Pages</a>
		                    <ul className="submenu">
		                        <li><a href="/">Login</a></li>
		                        <li><a href="/">Cart</a></li>
		                        <li><a href="/">Element</a></li>
		                        <li><a href="/">Confirmation</a></li>
		                        <li><a href="/">Product Checkout</a></li>
		                    </ul>
		                </li>
		                <li><a href="/">Contact</a></li>
		            </ul>

		            <ul className="user-related-links">
		                <li className="nav-search">
		                    <span className="fa fa-search"></span>
		                </li>
		                <li> <a id="login-create-account" href="/login"><span className="fa fa-user"></span></a></li>
		                <li><a href="/cart"><span className="fa fa-shopping-cart"></span></a></li>

		                <li><button type="button" id="toggle-btn-nav" className="toggle-btn-nav"><span className="fa fa-bars"></span></button></li>

		            </ul>

		        </nav>

		    </div>

		</header>
	)

}

export default Header; 