import React from 'react';
import'./Content.css';
export default function Content(props){
	const {cartProduct, onAdd, onRemove, onDelete, countCartProduct}=props;
	const priceProduct = cartProduct.reduce((a,c) => a + c.price * c.qty, 0);
	return(
		<div className="content">

			{cartProduct.map((item) =>(
				<div key={item.id} className="content__row">
						<i type="button" onClick={() => onDelete(item)} className="fa fa-trash-o col-md-1 icon__delete" title="Xoá hàng hoá" aria-hidden="true"></i>
						
						<i className="col-md-1">{item.id}</i>
						
						<i className="far fa-trash-alt col-md-3">{item.name}</i>

						<div className="col-md-2">
							<button onClick={() => onAdd(item)} className="add"><i className="fa fa-angle-up"></i></button>
							<i type="input" className="i__text" > {item.qty} </i>	
							<button onClick={() => onRemove(item)} className="remove"><i className="fa fa-angle-down"></i></button>

						</div>

						<i type="button" className="col-3 text-right ">{item.price.toFixed(2)}</i>

						<i className="col-2 text-right "><strong>{item.price.toFixed(2)}</strong></i>
						
				</div>
					
			))}

		</div>	
	)
}