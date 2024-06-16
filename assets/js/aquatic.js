var num_jia = document.getElementById("num-jia");
var num_jian = document.getElementById("num-jian");
var input_num = document.getElementById("input-num");

num_jia.onclick = function() {

    input_num.value = parseInt(input_num.value) + 1;

}

num_jian.onclick = function() {

    if(input_num.value <= 1) {
        input_num.value = 1;
    } 
    
    else {

        input_num.value = parseInt(input_num.value) - 1;
    }

}

  function handleSearch() {
    // 搜索功能的相關處理
  }

// function change() {
//     var x = document.getElementById("image").getAttribute("src");

//     if (x=="image/wood.jpg"){
//         document.getElementById("image").src="image/wood2.jpg";
//     }
//     else{
//         document.getElementById("image").src="image/wood.jpg";
//     }
//     //alert(x);
// }

// function secound(obj){
//   obj.src="image/wood2.jpg";
//   console.log(obj.getAttribute("src"));
// }

// function first(obj){
//   obj.src="image/wood.jpg";
//   console.log(obj.getAttribute("src"));
// }
