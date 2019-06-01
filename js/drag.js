//拖拽
var oBox = document.querySelector(".box");
var login_re = document.querySelector(".login_re");
var oBtn = document.querySelector(".btn");
var oSpan = document.querySelector(".ospan");
var oBox_login = document.querySelector(".box_login");

// oBtn.addEventListener("click", function () {
//   oBox.style.display = "block";
//   oBox_login.style.display = "block";
// })

oBtn.onclick = function(){
    oBox.style.display = "block";
    oBox_login.style.display = "block";
    //鼠标按下
    login_re.onmousedown = function(e){
           e = e || event;
          //  preventDefault(e);
           stopPropagation(e);
         //获取鼠标再当前元素的位置 	
          var 
            x = e.offsetX,
            y = e.offsetY;
          //鼠标滑过
          document.onmousemove = function(e){
            e = e || window.event;
            // preventDefault(e)
            stopPropagation(e);
          // 鼠标拖拽的时候。鼠标再点击的位置
          var 
            l = e.clientX - x,
            t = e.clientY - y;
           
            
           oBox_login.style.left = l + "px";
           oBox_login.style.top = t + "px";
        }
         //抬起鼠标
         document.onmouseup = function(){
            document.onmousemove = null;
        }
    }

}
oSpan.onclick = function(){
    oBox.style.display = "none";
    oBox_login.style.display = "none";
}