import { Link, useNavigate } from "react-router-dom";
import cart from '../assets/cart.png'
import { useSelector } from "react-redux";

function Header(){
    const totalCartItems = useSelector(store => store.cart.totalQuantity)

    const navigate = useNavigate();

    function handleOpenCart(){
        navigate('/cart');
    }

    return (
        <div className="header_component">
            <div className="headline_box">
                <p>SIMPLE SHOPPING, GLOBAL SELECTION, ONE PLACE.</p>
            </div>
            <div className="navbar">
                <div className="logo_box">
                    <p>SHOPPY<span>GLOBE</span></p>
                </div>
                <div className="nav_links">
                    <Link to='/' style={{textDecoration: 'none', outline: 'none'}}><li>HOME</li></Link>
                    <li>CONTACT</li>
                    <li className="cart_button_li">
                        <div onClick={handleOpenCart} className="cart_button_box">
                            <img src={cart} alt="cart icon" />
                            <div className="cart_items_box">
                                <p>{totalCartItems}</p>
                            </div>
                        </div>
                    </li>
                </div>
                
            </div>
        </div>
    )
}

export default Header;