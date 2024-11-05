import { GET as getComments } from "../../comments/[postId]/route";
import { GET as getUser } from "../../users/[userId]/route";

export const GET = async (req: Request, { params }: { params: { postId: string } }) => {
    try {
        // const url = new URL(req.url);
        // const postId = url.searchParams.get("postId");
        const { postId } = params;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);      
        if (!response.ok) {
            return new Response("Post not found", { status: 404 });
        }
        const post = await response.json();
         // Fetch the author
         const authorResponse = await getUser(req, { params: { userId: post.userId } });
         const author = await authorResponse.json();
 
         // Fetch the comments
         const commentsResponse = await getComments(req, { params: { postId: post.id } });
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
