import { NextResponse, type NextRequest } from "next/server";

// Authorization, Redirection, Cookies Management

export function middleware(request: NextRequest){

    const response = NextResponse.next();
    const themePreferences = request.cookies.get('theme');
    if(!themePreferences){
        response.cookies.set('theme', 'dark')
    }
   return response
}

