//lấy các class và id của trang html
const btn = document.querySelector('#buttonClick');
const main = document.querySelector(".container");
//liên kết với file data
const url = 'data.txt';
// console.log(main);
//hàm xuất dữ liệu ra trang html
function output(data){
    console.log(data);
    console.log(this.responseText);
    main.innerHTML=this.responseText;
}

function reqData(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',output)
    xhr.open("GET",url);
    //thay đổi trạng thái status
    xhr.onreadystatechange = ()=>{
        console.log(`RS: ${xhr.readyState}`);
    }
    xhr.onload =function(){
        console.log(`Done: ${xhr.readyState}`);
        console.log(this.responseText);
    }
    xhr.send();

    console.log(xhr.readyState);
}

// btn.onclick = ()=>{
// console.log(main);
    
// }
btn.onclick = reqData;
