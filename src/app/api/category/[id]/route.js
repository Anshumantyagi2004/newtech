import { NextResponse } from "next/server";
import Category from "@/models/category";
import { connect } from "@/Database/db";
import project from "@/models/project";


export async function PUT(req, { params }) {
  try {
    await connect();

    const { id } =await params;
    const { name } = await req.json();

    if (!name || !name.trim()) {
      return NextResponse.json(
        {
          success: false,
          message: "Category name is required.",
        },
        { status: 400 }
      );
    }

    const exists = await Category.findOne({
      name: name.trim(),
      _id: { $ne: id },
    });

    if (exists) {
      return NextResponse.json(
        {
          success: false,
          message: "Category already exists.",
        },
        { status: 400 }
      );
    }

    const category = await Category.findByIdAndUpdate(
      id,
      {
        name: name.trim(),
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Category updated successfully.",
        data: category,
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

export async function DELETE(req, { params }) {
    
  try {
    await connect();

    const { id } = await params;
    console.log(id)

    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Category deleted successfully.",
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


export async function GET(req, { params }) {
  try {
    await connect();

    const { id } = await params;
    const slug=id

    // Find category by slug
    const category = await Category.findOne({ slug });

    if (!category) {
      return NextResponse.json(
        {
          success: true,
          projects: [],
        },
        { status: 200 }
      );
    }

    // Get all projects for this category
    const projects = await project.find({
      category: category._id,
    })
      .populate("category")
      .sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}