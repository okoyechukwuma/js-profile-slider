const people = [
    {
        id: 0,
        name: 'sara john cena',
        img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        job: "ux designer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio dolorem in doloremque eum iste et omnis quaerat dicta laborum?."
    },{
        id: 1,
        name: 'sara king',
        img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        job: "ui/ux desidner",
        info: "Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He less do quit evil is. Add matter family active mutual put wishes happen."
    }, {
        id: 2,
        name: 'anna johnson',
        img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        job: "Content creator",
        info: "Among going manor who did. Do ye is celebrated it sympathize considered. May ecstatic did surprise elegance the ignorant age. Own her miss cold last. It so numerous if he outlived disposal. How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved resolution. Hence hopes noisy may china fully and. Am it regard stairs branch thirty length afford."
    },
    {
        id: 3,
        name: 'John Doe',
        img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        job: "web developer",
        info: "Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded companions her nor advantages sufficient put. John on time down give meet help as of. Him waiting and correct believe now cottage she another. Vexed six shy yet along learn maids her tiled. Through studied shyness evening bed him winding present. Become excuse hardly on my thirty it wanted. "
    },
    {
        id: 4,
        name: 'peter jones',
        img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        job: "graphic disgner",
        info: "In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did. Rather in lasted no within no. "
    }
];

//get items

const img = document.querySelector('#person-img');
const name = document.querySelector('#name');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');


let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson();
})

function showPerson(){
    const item = people[currentItem];
    img.src = item.img;
    name.innerHTML = item.name;
    job.innerHTML = item.job;
    info.innerHTML = item.info;
}

// setInterval(function(){
//     currentItem++;
//     if (currentItem > people.length -1) {
//         currentItem = 0;
//     }
//     showPerson(currentItem);
// }, 1000);

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > people.length -1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = people.length -1;
    }
    showPerson();
});

randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * people.length);
    showPerson();
})