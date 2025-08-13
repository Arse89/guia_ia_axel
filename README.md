# 📚 Guía Operativa IA — Android & Escritorio (Axel)

Este repo es tu **fuente de verdad** para construir apps con ayuda de IA, trabajando desde **Android** (Bolt/StackBlitz) y, cuando toque, desde **escritorio** (VS Code + Gemini Code Assist).

## Estructura
- `docs/` — Guías y decisiones de arquitectura.
- `prompts/` — Prompts listos para pegar en Bolt.new / IDE.
- `snippets/` — Código mínimo reutilizable (Worker IA, cliente API, configs).
- `.gitignore` — Para mantener el repo limpio.

## Ruta rápida (Android-only)
1. Abre **Bolt.new** y pega `prompts/bolt-inicio.txt`.
2. Abre el proyecto en **StackBlitz**, prueba y ajusta.
3. Despliega el **Worker** con `snippets/worker-ia.js` en Cloudflare Workers.
4. Conecta el front al Worker siguiendo `docs/proxy-multi-ia.md`.
5. Versiona en **GitHub** (sube los archivos sueltos).

## Extra
- Crea un **GPT personalizado** en ChatGPT y sube `docs/guia-ia.md` como *Knowledge*. Así te responde siguiendo tu stack.
