function Header(){
    console.log('pass')
    var element = document.getElementById('content');


    const container = document.createElement('div');
    container.className = 'container'
    container.id = 'container'
    var PageList = ['Home','Menu','About','Contact']

    const navbar = document.createElement('div');
    navbar.className = 'navbar'
    navbar.id = 'navbar'

    const ul = document.createElement('ul');
    

    for(var i=0;i<4;i++){
        console.log(i);
        const li = document.createElement('li');
        li.className='li' + i;
        li.id='li' + i;
        var a = document.createElement('a')
        var text = document.createTextNode(PageList[i]);
        a.appendChild(text);
        a.href = '#';

        li.appendChild(a);
        ul.appendChild(li);
    }
    navbar.appendChild(ul)


    element.appendChild(navbar);

}
export default Header;