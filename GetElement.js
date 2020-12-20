/**
 * HTML DOM
 * Có 3 thành phần 
 * 1. Element : ID, class, tag, CSS selector, HTML collection
 * 2. Attribute
 * 3. Text
 * ---------------------------------------
 * 
 * Javascript chỉ cung cấp các bộ phương tiện để truy xuất vào HTML DOM
 * DOM nằm trong WEB API
 * Browser : HTML -> DOM -> WEB API
 */
// var boxHTMLCollection = document.getElementsByClassName('box');
// var box1Element = boxHTMLCollection[0];
// var box2Element = boxHTMLCollection[1];
// var allItemElements = document.getElementsByTagName('li');
// var box1ItemElements = document.box1Element.getElementsByTagName('li');
// var box2ItemElements = document.box2Element.getElementsByTagName('li');
// var checkboxNodes = document.querySelectorAll("input[type=checkbox]");
//Cách lấy attribute trong một thẻ input :
//          var checkbox1Element = document.querySelectorAll('input[type = "checkbox"][value = "1"]');
//          var checkboxCheckedAndDisabled = document.querySelectorAll('input[checked][disabled]');
var listItems1 = document.querySelectorAll(".parent > li");
var listItems2 = document.querySelectorAll('.parent > ul > li');
var listItems3 = document.querySelectorAll('.parent > li, .parent > ul > li');
console.log(listItems1);
