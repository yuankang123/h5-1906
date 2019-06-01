//用var 先获取一个节点（querySelector：获取节点）
var oBtn = document.querySelector(".reduce");
var oBtn2 = document.querySelector(".add");

//商品的累加 
oBtn2.onclick = function(){
    //先获取商品的单价
    var jiaqian = this.parentNode.previousElementSibling.lastElementChild.innerHTML.slice(1);
    var shu = this.previousElementSibling.value;
    //商品数量的累加
        shu++;
        this.previousElementSibling.value = shu;
    //计算商品的总价格
    // console.log(this)
        // console.log(this.parentNode.parentNode.lastElementChild)
        this.parentNode.parentNode.lastElementChild.innerHTML = '￥' + shu * jiaqian;
        var Totai = document.querySelector(".totai")
        Totai.getAttribute("data-span");
        Totai.innerHTML = '￥' + shu * jiaqian;
        
	}

	//商品的累减 
	oBtn.onclick = function(){
        //先获取商品数量得value值
        var shu = this.nextElementSibling.value; 
        var jiaqian = this.parentNode.previousElementSibling.lastElementChild.innerHTML.slice(1);
        // console.log(jiaqian,shu)
        //判断
           if(shu > 1){
              shu--;
        //商品数量的累减
             this.nextElementSibling.value = shu;
             this.parentNode.parentNode.lastElementChild.innerHTML = '￥' + shu * jiaqian;

             var Totai = document.querySelector(".totai")
              Totai.getAttribute("data-span");
              Totai.innerHTML = '￥' + shu * jiaqian;
       
        
           }
        }


