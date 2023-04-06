var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
itemList2.addEventListener('click', addItem);

function addItem(e){
  e.preventDefault();

  var newItem = document.getElementById('item').value;

  var li = document.createElement('li');

  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  deleteBtn.appendChild(document.createTextNode('X'));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);

  //edit button
  var newItem2 = document.getElementById('item').value;

  var li2 = document.createElement('li');

  li2.className = 'list-group-item';
  li2.appendChild(document.createTextNode(newItem2));

  var editBtn = document.createElement('button');

  editBtn.className = 'btn btn-danger btn-sm float-right edit';
  editBtn.appendChild(document.createTextNode('/'));
  li2.appendChild(editBtn);
  itemList2.appendChild(li2);
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

