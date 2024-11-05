// this is throwing a typescript error which is extremely interesting, I'll have to take a look at this.
// import { GET as getComments } from "../../comments/[postId]/route";
// import { GET as getUser } from "../../users/[userId]/route";


export const GET = async (req: Request, { params }: { params: { postId: string } }, res: Response ) => {
    try {
        const { postId } = params;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);      
        if (!response.ok) {
            return new Response("Post not found", { status: 404 });
        }
        const post = await response.json();
         // Fetch the author
         const authorResponse =  await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
         const author = await authorResponse.json();
 
         // Fetch the comments
         const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
         const comments = await commentsResponse.json();

        const postWithInfo = {
            post,
            author,
            comments,
        }

        return new Response(JSON.stringify(postWithInfo), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("We had some error fetching the post:", error);
        return new Response("Error fetching post", { status: 500 });
    }
};
