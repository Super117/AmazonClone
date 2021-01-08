import React, { Component } from 'react';
import styled from 'styled-components';

const StyledItemLine = styled.div`
	padding: 25px;	
	width: 100%;
	box-sizing: border-box;
	
	& > div {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		max-width: 1100px;
		margin: auto;

		@media (max-width: 768px) {
			flex-direction: column;
		}
		
		div {
			text-align: left;
			
			@media (max-width: 768px) {
				margin-bottom: 15px;
			}
			
			ul {
				list-style: none;
				li {
					margin-top: 5px;
					a {
						color: white;
						text-decoration: none;
						font-size: 14px;
					}
				}
			}
		}
	}
`;

const StyledFooter = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #232F3E;
	text-align: center;
	margin: auto;
	color: white;

	${StyledItemLine}:first-child {
		border-bottom: 1px solid #3a4553;
	}

	${StyledItemLine}:nth-child(n+3) {
		background: #131A22;
	}
`;


class Footer extends Component {

	render() {
		return (
			<StyledFooter>
				<StyledItemLine>
					<div>
						<div>
							<h3>Get to Know Us</h3>
							<ul>
								<li><a href="/">Careers</a></li>
								<li><a href="/">Blog</a></li>
								<li><a href="/">About Amazon</a></li>
								<li><a href="/">Press Center</a></li>
								<li><a href="/">Investor Relations</a></li>
								<li><a href="/">Amazon Devices</a></li>
								<li><a href="/">Amazon Tour</a></li>
							</ul>
						</div>
						<div>
							<h3>Make Money with Us</h3>
							<ul>
								<li><a href="/">Sell products on Amazon</a></li>
								<li><a href="/">Sell apps on Amazon</a></li>
								<li><a href="/">Become an Affiliate</a></li>
								<li><a href="/">Advertise Your Products</a></li>
								<li><a href="/">Self-Publish with Us</a></li>
								<li><a href="/">Host an Amazon Hub</a></li>
								<li><a href="/">See More Make Money with Us</a></li>
							</ul>
						</div>
						<div>
							<h3>Amazon Payment Products</h3>
							<ul>
								<li><a href="/">Amazon Rewards Visa Signature Cards</a></li>
								<li><a href="/">Amazon.com Store Card</a></li>
								<li><a href="/">Amazon Business Card</a></li>
								<li><a href="/">Shop with Points</a></li>
								<li><a href="/">Credit Card Marketplace</a></li>
								<li><a href="/">Reload Your Balence</a></li>
								<li><a href="/">Amazon Currency Converter</a></li>
							</ul>
						</div>
						<div>
							<h3>Let Us Help You</h3>
							<ul>
								<li><a href="/">Amazon and Covid-19</a></li>
								<li><a href="/">Your Account</a></li>
								<li><a href="/">Your Orders</a></li>
								<li><a href="/">Shipping Rates & Polices</a></li>
								<li><a href="/">Amazon Prime</a></li>
								<li><a href="/">Returns & Replacements</a></li>
								<li><a href="/">Manage Your Content and Devices</a></li>
							</ul>
						</div>
					</div>
				</StyledItemLine>
				<StyledItemLine>2</StyledItemLine>
				<StyledItemLine>3</StyledItemLine>
				<StyledItemLine>4</StyledItemLine>
			</StyledFooter>
		);
	}
}

export default Footer;