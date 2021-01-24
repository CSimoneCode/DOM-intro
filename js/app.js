//querySelector just returns the first element that meets parameters
//document tag
const h1El = document.querySelector('h1'); 
console.log(h1El);
//class selector
const body = document.querySelector('.special');
console.log(body);  
//pseudo-selector
const secondListItem = document.querySelector('li:nth-child(2');
console.log(secondListItem);
//specific ID selector -- if you can use this more specific too, use it rather than querySelector
const listEl = document.getElementById('products');
console.log(listEl);
//querySelectorAll returns all elements that meet the parameters
const evenListEl = document.querySelectorAll('li:nth-child(even)');
console.log(evenListEl);
//^ Inside the DOM in the browser you can see all the _proto_ data and which traits are inherited. 
//not useful in the real world, but a good example
const allListItems = document.querySelectorAll('li');
console.log(allListItems.length);

// allListItems.forEach((item) => {
//     item.style.color = 'yellow';
//     item.style.fontSize = '24px';
//     item.style.background = 'light coral';
//     //item.remove();
//     if (item.classList.contains('sale')) {
//         item.style.background = 'red';
//     }
// });

//^ this can also be expressed as a for loop
// for (let i = 0; i<allListItems.length; i++) {
//     allListItems[i].style.color = 'yellow';
//     allListItems[i].style.fontSize = '24px';
// }
// console.log(allListItems.length);

// for of loop (use on arrays - Kenny remembers by stating that you're looking to utilize the location OF the array item)
for (let item of allListItems) {
    console.log(item);
} 
 /*---------------MODIFICATION
 Inner HTML = set/retrieve content as HTML
 textContent = set/review just plain text */

// h1El.innerHTML = '<a href="http://google.com"></a>';
h1El.textContent = 'My Totally Awesome Page'; 
 
const image = document.querySelector('img');
const primaryInformation = document.querySelector('#important');
  
console.log(primaryInformation);  

image.setAttribute('src,"https://i.imgur.com/elLR87e.jpg?2"');  
  
primaryInformation.setAttribute.innerHTML('<p>Wsfneoin slekfnoineonfei slkfnoeinfn elfnosineofisfn eslkfjoiesneiosf slkefoseifioesfj efhioeihsoihgios</p>')
  