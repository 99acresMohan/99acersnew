import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { properties as fallbackProperties } from "../../data/properties";
import { addPostedProperty, getPostedProperties } from "@/lib/propertyCache";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const status = url.searchParams.get("status") as "buy" | "rent" | "sell" | null;
  const type = url.searchParams.get("type") as "apartment" | "house" | "land" | null;

  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "99acersnew");
    const collection = db.collection("properties");

    const query: Record<string, string> = {};
    if (status) query.status = status;
    if (type) query.type = type;

    const dbProperties = await collection.find(query).toArray();
    const cachedProperties = getPostedProperties();
    
    let combined = [...dbProperties, ...cachedProperties];
    if (status) combined = combined.filter((p) => p.status === status);
    if (type) combined = combined.filter((p) => p.type === type);

    return NextResponse.json(combined, { status: 200 });
  } catch (error) {
    console.error("GET /api/properties error", error);
    // Fallback to local example data + cached posts when DB is unavailable
    let filtered = [...fallbackProperties, ...getPostedProperties()];
    if (status) filtered = filtered.filter((p) => p.status === status);
    if (type) filtered = filtered.filter((p) => p.type === type);

    return NextResponse.json({ warning: "DB unavailable, showing cached data", properties: filtered }, { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.location || !body.price || !body.status || !body.type) {
      return NextResponse.json(
        { error: "Missing required fields: title, location, price, status, type" },
        { status: 400 }
      );
    }

    const propertyData = {
      title: body.title,
      location: body.location,
      price: body.price,
      bedrooms: body.bedrooms || 0,
      bathrooms: body.bathrooms || 0,
      area: body.area || "N/A",
      status: body.status,
      type: body.type,
      image: body.image || "/next.svg",
      createdAt: new Date(),
    };

    try {
      // Try to save to MongoDB
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || "99acersnew");
      const collection = db.collection("properties");
      const result = await collection.insertOne(propertyData);

      return NextResponse.json(
        {
          success: true,
          insertedId: result.insertedId,
          property: { ...propertyData, _id: result.insertedId },
          source: "mongodb",
        },
        { status: 201 }
      );
    } catch (dbError) {
      // If MongoDB fails, save to in-memory cache
      console.warn("MongoDB save failed, using cache fallback", dbError);
      addPostedProperty(propertyData);

      return NextResponse.json(
        {
          success: true,
          message: "Property saved to cache (DB unavailable)",
          property: { ...propertyData, _id: Date.now().toString() },
          source: "cache",
          warning: "Database connection failed. Property will be available during this session.",
        },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error("POST /api/properties error", error);
    return NextResponse.json(
      { error: "Unable to create property", details: error instanceof Error ? error.message : "" },
      { status: 500 }
    );
  }
}
