type OpenAIResponse = {
  choices?: Array<{ message?: { content?: string } }>;
};

export async function generateHtml({
  system,
  user,
  model,
  imageDataUrl,
}: {
  system: string;
  user: string;
  model: string;
  imageDataUrl?: string;
}) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY env var.");
  }

  const userContent = imageDataUrl
    ? [
        { type: "text", text: user },
        { type: "image_url", image_url: { url: imageDataUrl } },
      ]
    : user;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.6,
      max_tokens: 2000,
      messages: [
        { role: "system", content: system },
        { role: "user", content: userContent },
      ],
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI error: ${text}`);
  }

  const data = (await res.json()) as OpenAIResponse;
  const content = data.choices?.[0]?.message?.content?.trim() ?? "";
  return stripCodeFences(content);
}

function stripCodeFences(input: string) {
  return input.replace(/^```[a-zA-Z]*\n?/g, "").replace(/```$/g, "").trim();
}
