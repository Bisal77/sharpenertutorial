var newDiv = document.createElement('div');

newDiv.setAttribute('title', 'Hello div');

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);
newDiv.style.fontSize = '30px';


const newNode = document.createElement('li');
const textNode = document.createTextNode("Hello World");

newNode.appendChild(textNode);

const list = document.getElementById('items');

list.insertBefore(newNode, list.children[0]);
