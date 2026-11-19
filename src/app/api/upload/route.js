import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfig = {
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
};
cloudinary.config(cloudinaryConfig);

export async function POST(req) {
  if (!Object.values(cloudinaryConfig).every(Boolean)) {
    return Response.json(
      { error: "Image uploads are unavailable. Configure the Cloudinary settings in .env.local." },
      { status: 503 }
    );
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file");
    if (!file || typeof file.arrayBuffer !== "function") {
      return Response.json({ error: "Choose an image file to upload." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "travel_packages" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(buffer);
    });

    return Response.json({ url: uploadResponse.secure_url });
  } catch (error) {
    console.error("Upload error:", error);
    return Response.json({ error: "Upload failed. Check the Cloudinary settings and try again." }, { status: 500 });
  }
}
