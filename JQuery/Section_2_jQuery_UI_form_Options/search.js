// 10.-jQueryUI-with-API-AJAX-request-to-populate-array-data-for-autocomplete
//tạo một mảng chứa dữ liệu
const tags = [];
$("#search").autocomplete({source:tags})
//tạo một url
const url = "https://api.randomuser.me/";
//số lượng tìm kiếm được
const results = '?results=50'
$("#search").keyup(() => {
    console.log("test");
    $.ajax({
        //đường dẫn và kết quả tìm kiếm
        url: url + results,
        //kiểu json
        dataType: 'json',
        //kết quả trả về
        success: (data) => {
            console.log(data.results);
            looper(data.results);
            //sử dụng vòng lặp để hiển thị thông tin được trả về
            $.each(data.results, function (ind, val) {
                console.log(val.name.first)
                //lưu vào mảng
                tags.push(val.name.first);
            });
        }
    });
})

function looper(data){
    let html ="";
    $.each(tags, function (indexInArray, valueOfElement) { 
       html+=`<span>${valueOfElement}</span> - `;      
    });
    $(".output").html(html);
}
