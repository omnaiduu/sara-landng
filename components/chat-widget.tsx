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
import { MessageCircle, X, Send, Sparkles } from "lucide-react"

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
          "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm",
          isUser
            ? "bg-gradient-to-br from-emerald-600 to-emerald-700 text-white"
            : "bg-white text-slate-700 border border-emerald-100",
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
    <div className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6 ">
      {isMobile ? (
        <>
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent className="max-h-[85vh] rounded-t-3xl bg-gradient-to-b from-emerald-50 to-white border-t-4 border-emerald-500">
              <div className="mx-auto w-full max-w-screen-sm">
                <DrawerHeader className="flex items-center justify-between py-4 px-4 border-b border-emerald-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <DrawerTitle className="text-lg font-semibold text-slate-900">Sara Assistant</DrawerTitle>
                      <p className="text-xs text-emerald-600">Always here to help</p>
                    </div>
                  </div>
                  <DrawerClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Close chat"
                      className="h-9 w-9 rounded-full hover:bg-emerald-100 hover:text-emerald-700"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </DrawerClose>
                </DrawerHeader>

                <div
                  ref={scrollRef}
                  className="px-4 py-4 h-[calc(85vh-180px)] overflow-y-auto space-y-4 bg-gradient-to-b from-transparent to-emerald-50/30"
                >
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center mb-4">
                        <MessageCircle className="w-8 h-8 text-emerald-600" />
                      </div>
                      <p className="text-sm font-medium text-slate-700 mb-2">Welcome to Sara Creations!</p>
                      <p className="text-xs text-slate-500 max-w-xs">
                        Ask me about services, pricing, portfolios, or anything else you'd like to know.
                      </p>
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

                  {status === "streaming" && (
                    <div className="flex items-center gap-2 text-xs text-emerald-600">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
                      </div>
                      <span>Sara is typing...</span>
                    </div>
                  )}

                  {error && (
                    <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      Oops! Something went wrong. Please try again.
                    </div>
                  )}
                </div>

                <form
                  onSubmit={onSubmit}
                  className="flex items-center gap-2 px-4 py-4 border-t border-emerald-100 bg-white"
                >
                  <label htmlFor="message-mobile" className="sr-only">
                    Message
                  </label>
                  <Input
                    id="message-mobile"
                    name="message"
                    placeholder="Type your message..."
                    autoComplete="off"
                    className="flex-1 rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white"
                    disabled={status === "streaming"}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={status === "streaming"}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>
            </DrawerContent>
          </Drawer>

          <Button
            onClick={() => setOpen(true)}
            className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 ease-out hover:scale-110 active:scale-95 border-4 border-white"
            aria-label="Open chat"
            title="Chat with Sara"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        </>
      ) : (
        <>
          {open && (
            <div
              className="w-[420px] h-[600px] shadow-2xl border-2 bg-white animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-8 duration-300 rounded-2xl overflow-hidden flex flex-col justify-between"
              aria-label="Customer support chat"
            >


              <div className="bg-gradient-to-b border-emerald-200  from-white to-emerald-50/30 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between px-5 py-4 border-b border-emerald-100 bg-gradient-to-r from-emerald-50 to-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Sara Assistant</div>
                      <div className="text-xs text-emerald-600">Online • Ready to help</div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Close chat"
                    className="h-9 w-9 rounded-full hover:bg-emerald-100 hover:text-emerald-700"
                    onClick={() => setOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div
                  ref={scrollRef}
                  className="flex-1 px-5 py-4 overflow-y-auto space-y-4 bg-gradient-to-b from-transparent to-emerald-50/20"
                >
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center mb-4 shadow-lg">
                        <MessageCircle className="w-10 h-10 text-emerald-600" />
                      </div>
                      <p className="text-base font-semibold text-slate-800 mb-2">Welcome to Sara Creations!</p>
                      <p className="text-sm text-slate-600 max-w-sm leading-relaxed">
                        Ask me about our services, pricing, portfolio, or anything else you'd like to know. I'm here to help! ✨
                      </p>
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

                  {status === "streaming" && (
                    <div className="flex items-center gap-2 text-sm text-emerald-600">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
                      </div>
                      <span>Sara is typing...</span>
                    </div>
                  )}

                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      Oops! Something went wrong. Please try again.
                    </div>
                  )}
                </div>

                <form
                  onSubmit={onSubmit}
                  className="flex items-center gap-3 px-5 py-4 border-t border-emerald-100 bg-white"
                >
                  <label htmlFor="message-desktop" className="sr-only">
                    Message
                  </label>
                  <Input
                    id="message-desktop"
                    name="message"
                    placeholder="Type your message..."
                    autoComplete="off"
                    className="flex-1 rounded-xl border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 bg-white"
                    disabled={status === "streaming"}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="h-11 w-11 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={status === "streaming"}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </div>



            </div>
          )}

          <div className="flex justify-end pt-4">
            <Button
              onClick={() => setOpen((v) => !v)}
              className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 ease-out hover:scale-110 active:scale-95 border-4 border-white group relative"
              aria-label={open ? "Close chat" : "Open chat"}
              title={open ? "Close chat" : "Chat with Sara"}
            >
              {open ? (
                <X className="h-7 w-7 transition-transform duration-200" />
              ) : (
                <MessageCircle className="h-7 w-7 transition-transform duration-200 group-hover:scale-110" />
              )}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}
