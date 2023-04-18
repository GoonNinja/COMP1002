document.addEventListener('DOMContentLoaded',(loaded)=>{
    console.log('Document loaded');
    
    });
    
    
    //jquery 
    
    $(document).ready(function(){
        $(function(){
            $("#head").load("../html/meta.html");
            $("#header").load("../html/header.html");
            $("#footer").load("../html/footer.html");
        });
    
    });  