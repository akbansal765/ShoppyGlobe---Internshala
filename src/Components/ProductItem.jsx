import { useDispatch } from "react-redux";
import { addItem, calculateTotalQuantity } from "../utils/cartSlice";

import { useNavigate } from "react-router-dom";

function ProductItem({item}){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function navigateToProductDetail(){
        navigate(`/productdetail/${item.id}`)
    }

    function handleAddToCart(e){
        // pressing add to cart button should not direct us to product detail page
        e.stopPropagation();

        //dispatching action to add the item to cart slice and updating the cart icon
        dispatch(addItem(item));
        
        dispatch(calculateTotalQuantity());

    }

    return (
        <div onClick={navigateToProductDetail} className="productItem_component">
            <img src={item.images[0]} alt="item image" />
            <p>{item.title}</p>
            <p className='item_price'>$ {item.price}</p>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default ProductItem;