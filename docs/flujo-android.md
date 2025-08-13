# Flujo Android-only (paso a paso)
1) Bolt.new → pega `prompts/bolt-inicio.txt` y genera el esqueleto.
2) Abre en StackBlitz (Open in StackBlitz) y prueba.
3) Crea un Cloudflare Worker con `snippets/worker-ia.js` y pon `GEMINI_API_KEY` en secretos.
4) Sustituye el endpoint mock por la URL del Worker.
5) (Opcional) Añade Supabase: Auth y tablas con RLS básica.
6) Versiona: sube cambios a GitHub (archivos sueltos).
