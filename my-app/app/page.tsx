'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (    
    <>
      <h1>I am default home route</h1>
      <button onClick={()=>{
        setTimeout(()=>{
          router.push('/products')
          // router.replace('/')
          // router.back()
          // router.forward()
        }, 3000)
        
      }}>Redirect to Product Page after 3 seconds</button>
    </> 
  );
}

