var typing=new Typed(".quotes", {
    strings: ["",
    "Look at the sky",
    ],
    typeSpeed: 50,
    backSpeed: 40,
    loop: false,
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
