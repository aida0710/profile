import type { BlockFrameProps } from "@/types";

export function BlockFrame({ title, description, children }: BlockFrameProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4">
      <header className="mb-6 ml-5">
        <h1 className="mb-1.5 text-3xl font-medium md:text-4xl">{title}</h1>
        <p className="text-sm font-normal md:text-base">{description}</p>
      </header>
      <div className="m-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
}
