import { connect } from "@/Database/db";
import Hero from "@/models/Hero";
import { uploadToR2 } from "@/utils/uploadToR2";
import { deleteFromR2 } from "@/utils/deleteFromR2";


//get hero video
export async function GET() {
  await connect();
  const HeroVid = await Hero.find();
  console.log(HeroVid)
  return new Response(JSON.stringify(HeroVid), { status: 200 });
}

// POST Hero Video
export async function POST(req) {
  try {
    await connect();

    const formData = await req.formData();

    const title = formData.get("title");
    const video = formData.get("video");

    if (!title || !video) {
      return Response.json(
        {
          success: false,
          message: "Title and video are required",
        },
        { status: 400 }
      );
    }

    let videoUrl = "";
    let videoFileId = "";

    // Get existing hero
    const existingHero = await Hero.findOne();

    // Delete old video from R2
    if (existingHero?.videoFileId) {
      try {
        await deleteFromR2(existingHero.videoFileId);
      } catch (err) {
        console.error("Failed to delete old video:", err);
      }
    }

    // Upload new video
    if (video && video.name) {
      const bytes = await video.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${video.name}`;

      const uploadedVideo = await uploadToR2({
        file: buffer,
        folder: "newTech",
        fileName,
        contentType: video.type,
      });

      videoUrl = uploadedVideo.url;
      videoFileId = uploadedVideo.key;
    }

    let hero;

    if (existingHero) {
      // Update existing record
      existingHero.title = title;
      existingHero.video = videoUrl;
      existingHero.videoFileId = videoFileId;

      hero = await existingHero.save();
    } else {
      // Create first record
      hero = await Hero.create({
        title,
        video: videoUrl,
        videoFileId,
      });
    }

    return Response.json(
      {
        success: true,
        message: "Hero updated successfully",
        data: hero,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

