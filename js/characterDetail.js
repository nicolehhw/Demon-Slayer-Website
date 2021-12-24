const characterData = [{
    'id': '1',
    'img': './img/character/竈門炭治郎.png',
    'name': '竈門炭治郎',
    'age': '13',
    'height': '165',
    'weight': '65',
    'role': 'A Kanoe-ranked member of the Demon Slayer Corps',
    'introduction': 'A kindhearted boy who loves his family.Tanjiro joins the Demon Slayer Corps in order to turn his sister Nezuko, who has become a demon, back into a human, as well as to avenge the death of his family by hunting down the demon who killed them. He has an acute sense of smell which enables him to identify the weak spots in demons or other opponents he battles.'
}, {
    'id': '2',
    'img': './img/character/竈門禰豆子.png',
    'name': '竈門禰豆子',
    'age': '12',
    'height': '153',
    'weight': '45',
    'role': 'A Kanoe-ranked member of the Demon Slayer Corps',
    'introduction': 'Tanjiro’s younger sister.After being attacked by a demon whose blood entered her body through an open wound, she became a demon herself. Even after becoming a demon, she protects Tanjiro and other humans.Before she was transformed, she was a gentle girl who loved her family.'
}, {
    'id': '3',
    'img': './img/character/我妻善逸.png',
    'name': '我妻善逸',
    'age': '16',
    'height': '164.5',
    'weight': '58',
    'role': 'A Kanoe-ranked member of the Demon Slayer Corps',
    'introduction': 'He joins the Demon Slayer Corps at the same time as Tanjiro.He has an acute sense of hearing, and can identify the sounds made by other people or demons.Zenitsu has zero confidence in himself and often talks self-deprecatingly.However, when he is scared to death, he falls asleep and his personality changes to a sharp-minded person.'
}, {
    'id': '4',
    'img': './img/character/嘴平伊之助.png',
    'name': '嘴平伊之助',
    'age': '15',
    'height': '164',
    'weight': '63',
    'role': 'A Kanoe-ranked member of the Demon Slayer Corps',
    'introduction': 'He joins the Demon Slayer Corps at the same time as Tanjiro.Inosuke is a very aggressive boy, and is always seen wearing a wild boar mask.Because he grew up in the mountains, he has an acute sense of touch which enables him to locate anything that he cannot see in his immediate surroundings.'
}, {
    'id': '5',
    'img': './img/character/栗花落加奈央.png',
    'name': '栗花落加奈央',
    'age': '16',
    'height': '156',
    'weight': '46',
    'role': 'A Kanoe-ranked member of the Demon Slayer Corps',
    'introduction': 'Another one to survive through the Final Selection when Tanjiro did.'
}, {
    'id': '6',
    'img': './img/character/胡蝶忍.png',
    'name': '胡蝶忍',
    'age': '18',
    'height': '151',
    'weight': '37',
    'role': 'A Demon Slayer and the Insect Hashira of the Demon Slayer Corps',
    'introduction': 'Shinobu Kocho is also the younger sister of Kanae Kocho and along with her younger adoptive sister Kanao Tsuyuri. After the demons killed their parents she joined the Demon Slayer Corps along with her sister to protect others from suffering the same fate as her.'
}, {
    'id': '7',
    'img': './img/character/富岡義勇.png',
    'name': '富岡義勇',
    'age': '19',
    'height': '176',
    'weight': '69',
    'role': 'A Demon Slayer and the Water Hashira of the Demon Slayer Corps',
    'introduction': 'Giyu is one of main members of Hashira, a group of the Corps top-ranked slayers. A quiet, stoic man, he is the one who recruited Tanjiro for the Demon Slayer Corps.'
}, {
    'id': '8',
    'img': './img/character/煉獄杏壽郎.png',
    'name': '煉獄杏壽郎',
    'age': '20',
    'height': '177',
    'weight': '72',
    'role': 'A Demon Slayer and the Flame Hashira of the Demon Slayer Corps',
    'introduction': 'Kyojuro was one of the nine Hashira, a group of the nine greatest Demon Slayers in the Demon Slayer Corps. Specifically, Kyōjurō was the Flame Hashira who made use of the Flame Breathing.'
}, {
    'id': '9',
    'img': './img/character/宇髄天元.png',
    'name': '宇髄天元',
    'age': '23',
    'height': '198',
    'weight': '95',
    'role': 'A Demon Slayer, and the Sound Hashira of the Demon Slayer Corps',
    'introduction': 'Tengen is a very tall, wide-set man of a bulky, muscular build with lightly-tanned skin. His hair is white and of uneven length, the longest strands reaching his shoulders, and is styled with three more notable, shorter clumps arching up to fall as bangs between his eyes and on either side of his face. He has quite thin, maroon eyes that appear to slant inwards, each with one long eyelash flowing to the far side of his face.'
}, {
    'id': '10',
    'img': './img/character/時透無一郎.png',
    'name': '時透無一郎',
    'age': '14',
    'height': '160',
    'weight': '56',
    'role': 'A Demon Slayer and the Mist Hashira of the Demon Slayer Corps',
    'introduction': 'Muichiro is a short, young man of light complexion with long, straight hair of a black color that fades to Mint Green as it approaches his waist. He wears his hair loose with two clumps protruding slightly from each side of his head, a set of marginally shorter hair left down to frame his face, and unruly bangs over his forehead. He also possesses large, empty-looking mint-green eyes. His eyes and hair are traits shared with his twin brother, Yuichiro Tokito.'
}, {
    'id': '11',
    'img': './img/character/甘露寺蜜璃.jpg',
    'name': '甘露寺蜜璃',
    'age': '19',
    'height': '167',
    'weight': '56',
    'role': 'A Demon Slayer and the Love Hashira of the Demon Slayer Corps',
    'introduction': 'Mitsuri is a young curvaceous woman with a slightly pale complexion and round, pale green eyes with long eyelashes, a small beauty mark beneath each of them. She has long, light pink hair that fades into a lime green color at the halfway point, which she wears in three thick braids. She has five shorter, choppy clumps hanging over her face as voluminous bangs, the tips lime green as well. When she was trying to get married, her hair was dyed black in an attempt to make herself look more "normal."'
}, {
    'id': '12',
    'img': './img/character/伊黑小芭內.jpg',
    'name': '伊黑小芭內',
    'age': '21',
    'height': '162',
    'weight': '53',
    'role': 'A Demon Slayer and the Serpent Hashira of the Demon Slayer Corps',
    'introduction': 'Obanai is a young man of short stature and a pale complexion. He has straight-edged black hair of varying lengths, the longest reaching down to his shoulders and the shortest stopping at his cheekbones, which he wears down with two shorter strands hanging between his eyes. His eyes are almond-shaped and tilt upwards on the far sides, and are unusual due to Obanai possessing heterochromia—his right eye is yellow and his left eye is turquoise. He is partially blind as he can barely see out of his right eye.'
}, {
    'id': '13',
    'img': './img/character/不死川實彌.jpg',
    'name': '不死川實彌',
    'age': '21',
    'height': '179',
    'weight': '75',
    'role': 'A Demon Slayer and the Wind Hashira of the Demon Slayer Corps',
    'introduction': 'Sanemi is a tall, muscular, and slender man with spiky white hair and large eyes. His face and body are covered with scars, accrued over his many years of fighting Demons. He cuts his hair short somewhere in between the Functional Recovery Training Arc and the Demon Train Arc.'
}, {
    'id': '14',
    'img': './img/character/悲鳴嶼行冥.jpg',
    'name': '悲鳴嶼行冥',
    'age': '27',
    'height': '220',
    'weight': '130',
    'role': 'A Demon Slayer and the Stone Hashira of the Demon Slayer Corps',
    'introduction': 'Gyomei is a hulking figure among the Demon Slayers. He is one of the tallest characters in the series, easily towering over his fellow Hashira. He is powerfully built and extremely muscular. He has spiky black hair and a prominent scar running horizontally across his forehead. Having been blind since childhood, he has white eyes with no visible irises or pupils. His eyes frequently tear-up when he gets emotional.'
}, {
    'id': '15',
    'img': './img/character/鬼舞辻󠄀無惨.jpg',
    'name': '鬼舞辻󠄀無惨',
    'age': 'unknown',
    'height': 'unknown',
    'weight': 'unknown',
    'role': 'A Demon, the first of his kind, and is the progenitor of many other Demonss',
    'introduction': 'Muzan\'s physical appearance is like that of a man in his late twenties with an unnaturally pale skin which can be easily confused as being unhealthy and sickly, curly black hair, and sharp, almond-shaped eyes. His pupils are vertical, like cat eyes, and colored plum red. He also possesses sharp, blue nails on his hands.'
}]

window.onload = () => {
    let parameter = new URLSearchParams(window.location.search);
    loadData(parameter.get('id'));
}

function loadData(id) {
    const character_detail_container = document.querySelector(".character-detail-content-container");
    const character = characterData.find(person => person.id === id);
    const {img,name,age,height,weight,role,introduction} = character;
    const data = `<img src=${img} alt="" class="character-img">
                    <div class="introduction-container">
                        <div class="info-wrapper">
                            <label>Name :</label>
                            <p>${name}</p>
                        </div>
                        <div class="info-wrapper">
                            <label>Age :</label>
                            <p>${age}</p>
                        </div>
                        <div class="info-wrapper">
                            <label>Height :</label>
                            <p>${height}cm</p>
                        </div>
                        <div class="info-wrapper">
                            <label>Weight :</label>
                            <p>${weight}kg</p>
                        </div>
                        <div class="info-wrapper">
                            <label>Role :</label>
                            <p>${role}</p>
                        </div>
                        <div class="info-wrapper">
                            <label>Introduction :</label>
                            <p>${introduction}</p>
                        </div>
                    </div>`;
    character_detail_container.insertAdjacentHTML("beforeend", data);
}