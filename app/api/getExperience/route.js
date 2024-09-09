"use server"
import connect from "@/lib/dbConnect";
import ExperienceModel from "@/models/ExperienceModel";

const { NextResponse } = require("next/server");

export async function GET(request) {
    try {
        await connect();

        const data = await ExperienceModel.find({});
        return NextResponse.json({data});
    }
    catch (error) {
        return new NextResponse(JSON.stringify({
            error: error.message,
        }), {
            status: 500
        })
    }
}