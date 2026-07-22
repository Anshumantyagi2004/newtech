import { NextResponse } from "next/server";
import { connect } from "@/Database/db";
import Category from "@/models/category";

// GET - Fetch all categories
export async function GET() {
  try {
    await connect();

    const categories = await Category.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data: categories,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

// POST - Create Category
export async function POST(req) {
  try {
    await connect();

    const body = await req.json();
    const { name, slug } = body;

    if (!name || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and slug are required.",
        },
        { status: 400 }
      );
    }

    // Check duplicate name or slug
    const exists = await Category.findOne({
      $or: [
        { name: name.trim() },
        { slug: slug.trim().toLowerCase() },
      ],
    });

    if (exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Category name or slug already exists.",
        },
        { status: 400 }
      );
    }

    const category = await Category.create({
      name: name.trim(),
      slug: slug.trim().toLowerCase(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Category created successfully.",
        data: category,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
} 