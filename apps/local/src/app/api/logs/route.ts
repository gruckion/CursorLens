// app/api/logs/route.ts
import type { NextRequest} from "next/server";
import { NextResponse } from "next/server";

import { getLogs } from "~/app/actions";
import prisma from "~/lib/prisma";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const provider = searchParams.get("provider") || "all";
  const startDate = searchParams.get("startDate") || "";
  const endDate = searchParams.get("endDate") || "";

  try {
    const logs = await getLogs({ provider, startDate, endDate });
    return NextResponse.json(logs);
  } catch (error) {
    console.error("Error fetching logs:", error);
    return NextResponse.json({ error: "Error fetching logs" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const logData = await request.json();
    const log = await prisma.log.create({
      data: {
        ...logData,
        metadata: logData.metadata,
        response: logData.response, // Ensure response is stored as Json
        timestamp: new Date(),
      },
    });
    return NextResponse.json(log);
  } catch (error) {
    console.error("Error creating log:", error);
    return NextResponse.json({ error: "Error creating log" }, { status: 500 });
  }
}
