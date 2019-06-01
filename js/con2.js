window.onscroll = function(){
    //获取滚动条的高度
    var con=document.getElementsByClassName('con')[0];
    var scrollTop = document.documentElement.scrollTop ;
    
    if(scrollTop >= 620){
        con.style.position = "fixed";
        con.style.top = "0";
        con.style.display = "block";
        con.style.background = "#fff";
        
    }else{
        con.style.display = "none";
    }
}