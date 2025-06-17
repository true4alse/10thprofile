document.addEventListener("DOMContentLoaded",function(){

    let btnMenu = document.querySelector(".btnMenu")
    let hiddenGnb = document.querySelector(".hiddenGnb")

    btnMenu.addEventListener("click",function(){
        hiddenGnb.classList.add("on")
    })

    let btnClose = document.querySelector(".btnClose")
    btnClose.addEventListener("click",function(){
        hiddenGnb.classList.remove("on")
    })

    let gnb = document.querySelector(".gnb")
    let gnb_li = gnb.children
    
    for(let i=0 ; i<gnb_li.length ; i++){
        gnb_li[i].addEventListener("click",function(){
            hiddenGnb.classList.remove("on")
        })
    }
    
    // color 채워지는 소스코드
    let ddArray = document.querySelectorAll("dd[data-color]")
    ddArray.forEach(function(ddtag){
        let orcon = ddtag.textContent
        ddtag.innerHTML = `<span style="background-color:${orcon}"></span>${orcon}`
    })
    

    

})