// ----------------------------------------------------------- //
// 1. where to add
const mainContainer = document.getElementById('main-container');
// 2. what to add
const section = document.createElement('section');
section.classList.add('places')
mainContainer.appendChild(section);

const h2 = document.createElement('h2');
h2.innerText = 'Some place for visits';
section.appendChild(h2)

// create ul
const ul = document.createElement('ul');
section.appendChild(ul);
const li1 = document.createElement('li');
li1.innerText = 'Sundarban';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Bandarban';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Sada Pathor';
ul.appendChild(li3);

const section2 = document.createElement('section');
section2.innerHTML = `
<h2>Some dresses women should wear</h2>
<ul>
    <li>Burka</li>
    <li>Nekab</li>
    <li>Hijab</li>
</ul>
`;

mainContainer.appendChild(section2);





console.log(mainContainer)





