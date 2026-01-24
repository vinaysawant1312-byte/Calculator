let btn = document.querySelectorAll(".button");
let string = "";
Array.from(btn).forEach(element =>{
    element.addEventListener("click" ,(e)=>{
        if(e.target.textContent == "AC"){
            string = "";
            document.querySelector("#input").value = string;
        }
        else if(e.target.textContent == "="){
            string = eval(string);
            document.querySelector("#input").value = string;
        }
        else if(e.target.textContent == "DE"){
            string = string.slice(0,-1);
            document.querySelector("#input").value = string;
        }
        else{
            string = string + e.target.textContent;
            document.querySelector("#input").value = string;
        }
    });
});