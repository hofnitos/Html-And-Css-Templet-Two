window.onscroll = function(){
    // step 1
        var tMenu = document.getElementById("topMenu");

        if (scrollY > 100  ){
            tMenu.classList.add("sticky");
        }else{
            tMenu.classList.remove("sticky");

        }

    
        var s1 = document.getElementById("landing");
        var s2 = document.getElementById("services");
        var s3 = document.getElementById("portfolio");
        var s4 = document.getElementById("about");
        var s5 = document.getElementById("pricing");

        var links = tMenu.getElementsByTagName("a");

        for(var x = 0; x < links.length; x++){
            links[x].classList.remove("active");
        }

        if((scrollY >= s5.offsetTop)){
            links[5].classList.add("active");
        }else if((scrollY >= s4.offsetTop)){
            links[4].classList.add("active");
        }else if((scrollY >= s3.offsetTop)){
            links[3].classList.add("active");
        } else if (scrollY >= s2.offsetTop){
            links[2].classList.add("active");
        }else if (scrollY >= s1.offsetTop){
            links[1].classList.add("active");
        }else{
            links[0].classList.add("active");
        }

        
}