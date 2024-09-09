"use server"
import connect from "@/lib/dbConnect";
import SkillModel from "@/models/SkillModel";

const { NextResponse } = require("next/server");

export async function GET(request) {
    try {
        await connect();

        const data = await SkillModel.find();
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