window.onload = () =>{
    createCharacterCards();
    initTheme();
}

var count = 1;
function changePhoneImg(){
    const phonePhone = document.querySelector(".phone-photo");
    const imgArr = ["./img/index/phone-photo1.jpg","./img/index/phone-photo2.jpg","./img/index/phone-photo3.jpg"];
    if(count === imgArr.length){
        count = 0;
    }
    phonePhone.src = imgArr[count];
    count++;
}

const characterData = [{
    'id': '1',
    'img': './img/index/竈門炭治郎.png',
    'name': '竈門炭治郎'
},
{
    'id': '2',
    'img': './img/index/竈門禰豆子.png',
    'name': '竈門禰豆子'
},
{
    'id': '3',
    'img': './img/index/我妻善逸.png',
    'name': '我妻善逸'
},
{
    'id': '4',
    'img': './img/index/嘴平伊之助.png',
    'name': '嘴平伊之助'
},
{
    'id': '5',
    'img': './img/index/栗花落加奈央.png',
    'name': '栗花落カナヲ'
},
{
    'id': '7',
    'img': './img/index/富岡義勇.png',
    'name': '冨岡義勇'
},
{
    'id': '6',
    'img': './img/index/胡蝶忍.png',
    'name': '胡蝶しのぶ'
},
{
    'id': '8',
    'img': './img/index/煉獄杏壽郎.png',
    'name': '煉󠄁獄杏寿郎'
}]

function createCharacterCards(){
    const cards_container = document.querySelector('.character-cards-wrapper');
    for(let character of characterData){
        const {id,name, img} = character;
        const data = `<a href="characterDetail.html?id=${id}" class="character-card">
                        <h3 class="character-name">${name}</h3>
                        <img src=${img} alt="" class="character-img">
                    </a>`
        cards_container.insertAdjacentHTML('beforeend', data);
    }
}