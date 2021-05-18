import React from 'react';
import"./Footer.css";
import Product from "../Products/Product";

import'./Footer.css';
export default function Footer(props){
	const {products, onAdd}=props;
	return(
		<div class="footer">
			<div class="container">
				<div className="footer__row">				
					<div className="footer__action__toolbar">
						<div className="footer__action__left"></div>
						<div className="footer__action__right"></div>
					</div>
					{products.map((product)=>(
						<Product key={product.id} product={product} onAdd={onAdd}></Product>
					))}
									
				</div>
			</div>
			
		</div>	
	)
}