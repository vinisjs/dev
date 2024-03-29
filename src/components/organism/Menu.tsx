// Menu.tsx

import { FileSearch, Home, LogOut, PlusCircle, Settings } from "lucide-react";
import { Button } from "../atoms/Button";


export function Menu() {
  return (
    <div className="hidden md:flex flex-col p-4 bg-zinc-800 text-zinc-50">
      <div
        className="h-full flex flex-col justify-between"
      >
        {/* header */}
        <div className="space-y-2">
          <div className="mb-4">
            <h1 className="text-2xl font-bold">Vinicius Souza</h1>
            <h2 className="text-sm font-normal text-zinc-500">Administrator</h2>
          </div>
          {/* content */}
          <div className="space-y-2">
            <Button
              label="Home"
              icon={<Home className="size-5" />}
              to="/dashboard"
            />
            <Button
              label="New Animal"
              icon={<PlusCircle className="size-5" />}
              to="/dashboard/animal"

            />
            <Button
              label="Reports"
              icon={<FileSearch className="size-5" />}
              to="/dashboard/reports"
            />
          </div>
        </div>
        {/* menu */}
        <div className="flex gap-2">
          <Button
            label="Exit"
            icon={<LogOut className="size-5" />}
            to="/exit"
          />
          <Button
            label="Settings"
            icon={<Settings className="size-5" />}
            to="/dashboard/settings"
          />
        </div>
      </div >
    </div>
  )
}
