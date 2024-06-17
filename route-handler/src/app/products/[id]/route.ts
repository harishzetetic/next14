import { products } from "./../data";

export async function GET(request: Request, {params}: {params: {id:string}}){
    const targetProduct = products.find(product => product.id === parseInt(params.id) );

    return Response.json(targetProduct)
}

export async function PATCH(request: Request, {params}: {params: {id:string}}){
    const body = await request.json();
    const {price} = body;
    const index = products.findIndex(e => e.id === parseInt(params.id))
    products[index].price = price; 
    return Response.json(products[index])
}