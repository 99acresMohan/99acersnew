import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

const sampleProperties = [
  { title: "Modern Apartment in City Center", location: "Downtown, New York", price: "$500,000", bedrooms: 2, bathrooms: 2, area: "1,200 sq ft", status: "buy", type: "apartment" },
  { title: "Spacious Family House", location: "Suburb, California", price: "$750,000", bedrooms: 4, bathrooms: 3, area: "2,500 sq ft", status: "sell", type: "house" },
  { title: "Luxury Villa with Pool", location: "Miami Beach, Florida", price: "$1,200,000", bedrooms: 5, bathrooms: 4, area: "3,000 sq ft", status: "buy", type: "house" },
  { title: "Cozy Studio Apartment", location: "Brooklyn, New York", price: "$2,500/mo", bedrooms: 1, bathrooms: 1, area: "600 sq ft", status: "rent", type: "apartment" }
];

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "99acersnew");
    const collection = db.collection("properties");
    const existing = await collection.countDocuments();

    if (existing === 0) {
      await collection.insertMany(sampleProperties);
      return NextResponse.json({ ok: true, inserted: sampleProperties.length, message: "Sample properties seeded" });
    }

    return NextResponse.json({ ok: true, inserted: 0, message: "Database already populated" });
  } catch (error) {
    console.error("seed route error", error);
    return NextResponse.json({ error: "Seed failed - ensure MongoDB connection is available" }, { status: 500 });
  }
}
