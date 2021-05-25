import React from 'react';
import {useState} from "react";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./ShoppingCartTab.css";
import BuyNote from "./Note/BuyNote";
import OrderNote from "./Note/OrderNote";
import SaleOffBuy from "./ButtonPopper/SaleOffBuy";

export default function ShoppingCartTab(props) {
    const [toggleState, setToggleState] = useState(1);
    ;
    const toggleTab = (index) => {
    setToggleState(index);
    };

    /** Tính tiền */
    const {cartProduct,countCartProduct}=props;
    
    const totalPrice = cartProduct.reduce((a,c) => a +c.price * c.qty, 0);
    
    const total=0;

    return (
        <div className="Tab__container">
            <div className="bloc-tabs">
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >
                    Đặt hàng
                </button>

                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} >
                    Giao hàng
                </button>
            </div>            
            
            <div className="content-tabs">
                <div className={toggleState === 1 ? "Tab__content  active-Tab__content" : "Tab__content"}>
                    <div className="container">

                        <div className="cal__component">                    
                            <div className="form-group">
                            
                                <div className="col-md-6">
                                    Tổng tiền hàng {' '}
                                    <button className="badge">{countCartProduct}</button>
                                </div>

                                <div className="col-6 text-right">{totalPrice}</div>
                            
                            
                                <div className="col-md-6">Giảm giá</div>
                                <div className="col-6 text-right">                                    
                                    <SaleOffBuy total={total}/>                                  
                                </div>                                
                                
                                <div className="col-md-6"><strong>Khách cần trả</strong></div>
                                <div className="col-6 text-right font__cus"><strong>{totalPrice}</strong></div>
                                
                                <div className="col-md-6">Khách thanh toán (F8)</div>
                                <div className="col-6 text-right"><span><i class="fa fa-credit-card-alt" aria-hidden="true"></i></span>{totalPrice}</div>  

                                <div className="col-md-6">Tiền thừa trả khách</div>
                                <div className="col-6 text-right">{totalPrice}</div>    

                            </div>                    
                        </div>
                        
                        <div className="row">
                            <div className="note__container">
                                <BuyNote/>
                            </div>
                        </div>

                        <div className="button__sale">
                            <button type="Button" className="btn btn-success btn__sale" onClick={() => alert('Cảm ơn vì đã mua hàng')}>
                                <h3>Thanh toán (F9)</h3>
                            </button>
                            <div className="support"><span><i class="fa fa-phone icon__sp"></i></span>Hỗ trợ khách hàng 1900 6522</div> 
                        </div>
                        
                    </div>
                </div>

                <div className={toggleState === 2 ? "Tab__content  active-Tab__content" : "Tab__content"}>
                    <div className="container">
                        <div className="cal__component">                    
                            <div className="form-group">
                            
                                <div className="col-md-6">
                                    Tổng tiền hàng {' '}
                                    <button className="badge">{countCartProduct}</button>
                                </div>

                                <div className="col-6 text-right">{totalPrice.toFixed(2)}</div>
                            
                            
                                <div className="col-md-6">Giảm giá</div>
                                <div className="col-6 text-right">
                                    <button className="Sale__off">{totalPrice}</button>
                                </div>                                
                                
                                <div className="col-md-6"><strong>Khách cần trả</strong></div>
                                <div className="col-6 text-right font__cus"><strong>{totalPrice}</strong></div>
                                
                                <div className="col-md-6">Khách thanh toán (F8)</div>
                                <div className="col-6 text-right"><span><i class="fa fa-credit-card-alt" aria-hidden="true"></i></span>{totalPrice}</div>  

                                <div className="col-md-6">Tiền thừa trả khách</div>
                                <div className="col-6 text-right">{totalPrice}</div>    

                            </div>                    
                        </div>
                        
                        <div className="row">
                            <div className="note__container">
                                <OrderNote/>
                            </div>
                        </div>

                        <div className="button__sale">
                            <button type="Button" className="btn btn-success btn__sale" onClick={() => alert('Cảm ơn vì đã mua hàng')}>
                                <h3>Đặt hàng (F9)</h3>
                            </button>
                            <div className="support"><span><i class="fa fa-phone icon__sp"></i></span>Hỗ trợ khách hàng 1900 6522</div> 
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    );
}

