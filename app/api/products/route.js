import data from "../../data/products";

export async function GET() {
    return Response.json({ data });
}