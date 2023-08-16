import { useState } from "react";
import ProductForm from "./ProductForm";
function CreateProduct(props){
    let [showForm,updateShowForm]=useState(false);
    function CreateProduct(product){
        // console.log(product);
        props.onCreateProduct(product);
    }

    function onCreateProduct(){
        updateShowForm(true);
    }

    function onCancelSubmitOrCancel(){
        updateShowForm(false);
    }

    return(
            <div style={{backgroundColor:'white',padding:'10px 20px', borderRadius:2}}>
                {!showForm && <button onClick={onCreateProduct}>Create Product</button> }
                { showForm && <ProductForm onCreateProduct={CreateProduct} onCanceled={onCancelSubmitOrCancel}></ProductForm>}
            </div>
    )
}

export default CreateProduct;