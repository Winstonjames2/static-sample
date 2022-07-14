document.addEventListener("DOMContentLoaded",()=>{
    var isCaret=false;
    function ForSmallerScreen(){
        document.querySelector(".container-items-fluid").style="opacity:0.2";
        document.querySelector(".container-nav").style="display:inline;position:fixed";
        isCaret=true;
    };
    function ForLargerScreen(){
        document.querySelector(".container-items-fluid").style="opacity:1";
        document.querySelector(".container-nav").style="display:none;postion:sticky;";
        isCaret=false;
    };

    document.querySelector("#more_bars").onclick=()=>{
        if(window.innerWidth<=767){
            if(!isCaret){
                ForSmallerScreen();
            }else{
                ForLargerScreen();
            }
        }
    };
    document.querySelector(".container-items-fluid").onclick=()=>{
        if(isCaret){
            ForLargerScreen();
        };
    };
    window.onresize=()=>{
        if(window.innerWidth==770 ||isCaret){
            document.querySelector(".container-nav").style="display:inline;position:sticky";
            window.location.reload();
        }
    };
    
});