type OpenAIResponse = {
  choices?: Array<{ message?: { content?: string } }>;
};

export async function generateHtml({
  system,
  user,
  model,
}: {
  system: string;
  user: string;
  model: string;
}) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY env var.");
  }

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      max_tokens: 1800,
      messages: [
        { role: "system", content: system },
        { role: "user", content: user },
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
