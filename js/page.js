var str = `
       <li>
          <a href="#">团购</a>
          <span>></span>
       </li>
       <li>
          <a href="#">休闲娱乐</a>
          <span>></span>
       </li>
       <li>
          <a href="#">慢生活会馆团购</a>
        </li>
    `

var str2 = `
    <h3>慢生活会馆568元单人服务</h3>
    <div class="page_con">仅售568元，价值1188元尊享spa1次！需预约!</div>
    <div class="page_hall">
        <div class="page_img">
            <img src="../img/26.jpg">
        </div>
        <ul class="page_ul">
            <li>
                <img src="../img/26.jpg">
            </li>
        </ul>
        <ul class="page_xin">
            <li>
                <a href="#">收藏</a>
            </li>
        </ul>
    </div>
    <div class="page_right">
        <div class="page_right_con">
             <div class="money">
                 <span>￥568</span>
             </div>
             <div class="money_re">
                 <span>¥1188</span>
                 <span>门市价</span>
             </div>
        </div>
        <ul class="group">
            <li>
                <span>426人已团购</span>
            </li>
            <li>
                <span></span>
                <span>53条评论</span>
            </li>
            <li>
                <a href="#">随便退</a>
            </li>
        </ul>
        <div class="buy_warp">
            <div class="buy_list">
                <div class="buy_ier">
                    <span>有效期</span>
                    <span>2019-06-14</span>
                </div>
                <div class="buy_ier2">
                    <span>数&nbsp;&nbsp;&nbsp;量</span>
                    <div class="buy_ier3">
                        <button class="btn1">-</button>
                        <input type="text" value="1">
                        <button class="btn3">+</button>
                    </div>
                </div>
            </div>
            <div class="cart">
                <span>
                     <a href="#">立即抢购</a>
                 </span>
            </div>
        </div>
    </div>
    `


axios({
    method: "get",
    url: "../json/tu.json",
    data: {}
}).then(function (data) {

    var page_inner = document.querySelector(".page_inner");
    var page_list = document.querySelector(".page_list");
    var id = location.href.split("?")[1].split("=")[1];

    //渲染数据
    function renderPage() {
        var str = ``;
        var str2 = ``;
        for (var i = 0, k = data.length; i < k; i++) {
            if (data[i].id == id) {
                // console.log(id)
                str = `
                      <li>
                         <a href="#">${data[i].a}</a>
                         <span>></span>
                      </li>
                      <li>
                         <a href="#">${data[i].b}</a>
                         <span>></span>
                      </li>
                      <li>
                         <a href="#">${data[i].c}</a>
                      </li>
                   `
                str2 = `
    <h3>${data[i].e}</h3>
    <div class="page_con">${data[i].f}</div>
    <div class="page_hall">
        <div class="page_img">
            <img src="${data[i].o}">
        </div>
        <ul class="page_ul">
            <li>
                <img src="${data[i].o}">
            </li>
        </ul>
        <ul class="page_xin">
            <li>
                <a href="#">收藏</a>
            </li>
        </ul>
    </div>
    <div class="page_right">
        <div class="page_right_con">
             <div class="money">
                 <span>${data[i].g}</span>
             </div>
             <div class="money_re">
                 <span><del>${data[i].h}</del></span>
                 <span>门市价</span>
             </div>
        </div>
        <ul class="group">
            <li>
                <span>${data[i].j}</span>
            </li>
            <li>
                <span></span>
                <span>${data[i].l}</span>
            </li>
            <li>
                <a href="#">随便退</a>
            </li>
        </ul>
        <div class="buy_warp">
            <div class="buy_list">
                <div class="buy_ier">
                    <span>有效期</span>
                    <span>${data[i].m}</span>
                </div>
                <div class="buy_ier2">
                    <span>数&nbsp;&nbsp;&nbsp;量</span>
                    <div class="buy_ier3">
                        <button class="btn1">-</button>
                        <input type="text" value="1">
                        <button class="btn3">+</button>
                    </div>
                </div>
            </div>
            <div class="cart">
                <span >
                     <a href="#" class="aa" data-id=${data[i].id}>立即抢购</a>
                 </span>
            </div>
        </div>
    </div>
    `
            }
        }
        page_inner.innerHTML = str;
        page_list.innerHTML = str2;
    }
    renderPage(1);

    var cart = document.querySelector(".cart");
    cart.onclick = function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.tagName == "A" && target.className == "aa") {
            console.log(target.tagName);
            var id = target.getAttribute("data-id");
            // console.log(id);
            location.href = 'http://localhost/php/nuomi/html/cart.html?id=' + id
        }
    }

}).catch(function (info) {
    console.log(info);
})