type T = {
    name: string;
    local: string;
}

export function Footer({
    name,
    local
}: T) {
    return (
        <footer className="p-4 bg-zinc-800">
            <div className="flex justify-between">
                <p className="text-xs">© {name} - {local}</p>
                <span className="text-xs">Version 1.0.0</span>
            </div>
        </footer>
    );
}
