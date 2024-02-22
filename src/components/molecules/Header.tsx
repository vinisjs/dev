import { Link } from "react-router-dom";

type T = {
    name: string;
    local: string;
}

export function Header({
    name,
    local
}: T) {
    return (
        <header className="bg-zinc-800 ">
            <div className="flex gap-4 items-center">
                <Link to="/">
                    <img src="./public/images/logo-embrapa.svg" alt="" className="size-16" />
                </Link>
                <div>
                    <h1 className="text-md font-bold md:text-xl "> <Link to="/">{name}</Link></h1>
                    <p className="text-sm md:text-md">
                        <Link to="/">{local}</Link>
                    </p>
                </div>
            </div>
        </header>
    );
}
