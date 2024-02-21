type CardProps = {
  title?: string
  content?: string
}

export function Card({ title, content }: CardProps) {
  return (
    <section className="bg-zinc-700 px-2 py-4">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{content}</p>
    </section>
  )
}
