import { NextResponse } from "next/server";
import { BASE_SYSTEM_PROMPT, CLONE_FROM_HTML } from "@/lib/prompts";
import { generateHtml } from "@/lib/openai";

const MAX_HTML_CHARS = 12000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = String(body?.url ?? "").trim();

    if (!url || !/^https?:\/\//i.test(url)) {
      return NextResponse.json(
        { error: "Valid http(s) URL is required." },
        { status: 400 }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121 Safari/537.36",
      },
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch: ${res.status}` },
        { status: 400 }
      );
    }

    const rawHtml = await res.text();
    const cleaned = rawHtml
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .slice(0, MAX_HTML_CHARS);

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const html = await generateHtml({
      system: BASE_SYSTEM_PROMPT,
      user: CLONE_FROM_HTML(url, cleaned),
      model,
    });

    return NextResponse.json({ html });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
