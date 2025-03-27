let display=document.getElementById('display');

let button= Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventlistener('click',(e) => {
        console.log('clicked');

    })
})