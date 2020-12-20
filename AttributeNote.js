
var f8LinkElement = document.querySelector('a');
var f8ShortLink = f8LinkElement.getAttribute('href');
document.getElementsByTagName('a')[1].href = f8ShortLink;
document.querySelector('div').setAttribute('data-url',f8ShortLink);


/*
var Test1 = document.querySelector('h1');
var Test2 = document.querySelector('div');
var Test3 = document.querySelector('img')
Test1.title = 'Học lập trình tại F8';
Test2.className = 'box';
Test3.width = 100;
*/