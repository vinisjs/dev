import { Content } from "./Content";

export function Main({ content }: { content: React.ReactNode }) {
  return (
    <main className="h-full bg-zinc-800 p-4 overflow-clip space-y-4">
      <h1 className="text-2xl font-bold border-b-2 border-zinc-500">Dashboard</h1>
      <div className="overflow-y-auto max-h-[calc(100vh-250px)]">
        <div className="space-y-4">
          <Content children={content} />
        </div>
      </div>
    </main>
  );
}
