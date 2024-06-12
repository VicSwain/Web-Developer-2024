
// eventListener added to button with the event of click, and the function to be ran when clicked
button.addEventListener('click', function () {
    // created a list item
    var li = document.createElement('li');
    // create the text testing to go in the li
    li.appendChild(document.createTextNode('testing'));
    // adding the new list item to the under ordered list, this is necessary for it to be rendered to the page 
    ul.appendChild(li);
})