var typing=new Typed(".quotes", {
    strings: ["",
    "I'll just bring the sea to you",
    "Don't believe them things they tell you 'cause it ain't true",
    "You're losing your gift and it's plain to see",
    "Look at the sky",
    "I'm not better than you",
    ""
    ],
    typeSpeed: 50,
    backSpeed: 40,
    loop: true,
});

const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount(){
    fetch('https://api.countapi.xyz/update/redemption-dev.online/c7791c6c-e10a-4bad-9073-2964c29c148d?amount=1')
    .then(res => res.json())
    .then(res =>{
        countEl.innerHTML = res.value;
    });
}