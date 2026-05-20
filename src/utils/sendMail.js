import nodemailer from "nodemailer";

export const sendMail = async ({
  companyName,
  contactPerson,
  projectLocation,
  productSerialNo,
  problemDescription,
  fileUrl,
  ticketId,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.SUPPORT_RECEIVER,

      subject: `New Support Ticket - ${ticketId}`,

      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>New Support Ticket</h2>

          <p><strong>Ticket ID:</strong> ${ticketId}</p>

          <p><strong>Company Name:</strong> ${companyName}</p>

          <p><strong>Contact Person:</strong> ${contactPerson}</p>

          <p><strong>Project Location:</strong> ${projectLocation}</p>

          <p><strong>Product Serial Number:</strong> ${productSerialNo}</p>

          <p><strong>Problem Description:</strong></p>

          <p>${problemDescription}</p>

          ${
            fileUrl
              ? `<p><a href="${fileUrl}" target="_blank">View Uploaded File</a></p>`
              : ""
          }
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};