function Menu(){
    var Menulist = ['','Pink Cappuccino','ปลาแห้งแตงโม','ม้าฮ่อ','กุ้งย่างตะไคร้','ต้มข่าหอยตลับ']
    var Info = document.createElement('div');
    Info.className = 'Info';
    Info.id = 'Info';

    var element = document.getElementById('content');


    for(var i=1;i<5;i++){
        var MenuImg = document.createElement('img');
        MenuImg.setAttribute('src','images/menu'+ i +'.jpg')
        MenuImg.id = 'Menu'+i;
        MenuImg.className = 'MenuImg';

        var Pmenu = document.createElement('p');
        var Passage = document.createTextNode(Menulist[i])
        
        Pmenu.appendChild(Passage);
        Pmenu.className = 'Pmenu';
        
        
        
    
    
    
        Info.appendChild(MenuImg);
        Info.appendChild(Pmenu);
     
    


    }

    element.appendChild(Info);



}
export default Menu;