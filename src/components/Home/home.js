import React from 'react';


const Home = () => {

	return (

		<>
		
		<section class="hero promo-section"  role="banner">

			<section class="carousel-container" id="carousel-container">
				<div id="slider" class="carousel">
				    <section class="slides">
				  		<div class="slide" data-state="active">
				  			<div class="slide-content dre-beatz">
				  				<figure class="slide-product-img">
				  					<img src="/img/girl-with-headphones.png"/>
				  				</figure>
				  				<div class="slide-watchword">
				  					<h2 class="slide-title-ad">Beats by <span>Chordratic</span></h2>
				  					<div><p>Headphones on the move</p>
				  					<img class="slide-product-logo" src="/img/dre-logo.png"/></div>
				  					<a class="cta-btn" href="/productListing">Shop Now</a>
				  				</div>
				  			</div>
				  		</div>
				  		<div class="slide">
				  			<div class="slide-content nikon">
				  				<figure class="slide-product-img">
				  					<img src="/img/girl-with-nikkon.png"/>
				  				</figure>
				  				<div class="slide-watchword">
				  					<h2 class="slide-title-ad">See into the <span>Far Reaches</span></h2>
				  					<div><p>Your eyes are not enough</p>
				  					<img class="slide-product-logo" src="/img/nikon-logo.png"/></div>
				  					<a class="cta-btn" href="/productListing">Shop Now</a>
				  				</div>
				  			</div>
				  		</div>
				  		<div class="slide">
				  			<div class="slide-content nike">
				  				<figure class="slide-product-img">
				  					<img src="/img/sportsman-with-headband.png"/>
				  				</figure>
				  				<div class="slide-watchword">
				  					<h2 class="slide-title-ad">A tick Speaks Louder<span>than Words</span></h2>
				  					<div><p>The sign of the swoosh!</p>
				  					<img class="slide-product-logo"src="/img/nike-logo.png"/></div>
				  					<a class="cta-btn" href="/productListing">Shop Now</a>
				  				</div>
				  			</div>
				  		</div>
				    </section>
				    <section class="indicators">
					  	<input class="indicator" name="indicator" data-slide="1" data-state="active" checked type="radio" />
					  	<input class="indicator" name="indicator" data-slide="2" type="radio" />
					  	<input class="indicator" name="indicator" data-slide="3" type="radio" />
				  </section>
				</div>
			</section>

			<img class="promo-coupon" src="/img/coupon.png"/>

		</section>

		<section class="product-listing">

			<div class="page-product">

				<h2 class="section-title">Product Listings</h2>

			</div>

		</section>

		<script type="text/javascript" src="/js/index.js" defer></script>

		</>

	)
}

export default Home;

