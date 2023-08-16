import Products from './Products';

function ProductList(props){
    return props.newProductList.length===0?<h3>No Products Available!</h3>:(
                <ul className="list-group shadow">
                    {
                        props.newProductList.map((product) =>{
                            return <Products 
                            key={product.pID}
                            id={product?.pID}
                            name={product?.pName}
                            description={product?.desc}
                            isAvailable={product?.isAvailable}
                            image={product?.image}
                            price={product?.price}
                            ></Products>
                        })
                    }
                </ul>
    )
}

export default ProductList;