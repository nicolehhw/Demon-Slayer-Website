window.onload = () =>{
    createCharacterDate();
    initTheme();
    autoCarousel();
}

let count = 0;
const width = 100;
function slideRight(){
    const carousel = document.querySelector('.carousel');
    if(count == 2){
        return;
    }
    count++;
    carousel.style.transform = 'translateX('+ (-width*count) +'%)';
}

function slideLeft(){
    const carousel = document.querySelector('.carousel');
    if(count == 0){
        return;
    }
    count--;
    carousel.style.transform = 'translateX('+ (-width*count) +'%)';
}

function autoCarousel(){
    const carousel = document.querySelector('.carousel');
    setInterval(()=>{
        if(count === 2){ 
            carousel.style.transform = 'translateX(0%)';
            count = 0;
        }
        else{
            count++;
            carousel.style.transform = 'translateX('+ (-width*count) +'%)';
        }
    },4000)
}

const characterData = [{
    'id': '1',
    'img': './img/character/竈門炭治郎.png',
    'name': '竈門炭治郎',
},{
    'id': '2',
    'img': './img/character/竈門禰豆子.png',
    'name': '竈門禰豆子',
},{
    'id': '3',
    'img': './img/character/我妻善逸.png',
    'name': '我妻善逸',
},{
    'id': '4',
    'img': './img/character/嘴平伊之助.png',
    'name': '嘴平伊之助',
},{
    'id': '5',
    'img': './img/character/栗花落加奈央.png',
    'name': '栗花落加奈央',
},{
    'id': '6',
    'img': './img/character/胡蝶忍.png',
    'name': '胡蝶忍',
},{
    'id': '7',
    'img': './img/character/富岡義勇.png',
    'name': '富岡義勇',
},{
    'id': '8',
    'img': './img/character/煉獄杏壽郎.png',
    'name': '煉獄杏壽郎',
},{
    'id': '9',
    'img': './img/character/宇髄天元.png',
    'name': '宇髄天元',
},{
    'id': '10',
    'img': './img/character/時透無一郎.png',
    'name': '時透無一郎',
},{
    'id': '11',
    'img': './img/character/甘露寺蜜璃.jpg',
    'name': '甘露寺蜜璃',
},{
    'id': '12',
    'img': './img/character/伊黑小芭內.jpg',
    'name': '伊黑小芭內',
},{
    'id': '13',
    'img': './img/character/不死川實彌.jpg',
    'name': '不死川實彌',
},{
    'id': '14',
    'img': './img/character/悲鳴嶼行冥.jpg',
    'name': '悲鳴嶼行冥',
},{
    'id': '15',
    'img': './img/character/鬼舞辻󠄀無惨.jpg',
    'name': '鬼舞辻󠄀無惨',
}]

function createCharacterDate(){
    const character_cards_container = document.querySelector('.character-cards-container');
    for(let character of characterData){
        const {id,img,name} = character;
        const data = `<a href="characterDetail.html?id=${id}" class="card">
                        <div class="character-photo">
                        <img src=${img} alt="">
                         </div>
                        <div class="character-info">
                            <h3>${name}</h3>
                        </div>
                    </a>`
        character_cards_container.insertAdjacentHTML('beforeend', data);
    }
}