const sections = document.querySelectorAll('section');

sections.forEach(section => {
    section.style.backgroundColor = 'lightgrey';
    section.style.padding = '20px';
    section.style.margin = '20px';
    section.style.border = '5px solid lightblue';
    section.style.borderRadius = '15px';
})

const lastElement = sections[3];
lastElement.style.backgroundColor = 'yellow';
lastElement.style.fontSize = '20px';

const list = document.createElement('li');
list.textContent = 'Qumra salon'
lastElement.appendChild(list);