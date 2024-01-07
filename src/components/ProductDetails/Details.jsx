import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRulerHorizontal, faXmark } from "@fortawesome/free-solid-svg-icons";


const Details = ({size = [],type, fabric, piece}) => {


    let [sizeGuideOpen, setSizeGuideOpen] = useState(false);
    let [selectedSize, setSelectedSize] = useState(size[0]);

    const handleSizeGuideOpen = () => {
        setSizeGuideOpen(true);
        document.getElementById('product-container').classList.add('sg-overflow-hidden');
    }

    const handleSizeGuideClose = () => {
        setSizeGuideOpen(false);
        document.getElementById('product-container').classList.remove('sg-overflow-hidden');
    }

    return (
        <>
            {/* Product Details */}
            <div className="pd-info-details">
                <div className="pd-detail-tag-conatiner">
                    <div className="pd-tag-heading">Type:</div>
                    <div className="pd-tag-value">{type}</div>
                </div>
                <div className="pd-detail-tag-conatiner">
                    <div className="pd-tag-heading">Piece:</div>
                    <div className="pd-tag-value">{piece}</div>
                </div>
                <div className="pd-detail-tag-conatiner">
                    <div className="pd-tag-heading">Fabric:</div>
                    <div className="pd-tag-value">{fabric}</div>
                </div>
                

                {(size.length > 0)  && (
                <div className="pd-size-container">
                    <div className="pd-size-guide-conatiner">
                        <FontAwesomeIcon icon={faRulerHorizontal} className="pd-size-icon" onClick={handleSizeGuideOpen}/>
                        <span onClick={handleSizeGuideOpen}>Size Guide</span>
                    </div>
                    <div className="pd-tag-heading" >
                        Size: <span>{selectedSize}</span>
                    </div>
                    <div className="pd-size-value-container">
                    
                        {size.map((sizeValue, index) => (
                            <div className={(sizeValue == selectedSize) ? "pd-tag-value pd-size-selected" : "pd-tag-value"}
                                 onClick={()=>{setSelectedSize(sizeValue)}}
                                 key={index}>
                                {sizeValue}
                            </div>))}     
                    </div>   
                </div>
                )}

            </div>


            {/* Size Guide popup */}
            {sizeGuideOpen && (<>
            <div id="sg-popup-background"></div>
            <div className="sg-popup-container">
                <div className="sg-popup-header">
                    <div className="sg-popup-heading">
                        Size Chart
                    </div>
                    <button className="sg-popup-close" onClick={handleSizeGuideClose}>
                        <FontAwesomeIcon icon={faXmark} className="sg-icon-close" />
                    </button>
                </div>
                <div className="sg-popup-content">
                    <div className="sg-popup-image-wrapper">
                        <img src="https://cdn.shopify.com/s/files/1/0507/8286/3515/files/luxury-pret-sizechart_19c84601-fc7d-42ae-b1fa-75a2f138132f.jpg?v=1691225005"
                            alt="Size Guide Chart"
                            className="sg-popup-image" />
                    </div>
                </div>
            </div>
            </>
            )}

        </>
    )
}

export default Details;