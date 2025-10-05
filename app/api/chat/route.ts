import { consumeStream, convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const prompt = convertToModelMessages(messages)

  const result = streamText({
    // Using Vercel AI Gateway default. Fast, safe default model.
    model: "openai/gpt-5-mini",
    prompt,
    abortSignal: req.signal,
    maxOutputTokens: 1200,
  })

  return result.toUIMessageStreamResponse({
    consumeSseStream: consumeStream,
  })
}
