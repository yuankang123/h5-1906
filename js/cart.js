var str = `
     <a href="../html/page.html" target="_blank">
         <img src="../img/26.jpg">
    </a>
    <sapn class="D">
         <a href="../html/page.html" target="_blank">【慢生活馆】尊享spa1次！需预约！</a>
    </span>
            `


var str2 = `
            <span>应付总额：</span>
            <span>￥568.00</span>
`
var str3 = `
       <span>￥568.00</span>
`
var str4 = `
     <span>￥568.00</span>

`
var str5 = `
<a href="#">确认</a>
`

axios({
    method: "get",
    url: "../json/tu.json",
    data: {}
}).then(function (data) {

    var c_img = document.querySelector(".c_img");
    var affirm = document.querySelector(".affirm");
    var del = document.querySelector(".del");
    var del2 = document.querySelector(".del2");
    var affirm2 = document.querySelector(".affirm2");
    var id = location.href.split("?")[1].split("=")[1].slice(0,1);
    

    //渲染数据
    function renderPage(){
        var str = ``;
        var str2 = ``;
        var str = ``;
        var str4 =``;
        var str5 = ``;
        for(var i = 0, k = data.length; i < k; i++){
            if(data[i].id == id){
                str = `
                <a href="#" >
                   <img src="${data[i].o}">
                </a>
                <sapn class="D" data-id=${data[i].id}>
                   <a href="#">${data[i].n}</a>
                </span>
            `

            str2 = `
                   <span>应付总额：</span>
                   <span class="totai" data-span>${data[i].p}</span>
              `
            str3 = `
                <span>${data[i].p}</span>
              `
            str4 = `
               <span>${data[i].p}</span>
              `
            str5 = `
                 <a href="#" class="ac" data-id=${data[i].id}>确认</a>
             `  
            }
        }
        c_img.innerHTML = str;
        affirm.innerHTML = str2;
        del.innerHTML = str3;
        del2.innerHTML = str4;
        affirm2.innerHTML = str5;
    }
    renderPage(1);
     
    c_img.onclick = function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
          
        if (target.tagName == "IMG") {
            // console.log(target.tagName)
            var id = target.parentNode.getAttribute("data-id");
            // console.log(id);
            location.href = 'http://localhost/php/nuomi/html/page.html?id=' + id
        }
    }
     
    affirm2.onclick = function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
          
        if (target.tagName == "A" && target.className == "ac") {
        
            var id = target.getAttribute("data-id");
            // console.log(id);
            location.href = 'http://localhost/php/nuomi/html/footer.html?id=' + id
        }
    }


}).catch(function (info) {
    console.log(info);
})



