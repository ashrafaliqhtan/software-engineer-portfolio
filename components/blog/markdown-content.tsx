"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

interface MarkdownContentProps {
  content: string
}

function CodeBlock({ code, language }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative my-4 overflow-hidden rounded-lg border border-border bg-muted">
      <div className="flex items-center justify-between border-b border-border bg-card px-4 py-2">
        <span className="text-xs text-muted-foreground">{language || "code"}</span>
        <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-7 gap-1.5 text-xs">
          {copied ? (
            <>
              <Check className="h-3 w-3" />
              تم النسخ
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              نسخ
            </>
          )}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm" dir="ltr">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  // Simple markdown-like parsing
  const renderContent = () => {
    const lines = content.trim().split("\n")
    const elements: JSX.Element[] = []
    let inCodeBlock = false
    let codeLines: string[] = []
    let codeLanguage = ""

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(<CodeBlock key={index} code={codeLines.join("\n")} language={codeLanguage} />)
          codeLines = []
          inCodeBlock = false
        } else {
          inCodeBlock = true
          codeLanguage = line.slice(3)
        }
        return
      }

      if (inCodeBlock) {
        codeLines.push(line)
        return
      }

      // Headers
      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={index} className="mb-4 mt-8 text-3xl font-bold text-foreground">
            {line.slice(2)}
          </h1>,
        )
        return
      }

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="mb-3 mt-6 text-2xl font-bold text-foreground">
            {line.slice(3)}
          </h2>,
        )
        return
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="mb-2 mt-4 text-xl font-bold text-foreground">
            {line.slice(4)}
          </h3>,
        )
        return
      }

      // List items
      if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="mr-4 text-muted-foreground">
            {line.slice(2)}
          </li>,
        )
        return
      }

      // Empty line
      if (line.trim() === "") {
        elements.push(<br key={index} />)
        return
      }

      // Regular paragraph
      elements.push(
        <p key={index} className="my-2 leading-relaxed text-muted-foreground">
          {line}
        </p>,
      )
    })

    return elements
  }

  return <div className="markdown-content">{renderContent()}</div>
}
