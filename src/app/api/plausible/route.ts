import Plausible from "plausible-api";

export async function GET() {
  try {
    const plausible = new Plausible(process.env.PLAUSIBLE_API_KEY!);

    const data = await plausible.aggregate(
      "pl-git-main-shahwaizzahids-projects.vercel.app",
      "7d",
      ["pageviews", "visitors"]
    );

    return Response.json(data);
  } catch (error) {
    console.error("❌ Error fetching analytics:", error);
    return Response.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}
