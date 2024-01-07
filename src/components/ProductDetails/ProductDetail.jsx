import React, {useState} from "react";
import './ProductDetail.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Details from "./Details";
import Description from "./Description";
import Reviews from "./Reviews";
import ProductImgSlider from "./ProductImgSlider";


const ProductDetail = () => {

    let [infoDisplay, setInfoDisplay] = useState('Details');
    const price = 3000;
    const rating = 4;
    let [quantity, setQuantity] = useState(1);
    let [totalPrice, setTotalPrice] = useState(price);

    const imgSrc = ["https://www.kayseria.com/cdn/shop/products/c5482-120-_1.jpg?v=1702963505",
         "https://www.kayseria.com/cdn/shop/products/c5482-120-_2.jpg?v=1702963505",
          "https://www.kayseria.com/cdn/shop/products/c5482-120-_3.jpg?v=1702963505",
         "https://www.kayseria.com/cdn/shop/products/c5482-120-_4.jpg?v=1702963505",
         
    ]

    // quatity and total price handler
    const changeQuantity = (button) => {
        if (button == 'decrease') {
            if (quantity > 1) {
                setQuantity(--quantity);
            }
            else
                return;
        }
        else {
            setQuantity(++quantity);
        }
        setTotalPrice(price * quantity);
    }

    return (
        <>
            <div className="pd-main-container" id="product-container" >
                <div className="prod-detail-container">

                    {/* Product Images */}
                    <div className="pd-left-wrapper">
                        <ProductImgSlider imgSrc={imgSrc} className='pd-img-slider'/>
                    </div>

                    {/* Product Description */}
                    {/* <div id="product-description"></div> */}
                    <div className="pd-right-wrapper">
                        <div className="pd-prod-title">
                            <h2>1 Piece Khaddar Shirt</h2>
                            <p>SKU: KPW23-P2660-90-SMALL</p>
                        </div>

                        <div className="pd-prod-price">
                            <h2>Rs. {price}</h2>
                            <div className="pd-prod-rating">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon icon={faStar}
                                        className={(index < rating ) ? "pd-rating-pink" : "pd-rating-gray"}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Product Information divs */}
                        <div className="pd-info-wrapper">
                            <div className="pd-info-header">
                                <div className={(infoDisplay=='Details') ? "pd-info-selected" : ""} 
                                    onClick={()=>{setInfoDisplay('Details')}}>
                                    Details</div>
                                <div className={(infoDisplay=='Description') ? "pd-info-selected" : ""} 
                                    onClick={()=>{setInfoDisplay('Description')}}>
                                    Description</div>
                                <div className={(infoDisplay=='Reviews') ? "pd-info-selected" : ""} 
                                    onClick={()=>{setInfoDisplay('Reviews')}}>
                                    Reviews</div>
                            </div>

                            <div className="pd-info-content">
                                {(infoDisplay=='Details') &&  
                                    <Details size={['Small', 'Medium', 'Large']} type='Stitched' fabric='Khaddar' piece='1 Piece'/>}
                            
                                {(infoDisplay=='Description') &&  
                                    <Description desc='1 Pc Khaddar Embroidered Panneled Shirt With Buttons Detailing'/>}
                                
                                {(infoDisplay=='Reviews') && 
                                    <Reviews 
                                        reviews={[{userName: "Anabiyah", rating: 3, comment: 'The Shirt is fantastic! Great stitching, stylish design, and so comfy. Perfect for any occasion. Highly recommend!'},
                                                {userName: "Hajrah", rating: 5, comment: 'The Shirt is fantastic! Great stitching, stylish design, and so comfy. Perfect for any occasion. Highly recommend!'}]}
                                    />}
                                

                            </div>
                        </div>

                        {/* quantity and total price */}
                        <div className="pd-quantity-wrapper">
                            <div className="pd-quantity-container">
                                <div className="pd-tag-heading">
                                    Quantity
                                </div>
                                <div className="pd-tag-value">
                                    <div className="pd-quantity-counter">
                                        <button onClick={() => { changeQuantity('decrease') }}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={() => { changeQuantity('increase') }}>+</button>
                                    </div>
                                </div>
                            </div>
                            <div className="pd-totalprice-conatiner">
                                <div className="pd-tag-heading">
                                    Total Price
                                </div>
                                <div className="pd-tag-value">
                                    <div>Rs. {totalPrice}</div>
                                </div>
                            </div>
                        </div>

                        {/* CART button */}
                        <div className="pd-button-wrapper">
                            <button className="pd-cart-button">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
                                    
                {/* Related Products */}
                <div className="pd-related-products-wrapper">
                    <div className="rel-prod-heading">
                        .                        
                    </div>
                </div>

            </div>


            
        </>
    )
}

export default ProductDetail;