import { connect } from "@/Database/db";
import { uploadToR2 } from "@/utils/uploadToR2";
import { deleteFromR2 } from "@/utils/deleteFromR2";
import Project from "@/models/project";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connect();

    const { id } = await params;
    console.log("iddd", id);
    const project = await Project.findById(id);

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        project,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("GET SINGLE PROJECT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  try {
    await connect();

    const { id } = await params;

    const formData = await req.formData();

    const name = formData.get("name");
    const city = formData.get("city");
    const state = formData.get("state");
    const dimension = formData.get("dimension");
    const image = formData.get("image");

    const existingProject = await Project.findById(id);

    if (!existingProject) {
      return NextResponse.json(
        {
          success: false,
          message: "Project not found",
        },
        { status: 404 },
      );
    }

    let imageUrl = existingProject.image;
    let imageFileId = existingProject.imageFileId;

    if (image && image.size > 0) {
      if (existingProject.imageFileId) {
        await deleteFromR2(existingProject.imageFileId);
      }

      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${image.name}`;

      const uploadedImage = await uploadToR2({
        file: buffer,
        folder: "newTech",
        fileName,
        contentType: image.type,
      });

      imageUrl = uploadedImage.url;
      imageFileId = uploadedImage.key;
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        name,
        city,
        state,
        dimension,
        image: imageUrl,
        imageFileId,
      },
      {
        new: true,
      },
    );

    return NextResponse.json(
      {
        success: true,
        message: "Project updated successfully",
        project: updatedProject,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("UPDATE PROJECT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 },
    );
  }
}
