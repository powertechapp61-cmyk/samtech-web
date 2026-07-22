import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME ||'dxmhjg6x1' ,
  api_key: process.env.CLOUDINARY_API_KEY || '677116451113961',
  api_secret: process.env.CLOUDINARY_API_SECRET|| 'yJ6qzW3wgTFu7UyBDRlHZlt2q1s',
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
    resource_type: 'raw',
    folder: 'samtech_pdfs',
    public_id: file.name.replace(/\.pdf$/i, ''),
    format: 'pdf',          // 👈 ensures URL ends in .pdf
    use_filename: true,
    unique_filename: true,
    });

    return Response.json(
      { message: 'Upload successful!', url: result.secure_url, public_id: result.public_id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return Response.json({ message: 'Upload failed.' }, { status: 500 });
  }
}