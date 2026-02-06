# PromptClone Mini (v0/Lovable-style)

A mini app that lets you:
1) Enter a prompt → generate a beautiful landing page
2) Provide a URL → mimic the website’s layout/style (original copy)

## Setup
Create `.env.local` with your API key:
```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
```

Install + run:
```
npm install
npm run dev
```

## Notes
- The generator returns plain HTML using Tailwind CDN so the preview renders instantly.
- URL clone now captures a **screenshot + HTML** (via puppeteer-core + system Chrome) to better mimic layout/typography.
- Set `CHROME_PATH=/usr/bin/google-chrome-stable` if needed.
- For best visual match, use the Mobile viewport toggle when cloning mobile-first designs.
