import connect from "@/lib/dbConnect"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    await connect();
    return new NextResponse("Berhasil");
  }
  catch (error) {
    return new NextResponse("Error")
  }

}