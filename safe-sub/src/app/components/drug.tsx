
export default function DrugCard(props:{value:string}){
    return(
        <div className="w-50">
        <button className="substance-button bg-gray-800 text-white p-4 rounded-lg hover:bg-gray-700 w-50" >
             {props.value}
            </button>
            </div>
    )
}