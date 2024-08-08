export default async function Layout({children}: {children: React.ReactNode}){
    const response = await fetch('https://dummyjson.com/todos')
    const data = await response.json();
    return <>{children}</>
}