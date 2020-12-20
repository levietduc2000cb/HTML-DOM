// InnerHTML and OuterHTML Property


document.querySelector('div:first-child > ul').innerHTML = '<li></li> <li> </li> <li></li>'
document.querySelector('div:last-child ').innerHTML = '<h1></h1>'


document.querySelector('div > ul').innerHTML = "<li></li> <li></li> <li></li>";
document.getElementsByTagName('div')[1].innerHTML = "<h1></h1>";

