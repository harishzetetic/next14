import Link from "next/link";

export default function Authenticate(){
    return <><h2>Kindly proceed to login</h2>
    <Link href="authenticate/login">Login Here...</Link>
    </>
}