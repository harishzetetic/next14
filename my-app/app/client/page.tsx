'use client'
import { useState } from "react"


const ClientComponent = () => {
    const [value, setValue] = useState('')
    console.log('Client Component Rendered')
    return <>
    <input value={value} onChange={e=>setValue(e.target.value)}/>
    <br/><br/>
    <span>You are typing {value}</span>
    </>
}

export default ClientComponent