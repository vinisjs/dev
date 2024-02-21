// Login.tsx

import { Button } from "../components/atoms/Button";

export function Login() {
    return (
        <div className="max-w-4xl mx-auto flex flex-col justify-center items-center">
            <div className="flex bg-zinc-800 rounded-md h-80 overflow-hidden">
                <div >
                    <img src="./images/cow.jpg" alt="cow" className="w-full h-full object-cover" />
                </div>

                <div className="flex flex-col space-y-4 p-8">
                    <h1
                        className="text-3xl">
                        Welcome to the <span className="text-3xl font-semibold">Saturn</span>
                    </h1>
                    <form action="" method="post" className="flex flex-col space-y-4">
                        <div className="space-y-1">
                            <span className="text-sm text-zinc-300">Your E-mail</span>
                            <input type="text"
                                className="w-full px-1 py-2 focus:outline outline-2 outline-emerald-500 rounded-lg"
                                placeholder="Email" />
                        </div>
                        <div className="space-y-1">
                            <span className="text-sm text-zinc-300">Your Password</span>
                            <input type="password"
                                className="w-full px-1 py-2 focus:outline outline-2 outline-emerald-500 rounded-lg "
                                placeholder="Password" />
                        </div>
                        <div>
                            <Button
                                to="/dashboard"
                                center={true}
                                label="Login"></Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}