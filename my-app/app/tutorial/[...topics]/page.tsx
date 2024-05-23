import { notFound } from "next/navigation"



const Topics = ({params}:any) => {
    console.log(params)
    if(params.topics.length === 3){
        notFound()
    }
    if(params.topics.length === 2){
        return <h1>Feature Name: {params.topics[0]} Topic Name: {params.topics[1]}</h1>
    }
    if(params.topics.length === 1){
        return <h1>Feature Name: {params.topics[0]}</h1>
    }
    return <>
    
    <h1>Here we will see the topics</h1>
    
    </>
}


export default Topics