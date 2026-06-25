import { db } from "@/db";
import { products } from "@/db/schema";
import { NextResponse } from "next/server";

// ပစ္စည်းအသစ်တင်ရန်
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, price, imageUrl } = body;
    const newProduct = await db.insert(products).values({
      name,
      description,
      price,
      imageUrl,
    }).returning();
    return NextResponse.json({ success: true, product: newProduct });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to create" }, { status: 500 });
  }
}

// ပစ္စည်းစာရင်းအားလုံးကို ပြန်ထုတ်ရန်
export async function GET() {
  try {
    const allProducts = await db.select().from(products);
    return NextResponse.json({ success: true, products: allProducts });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to fetch" }, { status: 500 });
  }
}
