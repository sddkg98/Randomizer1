// DOM
const addBtn = document.querySelector('.btn-primary');
const container = document.querySelector('.container1')
const inputGroup = document.querySelector('.inputGroup')
const input = document.querySelector('.input')
const results = document.querySelector('.results')


addBtn.addEventListener('click' , e => {
    e.preventDefault();

    localStorage.setItem('isClick', true);

    let addNames = prompt('Сколько участников хотите добавить?');

    if(addNames >= 2){
        inputGroup.innerHTML = "<form>";
        for (i = 1; i <= addNames; i++){
            inputGroup.innerHTML += `<form class="form-control mb-2"><input class="input" type="text" placeholder="Имя участника № ${i}"></form>` 
        }
        inputGroup.innerHTML += "</form>";		
    }else{
        alert('Число участников не можеть быть меньше 2');
    } 
    if( inputGroup === "")alert('Поля не должен быть пустым!')
    
})

























































































































// var nameInput   = document.getElementById("name");

// var names = ["Hook", "Rumpelstiltskin", "Belle", "Emma", "Regina", "Aurora", "Elsa", "Anna", "Snow White", "Prince Charming", "Cora", "Zelena", "August", "Mulan", "Graham", "Discord", "Will", "Robin Hood", "Jiminy Cricket", "Henry", "Neal", "Red"];
// var nameone = names[Math.floor(Math.random() * names.length)];
// var nametwo = names[Math.floor(Math.random() * names.length)];
// message = "Your characters are.. " + nameone + " and " + nametwo + ".";


// function ouatRandomizer() {
//     nameone = names[Math.floor(Math.random() * names.length)];
//     nametwo = names[Math.floor(Math.random() * names.length)];
//     message = "Your characters are.. " + nameone + " and " + nametwo + ".";
//     document.getElementById("text").innerHTML = message;
// }

// function addToArray( name ) {
//     names.push( name );
//     console.log(names.join());
// }


// const num = 8;
// const randomNameGenerator = num => {
//     let res = '';
//     for(let i = 0; i < num; i++){
//        const random = Math.floor(Math.random() * 27);
//        res += String.fromCharCode(97 + random);
//     };
//     return res;
//  };
//  console.log(randomNameGenerator(num));
