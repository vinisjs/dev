import { Outlet } from 'react-router-dom';
import { Main } from '../components/molecules/Main';
import { Menu } from '../components/organism/Menu';

export function Dashboard() {
    return (
        <div className="flex-1 mx-4 md:mx-0">
            <div className="h-full md:mr-3 md:grid gap-3 grid-cols-[260px_1fr] ">
                <Menu />
                <Main content={<Outlet />} />
            </div>
        </div>
    );
}
