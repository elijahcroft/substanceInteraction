import DrugCard from "./drug"

export default function Category(props:{CategoryName:string}){
    return(
        <div className="flex w-full bg-zinc-900 border border-zinc-600 rounded-lg px-5 py-5">
        <div>
            <h1 className="font-mono text-center text-3xl m-5">{props.CategoryName}</h1>
        <div className="grid grid-cols-4 items-start gap-x-5 gap-y-5">

        
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        
        
        

        
        </div>
        </div>
        </div>
    )
}