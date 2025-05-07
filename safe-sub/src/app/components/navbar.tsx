export default function Navbar(){
    return(
        <div className="flex justify-between items-center mb-5 px-10 bg-zinc-900 h-20">
            <div className="basis-64 text-left p-1">
                <p className="text-3xl">SafeSubstance</p>
            </div>
            <div className="flex gap-x-2">
            <div className="flex">
                <button className="bg-zinc-900 hover:bg-blue-500 text-white font-bold rounded-md py-2 px-4 border-1 border-white">
                    Settings
                </button>
            </div>
            <div className="flex">
            <button className="bg-zinc-900 hover:bg-blue-500 text-white font-bold rounded-md py-2 px-4 border-1 border-white">
                    Interactions
                </button>
            </div>
            <div className="flex">
            <button className="bg-zinc-900 hover:bg-blue-500 text-white font-bold rounded-md py-2 px-4 border-1 border-white">
                    Help near you
                </button>
            </div>
            </div>
        </div>
    );
};
