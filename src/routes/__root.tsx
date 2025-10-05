/// <reference types="vite/client" />
import type React from "react"
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import ChatWidget from "@/components/chat-widget"
// import ChatWidget from "../../components/chat-widget"
import appCss from "./globals.css?url"
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      { title: "Sara Creations" }
    ], links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.23/dist/katex.min.css', crossOrigin: 'anonymous' }
    ],
  }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">

        <Outlet />
        <Scripts />


      </body>
    </html>
  )
}
