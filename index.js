window.onload= function(){
    var a= this.document.querySelectorAll(".A");
    var b= this.document.querySelectorAll(".B");
    a.forEach((item)=>{
        item.addEventListener("click", ()=>{
            b.forEach((item)=>{
                item.classList.add("off");
            })
            var c = item.id;
            var d= this.document.querySelector("."+c+".B");
            d.classList.toggle("off");
        });
    })
};