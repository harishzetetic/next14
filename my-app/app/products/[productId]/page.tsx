

const ProductDetails = ({params}:any)=>{
    if(params.productId == 1) {
        throw new Error('Something went wrong with this product')
    }
    return <><h1>Here we have product details of id {params.productId}</h1></>
}

export default ProductDetails