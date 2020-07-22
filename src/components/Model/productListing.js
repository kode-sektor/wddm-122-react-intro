import React from 'react';

const productList = () => {

	const productModel = [
	    {
	        title : "Blackberry",
	        description : "Black Blackberry Phone",
	        price : "70",
	        featured: false,
	        imgPath : "1.png",
	        category : "Black Blackberry Phone"
	    },
	    {
	        title : "Samsung S10",
	        description : "Samsung Latest S10 with a New Experience",
	        price : "700",
	        featured: true,
	        imgPath : "2.png",
	        category : "phone"
	    },
	    {
	        title : "IPhone X",
	        description : "Comes with a range of the latest applications ",
	        price : "1100",
	        featured: false,
	        imgPath : "3.png",
	        category : "phone, "
	    },
	    {
	        title : "Samsung S10+",
	        description : "",
	        price : "900",
	        featured: false,
	        imgPath : "4.png",
	        category : "phone"
	    },



	    {
	        title : "Anchor Gold Chain",
	        description : "24 carat-golden sparkling chain",
	        price : "1700",
	        featured: false,
	        imgPath : "jewelry-1.png",
	        category : "jewelry"
	    },
	    {
	        title : "Stone-Gold Chain",
	        description : "Reflects like the sun",
	        price : "2300",
	        featured: true,
	        imgPath : "jewelry-2.png",
	        category : "jewelry"
	    },
	    {
	        title : "Watch and Precious Stones",
	        description : "Brighter than the stars",
	        price : "900",
	        featured: false,
	        imgPath : "jewelry-3.png",
	        category : "jewelry"
	    },
	    {
	        title : "Diamond Bead Chain",
	        description : "Sparkle summer or winter",
	        price : "4500",
	        featured: false,
	        imgPath : "jewelry-4.png",
	        category : "jewelry"
	    },
	    {
	        title : "Figaro 18-Carat Gold Chain",
	        description : "Only few could outrival",
	        price : "300",
	        featured: false,
	        imgPath : "jewelry-5.png",
	        category : "jewelry"
	    },
	    {
	        title : "Byzantine Chain",
	        description : "See in the dark",
	        price : "3600",
	        featured: false,
	        imgPath : "jewelry-6.png",
	        category : "jewelry"
	    },
	    {
	        title : "Pearl Chain",
	        description : "Sparkle, Dazzle, Sizzle",
	        price : "2900",
	        featured: false,
	        imgPath : "jewelry-7.png",
	        category : "jewelry"
	    },
	    {
	        title : "Emerald Bangle Earring",
	        description : "Lightweight Ear Gold Toy",
	        price : "1600",
	        featured: false,
	        imgPath : "jewelry-8.png",
	        category : "jewelry"
	    },
	    {
	        title : "Arespark Butane Torch",
	        description : "Professional Culinary Torch Refillable Portable Blow Torch Lighter with Safety Lock",
	        price : "150",
	        featured: false,
	        imgPath : "bukane-torch.png",
	        category : "kitchen"
	    },





	    {
	        title : "AccuWeight Digital Kitchen",
	        description : "Multifunction Meat Food Scale Tempered Glass surface with LCD Display",
	        price : "300",
	        featured: false,
	        imgPath : "kitchen-scale.png",
	        category : "kitchen"
	    },
	    {
	        title : "Etekcity Digital Kitchen Scale",
	        description : "Stainless Steel Platform Baking Scale with Removable Bowl, Large LCD Screen",
	        price : "150",
	        featured: true,
	        imgPath : "kitchen-scale-2.png",
	        category : "kitchen"
	    },
	    {
	        title : "BakeWare Rack",
	        description : "YouCopia 15017 StoreMore Bakeware Rack, White",
	        price : "150",
	        featured: false,
	        imgPath : "bakeware-rack.png",
	        category : "kitchen"
	    },
	    {
	        title : "Grocery Bag Holder",
	        description : "Saver and Dispenser, Wall-Secure, Stainless Steel, Wide Opening for Ease of Access ",
	        price : "90",
	        featured: false,
	        imgPath : "grocery-holder.png.png",
	        category : "kitchen"
	    },
	    {
	        title : "Grocery Bag Holder",
	        description : "Saver and Dispenser, Wall-Secure, Stainless Steel, Wide Opening for Ease of Access ",
	        price : "90",
	        featured: false,
	        imgPath : "grocery-holder.png.png",
	        category : "kitchen"
	    },
	    {
	        title : "SimpleHouseware Kitchen Cabinet Pantry Pan",
	        description : "SimpleHouseware Kitchen Cabinet Pantry Pan and Pot Lid Organizer Rack Holder, Bronze",
	        price : "125",
	        featured: false,
	        imgPath : "cabinet-pantry.png",
	        category : "kitchen"
	    },
	    {
	        title : "Stackable 3 Tier Sliding Basket",
	        description : "SimpleHouseware Stackable 3 Tier Sliding Basket Organizer Drawer, Chrome",
	        price : "80",
	        featured: true,
	        imgPath : "stackable-basket.png",
	        category : "kitchen"
	    },
	    {
	        title : "Kitchen Towels",
	        description : "Desai® Kitchen Towel Set, 12 Pack, Hypoallergenic 100% Pure Organic Cotton, Tea Towels Cotton, Kitchen Towels Cotton, Dish Cloths Cotton, Kitchen Towels",
	        price : "300",
	        featured: false,
	        imgPath : "kitchen-towel.png",
	        category : "kitchen"
	    },



	    {
	        title : "Reebok Work Men's",
	        description : "Reebok Work Men's Sublite Cushion IB4041 Industrial Shoe",
	        price : "220",
	        featured: true,
	        imgPath : "shoe-reebok.png",
	        category : "shoe"
	    },
	    {
	        title : "FilaMens Shoe",
	        description : "FilaMens F-13v Lea/Syn Fashion Sneaker",
	        price : "300",
	        featured: false,
	        imgPath : "shoe-fila.png",
	        category : "shoe"
	    },
	    {
	        title : "Merrell Womens Shoe",
	        description : "Merrell Womens Moab 2 Vent Hiking Shoes",
	        price : "150",
	        featured: false,
	        imgPath : "shoe-merrell.png",
	        category : "shoe"
	    },
	    {
	        title : "Callaway Mens Shoe",
	        description : "Callaway Mens Balboa TRX Golf Shoe",
	        price : "120",
	        featured: false,
	        imgPath : "shoe-callaway.png",
	        category : "shoe"
	    },
	    {
	        title : "Caitin",
	        description : "Lightweight Breathable Running Tennis Sneakerse",
	        price : "125",
	        featured: false,
	        imgPath : "shoe-caitin.png",
	        category : "shoe"
	    },
	    {
	        title : "Callaway Mens Shoe",
	        description : "Salomon Mens Speedcross 5 Running Shoe",
	        price : "275",
	        featured: true,
	        imgPath : "shoe-salomon.png",
	        category : "shoe"
	    },
	    {
	        title : "Belilent Womens Shoe",
	        description : "Women Lightweight Sneakers Work Hiking Running Shoes Breathable Air Cushion Indoor Outdoor",
	        price : "175",
	        featured: false,
	        imgPath : "shoe-belilent.png",
	        category : "shoe"
	    },
	    {
	        title : "Under Armour",
	        description : "Womens Charged Assert 8 Running Shoe",
	        price : "225",
	        featured: false,
	        imgPath : "shoe-under-armour.png",
	        category : "shoe"
	    },


	    {
	        title : "Lsvtr-US Quartz Wristwatch",
	        description : "LsvtrUS Popular Low-key Men's Quartz Wristwatch Minimalist Connotation",
	        price : "205",
	        featured: true,
	        imgPath : "watch-lsvtrus.png",
	        category : "watch"
	    },
	    {
	        title : "Michael Kors Watch",
	        description : "Michael Kors Slim Runway Stainless Steel Watch",
	        price : "205",
	        featured: false,
	        imgPath : "watch-kors.png",
	        category : "watch"
	    },
	    {
	        title : "Michael Kors Watch",
	        description : "Michael Kors Slim Runway Stainless Steel Watch",
	        price : "205",
	        featured: false,
	        imgPath : "watch-kors.png",
	        category : "watch"
	    },
	    {
	        title : "Senors Watches",
	        description : "Men's Watches Mechanical Skeleton classNameic Luxury",
	        price : "395",
	        featured: false,
	        imgPath : "watch-senors.png",
	        category : "watch"
	    },
	    {
	        title : "Casio G-Shock Mens",
	        description : "Casio G-Shock Mens GA-700UC 4.6 out of 5 stars",
	        price : "200",
	        featured: false,
	        imgPath : "watch-casio-gshock.png",
	        category : "watch"
	    },
	    {
	        title : "Garmin Vivoactive 3 Smartwatch",
	        description : "Black & Stainless, 010-01769-00",
	        price : "205",
	        featured: true,
	        imgPath : "watch-garmin-vivoactive.png",
	        category : "watch"
	    },
	    {
	        title : "HUAWEI Watch GT 2 2019",
	        description : "HUAWEI Watch GT 2 2019 Bluetooth SmartWatch",
	        price : "305",
	        featured: false,
	        imgPath : "watch-huawei-gt.png",
	        category : "watch"
	    },
	    {
	        title : "Samsung Galaxy Watch Active",
	        description : "Samsung Galaxy Watch Active - Silver",
	        price : "200",
	        featured: true,
	        imgPath : "watch-samsung-watch-active.png",
	        category : "watch"
	    },
	    {
	        title : "GUANK Men’s Wooden Watch",
	        description : "GUANK Men’s Wooden Watches Personalized Engraved",
	        price : "125",
	        featured: false,
	        imgPath : "watchh-guanke-wooden.png",
	        category : "watch"
	    }

	];

	const dispProducts = () => {
		return productModel.slice(0, 15).map((item, i) => {
			return (
				<li key={i}>
					<a href="/">
						<div className="product-listing-single">
						    <h4>{item.title}</h4>
							<h5>Price : $ CAD {item.price}</h5>
						    <figure>
						    	<img src={`/img/${item.imgPath}`}/>
						    	<figcaption>
						    		<p>{item.description}</p>
						    	</figcaption>
						    </figure>
						</div>
					</a>
				</li>
			)
			
		});
	}

	return (
		<>{dispProducts()}</>
	)

}

export default productList;

