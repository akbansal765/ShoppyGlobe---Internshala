import { useEffect, useState } from "react";
import { useFetch } from "../utils/useFetch";
import ProductItem from "./ProductItem";
import loader from '../assets/spinner.gif'

// import dummyData from '../assets/dummyData'

function ProductList(){

    const [items, setItems] = useState('');
    
    const {data, error} = useFetch('https://dummyjson.com/products');
    // console.log(data, error)

    useEffect(() => {
    if (data) {
        setItems(data.products);
    }
    }, [data]);

    //handling error from useFetch custom hook
     if(error){
            return (
                <div className="fetch_error_box">
                  <img src={loader} alt="loader icon" />
                  <p>Unable to Fetch data, try again later</p>
                </div>
            )
     }

    // handling search filter
    function handleSearchProduct(value){
        const filteredItems = data?.products?.filter(item => item.title.toLowerCase().includes(value.toLowerCase()));
        setItems(filteredItems)
    }

    return (
        <div className="productList_component" id="productList_id">
            <input type="text" onChange={(e) => handleSearchProduct(e.target.value)} className="productList_filter" placeholder="Search by Product name"/>
            <div className="productList_container">
            {items && 
            <>
            {items.map((item) => {
                return <ProductItem item={item} key={item.id}/>
            })}
            </>
            }
            </div>
        </div>
    )
}

export default ProductList;