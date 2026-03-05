import type { TextBlockProps } from '@/types';

export function TextBlock({ messages }: TextBlockProps) {
  return (
    <div className="py-4">
      {messages.map((message) => (
        <p key={message} className="break-words text-base leading-relaxed text-warm-text/80 md:text-lg">
          {message}
        </p>
      ))}
    </div>
  );
}
