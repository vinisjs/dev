import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";

export function Template({ component }: any) {
  return (
    <div className="flex flex-col h-screen w-full bg-zinc-900 text-zinc-50 antialiased space-y-4 overflow-auto">
      <Header name="Embrapa Pantanal" local="Corumbá MS" />
      <div className="flex-1 flex w-full">
        {component}
      </div>
      <Footer name="Embrapa Pantanal" local="Corumbá MS" />
    </div>
  )
}
