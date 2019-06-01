//请求你数据
axios({
    method : "get",
    url : "json/dian.json",
    data : {}
}).then(function(data){
      var oFilm = document.querySelector(".film");
      //渲染数据
      function renderPage(){
          var str = "";
          for(var i = 0,k = data.length;i < k;i++){
              str +=`
                 <li class="film_list">
                    <a href="#">
                        <div class="film_show">
                            <img src="${data[i].img}">
                            <span>${data[i].sp}</span>
                        </div>
                        <p class="film_title">${data[i].movie}</p>
                        <p class="film_title2">选座购票</p>
                    </a>
                </li>
              `
          }
          oFilm.innerHTML = str;
      }
      renderPage(1);
}).catch(function(info){
    console.log(info);
})