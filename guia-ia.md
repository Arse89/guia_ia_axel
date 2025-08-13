# Guía IA — Android & Escritorio (versión consolidada)

## 1) Objetivo
- Desarrollar apps con IA de forma **rápida, segura y barata**, empezando desde **Android**.
- Mantener un camino a futuro para **escritorio** (VS Code + Gemini Code Assist).

## 2) Patrón híbrido (estándar emergente)
- **IA externa (IDE)**: generar/refactorizar código, crear tests, migraciones → **siempre via PR**.
- **IA interna (runtime, opcional)**: cambiar **tema/flags/layout** en caliente, experiments y explicaciones con datos **sin redeploy**. Para código, que abra **PRs** (no push directo).

**Úsala solo si** necesitas experimentar UI/flags o explicar datos en vivo. Si no, quédate con IA del IDE.

## 3) Stack recomendado
- **Front**: React + Vite + TypeScript + Tailwind
- **Estado**: TanStack Query (server) + Zustand (UI)
- **Forms**: React Hook Form + Zod
- **Entorno Android**: Bolt.new (bootstrap) + StackBlitz (WebContainers)
- **Backend**: Cloudflare Workers (proxy IA + endpoints) / Vercel Functions
- **BBDD/Auth**: Supabase (Postgres, Auth, Storage)
- **Deploy**: Cloudflare Pages o Vercel
- **Calidad**: ESLint + Prettier + Vitest (tests en CI), Playwright en escritorio

## 4) Flujo de trabajo
### Android-only
1. **Bolt.new** para crear esqueleto (React+TS+Tailwind+Router+Query+Zod).
2. **StackBlitz** para iterar el código con hot reload en el navegador.
3. **Worker IA** (Cloudflare) como proxy seguro hacia Gemini (2.5 Flash/Flash‑Lite).
4. **Supabase** si necesitas Auth/BBDD. 
5. **GitHub** para versionar y revisar cambios.

### Escritorio (cuando puedas)
- **VS Code + Gemini Code Assist / Cursor / Copilot** para refactors grandes y tests E2E local.

## 5) Proxy IA + fallbacks
- El front **nunca** lleva claves. Llama a `/api/ai` en tu Worker.
- Política base: **Gemini 2.5 Flash** → **Flash‑Lite** → (opcional) otros proveedores.
- AÑADE: cache input→output, backoff si 429, streaming para UX.

## 6) Seguridad y operaciones
- Claves en variables de entorno del Worker.
- Principio de **mínimo privilegio**: lista blanca de endpoints.
- Cambios de código **siempre PR** (no a `main`).
- Logs: prompt, modelo, latencia, tokens, usuario (si aplica). CI en cada PR.

## 7) Cuándo reconsiderar IA interna
- Cambias tema/props/flags a menudo en runtime.
- Necesitas **explicaciones con datos reales** desde la app.
- Quieres que la IA te prepare **PRs automáticos** de cambios repetitivos.

Si aparece alguno, añade `theme.json`, `ui.config.json` y 1–2 endpoints de “tooling”.
