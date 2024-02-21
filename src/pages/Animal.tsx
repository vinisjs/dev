// Animal.tsx

import { Main } from "../components/molecules/Main";
import { Menu } from "../components/organism/Menu";

export function Animal() {
    return (
        <div
            className="flex-1 mx-4 md:mx-0">
            <div className="h-full md:mr-3 md:grid gap-3 grid-cols-[260px_1fr] ">
                <Menu />
                <Main />
            </div>
        </div >
    )
}
