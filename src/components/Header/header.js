import React from 'react';
import {Link} from 'react-router-dom';


const Header = (props) => {

	return (

		<header class="page-header">

		    <div class="header-area">

		        <div class="logo">
		            <a href="/"><img src="/img/humber-zon-sm.png" alt=""/></a>

		        </div>

		        <nav class="main-menu">

		            <ul id="navigation" class="main-menu-nav">  

		                <li><a href="/productListing">Shop</a></li>
		                <li><a href="#best-sellers">Best Sellers</a></li>
		                <li class=""><a href="#">Latest</a>
		                    <ul class="submenu">
		                        <li><a href="/">Product list</a></li>
		                        <li><a href="/"> Product Details</a></li>
		                    </ul>
		                </li>                       

		                <li class="categories-first"><a href="/">Computers</a></li>
		                <li class="categories"><a href="/">Electronics</a></li>
		                <li class="categories-last"><a href="/">Books</a></li>

		                <li><a href="/">Sell</a></li>
		                <li><a href="/">Make Purchase</a></li>

		                <li><a href="#">Pages</a>
		                    <ul class="submenu">
		                        <li><a href="/">Login</a></li>
		                        <li><a href="/">Cart</a></li>
		                        <li><a href="/">Element</a></li>
		                        <li><a href="/">Confirmation</a></li>
		                        <li><a href="/">Product Checkout</a></li>
		                    </ul>
		                </li>
		                <li><a href="/">Contact</a></li>
		            </ul>

		            <ul class="user-related-links">
		                <li class="nav-search">
		                    <span class="fa fa-search"></span>
		                </li>
		                <li> <a id="login-create-account" href="/login"><span class="fa fa-user"></span></a></li>
		                <li><a href="/cart"><span class="fa fa-shopping-cart"></span></a></li>

		                <li><button type="button" id="toggle-btn-nav" class="toggle-btn-nav"><span class="fa fa-bars"></span></button></li>

		            </ul>

		        </nav>

		    </div>

		</header>
	)

}

export default Header; 