"use server";
import connect from "@/lib/dbConnect";
import EducationModel from "@/models/EducationModel";

const { NextResponse } = require("next/server");

export async function GET(request) {
    try {
        await connect();

        const data = await EducationModel.find().populate('relatedExperience');
        const response = new NextResponse(JSON.stringify({ data }), { status: 200 });
        return response;
    }
    catch (error) {
        const response = new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
        return response;
    }
}
