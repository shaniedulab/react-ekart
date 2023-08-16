import { useState } from "react";
function ProductForm(props){
    let [pName,updateName]=useState('');
    let [pPrice,updatePrice]=useState('');
    let [pDescription,updateDescription]=useState('');
    let [pAvailability,updateAvailability]=useState(false);
    let [pImageUrl,updateImageUrl]=useState('');

    // let [userInput,updateUserInpunt]=useState({
    //     pName:'',
    //     pPrice:'',
    //     pDescription:'',
    //     pAvailability:'',
    //     pImageUrl:''
    // });


    function nameInputHandler(event){
        updateName(event.target.value);
        // updateUserInpunt({
        //     ...userInput,
        //     pName:event.target.value
        // });
    }

    function priceInputHandler(event){
        updatePrice(event.target.value);
        // updateUserInpunt({
        //     ...userInput,
        //     pPrice:event.target.value
        // });

        // updateUserInpunt((prevState)=>{
        //     return {
        //         ...prevState,
        //         pPrice:event.target.value
        //     }
        // });
    }

    function descriptionInputHandler(event){
        updateDescription(event.target.value);
        // updateUserInpunt({
        //     ...userInput,
        //     pDescription:event.target.value
        // });
    }

    function availabilityInputHandler(event){
        updateAvailability(event.target.checked);
        // updateUserInpunt({
        //     ...userInput,
        //     pAvailability:event.target.value
        // });
    }

    function imageInputHandler(event){
        updateImageUrl(event.target.value);
        // updateUserInpunt({
        //     ...userInput,
        //     pImageUrl:event.target.value
        // });
    }

    function createProductEventHandler(event){
        event.preventDefault();
        let product={
            pID: 1, 
            pName: pName, 
            desc: pDescription,
            isAvailable: Boolean(pAvailability),
            image: pImageUrl,
            price: Number(pPrice)
        }
        // console.log(product);

        updateName('');
        updatePrice('');
        updateDescription('');
        updateImageUrl('');
        updateAvailability(false);

        props.onCreateProduct(product);
        props.onCanceled();
    }

    return (
        <form className="row g-3" onSubmit={createProductEventHandler}>
            <div className="col-md-6">
                <label for="name">Product Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        value={pName}
                        placeholder="Product Name"
                        onChange={nameInputHandler} />
            </div>
            <div className="col-md-6">
                <label for="price">Product Price</label>
                <input type="number" 
                        min="0.01" step="0.01" 
                        className="form-control" 
                        id="price" 
                        value={pPrice}
                        placeholder="Product Price"
                        onChange={priceInputHandler} />
            </div>

            <div className="form-group">
                <label for="description">Product Description</label>
                <input type="text" 
                        className="form-control" 
                        id="description" 
                        value={pDescription}
                        placeholder="Product Description"
                        onChange={descriptionInputHandler} />
            </div>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch"
                    id="isAvailable"
                    checked={pAvailability}
                    onChange={availabilityInputHandler}
                />
                <label className="form-check-label" for="isAvailable">Is product available in stock?</label>
            </div>

            <div className="form-group">
                <label for="select-image">Select product image</label>
                <input type="file" className="form-control" id="select-image"
                    onChange={imageInputHandler}
                    value={pImageUrl}
                />
            </div>
            

            <button type="submit" className="btn btn-primary">Add Product</button>
            <button type="button" className="btn btn-primary" onClick={props.onCanceled}>Cancel</button>
        </form>
    );
}

export default ProductForm;