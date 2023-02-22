import React, { useEffect, useState } from 'react'
import { useStateValue } from './CartContext';
import './product.css'

const Product = () => {
    const [allData, setAllData] = useState([]);
    const [{ basket }, dispatch] = useStateValue();
    const api = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`
    const getData = () => {
        fetch(api)
            .then(res => res.json())
            .then(data => setAllData(data));
    }
    useEffect(() => {
        getData();

    }, [])
    const addtobasket = (id, title, image, price) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
            }
        })
    }

    return (
        <>
            <div className='container'>
                {
                    allData.map((ele) => {

                        return (
                            <>
                                <div className='compcard'>
                                    <img width={150} src={ele.image} />
                                    <div className="desc">
                                        <hr />
                                        <h3>{ele.title}</h3>
                                        <h5>{ele.name}</h5>
                                        <p>RS : ${ele.price}</p>
                                        <button className="add_cart" onClick={() => addtobasket(ele.id, ele.title, ele.image, ele.price)}>Add To Cart</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Product
