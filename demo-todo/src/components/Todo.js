// import React,{ useState } from 'react';
// function Todo(){
//     const[input1,setInput1] = useState('')
//     const[input2,setInput2] = useState('')
//     const[add,setAdd] = useState(0)
//     return(
//         <div>
//             <input type='text' value={input1} onChange={(event) => setInput1(event.target.value)}></input>
//             <input type='text' value={input2} onChange={(event) => setInput2(event.target.value)}></input>
//             <button onClick={() => setAdd(parseInt(input1)+parseInt(input1))}>Add</button>
//             <p>{add}</p>
//         </div>
//     )
// }
// export default Todo;
import React,{ useState } from 'react';
function Todo(){
    const[input, setInput] = useState('')
    const my = () =>{
        /*craeting and appeding the elements into the list*/
        const node = document.createElement('p')
        const textnode = document.createTextNode(input)
        node.appendChild(textnode)
        document.getElementById('myList').appendChild(node)


        /*craeting the delete symbol*/
        const closeelement = document.createElement('button')
        const textclose = document.createTextNode("\u00D7")
        closeelement.appendChild(textclose)
        document.getElementById('myList').appendChild(closeelement)
        closeelement.className="close-btn"
        closeelement.addEventListener('click', function() {
            this.style.display = 'none';
        });
    }
    return(
        <div>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} required></input><br></br>
            <button onClick={my}>Click</button>
            <div id='demo' className='container'>
                <div id='myList'>
                    <p></p>
                </div>
                <div id='myList1'>
                    <p></p>
                </div>
            </div>
        </div>
    )
}
export default Todo;



// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }