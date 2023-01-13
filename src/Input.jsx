

export const Input = (props) =>{
    return(
        <input
        dir="rtl"
        className="w-full
        border-gray-200 
        text-4xl
        h-20"
        value={props.data}
        disabled type="text" />
    )
}