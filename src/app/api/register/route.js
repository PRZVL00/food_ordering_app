import mongoose from "mongoose";
import { User } from "../../models/User";
import "dotenv/config";
export async function POST(req) {
  const body = await req.json();
  mongoose.connect(process.env.MONGO_URL);
  const createdUser = await User.create(body);
  return Response.json("createdUser");
}
