var str = `
           <li>
               <a href="#">北京休闲娱乐</a>
               <span>></span>
            </li>
            <li>
               <a href="#">北京休闲娱乐</a>
               <span>></span>
            </li>
            <li>
               <a href="#">北京足疗按摩</a>
                <span>></span>
            </li>
            <li>
                <a href="#">慢生活会馆</a>
                <span>></span>
           </li>
`

var str2 = `
            <h3>慢生活会馆
               <a href="#" title="商家资质信息"></a>
            </h3>
            <div class="xing">
                <span></span>
                <span>4.9</span>
                <span>
                    <a href="#">(8人评价)</a>
                </span>
            </div>
            <div class="site">
                <span>地    &nbsp;      址</span>&nbsp;:
                <span>北京市丰台区马家堡路154号院3号楼1层111（布丁酒店楼下）</span>
                <span><a href="#"></a>查看地图</span>
            </div>
            <div class="site">
                <span>点    &nbsp;      话</span>&nbsp;:
                <span>01087595758|13124742777</span>
            </div>
            <div class="site">
                <span>营业时间</span>&nbsp;:
                <span>全天</span>
            </div>
            <div class="site2">
                <img src="../img/26.jpg">
            </div>
`

var str3 = `
                  <div class="inner_img">
                      <a href="#"><img src="../img/26.jpg"></a>
                  </div>
                  <div class="inner_con">
                      <h4>慢生活会馆</h4>
                      <p>尊享spa1次！需预约！</p>
                      <p>已售426</p>
                  </div>
                  <div class="indate">
                      <p>有效期：2019-06-14</p>
                  </div>
                  <div class="price">
                      <p>￥568</p>
                      <p>门市价￥1188</p>
                  </div>
                  <div class="buy">
                      <a href="../html/page.html" target="_blank">立即购买</a>
                  </div>
`



// console.log(location.href)

// var href = location.href;
// var id = href.split('=')[2]

// var id = location.href.split("?")[1].split("=")[1];
//ajax 请求
axios({
        method: "get",
        url: "../json/tu.json",
        data: {}
    }).then(function (data) {

            var arder_inner = document.querySelector(".arder_inner");
            var hall_inner = document.querySelector(".hall_inner");
            var inner_warp = document.querySelector(".inner_warp");
            var id = location.href.split("?")[1].split("=")[1];
            //渲染数据
            function renderPage() {
                var str = '';
                var str2 = '';
                var str3 ='';
                for (var i = 0, k = data.length; i < k; i++) {
                    if (data[i].id == id) {
                        str = `
                <li>
                   <a href="#">${data[i].hu}</a>
                   <span>></span>
                </li>
                <li>
                   <a href="#">${data[i].s}</a>
                   <span>></span>
                </li>
                <li>
                   <a href="#">${data[i].zi}</a>
                   <span>></span>
                </li>
                <li>
                    <a href="#">${data[i].ti}</a>
                    <span>></span>
                </li>
              `
                        str2 = `
               <h3>${data[i].ti}
               <a href="#" title="商家资质信息"></a>
            </h3>
            <div class="xing">
                <span></span>
                <span>4.9</span>
                <span>
                    <a href="#">(8人评价)</a>
                </span>
            </div>
            <div class="site">
                <span>地    &nbsp;      址</span>&nbsp;:
                <span>${data[i].zhi}</span>
                <span><a href="#"></a>查看地图</span>
            </div>
            <div class="site">
                <span>点    &nbsp;      话</span>&nbsp;:
                <span>${data[i].phone}</span>
            </div>
            <div class="site">
                <span>营业时间</span>&nbsp;:
                <span>全天</span>
            </div>
            <div class="site2">
                <img src="${data[i].li}">
            </div>
             `

             str3 = `
                  <div class="inner_img">
                      <a href="#"><img src="${data[i].li}"></a>
                  </div>
                  <div class="inner_con">
                      <h4>${data[i].ti}</h4>
                      <p>${data[i].ha}</p>
                      <p>${data[i].ko}</p>
                  </div>
                  <div class="indate">
                      <p>${data[i].lp}</p>
                  </div>
                  <div class="price">
                      <p>${data[i].lop}</p>
                      <p><del>${data[i].d}</del></p>
                  </div>
                  <div class="buy">
                      <a href="##" data-id=${data[i].id}>立即购买</a>
                  </div>
                `
              }
      
          }
          arder_inner.innerHTML = str;
          hall_inner.innerHTML = str2;
          inner_warp.innerHTML = str3;
    } 
    renderPage(1);

    inner_warp.onclick = function (e) {
        var e = e || event;
        var target = e.target || e.srcElement;
        if (target.tagName == "A") {
            var id = target.getAttribute("data-id");
            // console.log(id);
            location.href = 'http://localhost/php/nuomi/html/page.html?id=' + id
        }
    }

    
}).catch(function(info){
    console.log(info);
})