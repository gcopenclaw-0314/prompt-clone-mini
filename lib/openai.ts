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

  const isGpt5 = model.startsWith("gpt-5");

  if (isGpt5) {
    const inputContent = [
      { type: "input_text", text: user },
      ...(imageDataUrl
        ? [{ type: "input_image", image_url: imageDataUrl }]
        : []),
    ];

    const res = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        instructions: system,
        input: [{ role: "user", content: inputContent }],
        max_output_tokens: 2000,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`OpenAI error: ${text}`);
    }

    const data = await res.json();
    const outputText =
      data.output_text ||
      (Array.isArray(data.output)
        ? data.output
            .flatMap((item: { content?: Array<{ text?: string }> }) =>
              item.content || []
            )
            .map((part: { text?: string }) => part.text || "")
            .join("")
        : "");

    return stripCodeFences(String(outputText || "").trim());
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
      max_completion_tokens: 2000,
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
  const rawContent = data.choices?.[0]?.message?.content as
    | string
    | Array<{ text?: string; type?: string }>
    | undefined;

  let content = "";
  if (typeof rawContent === "string") {
    content = rawContent;
  } else if (Array.isArray(rawContent)) {
    content = rawContent
      .map((part) => part.text || "")
      .join("")
      .trim();
  }

  return stripCodeFences(content || "");
}

function stripCodeFences(input: string) {
  return input.replace(/^```[a-zA-Z]*\n?/g, "").replace(/```$/g, "").trim();
}
