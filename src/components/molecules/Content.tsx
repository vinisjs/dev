import { Card } from "../atoms/Card";

export function Content() {
  return (
    <div className="bg-zinc-800 text-zinc-50 space-y-2">
      <div className="grid sm:grid-cols-2 gap-4">
        <Card title="Hello World" content="lorem" />
        <Card title="Hello World" content="lorem" />
      </div>
    </div>
  )
}
