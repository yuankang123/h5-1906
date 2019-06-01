var str = `
 <h5>支付金额 (元)</h5>
  <span >4766</span> 
`
var str2 = `
                <dl>
                     <dt>商品名称</dt>
                     <dd>4766元单人服务</dd>
                </dl>
                <dl>
                    <dt>订单编号</dt>
                    <dd>2709118810</dd>
                </dl>
`


axios({
    method: "get",
    url: "../json/footer.json",
    data: {}
}).then(function (data) {
       
    var hong_list = document.querySelector(".hong_list");
    var pcs = document.querySelector(".pcs");  
    var id = location.href.split("?")[1].split("=")[1];
     

    function renderPage(){
         var str = ``;
         var str2 = ``;
         for(var i = 0, k = data.length; i < k; i++){
             if(data[i].id == id){
                str = `
                   <h5>支付金额 (元)</h5>
                   <span>${data[i].a}</span> 
                 `
             str2 = `
                <dl>
                     <dt>商品名称</dt>
                     <dd>${data[i].c}</dd>
                </dl>
                <dl>
                    <dt>订单编号</dt>
                    <dd>${data[i].b}</dd>
                </dl>
                `
             }
         }
         hong_list.innerHTML = str;
         pcs.innerHTML = str2;
    }
    renderPage(1)

}).catch(function (info) {
    console.log(info);
})