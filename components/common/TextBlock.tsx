import type { TextBlockProps } from "@/types";

export function TextBlock({ messages }: TextBlockProps) {
  return (
    <div className="p-6">
      {messages.map((message) => (
        <p key={message} className="text-base leading-relaxed md:text-lg">
          {message}
        </p>
      ))}
    </div>
  );
}
