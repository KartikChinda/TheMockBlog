export const GET = async (req: Request, { params }: { params: { id: string } }) => {
    try {
        // const url = new URL(req.url);
        // const postId = url.searchParams.get("postId");
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
        
        if (!response.ok) {
            return new Response("Post not found", { status: 404 });
        }
        
        const post = await response.json();

        return new Response(JSON.stringify(post), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("We had some error fetching the post:", error);
        return new Response("Error fetching post", { status: 500 });
    }
};
