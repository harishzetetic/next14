'use client'

export default function ErrorBoundary({error}: any){
    return <div>{error.message}</div>
}