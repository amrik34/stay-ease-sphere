import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: String,
    location: String,
    price: Number,
    images: [String],
    amenities: [String],
    rooms: [
      {
        roomType: String,
        price: Number,
        available: Number,
      },
    ],
  },
  { timestamps: true },
);

export default mongoose.model("Hotel", hotelSchema);
