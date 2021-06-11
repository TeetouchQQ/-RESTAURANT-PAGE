function Contact(){
    var Info = document.createElement('div');
    Info.className = 'Info';
    Info.id = 'Info';

    var element = document.getElementById('content');
    var contact = document.createElement('p');
    contact.id = 'Pcontact';
    contact.className = 'Pcontact';
    var linebreak = document.createElement("br");
    var text = document.createTextNode('สอบถามข้อมูลเพิ่มเติม Kiin at The Monttra Pattaya Tel : 038 306 333 ');
    var text1 = document.createTextNode('Website : www.themonttra.com/dining.html Google map : g.page/themonttrapattaya?share');
    var text2 = document.createTextNode('ติดตามและเที่ยวไปกับเรา ไปป่ะล่ะ ');
    var text3= document.createTextNode('Facebook : https://www.facebook.com/paipalaa');
    var text4 = document.createTextNode('instagram : https://www.instagram.com/paipala_ อ่านต่อได้ที่ : https://th.readme.me/p/28755');

    contact.appendChild(text);
    contact.appendChild(document.createElement("br"));
    contact.appendChild(text1);
    contact.appendChild(document.createElement("br"));
    contact.appendChild(text2);
    contact.appendChild(document.createElement("br"));
    contact.appendChild(text3);
    contact.appendChild(document.createElement("br"));
    contact.appendChild(text4);
    
    Info.appendChild(contact)
    element.appendChild(Info);
}
export default Contact;