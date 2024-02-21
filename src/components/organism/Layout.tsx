// Code: Layout Component
// Description: This component is used to create the layout of the application. It will contain the header, footer and the main content of the application.

import { Outlet } from "react-router-dom";
import { Header } from "../molecules/Header";
import { Footer } from "../molecules/Footer";

export function Layout() {
    return (
        <div className="flex flex-col h-screen w-full bg-zinc-900 text-zinc-50 antialiased space-y-4 overflow-auto">
            <Header name="Embrapa Pantanal" local="Corumbá MS" />
            <div className="flex-1 flex justify-center ">
                <Outlet />
            </div>
            <Footer name="Embrapa Pantanal" local="Corumbá MS" />
        </div>
    );
}

