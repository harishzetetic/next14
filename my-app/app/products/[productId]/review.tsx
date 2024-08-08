

export const ReviewComponent = async()=> {
    await new Promise(resolve=>setTimeout(resolve, 4000))
    return <h2>This is the product review section</h2>
}