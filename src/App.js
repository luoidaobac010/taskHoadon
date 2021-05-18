import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {useState} from "react";

import Header from "./components/Header/Header";
import dataProduct from "./components/Products/dataProduct";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


function App() {
    /**Lấy sản phẩm từ data **/
    const {products}=dataProduct;
    const [cartProduct, setCartProduct]=useState([]);
    
    /** Tăng số lượng sản phẩm **/
    const onAdd=(product)=>{
        const exist = cartProduct.find((x) => x.id === product.id);
        if(exist){
            setCartProduct(
                cartProduct.map((x) => x.id === product.id ?{...exist, qty: exist.qty +1}:x)
            );
        }
        else {
            setCartProduct([...cartProduct, {...product, qty:1}]);
        }
    }

    /** Giảm số lượng sản phẩm **/
    const onRemove=(product)=>{
        const exist = cartProduct.find((x) => x.id === product.id);
        if(exist.qty === 1){
            setCartProduct(cartProduct.filter((x) => x.id !== product.id))
        }
        else {
            setCartProduct(
                cartProduct.map((x) => x.id === product.id ?{...exist, qty: exist.qty -1}:x)
            );
        }
    }

    const onDelete=(product)=>{
        const exist = cartProduct.find((x) => x.id === product.id);
        if(exist.qty !=0){
            setCartProduct(cartProduct.filter((x) => x.id !== product.id))
        }
    }
   

    /** Tìm kiếm sản phẩm **/
    const [searchProduct, setSearchProduct] = useState(['']);
    
    return (
        <div className="App">
            <div className="head col-ld-12">
                <Header/>
            </div>
            <div className="row">
                <div className="body col-md-8">
                    
                    <Content onAdd={onAdd} onRemove={onRemove} cartProduct={cartProduct} countCartProduct={cartProduct.length} onDelete={onDelete}/> 

                    <Footer onAdd={onAdd} products={products}/>
                               
                </div>
                <div className="col-md-4">
                    <ShoppingCart cartProduct={cartProduct} countCartProduct={cartProduct.length}/>

                </div>
                    
            </div>
        </div>
       
    );
}

export default App;
