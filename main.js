const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

linkForm.addEventListener('submit', formSubmit);

function validURL(str) {
    var pattern = new RegExp(
        '^(https?:\\/\\/)?' + 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
        '((\\d{1,3}\\.){3}\\d{1,3}))' + 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
        '(\\?[;&a-z\\d%_.~+=-]*)?' + 
        '(\\#[-a-z\\d_]*)?$',
        'i'
    );  
    return !!pattern.test(str);
}


function formSubmit(e) {
    e.preventDefault();

    if (input.value === '') {
        errMsg.innerText = 'Please enter a link';
        return;
    } else if(!validURL(input.value)) {
        errMsg.innerText = 'Please enter a valid link';
        return;
    } else {
        errMsg.innerText = '';
        alert('Link submitted!');
    }
}

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}