const start = document.getElementById("start");
const end = document.getElementById("end");
const blocks = document.getElementsByClassName("block");

for(const block of blocks){
    block.addEventListener("click", () => {
            start.removeChild(block);
            end.appendChild(block);     
    })    
}