const groceries = document.getElementsByClassName("groceries")[0];
const pen = document.getElementById("pen");
const userInput = document.getElementById("userInput");
const items = document.getElementById("items");

pen.addEventListener("click",function(){
    items.innerHTML = "";
})

userInput.addEventListener("keydown",function
(event){
    if(event.key == "Enter")
    addItem();
})
 
function addItem()
{
    var h2 = document.createElement("h2");
    h2.innerHTML = "➤" + " " + userInput.value;

    h2.addEventListener("click",function(){
        h2.style.textDecoration = "line-through";
    })

    items.insertAdjacentElement("beforeend",h2);
    userInput.value = "";
}