const buttonClickGET = document.querySelector("#buttonClickGET");
const buttonClickPOST = document.querySelector("#buttonClickPOST");
const main = document.querySelector(".container");
const myInput = document.querySelector("input[name='val']");
const url = "https://httpbin.org/get";
const url2 = "https://httpbin.org/post";
// console.log(myInput);

buttonClickGET.onclick = () => {
    const xhr = new XMLHttpRequest();
    //lấy thông tin từ input
    const val = myInput.value;
    xhr.onload = function () {
   
        //chuyển JSON sang Object
        const data = JSON.parse(xhr.responseText);
        console.log(data.args.val);
        main.textContent = data.args.val;
    }
    xhr.open("GET", url+'?val='+val);
    xhr.send();
}
buttonClickPOST.onclick = () => {
    const xhr = new XMLHttpRequest();
    //gữi dữ liệu qua form
    const formData = new FormData();
    //lấy thông tin từ input
    const val = myInput.value;
    //
    formData.append('val',myInput.value);
    formData.append('id',100);

    xhr.onload = function () {
   
        //chuyển JSON sang Object
        const data = JSON.parse(xhr.responseText);
        console.log(data)
        main.textContent = data.form.val;
    }
    xhr.open("POST", url2);
    xhr.send(formData);
}


