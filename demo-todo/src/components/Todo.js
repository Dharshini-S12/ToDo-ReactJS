import React,{ useState } from 'react';
function Todo(){
    const[input1,setInput1] = useState('')
    const[input2,setInput2] = useState('')
    const[add,setAdd] = useState(0)
    return(
        <div>
            <input type='text' value={input1} onChange={(event) => setInput1(event.target.value)}></input>
            <input type='text' value={input2} onChange={(event) => setInput2(event.target.value)}></input>
            <button onClick={() => setAdd(parseInt(input1)+parseInt(input1))}>Add</button>
            <p>{add}</p>
        </div>
    )
}
export default Todo;