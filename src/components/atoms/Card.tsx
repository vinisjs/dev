type CardProps = {
  title?: string
  content?: string
  children?: any;
}

export function Card({ children, title, content }: CardProps) {
  return (
    <section className="flex flex-col justify-between bg-zinc-700/60 px-3 py-4 space-y-2 text-justify">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
      {children}
    </section>
  )
}
