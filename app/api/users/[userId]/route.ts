export const GET = async (
    req: Request,
    res: Response, 
    context?: { params?: { userId?: string } }
) => {
    try {
        
        const userId  = context?.params?.userId; 
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        
        if (!response.ok) {
            return new Response("User not found", { status: 404 });
        }
        
        const user = await response.json();

        return new Response(JSON.stringify(user), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("We had some error fetching the user:", error);
        return new Response("Error fetching user", { status: 500 });
    }
};
