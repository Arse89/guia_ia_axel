# Proxy IA y cliente de front

## 1) Worker básico (Gemini 2.5 Flash por defecto)
Usa `snippets/worker-ia.js`. Añade tu `GEMINI_API_KEY` en Variables (Cloudflare).

## 2) Cliente en el front (TypeScript)
Usa `snippets/api-client.ts` como base: `askGemini(prompt)`.

## 3) Extensiones recomendadas (luego)
- Streaming (`:streamGenerateContent`), cache y backoff.
- Fallback a Flash‑Lite si 429 o cuota agotada.
