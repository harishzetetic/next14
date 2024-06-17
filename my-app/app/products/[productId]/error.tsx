'use client'

export default function ErrorBoundary({error, reset}: any){
    return <div>{error.message}
    <button onClick={reset}>Try Again</button>
    </div>
} 