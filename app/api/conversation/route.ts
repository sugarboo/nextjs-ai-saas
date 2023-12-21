import { NextResponse } from "next/server";
import OpenAI from "openai";
import { auth } from "@clerk/nextjs";

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
})

async function POST(req: Request) {
  try {
    const userId = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", {
        status: 401
      })
    }

    if (!messages) {
      return new NextResponse("Messages are required", {
        status: 400
      })
    }

    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages
    });

    return NextResponse.json(res.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", {
      status: 500
    })
  }
}

export {
  POST,
}
