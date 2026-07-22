import nodemailer from 'nodemailer';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('file');

    if (!file) {
      return Response.json({ message: 'No file provided.' }, { status: 400 });
    }

    if (file.type !== 'application/pdf') {
      return Response.json({ message: 'Only PDF files are allowed.' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = `data:application/pdf;base64,${buffer.toString('base64')}`;

    const result = await cloudinary.uploader.upload(base64, {
      resource_type: 'raw', // required for non-image files like PDFs
      folder: 'samtech_pdfs', // optional: organizes uploads in a folder
      public_id: file.name.replace(/\.pdf$/i, ''), // keeps original filename (without extension)
      use_filename: true,
      unique_filename: true, // set to false if you want to overwrite same-name files
    });

    return Response.json(
      {
        message: 'Upload successful!',
        url: result.secure_url,
        public_id: result.public_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return Response.json({ message: 'Upload failed.' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, companyName, email, phone, jobTitle, country, category, websiteUrl, howDidYouFindUs, subject, message } = body;

    if (!firstName || !email) {
      return Response.json({ message: 'First name and email are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER||'enquiry.samtechsa@gmail.com',
        pass: process.env.EMAIL_PASS || 'bnbhzsuvlwskggmw',
      },
    });

    const mailOptions = {
      from: `"Sam Tech Contact Form" <${process.env.EMAIL_USER||'enquiry.samtechsa@gmail.com'}>`,
      to: process.env.EMAIL_TO||'enquiry.samtechsa@gmail.com',
      cc: ['gm@samtechsa.com', 'operations@samtechsa.com'].join(','),
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>First Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${firstName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Last Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${lastName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Company</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${companyName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Country</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${country}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Category</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${category}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Website URL</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${websiteUrl}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>How did you find us</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${howDidYouFindUs}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Subject</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${subject}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
        </table>
      `,
    };
        //   <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Job Title</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${jobTitle}</td></tr>

    await transporter.sendMail(mailOptions);

    return Response.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}