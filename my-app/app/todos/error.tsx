'use client'
import { useEffect } from "react"

export default function ErrorPage({error}: {error: Error}){
    useEffect(()=>{
        console.error(error)
    }, [error])
    return <><h2>An Error Occured</h2></>
}