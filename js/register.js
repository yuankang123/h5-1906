//注册   拼接
var strFrom = `
       <form id="from">
            <div class="group1">
                <label>用户名</label>
                <input type="text" class="con uname"  placeholder="请设置用户名">
            </div>
            <div class="group1">
                <label>手机号</label>
                <input type="text" class="con phone"  placeholder="可用于登录和找回密码">
            </div>
            <div class="group1">
                <label>密码</label>
                <input type="text" class="con upwd"  placeholder="请设置登录密码">
            </div>
            <div class="group1">
                <label>验证码</label>
                <input type="text" class="con2"  placeholder="请输入验证码">
                <input type="text" class="con3"  placeholder="获取短信验证码">
            </div>
            <div class="group2">
                <input type="checkbox" >
                <span>阅读并接受</span>
                <a href="#">《百度用户协议》</a>及
                <a href="#">《百度隐私权保护生命》</a>
            </div>
            <button class="btn2">注册</button>
       </form>
`
//注册功能
function Register(){
    this.oList = document.querySelector(".list");
    
    this.init();
}

//把功能放在prototype里面
Register.prototype = {
    init:function(){
       this.addInfo();
       
    },
    //把功能(form里面的内容)添加到section里面
    addInfo:function(){
        this.oList.innerHTML = "";
        this.oList.innerHTML = strFrom; 
        this.eventBind();
    },
   

    //接受数据
    getDate:function(){
        // console.log(111);
        var _this = this;
        var uname = document.querySelector(".uname");
        var phone = document.querySelector(".phone");
        var upwd =document.querySelector(".upwd");
        axios({
            method : "get",
            url : "http://localhost/php/nuomi/php2.0/register.php",
            data : {
                uname : uname.value,
                phone : phone.value,
                upwd : upwd.value
            }
        }).then(function(data){
            // console.log(data);
            if(data.state == "0"){
                alert(data.info);
            }else{
                alert(data.info);
            }
        }).catch(function(info){
            console.log(info);
        })
    },

    //给注册绑定事件
    eventBind:function(){
        //阻止浏览器默认行为
        var from = document.querySelector("#from");
        from.addEventListener("click",this.getDate1.bind(this));

        var oBtn = document.querySelector(".btn2");
        oBtn.addEventListener("click",this.getDate.bind(this));  //dom2级事件 事件监听
    }, 
    getDate1(e){
        e.preventDefault();
    }
}
new Register();