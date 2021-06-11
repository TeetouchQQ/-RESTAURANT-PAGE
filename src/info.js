function Info(){
    var Info = document.createElement('div');
    Info.className = 'Info';
    Info.id = 'Info';

    var element = document.getElementById('content');

    var mainImg = document.createElement('img');
    mainImg.setAttribute('src','images/main.png')
    mainImg.id = 'mainImg';
    mainImg.className = 'mainImg';


    var mainPassage = document.createElement('p');
    mainPassage.id = 'mainPassage';
    mainPassage.className = 'mainPassage';
    var text = document.createTextNode('" Kiin - Original Thai Taste " ที่นี่เป็นร้านอาหารเปิดใหม่ ที่ตั้งอยู่ใน โรงแรมมนตรา พัทยา ได้ยินว่าอยู่ในโรงแรมอย่าพึ่งตกใจ หากไม่ได้เข้าพักที่โรงแรมก็สามารถมาทานอาหารที่ร้านได้นะจ๊ะ ทางร้านมีเมนูอาหารให้เลือกหลากหลาย...')
    mainPassage.appendChild(text);

    Info.appendChild(mainImg)
    Info.appendChild(mainPassage);

    element.appendChild(Info);



}
export default Info;