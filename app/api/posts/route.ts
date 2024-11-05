import { Post, User } from "@/app/interfaces";
import { GET as getUsers } from "../users/route";

export const GET = async (req : Request, res : Response) => {
    try {
        const url = new URL(req.url);
        const page = parseInt(url.searchParams.get("page") || "1");
        const limit = parseInt(url.searchParams.get("limit") || "10");
        const start = (page - 1) * limit;
        const end = start + limit;
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const posts = await response.json();
        const paginatedPosts = posts.slice(start, end);

        const usersResponse = await getUsers();
        const users = await usersResponse.json();

        const paginatedPostsWithAuthors = paginatedPosts.map((post: Post) => {
            const author = users.find((user: User) => user.id === post.userId);
            return { ...post, author };
        });

        const totalPosts = posts.length; 
        const responseData = {
            responsePosts: paginatedPostsWithAuthors,
            totalPosts: totalPosts,
        }
        return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: { "Content-Type": "application/json" },
          });
    } catch (error) {
        console.log("We had some error fetching posts.");
        return new Response("Error fetching posts", { status: 500 });
    }
}