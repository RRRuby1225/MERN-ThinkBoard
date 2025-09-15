import { PlusIcon } from "lucide-react";
import { Link } from "react-router";


const Navbar = () => {
    return (
    <header className="bg-base-300 border-b border-base-content/10">
        <div className="container mx-auto max-w-6xl p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-primary font-mono tracking-widest">
                    ThinkBoard
                </h1>
                <div className="flex items-center gap-4">
                    <Link to="/create" className="btn btn-primary">
                    <PlusIcon className="size-5" />
                    <span>Create</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
    )
};

export default Navbar;