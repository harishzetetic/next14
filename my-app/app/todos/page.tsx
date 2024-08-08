import React from "react";

// export const fetchCache = "default-cache"
export const revalidate = 10;


export default async function Todos(){
    const response = await fetch('https://dummyjson.com/todos', {
        next: {
            revalidate: 10
        }
    })
    const data = await response.json();

    const todoResponse = await fetch('https://dummyjson.com/todos')
    const todo = await response.json();

    return (<>
        <h1>To List</h1>

        <table>
            <tr>
                <th>Id</th>
                <th>Todo Title</th>
            </tr>
            {data.todos && data.todos.map((todo:any)=> <React.Fragment key={todo.id}>
                <tr>
                    <td>{todo.id}</td>
                    <td>{todo.todo}</td>
                </tr>
            </React.Fragment>)}
        </table>
    </>)
    
}