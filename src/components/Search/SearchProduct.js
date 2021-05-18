import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './SearchProduct.css';
export default function SearchProduct(props){
	const{product, searchProduct, setSearchProduct}=props;
	return(
		<div class="searchProduct">
			<div class="containerProduct">
				<span class="icon"><i class="fa fa-search"></i></span>
				<input type="search" id="search" placeholder="Tìm mặt hàng (F3)" />			
			</div>
		</div>
	)
}

