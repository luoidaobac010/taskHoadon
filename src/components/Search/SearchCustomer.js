import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import './SearchCustomer.css';

const SearchCustomer=(props)=>{
	return(
		<div class="searchCustomer">
			<TextField
				id="Customer-search"
				placeholder=" Tìm khách hàng (F4)"
				margin="left"
				InputProps={{
					endAdornment:(
						<InputAdornment position="start">
							<SearchIcon/>
						</InputAdornment>
					)
				}}
			/>			
		</div>
	)
}

export default SearchCustomer;