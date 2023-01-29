 const button=document.getElementById("toggler")
 const button_icon=document.getElementById("toggler-icon")
 const container=document.getElementById("card")
 const wind=document.getElementById("wind")

 button.onclick= function(){
    if(container.getAttribute('data-theme')!='dark'){
        container.setAttribute('data-theme','dark');
        button_icon.setAttribute('class','fas fa-solid fa-sun');
        wind.setAttribute('style','color:orange;');

    }else{
        container.setAttribute('data-theme',"");
        wind.setAttribute('style','color:#0f345fe3;');
        button_icon.setAttribute('class',"fas fa-solid fa-moon");
    }
 }