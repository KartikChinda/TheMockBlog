export const GET = async (req: Request | undefined, res: Response | undefined) => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        return new Response(JSON.stringify(users), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("We had some error fetching users:", error);
        return new Response("Error fetching users", { status: 500 });
    }
};
