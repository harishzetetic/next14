import { cookies } from "next/headers";

export default function About() {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme');
  console.log(theme)
  console.log('About us page rendered')
  return (<>
    <h1>About Us {new Date().toLocaleTimeString()}</h1>
  </>
  );
}
