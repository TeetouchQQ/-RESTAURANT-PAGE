function About(){
    var Info = document.createElement('div');
    Info.className = 'Info';
    Info.id = 'Info';

    var element = document.getElementById('content');


    for(var i=1;i<3;i++){
        var MenuImg = document.createElement('img');
        MenuImg.setAttribute('src','images/about'+ i +'.jpg')
        MenuImg.id = 'Menu'+i;
        MenuImg.className = 'MenuImg';

   
        
        
        
    
    
    
        Info.appendChild(MenuImg);

     
    


    }

    element.appendChild(Info);



}
export default About;