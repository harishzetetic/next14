import { NextRequest } from "next/server";
import { products } from "./data";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query=searchParams.get('query');
    const filterProducts=query ? products.filter(product => product.title.includes(query)) : products;
    return Response.json(filterProducts)
}

export async function POST(request:Request){
    const product = await request.json()
    const newProduct = {
        id: products.length + 1,
        title: product.title,
        price: product.price
    }
    products.push(newProduct)
    return new Response(JSON.stringify(newProduct), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    })
}