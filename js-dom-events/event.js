/**
 * -----------------------------
 * 4 way to add click event
 * -----------------------------
 */
console.log('we will talk about events');
const btn = document.querySelector('.btn');
const clrBtn = document.getElementById('colorBtn');


clrBtn.addEventListener('click', () => {
    const hexCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hex = '#';
    for(let i = 0; i < 6; i++) {
        const randomNum = Math.floor(Math.random() * hexCode.length);
        hex += hexCode[randomNum];
    }
    document.body.style.backgroundColor = hex;
});

function clickedMe() {
    console.log('clicked')
}