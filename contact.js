// export function initContactForm() {
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const option = document.getElementById('options');
const btn = document.getElementById('btn');
const cont = document.querySelector('.contacts');
const table = document.querySelector('.contacts-table');

btn.addEventListener('click', (event) => {
    event.preventDefault();

    const Name = fullName.value;

    const mail = email.value;

    const number = phone.value;

    const optionss = option.value;

    const tableMain = document.createElement('table');
    tableMain.classList.add('contacts-tab');
    tableMain.innerHTML = `
        <tr>
           <td>${Name}</td>
          <td>${mail}</td>
          <td>${number}</td>
          <td><span class="status active">${optionss}</span> <span><i class=" delete-btn fa-solid fa-trash"></i></Span> <span><i class="edit-btn fa-solid fa-pen-to-square"></i></span></td>
        </tr>`

    let storage = localStorage.getItem('tableMain');
    localStorage.setItem('storage', storage);


    const contactData = {
        name: Name,
        email: mail,
        phone: number,
        option: optionss
    };

    let contacts = JSON.parse(localStorage.getItem('contactsData')) || [];

    localStorage.setItem('contactsData', JSON.stringify(contacts));

    if (Name === '') {
        tableMain.remove();
        alert('You must enter a Name');
        return;

    } else if (mail === '') {
        tableMain.remove();
        alert('You must enter a Mail');
        return;

    } else if (!mail.includes('@gmail.com')) {
        alert('You must enter a Valid Mail');
        tableMain.remove();
        return;
    }
    else if (number === '') {
        tableMain.remove();
        alert('You must enter Number');
        return;
    } else if (optionss === '') {
        tableMain.remove();
        alert('You must choose an Option');
        return;
    }

    const value = table.querySelectorAll('tr').length;
    console.log(value);

    tableMain.addEventListener('click', (e) => {
        if (e.target.closest('.delete-btn')) {
            e.target.closest('tr').remove();
            const minus = table.querySelectorAll('tr').length - 1;

            console.log(minus)
            return;
        }

        if (e.target.closest('.edit-btn')) {
            const row = e.target.closest('tr');
            const cell = row.querySelectorAll('td');


            const newName = prompt('enter new Name:', cell[0].textContent);
            const newEmail = prompt('enter new email:', cell[1].textContent);
            const newPhone = prompt('enter new Phone:', cell[2].textContent);

            if (newName) cell[0].textContent = newName;
            if (newEmail) cell[1].textContent = newEmail;
            if (newPhone) cell[2].textContent = newPhone;
            return;
        }

    });


    fullName.value = '';
    phone.value = '';
    email.value = '';   
    option.value = '';

    table.appendChild(tableMain);
});



