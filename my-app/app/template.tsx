"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from "react";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname()
  const [value, setValue] = useState('')
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>Header of my app</h1>
        <Link href={'/about'} style={{fontWeight: pathName.startsWith('/about') ? 'bold' : ''}}>About Us</Link> | 
        <Link href={'/products'}  style={{fontWeight: pathName.startsWith('/products') ? 'bold' : ''}}>Product </Link> | 
        <Link href={'/users'}  style={{fontWeight: pathName.startsWith('/users') ? 'bold' : ''}}>Users </Link>
        <input value={value} onChange={e => setValue(e.target.value)}/>
        {children}
        <h3>Footer of my app</h3>
        </body>
    </html>
  );
}
