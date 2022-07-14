document.addEventListener("DOMContentLoaded",()=>{
    console.log(window.innerWidth)
    var isCaret=false;
    document.querySelector("#more_bars").onclick= ()=>{
        if(window.innerWidth<=767){
            document.querySelector(".container-items-fluid").style="opacity:0.5";
            document.querySelector(".container-nav").style="display:inline;position:fixed";
            isCaret=true;
        };
    };
    document.querySelector(".container-items-fluid").onclick=()=>{
        if(isCaret){
            document.querySelector(".container-items-fluid").style="opacity:1";
            document.querySelector(".container-nav").style="display:none;postion:sticky;";
            isCaret=false;
        };
    };
    window.onresize=()=>{
        if(isCaret){
            window.location.reload();
        }
    };
    
});