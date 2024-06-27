import { type NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: NextRequest){
    // const theme = request.cookies.get('theme');
    cookies().set("perPageResults", '10');
    console.log(cookies().get('perPageResults'))
    return new Response('<h1>User Data Here...</h1>', {
        headers: {
            'Content-Type': 'text/html',
            'Set-Cookie': 'theme=dark'
        }
    })
}