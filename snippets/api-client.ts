export async function askGemini(prompt: string, workerUrl: string) {
  const res = await fetch(workerUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }]}],
      generationConfig: { temperature: 0.3, maxOutputTokens: 512 }
    })
  });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(`IA error ${res.status}: ${msg}`);
  }
  const data = await res.json();
  // Ajusta según el formato devuelto por la API
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  return text;
}
