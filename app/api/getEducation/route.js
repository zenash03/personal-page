"use server";
import connect from "@/lib/dbConnect";
import EducationModel from "@/models/EducationModel";

const { NextResponse } = require("next/server")

export async function GET(request) {
    try {
        await connect();
        // return new NextResponse("Berhasil");
        const data = await EducationModel.find();
        return NextResponse.json({data})
    }
    catch (error) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
    }
}