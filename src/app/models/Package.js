import mongoose, { Schema } from "mongoose";

const timelineSchema = new Schema({ day: Number, title: String, points: [String] }, { _id: false });
const trekSchema = new Schema({ name: String, location: String, difficulty: String, duration: String, season: String, description: String }, { _id: false });

const packageSchema = new Schema({
  city: { type: String, required: true, unique: true },
  type: { type: String, enum: ["domestic", "international"], required: true },
  img: String,
  days: String,
  price: String,
  des: String,
  highlights: [String],
  attractions: [String],
  treks: [trekSchema],
  timeline: [timelineSchema],
  published: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Package || mongoose.model("Package", packageSchema);
