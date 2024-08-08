import { Suspense } from "react"
import { ReviewComponent } from "./review"


const ProductDetails = async ({params}:any)=>{
    if(params.productId == 1) {
        throw new Error('Something went wrong with this product')
    }
    
    return <>
    <h1>You are viewing the product with id {params.productId}</h1>
    <Suspense fallback={<p>Data loading...</p>}><ReviewComponent /></Suspense>
    
    </>
}

export default ProductDetails