import {Link} from "react-router-dom";

export const CommentsMenuPage = () => {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-2xl font-semibold">Choose API</h2>
            <div className="flex gap-4">
                <Link to="placeholder" className="px-4 py-2 bg-blue-500 text-white rounded">Placeholder</Link>
                <Link to="dummyjson" className="px-4 py-2 bg-green-500 text-white rounded">DummyJSON</Link>
            </div>
        </div>
    );
};