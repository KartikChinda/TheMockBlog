export const GET = async (req: Request, {params} : {params: {postId : string}}, res: Response) => {
    try {
        const { postId } = params;  
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const comments = await response.json();

        return new Response(JSON.stringify(comments), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("We had some error fetching comments:", error);
        return new Response("Error fetching comments", { status: 500 });
    }
};
