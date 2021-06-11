import Header from './header';
import Info from './info.js';
import Menu from './Menu';
import Contact from './Contact.js';
import About from './About.js';
Header();
Info()


const Home = document.getElementById('li0');
const menu = document.getElementById('li1');
const about = document.getElementById('li2');
const contact = document.getElementById('li3');
const Content = document.getElementById('content');


Home.addEventListener('click',()=>{
    Content.removeChild(document.getElementById('Info'));
    Info();

})
menu.addEventListener('click',()=>{
    Content.removeChild(document.getElementById('Info'));
    Menu();

})
contact.addEventListener('click',()=>{
    Content.removeChild(document.getElementById('Info'));
    Contact();

})
about.addEventListener('click',()=>{
    Content.removeChild(document.getElementById('Info'));
    About();

})