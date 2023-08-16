import Button from "./Button";
import React, {useState} from "react";

function ProductDetails(props) {
    // let productCount=0;
    let [productCount,updateCount]=useState(0);
    function displayFormatedProductCount() {
        return productCount>0 ? productCount :'Zero'
    }

    let increntProductCount=function (){
        // productCount++;
        // console.log(productCount);
        updateCount(++productCount);
    }

    let decrementProductCount=function (){
        // productCount--;
        // console.log(productCount);
        updateCount(--productCount);
        
    }

    let badgeClass='badge-margin-left-240 badge ';
    badgeClass+= props.isAvailable ? 'bg-success' : 'bg-danger';
    return (
        <div className="d-flex align-items-center justify-content-start mt-1">
            <h6 className="font-weight-bold my-2" style={{ "marginRight": 30 }}>
                ${props.price}
            </h6>
            <Button eventHandler={decrementProductCount} disable={productCount===0}>-</Button>
            <span style={{ padding: "0 14", "fontSize": 12 }}>
                {displayFormatedProductCount()}
            </span>
            <Button eventHandler={increntProductCount}>+</Button>
            <span className={badgeClass}>
                {props.isAvailable ? "Available" : "Unavailable"}
            </span>
        </div>
  );
}

export default ProductDetails;
