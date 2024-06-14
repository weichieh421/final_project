document.addEventListener("DOMContentLoaded", function() {
    // 取得所有單選按鈕
    var radioButtons = document.querySelectorAll('input[type="radio"]');

    // 為每個單選按鈕新增點擊事件監聽器
    radioButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // 設定ID為 #change 的圖片的 src 屬性為選定的URL
        document.getElementById("change").src = this.value;
    });
    });
});
function minus(n){
    var num = Number(document.getElementsByClassName("totalnum")[n].value);
    if(num>=1){
        document.getElementsByClassName("totalnum")[n].value = num-1;
    }
    else
        alert("商品不能為負數")

    }

    function add(n){
    var num = Number(document.getElementsByClassName("totalnum")[n].value);
    if(num<=10){
        document.getElementsByClassName("totalnum")[n].value = num+1;
    }
    else
        alert("商品已達購買上限")
    }
    function handleSearch() {
        // 搜索功能的相關處理
      }
    

    document.addEventListener("DOMContentLoaded", function(){
    //找到所有最外層的div
    const starRatings=document.querySelectorAll(".star");

    //對每個星星評分區設定事件
    starRatings.forEach((starRating)=>{
    //找到該評分區內所有的icon
    const starIcons=starRating.querySelectorAll(".star-icon");

    //將所有icon加上click事件
    starIcons.forEach((starIcon)=>{
        starIcon.addEventListener("click",function(){
            //找到點擊的icon的data-index並轉成數字
            const clickedIndex=parseInt(this.getAttribute("data-index"));

            //starIcons是一個陣列，所以可以用forEach來判斷、跑迴圈，全部跑一遍
            starIcons.forEach((icon, index)=>{
                //如果index小於點擊的index，就加上selected的class，並且改變icon
                if(index < clickedIndex){
                    icon.setAttribute("icon", "material-symbols:star");
                }
                //如果index小於點擊的index，就加上selected的class，並且改變icon 變成空心
                else{
                    icon.setAttribute("icon", "material-symbols:star-outline");
                }
            });

            //在這裡可將clickIndex送到後端，更新資料庫
            console.log("Selected Rating"+clickedIndex);
            });
        });
    });   
});