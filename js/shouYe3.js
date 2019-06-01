//请求你数据
axios({
    method : "get",
    url : "json/lvYou.json",
    data : {}
}).then(function(data){
      var oLvyou = document.querySelector(".lvyou");
      //渲染数据
      function renderPage(){
          var str = "";
          for(var i = 0,k = data.length;i < k;i++){
              str +=`
                <li class="lvyou_list">
                   <a href="#">
                        <img src="${data[i].img}">
                        <div class="lvyou_conter">
                            <span>${data[i].sp}</span>
                            <span>${data[i].movie}</span>
                        </div>
                   </a>
                </li>
              `
          }
          oLvyou.innerHTML = str;
      }
      renderPage(1);
}).catch(function(info){
    console.log(info);
})


