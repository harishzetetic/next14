
export const generateMetadata = ({params}:any) => {
    return {
        title: `Product ${params.productId}`
    }
}

const ProductDetails = ({params}:any)=>{
    return <><h1>Here we have product details of id {params.productId}</h1></>
}

export default ProductDetails