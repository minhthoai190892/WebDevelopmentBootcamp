const btn = document.querySelector("#buttonClick");
const main = document.querySelector(".container");
const url = "data.json";

const data1 = [
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Beatrice",
            "last": "Jean-Baptiste"
        },
        "location": {
            "street": {
                "number": 6967,
                "name": "Frederick Ave"
            },
            "city": "Richmond",
            "state": "Ontario",
            "country": "Canada",
            "postcode": "K8X 1I8",
            "coordinates": {
                "latitude": "-70.7480",
                "longitude": "79.0661"
            },
            "timezone": {
                "offset": "+2:00",
                "description": "Kaliningrad, South Africa"
            }
        },
        "email": "beatrice.jean-baptiste@example.com",
        "login": {
            "uuid": "3658b7ba-edeb-44aa-b656-45e3f084d838",
            "username": "happyfish401",
            "password": "easter",
            "salt": "Y5SrOOSz",
            "md5": "a0a1b09b7ef62c248fe9cf41f1555208",
            "sha1": "11c6b65574231d29034bde74a94971c683ada1c7",
            "sha256": "290b4a95a11e41e12493039222751c7f5992fe362e4b333a859a3b452c426e44"
        },
        "dob": {
            "date": "1994-09-16T00:16:21.141Z",
            "age": 28
        },
        "registered": {
            "date": "2006-05-04T01:10:54.072Z",
            "age": 17
        },
        "phone": "B52 V52-5709",
        "cell": "A94 Y27-8324",
        "id": {
            "name": "SIN",
            "value": "645115445"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/92.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
        },
        "nat": "CA"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Adam",
            "last": "Harris"
        },
        "location": {
            "street": {
                "number": 630,
                "name": "Botany Road"
            },
            "city": "Upper Hutt",
            "state": "Otago",
            "country": "New Zealand",
            "postcode": 53705,
            "coordinates": {
                "latitude": "43.7276",
                "longitude": "-144.0670"
            },
            "timezone": {
                "offset": "-8:00",
                "description": "Pacific Time (US & Canada)"
            }
        },
        "email": "adam.harris@example.com",
        "login": {
            "uuid": "e0f6f4bd-5362-4add-8ccb-3fc1eaa459a7",
            "username": "goldenbear924",
            "password": "hentai",
            "salt": "T17oP34L",
            "md5": "d6433c95547f0706fed2b67be36dbaf6",
            "sha1": "521d6ed11d2f8e6fd9f81e4a9570e68692ce08eb",
            "sha256": "7b515e6dfa592c9329b1a87c48ead598bc7dc89b31fb7883e7ae82e062816daa"
        },
        "dob": {
            "date": "1974-06-11T16:17:28.253Z",
            "age": 48
        },
        "registered": {
            "date": "2015-01-12T09:35:06.711Z",
            "age": 8
        },
        "phone": "(728)-978-7006",
        "cell": "(364)-507-8901",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/73.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
        },
        "nat": "NZ"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Wilma",
            "last": "Fox"
        },
        "location": {
            "street": {
                "number": 51,
                "name": "Karen Dr"
            },
            "city": "Charlotte",
            "state": "West Virginia",
            "country": "United States",
            "postcode": 91496,
            "coordinates": {
                "latitude": "2.8215",
                "longitude": "-130.3014"
            },
            "timezone": {
                "offset": "-4:00",
                "description": "Atlantic Time (Canada), Caracas, La Paz"
            }
        },
        "email": "wilma.fox@example.com",
        "login": {
            "uuid": "286686ee-35dc-4604-a11d-97bdf3aee965",
            "username": "blackdog107",
            "password": "vision",
            "salt": "YAHEboA1",
            "md5": "293bc6edf330c2a3f6be0876f24b5628",
            "sha1": "3b8ac6e78b84f50855f5ecb3cbf8d33bbda626d8",
            "sha256": "2e14133725c48b3aae14e21fed70d02f3029b5e6bf63081b40f844604677f608"
        },
        "dob": {
            "date": "1958-03-24T17:52:59.057Z",
            "age": 65
        },
        "registered": {
            "date": "2009-07-05T06:29:19.968Z",
            "age": 13
        },
        "phone": "(764) 719-6727",
        "cell": "(890) 959-7080",
        "id": {
            "name": "SSN",
            "value": "620-77-6578"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/10.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/10.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/10.jpg"
        },
        "nat": "US"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "William",
            "last": "Thomsen"
        },
        "location": {
            "street": {
                "number": 2049,
                "name": "Bækvej"
            },
            "city": "København V",
            "state": "Syddanmark",
            "country": "Denmark",
            "postcode": 67338,
            "coordinates": {
                "latitude": "-85.3166",
                "longitude": "149.6026"
            },
            "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
            }
        },
        "email": "william.thomsen@example.com",
        "login": {
            "uuid": "8abc4dfc-db10-4a6a-a91c-de02fff4a406",
            "username": "purplegoose188",
            "password": "nellie",
            "salt": "PvL4573q",
            "md5": "cc063e19b7c08d3c37d9932f65d003f8",
            "sha1": "c46439e2a33f03532f193b2d341d68ad1c7c55e9",
            "sha256": "685f60135967eb7c31544766f9d8d4ae85b06093ccc5b077795f7713e9a47f21"
        },
        "dob": {
            "date": "1987-07-13T15:15:33.373Z",
            "age": 35
        },
        "registered": {
            "date": "2015-06-05T00:16:40.351Z",
            "age": 7
        },
        "phone": "55839352",
        "cell": "41878078",
        "id": {
            "name": "CPR",
            "value": "130787-2310"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/58.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/58.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/58.jpg"
        },
        "nat": "DK"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "José Eduardo",
            "last": "Tejada"
        },
        "location": {
            "street": {
                "number": 746,
                "name": "Viaducto Tirado"
            },
            "city": "Pachuca de Soto",
            "state": "Chihuahua",
            "country": "Mexico",
            "postcode": 44393,
            "coordinates": {
                "latitude": "-60.9872",
                "longitude": "165.3711"
            },
            "timezone": {
                "offset": "+11:00",
                "description": "Magadan, Solomon Islands, New Caledonia"
            }
        },
        "email": "joseeduardo.tejada@example.com",
        "login": {
            "uuid": "ec687036-df22-4035-9aa6-b2e9c4bce1f9",
            "username": "lazybear992",
            "password": "sonny",
            "salt": "5tf1qgpD",
            "md5": "489c422794dd6329f5f6623ac3f6985d",
            "sha1": "30dcbfefbc7fc015f8412c6f310b5195ac290acc",
            "sha256": "6ee7df48b2ffc5cee66bdab910d63677ac3caf71ce2eea080fed01fdfdab62f4"
        },
        "dob": {
            "date": "1986-10-28T23:10:09.480Z",
            "age": 36
        },
        "registered": {
            "date": "2019-02-23T05:55:42.343Z",
            "age": 4
        },
        "phone": "(686) 805 7991",
        "cell": "(639) 502 0841",
        "id": {
            "name": "NSS",
            "value": "84 07 40 0279 9"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/63.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/63.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/63.jpg"
        },
        "nat": "MX"
    }
];

btn.onclick = () => {
    //kết nối với server
    const xhr = new XMLHttpRequest();
    //tải dữ liệu
    xhr.onload = function () {
        console.log(this.responseText);
        //chuyễn dữ liệu từ JSON sang Object 
        //là một mảng dữ liệu
        const data = JSON.parse(this.responseText);
        outputData(data);
    }
    xhr.open("GET", url);
    xhr.send();
}

/**
 * 
 * @param {*} vals là một mảng
 */
function outputData(vals) {
    main.innerHTML = '';
    vals.forEach((element, index) => {
        console.log(element.name.first, index);
        //tạo thẻ div
        const div = document.createElement("div");

        //thay đổi màu cho thẻ div
        div.style.color = 'blue';
        //ghi dữ liệu vào thẻ div
        div.innerHTML = `${index + 1}. ${element.name.first} ${element.name.last}`;
        //thêm thẻ div vào main
        main.append(div);
    });
}
function outputData1(vals) {
    vals.forEach((element, index) => {
        console.log(element.name.first, index);
    });
}




