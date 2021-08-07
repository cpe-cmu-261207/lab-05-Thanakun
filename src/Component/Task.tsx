import { useState } from 'react'

type TaskProps = {
    id: number;
    name: string;
    donefunction: Function;
    deletefunction: Function; //Function type
}

const Task = ({ id, name, donefunction, deletefunction }: TaskProps) => {
    const [Mouse, IsMouseInside] = useState<boolean>(false);
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={() => IsMouseInside(true)} onMouseLeave={() => IsMouseInside(false)}>
            <span className="text-2xl"> {name}</span>
            <div className="flex space-x-1 items-center" style={(Mouse) ? { visibility: "visible" } : { visibility: "hidden" }}>
                <button className="bg-green-400 w-24 text-2xl" onClick={() => donefunction(id)} >Done</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={() => deletefunction(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Task