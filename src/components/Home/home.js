import React from 'react';

import ProductList from '../Model/productListing';


const Home = () => {

	return (

		<>
		
		<section className="hero promo-section"  role="banner">

			<section className="carousel-container" id="carousel-container">
				<div id="slider" className="carousel">
				    <section className="slides">
				  		<div className="slide" data-state="active">
				  			<div className="slide-content dre-beatz">
				  				<figure className="slide-product-img">
				  					<img src="/img/girl-with-headphones.png"/>
				  				</figure>
				  				<div className="slide-watchword">
				  					<h2 className="slide-title-ad">Beats by <span>Chordratic</span></h2>
				  					<div><p>Headphones on the move</p>
				  					<img className="slide-product-logo" src="/img/dre-logo.png"/></div>
				  					<a className="cta-btn" href="/productListing">Shop Now</a>
				  				</div>
				  			</div>
				  		</div>
				  		<div className="slide">
				  			<div className="slide-content nikon">
				  				<figure className="slide-product-img">
				  					<img src="/img/girl-with-nikkon.png"/>
				  				</figure>
				  				<div className="slide-watchword">
				  					<h2 className="slide-title-ad">See into the <span>Far Reaches</span></h2>
				  					<div><p>Your eyes are not enough</p>
				  					<img className="slide-product-logo" src="/img/nikon-logo.png"/></div>
				  					<a className="cta-btn" href="/productListing">Shop Now</a>
				  				</div>
				  			</div>
				  		</div>
				  		<div className="slide">
				  			<div className="slide-content nike">
				  				<figure className="slide-product-img">
				  					<img src="/img/sportsman-with-headband.png"/>
				  				</figure>
				  				<div className="slide-watchword">
				  					<h2 className="slide-title-ad">A tick Speaks Louder<span>than Words</span></h2>
				  					<div><p>The sign of the swoosh!</p>
				  					<img className="slide-product-logo"src="/img/nike-logo.png"/></div>
				  					<a className="cta-btn" href="/productListing">Shop Now</a>
				  				</div>
				  			</div>
				  		</div>
				    </section>
				    <section className="indicators">
					  	<input className="indicator" name="indicator" data-slide="1" data-state="active" defaultChecked type="radio" />
					  	<input className="indicator" name="indicator" data-slide="2" type="radio" />
					  	<input className="indicator" name="indicator" data-slide="3" type="radio" />
				  </section>
				</div>
			</section>

			<img className="promo-coupon" src="/img/coupon.png"/>

		</section>

		<section className="product-listing">

			<div className="page-product">

				<h2 className="section-title">Product Listings</h2>

				<ul class="product-list">
					<ProductList/>
				</ul>

			</div>

		</section>

		<script type="text/javascript" src="/js/index.js" defer></script>

		</>

	)
}

export default Home;

