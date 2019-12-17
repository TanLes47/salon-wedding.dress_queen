document.querySelector('.login-form input[type=submit]')
    .addEventListener('click', login);

function login(e) {
    e.preventDefault();
    fetch('login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            name: document.querySelector('.login-form input[name=name]').value,
            email: document.querySelector('.login-form input[name=email').value,
            email: document.querySelector('.login-form input[name=text').value,
        })
    })
        .then(_ => document.querySelector('.login-form').reset());
}

const list = document.querySelector('.list_item');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', btnClick );

const btnClick = function(e) {
        e.preventDefault();
        let item = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = item;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.btnClick = function(e) {
            list.removeChild(listItem);
        }
        input.focus();
    }