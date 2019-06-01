//登录
var strFrom1 = `
       <form id="from">
            <input type="text"  class="put uname "  placeholder="手机/邮箱/用户名">
            <input type="text" class="put upwd"  placeholder="密码">
            <div class="right_pass">
                <input type="checkbox" checked="checked">
                <label>下次自动登录</label>
                <a href="#">登录遇到问题</a>
            </div>
            <button class="bon">登录</button>
             <a class="A" href="#">立即注册</a>
        </form>
`
//登录功能
function Login(){
    this.oRight_inner = document.querySelector(".right_inner");
    this.init();
}

//把功能放在prototype里面
Login.prototype = {
   //数据整合
   init:function(){
      this.addInfo();
      
   },
   //把功能(form里面的内容)添加到box里面
   addInfo:function(){
       this.oRight_inner.innerHTML = "";
       this.oRight_inner.innerHTML = strFrom1;
       this.eventBind(); 
   },
   
    getDate:function(){
     //把登录用户名和密码交到后端  ajax
      var uname = document.querySelector(".uname");
      var upwd = document.querySelector(".upwd");
      // var _this = this;
      axios({
          method : "get",
          url : "http://localhost/php/nuomi/php2.0/login.php",
          data : {
             uname : uname.value,
             upwd : upwd.value
            }
        }).then(function(data){   //从接口拿到的数据
          if(data.state == "1"){
              alert(data.info);
              location.href = "http://localhost/php/nuomi/shouYe.html"; //跳转
          }else{
              alert(data.info);
          }
          // console.log(data);
        }).catch(function(info){
        //   console.log(info);
        })
    },
    //给注册绑定事件
    eventBind:function(){
        var from = document.querySelector("#from");
        from.addEventListener("click",this.getDate1.bind(this));

        var oBon = document.querySelector(".bon");
        oBon.addEventListener('click',this.getDate.bind(this));//dom2级事件 事件监听
    },
    getDate1(e){
        e.preventDefault();
    }
}
new Login();