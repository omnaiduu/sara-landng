"use client"

import type React from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "./ui/drawer"
import { useIsMobile } from "./ui/use-mobile"
import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Input } from "./ui/input"
import { cn } from "@/lib/utils"

function ChatBubble({
  role,
  children,
}: {
  role: "user" | "assistant" | "system" | "data"
  children: React.ReactNode
}) {
  const isUser = role === "user"
  return (
    <div className={cn("w-full flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-lg px-3 py-2 text-sm leading-relaxed",
          isUser ? "bg-primary text-primary-foreground" : "bg-muted text-foreground border",
        )}
        role="status"
        aria-live="polite"
      >
        {children}
      </div>
    </div>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  })

  useEffect(() => {
    // Auto-scroll to bottom on new messages
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget as HTMLFormElement
    const input = new FormData(form).get("message") as string
    if (!input?.trim()) return
    sendMessage({ text: input.trim() })
    form.reset()
  }

  return (
    <div className="fixed z-50 bottom-3 right-3 sm:bottom-4 sm:right-4 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]">
      {isMobile ? (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="max-h-[72vh] sm:max-h-[70vh] rounded-t-lg">
            <div className="mx-auto w-full max-w-screen-sm">
              <DrawerHeader className="flex items-center justify-between py-2 px-3">
                <DrawerTitle>Support Assistant</DrawerTitle>
                <DrawerClose asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    aria-label="Close chat"
                    className="hover:bg-accent hover:text-accent-foreground"
                  >
                    Close
                  </Button>
                </DrawerClose>
              </DrawerHeader>

              <div ref={scrollRef} className="px-3 pb-3 max-h-[48vh] overflow-y-auto space-y-3">
                {messages.length === 0 && (
                  <div className="text-xs text-muted-foreground">
                    Hi! I’m here to help. Ask me about services, pricing, or anything else.
                  </div>
                )}

                {messages.map((m) => (
                  <ChatBubble key={m.id} role={m.role}>
                    {m.parts.map((part, idx) => {
                      if (part.type === "text") return <div key={idx}>{part.text}</div>
                      return null
                    })}
                  </ChatBubble>
                ))}

                {status === "in_progress" && <div className="text-xs text-muted-foreground">Assistant is typing…</div>}

                {error && <div className="text-xs text-destructive">Something went wrong. Please try again.</div>}
              </div>

              <form
                onSubmit={onSubmit}
                className="flex items-center gap-2 px-3 py-2 border-t pb-[env(safe-area-inset-bottom)]"
              >
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Type your message…"
                  autoComplete="off"
                  className="flex-1"
                  disabled={status === "in_progress"}
                />
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  disabled={status === "in_progress"}
                >
                  Send
                </Button>
              </form>
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        open && (
          <Card
            className="w-[calc(100vw-1.5rem)] sm:w-[360px] md:w-[380px] max-h-[72vh] shadow-2xl border bg-background animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4 duration-200"
            aria-label="Customer support chat"
          >
            <div className="flex items-center justify-between px-3 py-2 border-b">
              <div className="text-sm font-medium">Support Assistant</div>
              <Button
                variant="ghost"
                size="sm"
                aria-label="Close chat"
                className="hover:bg-accent hover:text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            </div>

            <div ref={scrollRef} className="px-3 py-3 max-h-[52vh] sm:max-h-[62vh] overflow-y-auto space-y-3">
              {messages.length === 0 && (
                <div className="text-xs text-muted-foreground">
                  Hi! I’m here to help. Ask me about services, pricing, or anything else.
                </div>
              )}

              {messages.map((m) => (
                <ChatBubble key={m.id} role={m.role}>
                  {m.parts.map((part, idx) => {
                    if (part.type === "text") return <div key={idx}>{part.text}</div>
                    return null
                  })}
                </ChatBubble>
              ))}

              {status === "in_progress" && <div className="text-xs text-muted-foreground">Assistant is typing…</div>}

              {error && <div className="text-xs text-destructive">Something went wrong. Please try again.</div>}
            </div>

            <form
              onSubmit={onSubmit}
              className="flex items-center gap-2 px-3 py-2 border-t pb-[env(safe-area-inset-bottom)]"
            >
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <Input
                id="message"
                name="message"
                placeholder="Type your message…"
                autoComplete="off"
                className="flex-1"
                disabled={status === "in_progress"}
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                disabled={status === "in_progress"}
              >
                Send
              </Button>
            </form>
          </Card>
        )
      )}

      <Button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full h-14 w-14 shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-150 ease-out active:scale-95 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        aria-label={open ? "Hide chat" : "Show chat"}
        title={open ? "Hide chat" : "Chat with support"}
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12a8 8 0 1 1-3.293-6.364L21 4l-.636 3.293A7.97 7.97 0 0 1 21 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="13" cy="11" r="1" fill="currentColor" />
          <circle cx="17" cy="11" r="1" fill="currentColor" />
        </svg>
      </Button>
    </div>
  )
}
