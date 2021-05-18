import React from 'react';
import {useState} from "react";
//import "./ShoppingCart.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Tabs, Tab } from "react-bootstrap";
import date from 'date-and-time';
import SearchCustomer from  "../Search/SearchCustomer";
import ShoppingCartTab from "./ShoppingCartTab";
import DropdownSaler from "./Dropdown/DropdownSaler.js"
import DropdownPriceList from "./Dropdown/DropdownPriceList";
import DropdownShop from "./Dropdown/DropdownShop";
import CheckBox from "./CheckBox/CheckBox";

export default function ShoppingCart(props){
	const {cartProduct, onAdd, onRemove, countCartProduct}=props;

	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen(prevState => !prevState);
	const now = new Date();
	const day = date.format(now, 'DD/MM/YYYY'); 
	const time = date.format(now, 'HH:mm:ss'); 
	return(
		<div className="shoppingcart">			
			<div className="shoppingcart__row">
				<div className="row">
					<div className="col-md-8 "><DropdownSaler/></div>
					<div className="col-md-2 day__DC" >{day}</div>
					<div className="col-md-1 time__DC" >{time}</div>
				</div>

				<div className="Search">
					<SearchCustomer className="Search__Customer"/>
					
					<div className="row Search__row">
						<div className="col-md-4">
							<DropdownPriceList/>
						</div>

						<div className="col-md-4">
							<CheckBox/>
						</div>

						<div className="col-md-4">
							<DropdownShop/>
						</div>
					</div>
				</div>

				<ShoppingCartTab cartProduct={cartProduct} countCartProduct={cartProduct.length}/>				
			</div>
					
		</div>
	)

}