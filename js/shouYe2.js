//请求你数据
axios({
    method: "get",
    url: "json/xiu.json",
    data: {}
}).then(function (data) {
    var oYule = document.querySelector(".yule");
    
    //渲染数据
    function renderPage() {
        var str = "";
        for (var i = 0, k = data.length; i < k; i++) {

            str += `
                <li class="yule_list" data-id=${data[i].id}>
                   <a href="##" class='href' >
                        <img src="${data[i].img}">
                        <span class="yule_box">${data[i].sp}</span>
                        <div class="yule_conter">
                               <span></span>
                               <span>${data[i].movie}</span>
                        </div>
                       <p class="yule_title">${data[i].yu}<em>${data[i].le}</em></p>
                       <p class="yule_title2">${data[i].wu}</p>
                   </a>
                </li>
              `
        }
        oYule.innerHTML = str;
    }
    renderPage(1);

    oYule.onclick = function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.tagName == "IMG") {
            var id = target.parentNode.parentNode.getAttribute("data-id");
            console.log(id);
            location.href = 'http://localhost/php/nuomi/html/travel.html?id=' + id
        }
    }
    

}).catch(function (info) {
    console.log(info);
})