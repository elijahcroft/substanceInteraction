import Navbar from "../components/navbar";

export default function MixSubstances() {
    return (
        <div>
            <Navbar/>
        <div className="flex flex-col items-center justify-start p-10 bg-zinc-900 text-white min-h-screen">
            
            <h2 className="text-3xl mb-4 font-mono">Mix Substances</h2>
            <p className="text-lg mb-6 font-mono">Enter the substances below to check for any interactions.</p>

            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Substance 1"
                    className="w-64 p-3 rounded-md bg-zinc-800 border border-zinc-600 text-white"
                />
                <span className="text-xl text-white">X</span>
                <input
                    type="text"
                    placeholder="Substance 2"
                    className="w-64 p-3 rounded-md bg-zinc-800 border border-zinc-600 text-white"
                />
            </div>

            <button className="w-1/10 p-3 mb-6 rounded-md bg-blue-500 hover:bg-blue-400 text-white font-bold">
                Check Interactions
            </button>

            <div className="w-full p-4 rounded-md bg-zinc-800 border border-zinc-600 ">
                <h3 className="text-xl mb-2">Interactions</h3>
                <p>No interactions found</p>
            </div>
        </div>
        </div>
    );
}
