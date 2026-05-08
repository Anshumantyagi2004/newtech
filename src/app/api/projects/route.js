import { connect } from "@/Database/db";
import { uploadToR2 } from "@/utils/uploadToR2";
import Project from "@/models/project";
import { NextResponse } from "next/server";
import { deleteFromR2 } from "@/utils/deleteFromR2";

export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();
    console.log(formData);
    

    const name = formData.get("name");
    const city = formData.get("city");
    const state = formData.get("state");
    const dimension = formData.get("dimension");
    const image = formData.get("image");

    if (!name || !city || !state || !dimension || !image) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }
    let imageUrl = "";
    let imageFileId = "";

    // convert file to buffer
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${image.name}`;

    const resUpload = await uploadToR2({
      file: buffer,
      folder: "newTech",
      fileName,
      contentType: image.type,
    });

    imageUrl = resUpload.url;
    imageFileId = resUpload.key;

    // save to mongodb
    const project = await Project.create({
      name,
      city,
      state,
      dimension,
      image: imageUrl,
      imageFileId,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Project added successfully",
        project,
      },
      { status: 201 },
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connect();

    const projects = await Project.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        projects,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("GET PROJECT ERROR:", error);

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

    const { id } = await req.json();

    const existingProject = await Project.findById(id);

    if (!existingProject) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found",
        },
        { status: 404 }
      );
    }

    if (existingProject.imageFileId) {
      await deleteFromR2(existingProject.imageFileId);
    }

    await Project.findByIdAndDelete(id);

    return NextResponse.json(
      {
        success: true,
        message: "Project deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("DELETE PROJECT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}


