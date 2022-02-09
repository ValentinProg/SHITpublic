
const formRef = document.querySelector('.form')
formRef.addEventListener('submit', onUserRegister)
let pass = document.querySelector('.input');
pass.addEventListener('input', changeBackground);

function onUserRegister(event) {
    event.preventDefault()
    
    const form = event.currentTarget
    const password = form.elements.password

    validateForm(password.value)
}

function validateForm(password) {
    
    if (!password){
        document.querySelector('button').style.background = 'red';
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = 'It is no text bro try again!'
        text.style.color = '#ff0000'
        // window.alert('It is no text bro try again!')
        return   
    }

    if(password === '00' + password.slice(2,10)) {
        document.querySelector('button').style.background = 'red';
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "It can't start from 00 !!!"
        text.style.color = '#ff0000'
        // window.alert("It can't start from 00 !!!")
        return
    }

    if(password === '.' + password.slice(1,10)) {
        document.querySelector('button').style.background = 'red';
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "It can't start from point bro!!!"
        text.style.color = '#ff0000'
        // window.alert("It can't start from point bro!!!")
        return
    }
    if  (password.length === 10) {
        document.querySelector('button').style.background = 'green';
        button.classList.add('valid')
        button.classList.remove('invalid')
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = 'ALL good thank you!'
        text.style.color = '#00ff00'
        return
    }

   
    // window.alert('Good!')
}

function changeBackground() {
document.querySelector('button').style.background = 'grey';
}
