import { Link } from "react-router-dom";

type ButtonProps = {
    label: string;
    icon?: React.ReactNode;
    to: string;
    center?: true | false;
}

export function Button({ label, icon, to, center = false }: ButtonProps) {
    return (
        <Link
            className="block w-full px-1 py-2 bg-zinc-600  hover:bg-zinc-600 hover:outline outline-1 outline-emerald-500 rounded-lg"
            to={to}
        >
            <div className={`flex items-center gap-2 text-zinc-300 hover:text-emerald-400 ${center ? 'justify-center' : ''}`}>
                <p className="">{icon}</p>
                <p className="text-sm ">{label}</p>
            </div>
        </Link>
    )
}
