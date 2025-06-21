// app/api/plausible/route.ts
import Plausible from "plausible-api";

export async function GET() {
  try {
    const plausible = new Plausible(process.env.PLAUSIBLE_API_KEY!);

    const stats = await plausible.aggregate(
      "sokoverse.is-cool.dev", // <- make sure EXACTLY matches your site
      "7d", // try "7d" to ensure data exists
      ["pageviews", "visitors"]
    );

    console.log("✅ Analytics stats:", stats);
    return Response.json(stats);
  } catch (error) {
    console.error("❌ Analytics fetch failed:", error);
    return Response.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
