import { connect } from "@/Database/db";
import Support from "@/models/support";
import { uploadToR2 } from "@/utils/uploadToR2";
import { sendMail } from "@/utils/sendMail";

export async function POST(req) {
    try {
        await connect();

        const formData = await req.formData();

        const companyName = formData.get("companyName");
        const contactPerson = formData.get("contactPerson");
        const projectLocation = formData.get("projectLocation");
        const productSerialNo = formData.get("productSerialNo");
        const problemDescription = formData.get("problemDescription");

        const file = formData.get("file");

        let fileUrl = "";
        let fileKey = "";

        // UPLOAD FILE
        if (file && file.name) {
            const bytes = await file.arrayBuffer();

            const buffer = Buffer.from(bytes);

            const fileName = `${Date.now()}-${file.name}`;

            const uploadedFile = await uploadToR2({
                file: buffer,
                folder: "newTech",
                fileName,
                contentType: file.type,
            });

            fileUrl = uploadedFile.url;
            fileKey = uploadedFile.key;
        }

        // GENERATE TICKET ID
        const ticketId = `TICKET-${Date.now()}`;

        // SAVE TO DB
        const support = await Support.create({
            companyName,
            contactPerson,
            projectLocation,
            productSerialNo,
            problemDescription,
            file: fileUrl,
            fileKey,
            ticketId,
        });

        // SEND MAIL
        await sendMail({
            companyName,
            contactPerson,
            projectLocation,
            productSerialNo,
            problemDescription,
            fileUrl,
            ticketId,
        });

        return new Response(
            JSON.stringify({
                success: true,
                message: "Support ticket created",
                support,
            }),
            { status: 201 }
        );
    } catch (error) {
        console.log(error);

        return new Response(
            JSON.stringify({
                success: false,
                error: error.message,
            }),
            { status: 500 }
        );
    }
}

export async function GET() {
  try {
    await connect();

    const tickets = await Support.find().sort({ createdAt: -1 });

    return new Response(JSON.stringify(tickets), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      { status: 500 }
    );
  }
}