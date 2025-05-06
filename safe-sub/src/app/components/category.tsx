import DrugCard from "./drug"

export default function Category(props:{CategoryName:string}){
    return(
        <div className="grid grid-cols-4 items-start gap-x-5 gap-y-5">

        
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        <DrugCard value={'test'}/>
        
        
        

        
        </div>
    )
}