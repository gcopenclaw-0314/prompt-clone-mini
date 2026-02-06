import { NextResponse } from "next/server";
import { BASE_SYSTEM_PROMPT, PROMPT_TO_SITE } from "@/lib/prompts";
import { generateHtml } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = String(body?.prompt ?? "").trim();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o";
    const html = await generateHtml({
      system: BASE_SYSTEM_PROMPT,
      user: PROMPT_TO_SITE(prompt),
      model,
    });

    return NextResponse.json({ html });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
