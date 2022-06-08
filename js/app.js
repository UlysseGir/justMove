const start = document.getElementById("start");
const end = document.getElementById("end");
const blocks = document.getElementsByClassName("block");

// for(const block of blocks){
//     block.addEventListener("click", () => {
//         if(block.parentElement.id == "start"){
//             end.appendChild(block);
//         } else{
//             start.appendChild(block)
//         }
        
//     })
// }

// EVO ----------

for(const block of blocks){
    block.addEventListener("click", ()=>{
        block.classList.add("move");
        setTimeout(()=>{
            start.removeChild(block)
            block.classList.remove("move");
            end.appendChild(block)
        },1000)
    })
}