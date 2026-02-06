"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const samplePrompt =
  "Design a premium event marketing website for a SaaS that helps teams measure ROI from conferences. Include a crisp hero, social proof, feature grid, pricing, and CTA.";

const sampleUrl = "https://attendflowio.lovable.app/";

export default function Home() {
  const [mode, setMode] = useState<"prompt" | "url">("prompt");
  const [prompt, setPrompt] = useState(samplePrompt);
  const [url, setUrl] = useState(sampleUrl);
  const [viewport, setViewport] = useState<"mobile" | "desktop">("mobile");
  const [html, setHtml] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hasAutoRun = useRef(false);

  const previewTitle = useMemo(
    () => (mode === "prompt" ? "Generated from prompt" : "Mimic from URL"),
    [mode]
  );

  const requestGenerate = useCallback(
    async ({
      mode: requestMode,
      prompt: requestPrompt,
      url: requestUrl,
      viewport: requestViewport,
    }: {
      mode: "prompt" | "url";
      prompt: string;
      url: string;
      viewport: "mobile" | "desktop";
    }) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          requestMode === "prompt" ? "/api/generate" : "/api/clone",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:
              requestMode === "prompt"
                ? JSON.stringify({ prompt: requestPrompt })
                : JSON.stringify({ url: requestUrl, viewport: requestViewport }),
          }
        );

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data?.error || "Request failed");
        }

        setHtml(data.html);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        setError(message);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const handleGenerate = useCallback(() => {
    return requestGenerate({ mode, prompt, url, viewport });
  }, [mode, prompt, requestGenerate, url, viewport]);

  function handleClear() {
    setHtml("");
  }

  useEffect(() => {
    if (hasAutoRun.current) return;
    const params = new URLSearchParams(window.location.search);
    const demo = params.get("demo") === "1";
    if (!demo) return;

    const demoMode = (params.get("mode") as "prompt" | "url") || mode;
    const demoPrompt = params.get("prompt") || prompt;
    const demoUrl = params.get("url") || url;
    const demoViewport =
      (params.get("viewport") as "mobile" | "desktop") || viewport;

    setMode(demoMode);
    setPrompt(demoPrompt);
    setUrl(demoUrl);
    setViewport(demoViewport);

    hasAutoRun.current = true;
    setTimeout(() => {
      requestGenerate({
        mode: demoMode,
        prompt: demoPrompt,
        url: demoUrl,
        viewport: demoViewport,
      });
    }, 50);
  }, [mode, prompt, requestGenerate, url, viewport]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-semibold text-white">
              P
            </span>
            <div>
              <p className="text-sm font-semibold">PromptClone</p>
              <p className="text-xs text-slate-500">Mini v0/Lovable-style app</p>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-xs text-slate-500 sm:flex">
            <span>Prompt → Website</span>
            <span>URL → Mimic</span>
            <span>Live Preview</span>
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-2xl font-semibold">Generate a beautiful site</h1>
            <p className="mt-2 text-sm text-slate-500">
              Mimic v0/Lovable flow: give a prompt or a URL, get a polished single-page
              marketing site instantly.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-semibold">
              <button
                className={`rounded-full px-4 py-2 transition ${
                  mode === "prompt"
                    ? "bg-white text-slate-900 shadow"
                    : "text-slate-500"
                }`}
                onClick={() => setMode("prompt")}
              >
                Prompt
              </button>
              <button
                className={`rounded-full px-4 py-2 transition ${
                  mode === "url"
                    ? "bg-white text-slate-900 shadow"
                    : "text-slate-500"
                }`}
                onClick={() => setMode("url")}
              >
                URL Clone
              </button>
            </div>

            {mode === "prompt" ? (
              <div className="mt-5 space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Prompt
                </label>
                <textarea
                  className="h-40 w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  value={prompt}
                  onChange={(event) => setPrompt(event.target.value)}
                />
              </div>
            ) : (
              <div className="mt-5 space-y-3">
                <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Website URL
                </label>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                />
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span>Viewport:</span>
                  <button
                    className={`rounded-full border px-3 py-1 transition ${
                      viewport === "mobile"
                        ? "border-indigo-400 bg-indigo-50 text-indigo-700"
                        : "border-slate-200"
                    }`}
                    onClick={() => setViewport("mobile")}
                    type="button"
                  >
                    Mobile
                  </button>
                  <button
                    className={`rounded-full border px-3 py-1 transition ${
                      viewport === "desktop"
                        ? "border-indigo-400 bg-indigo-50 text-indigo-700"
                        : "border-slate-200"
                    }`}
                    onClick={() => setViewport("desktop")}
                    type="button"
                  >
                    Desktop
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  The app grabs a screenshot + HTML to mimic layout, typography, and spacing.
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={handleGenerate}
                disabled={loading}
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Generating..." : "Generate site"}
              </button>
              <button
                onClick={handleClear}
                className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300"
              >
                Clear preview
              </button>
            </div>

            {error && (
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-600">
                {error}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Quality guardrails</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• Visual polish prompt baked in (spacing, typography, gradients).</li>
              <li>• Original copy (no trademarked text).</li>
              <li>• Mobile-first layout + semantic structure.</li>
              <li>• Output is plain HTML + Tailwind CDN for instant preview.</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{previewTitle}</h2>
            <span className="text-xs text-slate-500">Live preview</span>
          </div>

          <div className="min-h-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {html ? (
              <iframe
                title="Preview"
                className="h-[720px] w-full"
                sandbox="allow-scripts allow-same-origin"
                srcDoc={html}
              />
            ) : (
              <div className="flex h-[520px] items-center justify-center text-sm text-slate-400">
                Generated site will appear here.
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
