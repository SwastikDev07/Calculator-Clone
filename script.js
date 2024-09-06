let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        button.classList.add('pop-up');
        setTimeout(() => {
            button.classList.remove('pop-up');
        }, 200);
        if(e.target.innerHTML == '='){
            string = eval(string);
        document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        if(e.target.innerHTML == 'C'){
            string = "";
        document.querySelector('input').value = string;
        }
    })
})