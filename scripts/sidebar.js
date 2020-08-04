const sidebar = document.querySelector(".sidebar");
const items = sidebar.getElementsByTagName("div");
const hsBody = document.querySelector("#hsBody");
const collegeBody = document.querySelector("#collegeBody");


for(let i = 0; i<items.length; i++){
    items[i].addEventListener("click", ()=> {
        for(let  j=0; j<items.length; j++){
            items[j].classList.remove("sidebar-selected");
        }
        items[i].classList.toggle("sidebar-selected");
        if(items[i].id == "hsSidebar"){
            hsBody.classList.remove("hide");
            collegeBody.classList.add("hide");
        }else{
            collegeBody.classList.remove("hide");
            hsBody.classList.add("hide");
        }
    })
}