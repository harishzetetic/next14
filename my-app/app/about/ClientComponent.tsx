'use client'

import { useState } from "react"

export const ClientComponent = () => {
    const [show, setShow] = useState(true)
    return <>
    {show && <h3>Client Component Rendered</h3>}
    </> 
}