//请求你数据
axios({
    method : "get",
    url : "json/jiehun.json",
    data : {}
}).then(function(data){
      var oLvyou2 = document.querySelector(".lvyou2");
      //渲染数据
      function renderPage(){
          var str = "";
          for(var i = 0,k = data.length;i < k;i++){
              str +=`
                <li class="lvyou_list2">
                   <a href="#">
                        <img src="${data[i].img}">
                        <div class="lvyou_conter2">
                            <span>${data[i].sp}</span>
                            <span>${data[i].movie}</span>
                        </div>
                   </a>
                </li>
              `
          }
          oLvyou2.innerHTML = str;
      }
      renderPage(1);
}).catch(function(info){
    console.log(info);
})