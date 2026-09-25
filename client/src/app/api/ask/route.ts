
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:5000";

export async function POST(req: Request): Promise<any> {
    try {
        const body = await req.json();
        const response = await fetch(`${BACKEND_URL}/ask`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
    }
    catch (error) {
        console.error("Error in ask function:", error);
        throw error;
    }
}

