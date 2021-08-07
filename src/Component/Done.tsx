type DoneProps = {
    id:number;
    name:string;
}

const DoneSec = ({id, name}: DoneProps) => {
    return (
        <div
        className="flex justify-between h-8 items-center py-6 border-b"
      >
        <span className="text-2xl" style = {{textDecorationLine: 'line-through'}}>{name}</span>
      </div>
    );
}

export default DoneSec; 
