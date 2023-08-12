const lists = document.getElementsByTagName('li');
const newItems = document.getElementsByClassName('new-Items');
const mainHeading = document.getElementById('main-heading');
const fruitsList = document.querySelectorAll('.fruits-container li');

for (const list of lists) {
    list.style.color = 'tomato';
}

for(const item  of newItems) {
    item.style.fontSize = '20px';
    item.style.color = 'darkgreen';
}

mainHeading.style.backgroundColor = 'lightblue';
mainHeading.style.color = 'white';
mainHeading.style.textAlign = 'center';

document.body.style.margin = '0';
document.body.style.padding = '100px';

console.log(lists, fruitsList)

// ----------------------------------------------------------------------------------------------------------------- //
fruitsList.forEach((fruit)=> {
    console.log(fruit)
})
