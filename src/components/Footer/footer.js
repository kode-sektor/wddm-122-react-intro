import React from 'react';

import {Link} from 'react-router-dom';

const Footer = () => { 
	
	return (

		<footer id="page-footer" className="page-footer" role="contentinfo">

		    <div className="primary-footer-group">

		        <section className="primary-footer">
		            <h4 className="footer-header">Humber-Zon Cares</h4>
		            <ul className="footer-links">
		                <li><a href="/">Careers</a></li>                
		                <li><a href="/">Press Releases</a></li>
		                <li><a href="/">Investor Relations</a></li>
		            </ul>
		        </section>
		                                  
		        <section className="primary-footer">
		            <h4 className="footer-header">Make Money with Us</h4>
		            <ul className="footer-links">
		                <li><a href="/">Sell on Humber-Zon</a></li>                
		                <li><a href="/">Press Releases</a></li>
		                <li><a href="/">Make Advertisements</a></li>
		                <li><a href="/">Independently Publish with Us</a></li>
		                <li><a href="/">Make Advertisements</a></li>
		            </ul>
		        </section>
		                      
		        <section className="primary-footer">
		            <h4 className="footer-header">Humber-Zon Payment Products</h4>
		            <ul className="footer-links">
		                <li><a href="/">Humber-Zon.ca MasterCard</a></li>                
		                <li><a href="/">Points Shopping</a></li>
		                <li><a href="/">Reload Your Balance</a></li>
		                <li><a href="/">Gift Cards</a></li>
		                <li><a href="/">Humber-Zon Cash</a></li>
		            </ul>
		        </section>

		        <section className="primary-footer">
		            <h4 className="footer-header">We Care</h4>
		            <ul className="footer-links">
		                <li><a href="/">COVID-19 and Humber-Zon</a></li>                
		                <li><a href="/">Shipping Rates &amp; Policies</a></li>
		                <li><a href="/">Returns Are Easy</a></li>
		                <li><a href="/">Gift Cards</a></li>
		                <li><a href="/">Customer Service</a></li>
		                <li><a href="/">Manage your Content &amp; Devices</a></li>
		            </ul>
		        </section>

		    </div>

		    <section className="sec-footer">
		        <section>
		            <ul>
		                <li><a href="/">Conditions of Use</a></li>
		                <li><a href="/">Privacy Of Use</a></li>
		                <li><a href="/">Interest-Based Ads</a></li>
		                <li><a href="/">&copy; 2008-2020, Humber-Zon Inc., or its affiliates</a></li>
		            </ul>
		        </section>
		        <section className="footer-social">
		            <ul>
		                <li><a href="/"><i className="fa fa-twitter"></i></a></li>
		                <li><a href="/"><i className="fa fa-facebook"></i></a></li>
		                <li><a href="/"><i className="fa fa-behance"></i></a></li>
		                <li><a href="/"><i className="fa fa-globe"></i></a></li>
		            </ul>
		        </section>
		    </section>

		    <div className="to-top">
		        <a href="/">Back to Top</a>
		    </div>

		</footer>

	)
}

export default Footer;

