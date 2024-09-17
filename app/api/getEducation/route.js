"use server";
import connect from "@/lib/dbConnect";
import EducationModel from "@/models/EducationModel";

const { NextResponse } = require("next/server");

export async function GET(request) {
    try {
        await connect();

        const data = await EducationModel.find().populate('relatedExperience');

        // Create a NextResponse with CORS headers
        const response = new NextResponse(JSON.stringify({ data }), { status: 200 });
        response.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins or specify the allowed origin
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

        return response;
    }
    catch (error) {
        // Create a NextResponse with CORS headers for error responses
        const response = new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
        response.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins or specify the allowed origin
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');

        return response;
    }
}
